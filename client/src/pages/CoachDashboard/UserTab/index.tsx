import React, {useState} from "react";
import * as CSC from '../../CommonStyles'
import MaterialTable from "material-table";
import {gql} from "apollo-boost";
import {useMutation, useQuery} from "@apollo/react-hooks";

const GET_ALL_USERS = gql`
    query GetUsers{
        allUsers{
            id
            username
            nombre
            apellidos
            email
            peso
            altura
            rol
        }
    }
`
const UPDATE_USER = gql`
    mutation UpdateUser(
        $id: String!
        $username: String
        $nombre: String
        $apellidos: String
        $email: String
        $peso: Float
        $altura: Int
        $rol: String
        $tabla: [Int]
    ){
        updateUser(
            id: $id
            username: $username
            nombre: $nombre
            apellidos: $apellidos
            email: $email
            peso: $peso
            altura: $altura
            rol: $rol
            tabla: $tabla

        ){
            username
        }
    }
`

const UserTab:React.FC = () => {
    const [updateUser] = useMutation(UPDATE_USER,{
        update(cache, { data }) {
            if (!data) return;

            try {
                // Desestructuramos los datos del usuario creado.
                const { updateUser: newUser } = data;

                const { allUsers: currentUsers } = cache.readQuery({
                    query: GET_ALL_USERS
                }) as { allUsers: any; };

                // Actualizamos caché con nuevo usuario
                cache.writeQuery({
                    query: GET_ALL_USERS,
                    data: {
                        allUsers: [...currentUsers, newUser]
                    }
                });
            } catch (error) {
                console.log('La query GET_ALL_USERS no está en caché');
            }
        }
    });
    const [users, setUsers] = useState([{}]);
    const {} = useQuery(GET_ALL_USERS, {onCompleted: data => {
        setUsers(data.allUsers);
        }});
        const localization={
        pagination: {
            labelDisplayedRows: '{from}-{to} de {count}',
            labelRowsSelect: 'Filas',
            labelRowsPerPage: 'Filas por página',
            firstAriaLabel: 'Primera página',
            firstTooltip: 'Primera página',
            previousAriaLabel: 'Página anterior',
            previousTooltip: 'Página anterior',
            nextTooltip: 'Siguiente página',
            nextAriaLabel: 'Siguiente página',
            lastAriaLabel: 'Última página',
            lastTooltip: 'Última página',

        },
        toolbar: {
            nRowsSelected: '{0} fila(s) seleccionada(s)',
            searchPlaceholder: 'Buscar',
            searchTooltip: 'Buscar',
            exportName: 'Exportar como CSV',
            exportTitle: 'Exportar',
            exportAriaLabel: 'Exportar',
            addRemoveColumns: 'Añadir o eliminar columnas',

        },
        header: {
            actions: 'Opciones'
        },
        body: {
            emptyDataSourceMessage: 'Nada que mostrar',
                filterRow: {
                filterTooltip: 'Filtro'
            },
            editRow: {
                deleteText: "Estas seguro de querer eliminar esta fila?",
                cancelTooltip: "Cancelar",
                saveTooltip: "Guardar",
            }
        }
    }
        const columns=[
        { title: "id", field: "id" },
        { title: "Usuario", field: "username" },
        { title: "Nombre", field: "nombre" },
        { title: "Apellidos", field: "apellidos" },
        { title: "email", field: "email" },
        { title: "Peso", field: "peso" },
        { title: "Altura", field: "altura" },
        { title: "Rol", field: "rol" }
        ];


    return(
        <CSC.MainContent >
            <MaterialTable
                style={{width: "100%"}}
                localization={localization}
                columns={columns}
                data={users}
                title="Usuarios registrados"
                editable={{
                    onRowUpdate: (newData, oldData) =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                {
                                    updateUser({
                                        variables:newData
                                    })
                                }
                                resolve()
                            }, 1000)
                        }),

                }}
            />
        </CSC.MainContent>
    );
}

export default UserTab;
