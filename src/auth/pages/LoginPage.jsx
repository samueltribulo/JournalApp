import { Google } from "@mui/icons-material"
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link as RouterLink } from "react-router-dom"
import { useForm } from "../../hooks"
import { checkingAuthentication, startGoogleSignIn, startLoginWithEmailPassword } from "../../store/auth"
import { AuthLayout } from "../layout/AuthLayout"
export const LoginPage = () => {

  const dispatch = useDispatch();

  const { status, errorMessage } = useSelector( state => state.auth );

  const {email, password, onInputChange} = useForm({
    email: '',
    password: ''
  });


  const isAuthenticating = useMemo(() => status === 'checking', [status])

  const onSubmit = (event) =>{
    event.preventDefault();

    console.log({email, password})

    dispatch( startLoginWithEmailPassword({ email, password }) );

  };

  const onGoogleSignIn = () => {
    console.log("google gign in")
    dispatch( startGoogleSignIn() );
  };

  return (
    <AuthLayout title='Login'>
        <form
          onSubmit={ onSubmit }
          className="animate__animated animate__fadeIn animate__faster"
        >
          <Grid container>
            <Grid item xs={12}>
              <TextField 
                label='Correo'
                type='email'
                placeholder='ejemplo@google.com'
                fullWidth 
                name="email"
                onChange={onInputChange}
                value={email}
              />
            </Grid>
            <Grid item xs={12} sx={{mt: 2}}>
              <TextField 
                label='Contraseña'
                type='password'
                placeholder='contraseña'
                fullWidth
                name="password"
                onChange={onInputChange}
                value={password}
              />
            </Grid>
          </Grid>
          <Grid 
            container
            display={ !!errorMessage ? '' : 'none' }
            sx={{mt: 1}}
          >
            <Grid
              item
              xs={12}
            >
              <Alert
                severity='error'
              >
                { errorMessage }
              </Alert>
            </Grid>
          </Grid>
          <Grid container spacing={2} sx={{mb: 2, mt: 1}}>
            <Grid item xs={12} sm={6}>
              <Button 
                type="submit" 
                variant='contained' 
                fullWidth
                disabled={ isAuthenticating }
                >
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button 
                onClick={onGoogleSignIn} 
                variant='contained' 
                fullWidth
                disabled={ isAuthenticating } 
              >
                <Google />
                <Typography sx={{ml: 1}}>
                  Google
                </Typography>
              </Button>
            </Grid>
            <Grid container direction='row' justifyContent='end'>
              <Link component={ RouterLink } color='inherit' to='/auth/register'>
                Creat cuenta
              </Link>
            </Grid>
          </Grid>
        </form>
    </AuthLayout>
    )
}
