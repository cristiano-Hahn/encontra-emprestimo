import React, {useState} from 'react'
import { Dialog, DialogTitle, DialogContent, Button, DialogActions, Typography, Grid, Box, TextField } from "@material-ui/core";
import Rating from '@material-ui/lab/Rating';
import Axios from 'axios';
import { useSnackbar } from 'notistack';
import { API_URL } from 'common/api';

export default function ModalAvaliar(props){
const dadosAvaliacaoDefault = {nota: 0, nomeUsuario: null, comentario: null}
const [dadosAvaliacao, setDadosAvaliacao] = useState(dadosAvaliacaoDefault)
const { enqueueSnackbar } = useSnackbar();

function buscarDescricaoAvaliacao(){
  switch(dadosAvaliacao.nota){
    case 1:
      return "Péssima"
    case 2:
      return "Ruim"
    case 3:
      return "Regular"
    case 4:
      return "Boa"
    case 5:
      return "Ótima"
    default: 
      return ""
  }
}

function realizarAvaliacao(){
  const dados = {...dadosAvaliacao, recomenda: dadosAvaliacao.nota > 3 ? "SIM": "NAO"}

  Axios.post(`${API_URL}/plataformas/${dadosPlataforma.id}/avaliacoes`, dados).then(e => {
    enqueueSnackbar('Sua avaliação foi registrada com sucesso! Muito obrigado :)', { variant: 'success' });
    props.handleClose(true)
    setDadosAvaliacao(dadosAvaliacaoDefault)
  }).catch(e => {
    enqueueSnackbar('Ocorreu um erro ao efetuar a avaliação, tente novamente mais tarde :/', { variant: 'error' });
  })
  
  
  
}


const dadosPlataforma = props.dadosPlataforma || {}

  return (
    <Dialog
        open={props.open}
        onClose={props.handleClose}
        fullWidth
        maxWidth={'sm'}
      >
        <DialogTitle>
        
        <Typography variant={'h3'}>
          {`Avaliar a plataforma ${dadosPlataforma.nome}`}
        </Typography>
        </DialogTitle>
        <DialogContent>
          <Grid container justify="space-between" direction="column" spacing={2}>
            <Grid container item>
              <Grid item xs='12'>
                <Typography variant="h6">Como foi sua experiência com essa plataforma?</Typography>
              </Grid>
              <Grid item xs='12' container >
                <Grid item>
                  <Rating
                    value={dadosAvaliacao.nota}
                    onChange={(event, newValue) => setDadosAvaliacao({...dadosAvaliacao, nota: newValue})}
                  />
                </Grid>
                <Grid item>
                  <Box marginLeft={1} marginTop={0.5}>
                    <Typography variant="h5"> {buscarDescricaoAvaliacao()}</Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid container item>
              <Grid item xs='12'>
                <Typography variant="h6">Qual é o seu nome?</Typography>
              </Grid>
              <Grid item xs='12'>
                <TextField
                  value={dadosAvaliacao.nomeUsuario}
                  onChange={(event) => setDadosAvaliacao({...dadosAvaliacao, nomeUsuario: event.target.value})}
                  fullWidth
                  placeholder="Informe seu nome"
                  variant="outlined"
                />
              </Grid>
            </Grid>
            <Grid container item>
              <Grid item xs='12'>
                <Typography variant="h6">Conte-nos um pouco mais sobre a sua experiência e ajude outras pessoas!</Typography>
              </Grid>
              <Grid item xs='12'>
                <TextField
                  value={dadosAvaliacao.comentario}
                  onChange={(event) => setDadosAvaliacao({...dadosAvaliacao, comentario: event.target.value})}
                  fullWidth
                  rows={4}
                  placeholder="Escreva seu comentário aqui"
                  multiline
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
        <Button onClick={props.handleClose} color="default" variant="contained">
            Voltar
          </Button>
          <Button onClick={realizarAvaliacao} color="primary" disabled={dadosAvaliacao.nota === 0} variant="contained">
            Realizar avaliação
          </Button>
        </DialogActions>
      </Dialog>
  )
}