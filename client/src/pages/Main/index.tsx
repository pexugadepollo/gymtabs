import React, {useEffect, useState} from "react";
import * as CommonSC from '../CommonStyles';
import CustomAppBar from "../../components/CustomAppBar";
import {useHistory} from "react-router-dom";
import {useTheme} from "../../hooks/useTheme";
import QuickTrainCard from "../../components/QuickTrainCard";
import PersonalInfoTable from "../../components/PersonalInfoTable";
import CustomChart from "../../components/CustomChart";
import {gql} from "apollo-boost";
import {useMutation} from "@apollo/react-hooks";
import {useRole} from "../../hooks/useRole";

const historialPeso = [
    {
        dia: '07-01-2020', peso: 73.25
    },
    {
        dia: '08-01-2020', peso: 73.45
    },
    {
        dia: '09-01-2020', peso: 72.25
    },
    {
        dia: '11-01-2020', peso: 73.20
    },
    {
        dia: '14-01-2020', peso: 73.55
    },
    {
        dia: '18-01-2020', peso: 73.05
    },
    {
        dia: '01-02-2020', peso: 74.60
    },
    {
        dia: '24-02-2020', peso: 73.60
    },
    {
        dia: '11-03-2020', peso: 74.25
    },


]
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
    const { setAdmin } = useRole();
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
                });
                setAdmin(data.checkToken.user.rol === 'admin');
            }
        }});
        useEffect(() => {
        if (localStorage.getItem('token') === null) {
            history.push('/')
        }
        checkToken({variables:{token: localStorage.getItem("token")}})
    },[checkToken, history]);

    return (
        <CommonSC.MainContainer>
            <CustomAppBar/>
            <CommonSC.MainContent theme={theme}>
                <QuickTrainCard/>
                <PersonalInfoTable  nombre={userex.nombre} apellidos={userex.apellidos} peso={userex.peso} altura={userex.altura}/>
                <CustomChart data={historialPeso}/>
            </CommonSC.MainContent>
        </CommonSC.MainContainer>
    );
};

export default Main;
