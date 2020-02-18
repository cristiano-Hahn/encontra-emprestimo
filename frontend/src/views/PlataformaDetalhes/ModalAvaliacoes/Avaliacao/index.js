import React from 'react'
import {  Typography, Box } from '@material-ui/core'
import Rating from '@material-ui/lab/Rating'
import moment from 'moment'

export default function Avaliacao(props){
  return (
    <>
      <Box margin={2} hidden={props.tabIndex !== props.value}>
        <Rating value={props.nota} readOnly />
        <Typography variant='h6'> {props.descricao} </Typography>
        <Typography variant='body2'> Publicado em {moment(props.data, "YYYY-MM-DD").format("DD/MM/YYYY")} </Typography>
      </Box>
    </>
)
}