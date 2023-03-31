import { LogoutOutlined, MenuOutlined } from '@mui/icons-material'
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import { useDispatch } from 'react-redux';
import { startLogout } from '../../store/auth/thunks';

export const NavBar = ({drawerWidth}) => {

    const dispatch = useDispatch();

    const onLogOut = () => {
        dispatch( startLogout() )
    };

  return (
    <AppBar
        position='fixed'
        sx={{
            width: { 
                sm: `calc(100% - ${drawerWidth}px)`,
            },
            ml: {
                sm:`${drawerWidth}px`
            }
        }}
    >
        <Toolbar>
            <IconButton
                color='inherit'
                edge='start'
                sx={{mr: 2, display: {sm: 'none'}}}
            >
                <MenuOutlined/>
            </IconButton>
            <Grid container direction='row' justifyContent='space-between'>
                <Typography component='div' variant='h6'>JournalApp</Typography>
                <IconButton onClick={
                    onLogOut
                } color='error'>
                    <LogoutOutlined />
                </IconButton>
            </Grid>
        </Toolbar> 
    </AppBar>
  )
}
