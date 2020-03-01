import React from "react";
import CustomAppBar from "../../components/CustomAppBar";
import {MainContainer, MainContent} from "../CommonStyles";
import TrainingCard from "../../components/TrainingCard";
import {useTheme} from "../../hooks/useTheme";

const Training:React.FC = () => {
    const { theme } = useTheme();

    return(
        <MainContainer>
            <CustomAppBar/>
            <MainContent theme={theme}>
                <TrainingCard/>
            </MainContent>
        </MainContainer>
    );
};

export default Training;