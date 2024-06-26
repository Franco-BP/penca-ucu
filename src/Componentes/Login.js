import React, { useState, useContext, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { postWithResponseManage } from '../services/PencaUCUservices';
import { accionAddUsuario, PencaUCUContext } from '../context/Context';
import { useNavigate } from 'react-router-dom';

export default function FormPropsTextFields() {

    const { data, dispatch } = useContext(PencaUCUContext);
    const usuario = data.usuarioData;

    const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [contrasenia, setContrasenia] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleContraseniaChange = (event) => {
    setContrasenia(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const loginDetails = { email, contrasenia };
    if (!loginDetails.email || !loginDetails.contrasenia) {
        alert('Por favor complete todos los campos');
        return;
    }
    postWithResponseManage('/usuario/login', loginDetails)
        .then((response) => {
            if (response.idUsuario) {
                dispatch(accionAddUsuario(response))
                navigate('/home');
            }
            else {
                alert('Usuario o contraseña incorrectos');
            }
        })
  };

  useEffect(() => {
    if ( usuario?.idUsuario ) {
      navigate('/home');
    }
  }, [])

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        display: 'grid',
        placeItems: 'center',
        height: '100%',
        marginBottom: '2rem'
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField
        required
        label="Email"
        type="email"
        value={email}
        onChange={handleEmailChange}
      />
      <TextField
        required
        label="Contrasenia"
        type="password"
        value={contrasenia}
        onChange={handleContraseniaChange}
      />
      <Button sx={{backgroundColor:"#1C285E"}} type="submit" variant="contained">Login</Button>
    </Box>
  );

};