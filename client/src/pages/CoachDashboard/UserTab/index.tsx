import React, {useState} from "react";
import * as CSC from '../../CommonStyles'
import MaterialTable, {EditComponentProps} from "material-table";
import {gql} from "apollo-boost";
import {useMutation, useQuery} from "@apollo/react-hooks";
import {
    Button, Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Modal,
    TextField,
    Typography
} from "@material-ui/core";

const GET_ALL_USERS = gql`
    query allUsers{
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
const DELETE_USER = gql`
    mutation deleteUser(
        $id: String!
    ){
        deleteUser(
            id: $id
        ){
            id
            username
            nombre
            apellidos
            email
            peso
            altura
            rol
            tabla
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
        $tabla: [String]
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
            id
            username
            nombre
            apellidos
            email
            peso
            altura
            rol
            tabla
        }
    }
`

const CREATE_USER = gql`
    mutation createUser(
        $username: String!
        $nombre: String!
        $apellidos: String!
        $email: String!
        $peso: String!
        $altura: String!
        $rol: String!
        $tabla: [String]
    ){
        createUser(
            username: $username
            nombre: $nombre
            apellidos: $apellidos
            email: $email
            peso: $peso
            altura: $altura
            rol: $rol
            tabla: $tabla

        ){
            id
            username
            nombre
            apellidos
            email
            peso
            altura
            rol
            tabla
        }
    }
`

const UserTab:React.FC = () => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const [createUser] = useMutation(CREATE_USER,{
        update(cache, { data }) {
            if (!data) return;

            try {
                const { createUser: newUser } = data;

                const { allUsers: currentUsers } = cache.readQuery({
                    query: GET_ALL_USERS
                }) as { allUsers: any; };

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
    const [updateUser] = useMutation(UPDATE_USER,{
        update(cache, { data }) {
            if (!data) return;

            try {

                const { allUsers: currentUsers } = cache.readQuery({
                    query: GET_ALL_USERS
                }) as { allUsers: any; };

                cache.writeQuery({
                    query: GET_ALL_USERS,
                    data: {
                        allUsers: currentUsers
                    }
                });
            } catch (error) {
                console.log('La query GET_ALL_USERS no está en caché');
            }
        }
    });
    const [deleteUser] = useMutation(DELETE_USER,{
        update(cache, { data }) {
            if (!data) return;

            try {
                const { deleteUser: oldUser } = data;

                const { allUsers: currentUsers } = cache.readQuery({
                    query: GET_ALL_USERS
                }) as { allUsers: any; };
                console.log(oldUser);
                const newArray = currentUsers;
                cache.writeQuery({
                    query: GET_ALL_USERS,
                    data: {
                        allUsers: newArray.splice(newArray.indexOf(oldUser))
    }
                });
            } catch (error) {
                console.log('La query GET_ALL_USERS no está en caché' + error);
            }
        }
    });
    const {data, loading, error} = useQuery(GET_ALL_USERS);
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
    type IEditable =
        | "never"
    const never: IEditable = "never";
    type IType =
        | "string"
        | "boolean"
        | "numeric"
        | "date"
        | "datetime"
        | "time"
        | "currency";
    const numeric: IType = "numeric";
    const [columns, setColumns] = useState([
        { title: "id", field: "id", editable: never},
        { title: "Usuario", field: "username"},
        { title: "Nombre", field: "nombre" },
        { title: "Apellidos", field: "apellidos" },
        { title: "email", field: "email" },
        { title: "Peso", field: "peso", type: numeric },
        { title: "Altura", field: "altura", type: numeric },
        { title: "Rol", field: "rol" }
    ]);
    if (loading) return (<p>Cargando</p>);
    if (error) return (<p>Error</p>);

    return(
        <CSC.MainContent >
            <MaterialTable
                style={{width: "100%"}}
                localization={localization}
                columns={columns}
                data={data.allUsers}
                title="Usuarios registrados"
                editable={{
                    onRowAdd: newData =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                {
                                    console.log(newData)
                                    if (
                                        newData.username &&
                                        newData.nombre &&
                                        newData.apellidos &&
                                        newData.email &&
                                        newData.peso &&
                                        newData.rol &&
                                        newData.altura
                                    ){
                                        createUser({variables:newData})
                                    }else {
                                        handleOpen();
                                    }

                                }
                                resolve();
                            }, 1000);
                        }),
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
                    onRowDelete: oldData =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                {
                                    deleteUser({
                                        variables:{
                                            id: oldData.id
                                        }
                                    })
                                }
                                resolve();
                            }, 1000);
                        })

                }}
                onRowClick={(event, rowData, togglePanel) =>{
                    console.log(rowData);
                }
                }
            />
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Error</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Tienes que cubrir todos lo campos para crear un nuevo usuario
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Entendido
                    </Button>
                </DialogActions>
            </Dialog>
        </CSC.MainContent>
    );
}

export default UserTab;
