import React, {useState} from 'react'
import { Dialog, DialogTitle, DialogContent, Button, DialogActions, Typography, Grid, Tabs, Tab, Box } from "@material-ui/core";
import BarraAvaliacoes from './BarraAvaliacoes';
import NotaGeral from './NotaGeral';
import Comentario from './Comentario';

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
    return <Comentario value={tabIndex} tabIndex={0} data="01/01/2009" nota={e.nota} descricao={e.comentario}/>
  })
}

function montarAvaliacoesPositivas(){
  const avaliacoesFiltradas = avaliacoes.filter(e => e.recomenda === "SIM")
  return avaliacoesFiltradas.map(e => {
    return <Comentario value={tabIndex} tabIndex={1} data="01/01/2009" nota={e.nota} descricao={e.comentario}/>
  })
}

function montarAvaliacoesNegativas(){
  const avaliacoesFiltradas = avaliacoes.filter(e => e.recomenda === "NAO")
  return avaliacoesFiltradas.map(e => {
    return <Comentario value={tabIndex} tabIndex={2} data="01/01/2009" nota={e.nota} descricao={e.comentario}/>
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
          <Grid container justify="space-between" >
            <Grid item container direction="column" alignItems='flex-end' spacing={1} xs={5}  >
             <NotaGeral mediaNota={dadosPlataforma.notaGeral} totalAvaliacoes={avaliacoes.length}/>
            </Grid>
            <Grid item container xs={6} alignItems='center' justify='center'>
              <BarraAvaliacoes titulo="5 estrelas" quantidade={buscarQuantidadeAvaliacoes(1)} percentual ={buscarPercentualAvaliacoes(1)}/>
              <BarraAvaliacoes titulo="4 estrelas" quantidade={buscarQuantidadeAvaliacoes(2)} percentual ={buscarPercentualAvaliacoes(2)}/>
              <BarraAvaliacoes titulo="3 estrelas" quantidade={buscarQuantidadeAvaliacoes(3)} percentual ={buscarPercentualAvaliacoes(3)}/>
              <BarraAvaliacoes titulo="2 estrelas" quantidade={buscarQuantidadeAvaliacoes(4)} percentual ={buscarPercentualAvaliacoes(4)}/>
              <BarraAvaliacoes titulo="1 estrela" quantidade={buscarQuantidadeAvaliacoes(5)} percentual ={buscarPercentualAvaliacoes(5)}/>
            </Grid>
          </Grid>
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