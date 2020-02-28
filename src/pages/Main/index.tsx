import React, {useEffect} from "react";
import * as SC from './style';
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
        axios.get('http://localhost:5000/checkAuth', {
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
    });
    return (
        <SC.MainContainer>
            <CustomAppBar/>
            <SC.MainContent theme={theme}>
                <QuickTrainCard/>
                <PersonalInfoTable/>
            </SC.MainContent>
        </SC.MainContainer>
    );
};

export default Main;