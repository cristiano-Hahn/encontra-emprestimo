import React, {useState} from 'react'
import { Dialog, DialogTitle, DialogContent, Button, DialogActions, Typography, Grid, Tabs, Tab, Box } from "@material-ui/core";
import BarraAvaliacoes from './BarraAvaliacoes';
import NotaGeral from './NotaGeral';
import Avaliacao from './Avaliacao';
import ResumoAvaliacoes from './ResumoAvaliacoes';

export default function ModalAvaliacoes(props){

const [tabIndex, setTabIndex] = useState(0)

const dadosPlataforma = props.dadosPlataforma || {}
const avaliacoes = props.avaliacoes || []


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

function montarAvaliacoesTodas(){
  return avaliacoes.map(e => {
    return <Avaliacao value={tabIndex} tabIndex={0} data="01/01/2009" nota={e.nota} descricao={e.comentario} data={e.data}/>
  })
}

function montarAvaliacoesPositivas(){
  const avaliacoesFiltradas = avaliacoes.filter(e => e.recomenda === "SIM")
  return avaliacoesFiltradas.map(e => {
    return <Avaliacao value={tabIndex} tabIndex={1} data="01/01/2009" nota={e.nota} descricao={e.comentario} data={e.data}/>
  })
}

function montarAvaliacoesNegativas(){
  const avaliacoesFiltradas = avaliacoes.filter(e => e.recomenda === "NAO")
  return avaliacoesFiltradas.map(e => {
    return <Avaliacao value={tabIndex} tabIndex={2} data="01/01/2009" nota={e.nota} descricao={e.comentario} data={e.data}/>
  })
}

  return (
    <Dialog
        open={props.open}
        onClose={props.handleClose}
        fullWidth
        maxWidth={'sm'}
      >
        <DialogTitle>
        
        <Typography variant={'h3'}>
          {`Avaliações da plataforma ${dadosPlataforma.nome}`}
        </Typography>
        </DialogTitle>
        <DialogContent>
          <ResumoAvaliacoes avaliacoes={avaliacoes} dadosPlataforma={dadosPlataforma} />
          <Box marginTop={5} >
            <Tabs
              value={tabIndex}
              onChange={(event, value) => setTabIndex(value)}
              indicatorColor="primary"
              textColor="primary"
              centered
            >
              <Tab label="Todas"/>
              <Tab label="Positivas" />
              <Tab label="Negativas" />
            </Tabs>
            {montarAvaliacoesTodas()}
            {montarAvaliacoesPositivas()}
            {montarAvaliacoesNegativas()}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} color="primary" variant="contained" autoFocus>
            Voltar
          </Button>
        </DialogActions>
      </Dialog>
  )
}