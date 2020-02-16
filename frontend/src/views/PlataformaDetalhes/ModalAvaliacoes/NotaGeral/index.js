import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import Rating from '@material-ui/lab/Rating'

export default function NotaGeral(props){

return (
  <>
    <Grid item>
      <Typography variant={'h1'}> {props.mediaNota} </Typography>
    </Grid>
    <Grid item>
      {props.mediaNota && <Rating  value={props.mediaNota} readOnly />}
    </Grid>
    <Grid item>
      <Typography variant={'h6'}> {props.totalAvaliacoes} avaliações efetuadas</Typography>
    </Grid>
  </>
)

}