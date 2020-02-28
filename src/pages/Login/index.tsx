import React, {useEffect, useState} from "react";
import * as SC from './style'
import {TextField, Button} from "@material-ui/core";
import {Link, useHistory} from 'react-router-dom';
import axios from 'axios';

const Login: React.FC = () => {
    const [formData, setFormData] = useState({username: '', password: ''});
    const history = useHistory();
    function checkToken(){
        // axios.get('https://infinite-depths-35170.herokuapp.com/checkAuth')
        axios.get('http://localhost:5000/checkAuth', {headers: {
                authorization: localStorage.getItem('token')
            }})
            .then(res => {
                if (res.data.authorized){
                    history.push('/Main')
                }
            })
            .catch(err => {
                console.log('err: ' + err);
            });
    }
    useEffect(() => {
        /*        (() => {

                })();*/
        checkToken();
    }, );

    function hadleSubmit(e:any) {
        e.preventDefault();
        // axios.get('https://infinite-depths-35170.herokuapp.com/auth')
        axios.post('http://localhost:5000/auth', {
            username: formData.username,
            pass: formData.password
        })
            .then(res => {
                console.log(res.data);
                    localStorage.setItem('token', res.data);
                    checkToken();

            })
            .catch(err => {

            });
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