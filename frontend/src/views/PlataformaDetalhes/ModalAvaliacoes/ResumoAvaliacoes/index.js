import React from 'react'
import { Grid } from "@material-ui/core";
import NotaGeral from "../NotaGeral";
import BarraAvaliacoes from "views/PlataformaDetalhes/ModalAvaliar/BarraAvaliacoes";

export default function ResumoAvaliacoes(props){

  const avaliacoes = props.avaliacoes || []
  const dadosPlataforma = props.dadosPlataforma || {}

  function buscarQuantidadeAvaliacoes(nota){
    const avaliacoesFiltradas = avaliacoes.filter(avaliacao =>{
      return avaliacao.nota > nota - 1 && avaliacao.nota <= nota;
    })
    return avaliacoesFiltradas.length
  }
  
  function buscarPercentualAvaliacoes(nota){
    const quantidade = buscarQuantidadeAvaliacoes(nota)
    return quantidade * 100 / avaliacoes.length
  }

return (
  <Grid container justify="space-between" >
    <Grid item container direction="column" alignItems='flex-end' spacing={1} xs={5}  >
      <NotaGeral mediaNota={props.dadosPlataforma && props.dadosPlataforma.notaGeral && props.dadosPlataforma.notaGeral.toFixed(1)} totalAvaliacoes={avaliacoes.length}/>
    </Grid>
    <Grid item container xs={6} alignItems='center' justify='center'>
      <BarraAvaliacoes titulo="5 estrelas" quantidade={buscarQuantidadeAvaliacoes(5)} percentual ={buscarPercentualAvaliacoes(5)}/>
      <BarraAvaliacoes titulo="4 estrelas" quantidade={buscarQuantidadeAvaliacoes(4)} percentual ={buscarPercentualAvaliacoes(4)}/>
      <BarraAvaliacoes titulo="3 estrelas" quantidade={buscarQuantidadeAvaliacoes(3)} percentual ={buscarPercentualAvaliacoes(3)}/>
      <BarraAvaliacoes titulo="2 estrelas" quantidade={buscarQuantidadeAvaliacoes(2)} percentual ={buscarPercentualAvaliacoes(2)}/>
      <BarraAvaliacoes titulo="1 estrela" quantidade={buscarQuantidadeAvaliacoes(1)} percentual ={buscarPercentualAvaliacoes(1)}/>
    </Grid>
  </Grid>
)
}