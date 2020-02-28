import React from "react";
import * as SC from './style';
import {
    FitnessCenterRounded as FitnessCenterIcon, FlashOnRounded as RayoIcon,
    PlayCircleFilledRounded as PlayIcon,
    WhatshotRounded as FireIcon
} from "@material-ui/icons";
import {Typography} from "@material-ui/core";

const QuickTrain: React.FC = () => {
    return(
        <SC.CustomCard variant="outlined">
            <SC.CustomCardContent>
                <SC.PlaySeparator>
                    <SC.TypoIconContainer>
                        <FitnessCenterIcon style={{height: "3em", width:"3em", marginRight: "10px"}}/>
                        <Typography variant="h2">
                            Comenzar entrenamiento
                        </Typography>
                    </SC.TypoIconContainer>
                    <SC.TypoIconContainer/>
                    <PlayIcon style={{height: "3em", width:"3em"}}/>
                </SC.PlaySeparator>
                <SC.InfoQuickTrain>
                    <SC.InfoIconTypo><FireIcon/><Typography variant="body2">520</Typography></SC.InfoIconTypo>
                    <SC.InfoIconTypo><RayoIcon/><Typography variant="body2">Intensidad media</Typography></SC.InfoIconTypo>
                </SC.InfoQuickTrain>
            </SC.CustomCardContent>
        </SC.CustomCard>
    );
};

export default QuickTrain;