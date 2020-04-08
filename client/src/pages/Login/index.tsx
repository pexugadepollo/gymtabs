import React, {useEffect, useState} from "react";
import * as SC from './style'
import {TextField, Button} from "@material-ui/core";
import {Link, useHistory} from 'react-router-dom';
import  { gql } from 'apollo-boost';
import {useMutation} from '@apollo/react-hooks';
const GET_TOKEN = gql`
    mutation GetToken($username: String!,$password: String!){
        getToken(
        username: $username,
        password: $password
        )
    {
        token
    }
    }
`
const CHECK_TOKEN = gql`
    mutation CheckToken($token: String!){
        checkToken(
            token: $token
        ){
            valid
        }
    }
`

const Login: React.FC = () => {
    const [formData, setFormData] = useState({username: '', password: ''});
    const history = useHistory();
    const [getToken] = useMutation(GET_TOKEN, {onCompleted: data => {localStorage.setItem("token", data.getToken.token);history.push("/Main")}});
    const [checkToken] = useMutation(CHECK_TOKEN, {onCompleted: data => {
        if (data.checkToken.valid){
            history.push("/Main")
        }
    }});
    useEffect(() => {
        try {
            if (localStorage.getItem("token")) {
                checkToken({variables: {token: localStorage.getItem("token")}})
            }
        }catch (e) {
            console.log(e)
        }
    }, [checkToken]);

     function hadleSubmit(e:any) {
        e.preventDefault();
        try {
            getToken({variables: {username: formData.username, password: formData.password}})

        }catch (e) {
            console.log(e)
        }


    }
    function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setFormData({...formData,[event.target.name]: event.target.value})

    }
    return (
            <SC.Container>
                <SC.LoginForm onSubmit={e => hadleSubmit(e)}>
                    <h1 className="logintxt">Iniciar sesión</h1>
                    <TextField fullWidth label="Usuario" name="username" value={formData['username']} onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => handleChange(e)} variant="outlined"/>
                    <TextField fullWidth type="password" label="Contraseña" name="password" value={formData['password']} onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => handleChange(e)} variant="outlined"/>
                    <SC.ButtonContainer>
                        <Link to="/LoginExtra">Opciones extra?</Link>
                        <Button variant="contained" color="primary" type="submit">
                            Acceder
                        </Button>
                    </SC.ButtonContainer>
                </SC.LoginForm>
            </SC.Container>
    );
};

export default Login;
