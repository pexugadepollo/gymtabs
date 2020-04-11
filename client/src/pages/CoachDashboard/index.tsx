import * as CommonSC from "../CommonStyles";
import {useTheme} from "../../hooks/useTheme";
import React from "react";
import DashboardAppBar from "../../components/DashboardAppBar";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import UserTab from "./UserTab";
import {Typography} from "@material-ui/core";
import TocRoundedIcon from '@material-ui/icons/TocRounded';


const CoachDashboard:React.FC = () => {
    const { theme } = useTheme();
    const tabs = [
        {
            label: "Usuarios", icon: <AccountCircleIcon/>, body: <UserTab/>
        },
        {
            label: "Ejercicios", icon: <TocRoundedIcon/>, body: <Typography>Hola2</Typography>
        },
    ]
    return(
        <CommonSC.MainContainer>
                <DashboardAppBar tabs={tabs}>
                </DashboardAppBar>
            <CommonSC.MainContent theme={theme}>
            </CommonSC.MainContent>
        </CommonSC.MainContainer>
    )
};

export default CoachDashboard;
