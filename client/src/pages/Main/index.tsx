import React, {useEffect} from "react";
import * as CommonSC from '../CommonStyles';
import CustomAppBar from "../../components/CustomAppBar";
import axios from "axios";
import {useHistory} from "react-router-dom";
import {useTheme} from "../../hooks/useTheme";
import QuickTrainCard from "../../components/QuickTrainCard";
import PersonalInfoTable from "../../components/PersonalInfoTable";

const Main: React.FC = () => {
    const history = useHistory();
    const { theme } = useTheme();

        useEffect(() => {
        if (localStorage.getItem('token') === null) {
            history.push('/')
        }
        axios.get('http://ociofy.es:5000/checkAuth', {
            headers: {
                authorization: localStorage.getItem('token')
            }
        })
            .then(res => {
                if (res.data.authorized) {
                    history.push('/Main')
                } else {
                    history.push('/')
                }
            })
            .catch(err => {
                console.log('err: ' + err);
            });
    },[]);
    return (
        <CommonSC.MainContainer>
            <CustomAppBar/>
            <CommonSC.MainContent theme={theme}>
                <QuickTrainCard/>
                <PersonalInfoTable/>
            </CommonSC.MainContent>
        </CommonSC.MainContainer>
    );
};

export default Main;