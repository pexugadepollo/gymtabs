import React from "react";
import * as SC from './style'
import { ExpansionPanelSummary, Typography} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import img1 from "../../img/450_1000.png"


const TrainingCard:React.FC = () => {
  return(
   <SC.CustomExpansionPanel variant="outlined">
       <ExpansionPanelSummary
           expandIcon={<ExpandMoreIcon />}
           aria-controls="panel1a-content"
           id="panel1a-header"
       >
           <Typography>Aperturas pectoral</Typography>
       </ExpansionPanelSummary>
       <SC.CustomExpansionPanelDetails>
           <img src={img1} alt=""/>
           <Typography style={{marginLeft:"20px"}}>
               Debemos tumbarnos de espalda sobre un banco plano y estrecho. Con mancuernas en ambas manos cuyas palmas deben mirar hacia el centro del cuerpo y manteniendo los brazos levemente flexionados en vertical al cuerpo, sobre el pecho, inspiramos y separamos los brazos del cuerpo hasta llegar a la altura de los hombros y que los codos pasen más abajo que estos. Mientras espiramos regresamos al centro del cuerpo ambos brazos sin extender ni flexionar más los codos
           </Typography>
       </SC.CustomExpansionPanelDetails>
   </SC.CustomExpansionPanel>
  );
};

export default TrainingCard;
