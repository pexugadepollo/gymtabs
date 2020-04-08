import React from "react";
import { TableBody, TableCell, TableRow, Paper} from "@material-ui/core";
import * as SC from './style';
type PersonalInfoCardProps = {
    nombre: string,
    apellidos: string,
    peso: string,
    altura: string
}
function createData(key: string, value: string) {
    return { key, value};
}



const PersonalInfoTable: React.FC<PersonalInfoCardProps> = ({nombre, apellidos,peso,altura}) =>{
    const rows = [
        createData('Nombre', nombre + " " + apellidos),
        createData('Peso', peso),
        createData('Altura', altura),
        createData('Ultimo Entrenamiento', 'Ayer')
    ];
    return(
        <SC.CustomTableContainer component={Paper}>
            <SC.CustomTable>
                <TableBody>
                    {rows.map(row=>(
                        <TableRow key={row.key}>
                            <TableCell>
                                {row.key}
                            </TableCell>
                            <TableCell>
                                {row.value}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </SC.CustomTable>
        </SC.CustomTableContainer>
    )
};

export default PersonalInfoTable;
