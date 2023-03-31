import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom"
import { useForm } from "../../hooks/useForm"
import { startCreatingUserWithEmailPassword } from "../../store/auth/thunks";
import { AuthLayout } from "../layout/AuthLayout"

const formData = {
  email: '',
  password: '',
  displayName: ''
};

const formValidations = {
  email: [ (value) => value.includes('@') , 'El correo debe tener un @.'],
  password: [(value) => value.length >= 6, 'La contraseña debe tener más de 6 letras.'],
  displayName: [(value) => value.length >= 1, 'El nombre es obligatorio.']
};

export const RegisterPage = () => {

  const [formSubmited, setFormSubmited] = useState(false);
  const dispatch = useDispatch();

  const { status, errorMessage } = useSelector(state => state.auth);

  const isCheckingAuthentication = useMemo( () => status === 'checking', [status]);

  const { 
    displayName,
    email,
    password,
    onInputChange,
    formState,
    isFormValid,
    displayNameValid,
    emailValid,
    passwordValid
  } = useForm(formData, formValidations);

  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmited(true);

    if( !isFormValid ) return;

    dispatch( startCreatingUserWithEmailPassword( formState ) );

    console.log(formState)
  }
  return (
    <AuthLayout title='Crear cuenta'>
      <h1>FormValid: { isFormValid ? 'Valido' : 'Incorrecto' }</h1>
        <form 
          onSubmit={onSubmit}
          className="animate__animated animate__fadeIn animate__faster"
        >
          <Grid container>
            <Grid item xs={12}>
              <TextField 
                label='Nombre completo'
                type='text'
                placeholder='Tu nombre'
                fullWidth 
                name="displayName"
                value={ displayName }
                onChange={ onInputChange }
                error={ !!displayNameValid && formSubmited }
                helperText={ formSubmited && displayNameValid }
              />
            </Grid>
            <Grid item xs={12} sx={{mt: 2}}>
              <TextField 
                label='Correo'
                type='email'
                placeholder='Correo'
                fullWidth
                name="email"
                value={ email }
                onChange={ onInputChange }
                error={ !!emailValid && formSubmited }
                helperText={ formSubmited && emailValid }
              />
            </Grid>
            <Grid item xs={12} sx={{mt: 2}}>
              <TextField 
                label='Contraseña'
                type='password'
                placeholder='contraseña'
                fullWidth
                name="password"
                value={ password }
                onChange={ onInputChange }
                error={ !!passwordValid && formSubmited}
                helperText={ formSubmited && passwordValid }
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{mb: 2, mt: 1}}>
          <Grid 
            item 
            xs={12}
            display={ !!errorMessage ? '' : 'none' }
            >
            <Alert severity='error'>
              { errorMessage }
            </Alert>
            </Grid>
            <Grid item xs={12}>
              <Button 
                variant='contained' 
                fullWidth
                type="submit"
                disabled={ isCheckingAuthentication }
              >
                Crear cuenta
              </Button>
            </Grid>
            <Grid container direction='row' justifyContent='end' sx={{mt: 1}}>
              <Typography sx={{mr: 1}}>¿Ya tienes cuenta?</Typography>
              <Link component={ RouterLink } color='inherit' to='/auth/login'>
                Ingresar     
              </Link>
            </Grid>
          </Grid>
        </form>
    </AuthLayout>
    )
}
