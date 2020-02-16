import React from 'react'
import { Grid, Typography, LinearProgress } from '@material-ui/core'

export default function BarraAvaliacoes(props){


return (
  <>
    <Grid item container xs={4} justify="center">
      <Grid item>
        <Typography variant={'h6'} style={{color: '#828282'}}>{props.titulo} </Typography>
      </Grid>
    </Grid>
    <Grid item xs={6}>
      <LinearProgress variant="determinate" value={props.percentual} />
    </Grid>
    <Grid item container xs={2} justify="center">
      <Grid item>
        <Typography variant={'h6'} style={{color: '#828282'}}>  {props.quantidade} </Typography>
      </Grid>
    </Grid>

  </>
)

}