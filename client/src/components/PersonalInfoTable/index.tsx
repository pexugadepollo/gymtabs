import React from "react";
import { TableBody, TableCell, TableRow, Paper} from "@material-ui/core";
import * as SC from './style';

function createData(key: string, value: string) {
    return { key, value};
}

const rows = [
    createData('Nombre', 'Blas Santomé Ocampo'),
    createData('Peso', '75Kg'),
    createData('Altura', '1.80m'),
    createData('Ultimo Entrenamiento', 'Ayer')
];

const PersonalInfoTable: React.FC = () =>{
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