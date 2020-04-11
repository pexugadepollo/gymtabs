import React from "react";
import {CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import {Paper} from "@material-ui/core";

class peso {
    dia:string;
    peso:number;
    constructor(dia:string, peso:number) {
        this.dia = dia;
        this.peso = peso;
    }
}
interface CustomChartProps {
    data: peso[]
}

const CustomChart:React.FC<CustomChartProps> = ({data}) => {
    function CustomTooltip({ payload, label, active } : {payload: any, label: any, active: any}) {
        if (active) {
            return (
                <div className="recharts-default-tooltip">
                    <p className="label">{`${label}`}</p>
                    <p className="label">{`${payload[0].dataKey[0].toUpperCase() + payload[0].dataKey.slice(1)} : ${payload[0].value}`}</p>

                </div>
            );
        }

        return null;
    }

 return(
     <Paper style={{width: "80vw", marginTop: "20px"}}>
         <ResponsiveContainer width="100%" height={300}>
             <LineChart
                 data={data}
                 margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                 <CartesianGrid stroke="rgba(81, 81, 81, 1)" />
                 <XAxis dataKey="dia" />
                 <YAxis domain={['dataMin-1', 'dataMax+1']}/>
                 <Tooltip content={<CustomTooltip active payload label/>}/>
                 <Line type="monotone" dataKey="peso" stroke="#8884d8"  />
             </LineChart>
         </ResponsiveContainer>
     </Paper>
 )
}
export default CustomChart;
