import React, {useEffect, useState} from "react";
import * as CommonSC from '../CommonStyles';
import CustomAppBar from "../../components/CustomAppBar";
import {useHistory} from "react-router-dom";
import {useTheme} from "../../hooks/useTheme";
import QuickTrainCard from "../../components/QuickTrainCard";
import PersonalInfoTable from "../../components/PersonalInfoTable";
import {gql} from "apollo-boost";
import {useMutation} from "@apollo/react-hooks";
import {
    ArgumentAxis,
    ValueAxis,
    Chart,
    LineSeries, Tooltip,
} from '@devexpress/dx-react-chart-material-ui';
import {Paper} from "@material-ui/core";
import {EventTracker, ValueScale} from "@devexpress/dx-react-chart";
const GET_DATA_FROM_TOKEN = gql`
    mutation CheckToken($token: String!){
        checkToken(
            token: $token
        ){
            valid
            user{
                username
                nombre
                apellidos
                email
                peso
                altura
                rol
            }
        }
    }
`

const Main: React.FC = () => {
    const history = useHistory();
    const { theme } = useTheme();
    const [userex, setUser] = useState({
        username: "",
        nombre: "",
        apellidos: "",
        email: "",
        peso: "",
        altura: "",
        rol: ""
    });
    const [checkToken] = useMutation(GET_DATA_FROM_TOKEN, {onCompleted: data => {
            if (data.checkToken.valid){
                setUser({
                    username: data.checkToken.user.username,
                    nombre: data.checkToken.user.nombre,
                    apellidos: data.checkToken.user.apellidos,
                    email: data.checkToken.user.email,
                    peso: data.checkToken.user.peso,
                    altura: data.checkToken.user.altura,
                    rol: data.checkToken.user.rol
                })
            }
        }});
        useEffect(() => {
        if (localStorage.getItem('token') === null) {
            history.push('/')
        }
        checkToken({variables:{token: localStorage.getItem("token")}})
    },[checkToken, history]);
    interface IDataItem {
        fecha: string,
        peso: number,
    }
    const chartData:IDataItem[] = [
        { fecha: '8-4-2020', peso: 71 },
        { fecha: '9-4-2020', peso: 75 },
        { fecha: '10-4-2020', peso: 69.5 },
    ];
    return (
        <CommonSC.MainContainer>
            <CustomAppBar/>
            <CommonSC.MainContent theme={theme}>
                <QuickTrainCard/>
                <PersonalInfoTable  nombre={userex.nombre} apellidos={userex.apellidos} peso={userex.peso} altura={userex.altura}/>
                <Paper style={{width: "80vw", marginTop: "20px"}}>
                    <Chart
                        data={chartData}
                    >
                        <ValueScale name="peso" />
                        <ArgumentAxis />
                        <ValueAxis scaleName="peso" showGrid={true} showLine={true} showTicks={true} />
                        <LineSeries
                            name="Peso"
                            valueField="peso"
                            argumentField="fecha"
                            scaleName="peso"
                        />
                        <EventTracker/>
                        <Tooltip/>
                    </Chart>
                </Paper>

            </CommonSC.MainContent>
        </CommonSC.MainContainer>
    );
};

export default Main;
