import { CircularProgress, Grid } from "@mui/material"

export const CheckingAuth = () => {
  return (
    <Grid
      container
      spacing={0}
      direction='column'
      alignItems='center'
      justifyContent='center'
      sx={{minHeight: '100vh', backgroundColor: 'primary.main', padding: 4}}
    >
        <Grid
          direction='row'
          justifyContent='center'
          container
        >
            <CircularProgress size='5rem' color="warning" />
        </Grid>
    </Grid>
  )
}
