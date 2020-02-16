import React from 'react'
import {  Typography, Box } from '@material-ui/core'
import Rating from '@material-ui/lab/Rating'

export default function Comentario(props){
  return (
    <>
      <Box margin={2} hidden={props.tabIndex !== props.value}>
        <Rating value={props.nota} readOnly />
        <Typography variant='h6'> {props.descricao} </Typography>
        <Typography variant='body2'> Publicado em {props.data} </Typography>
      </Box>
    </>
)
}