import * as CommonSC from "../../CommonStyles";
import {useHistory} from "react-router-dom";
import {useTheme} from "../../../hooks/useTheme";
import React from "react";

const CoachDashboard:React.FC = () => {
    const history = useHistory();
    const { theme } = useTheme();

    return(
        <CommonSC.MainContainer>

            <CommonSC.MainContent theme={theme}>
            </CommonSC.MainContent>

        </CommonSC.MainContainer>
    )
};

export default CoachDashboard;
