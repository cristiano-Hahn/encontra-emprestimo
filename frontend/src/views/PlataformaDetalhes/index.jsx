import React, { useState, useEffect } from 'react'
import { Button, Box, Grid, Typography, Link } from '@material-ui/core'
import ModalAvaliacoes from './ModalAvaliacoes'
import { useParams } from "react-router-dom";
import Axios from 'axios';
import ModalAvaliar from './ModalAvaliar';
import { API_URL } from 'common/api';
import Rating from '@material-ui/lab/Rating';
import DetalheTabela from './DetalheTabela';


export default function PlataformaDetalhes (props) {

    const { plataformaId } = useParams();
    const [modalAvaliacoesVisible, setModalAvaliacoesVisible] = useState(false)
    const [modalAvaliarVisible, setModalAvaliarVisible] = useState(false)
    const [dadosPlataforma, setDadosPlataforma] = useState({});
    const [avaliacoes, setAvaliacoes] = useState(null)

    useEffect(() => {
      buscarPlataformas()
    // eslint-disable-next-line
    }, [])

    function buscarPlataformas(){
      Axios.get(`${API_URL}/plataformas/${plataformaId}`).then(e =>{
        setDadosPlataforma(e.data)
        buscarAvaliacoes()
      })
    }

    function buscarAvaliacoes(){
      Axios.get(`${API_URL}/plataformas/${plataformaId}/avaliacoes`).then(e =>{
          setAvaliacoes(e.data)
        })
    }

    function handleCloseModalAvaliar(avaliou){
      setModalAvaliarVisible(false)
      if(avaliou){
        buscarPlataformas()
      }
    }

    return (
      <div>
        <ModalAvaliacoes
          open={modalAvaliacoesVisible}
          handleClose={() => setModalAvaliacoesVisible(false)}
          dadosPlataforma={dadosPlataforma}
          avaliacoes={avaliacoes}
        />
        <ModalAvaliar
          open={modalAvaliarVisible}
          handleClose={handleCloseModalAvaliar}
          dadosPlataforma={dadosPlataforma}
        />

        <Box margin={5} paddingTop={1}>
          <Grid container spacing={2} >
            <Grid item xs='12' sm='4' xl='3'>
              <img src={dadosPlataforma && dadosPlataforma.imagem} alt="imagem" style={{maxWidth: '100%'}}/>
            </Grid>
            <Grid item container xs='6' alignItems='flex-start' >
              <Grid item xs='12'>
                <Box marginLeft={4} paddingTop={2}>
                  <Typography variant='h2'>{dadosPlataforma && dadosPlataforma.nome}</Typography>
                </Box>
              </Grid>
            <Grid item xs='12'>
              <Box marginLeft={4}>
                <Grid item>
                  <Typography variant={'h3'} component='span'> {dadosPlataforma && dadosPlataforma.notaGeral} </Typography>
                  <Typography variant={'h6'} component='span'> Média geral </Typography>
                  <Box component='span' marginLeft={1}marginBottom={-1}>
                    <Button variant='text' color='primary' onClick={() =>setModalAvaliacoesVisible(true)}>Ver avaliações</Button>
                  </Box>
                </Grid>
                <Grid item>
                  {dadosPlataforma && dadosPlataforma.notaGeral && <Rating  value={dadosPlataforma.notaGeral} readOnly />}
                </Grid>
                <Grid item>
                  <Typography variant={'h6'}> {dadosPlataforma && dadosPlataforma.numeroAvaliacoes} avaliações efetuadas</Typography>
                </Grid>
              </Box>
              <Box marginLeft={4} marginTop={2}>
                <Grid item container alignItems='flex-end' >
                  <Grid item>
                    <Link href={dadosPlataforma && dadosPlataforma.enderecoOnline} target="_blank" rel="noopener" rel="noreferrer">
                      <Button variant='contained' color='default'>Visitar o site</Button>
                    </Link>
                    <Box component='span' marginLeft={1}>
                      <Link href={dadosPlataforma && dadosPlataforma.enderecoOnline} target="_blank" rel="noopener" rel="noreferrer">
                        <Button variant='contained' color='primary'>Realizar sua avaliação</Button>
                      </Link>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Box>
        <Box paddingTop={2} paddingBottom={1}>
          <Typography variant='h3'>Mais detalhes da plataforma</Typography>
        </Box>
        <Grid>
          <DetalheTabela titulo='Razão social' valor={dadosPlataforma.razaoSocial} />
          <DetalheTabela titulo='CNPJ' valor={dadosPlataforma.cnpj} />

          <DetalheTabela titulo='CNPJ verificado pela nossa equipe' valor={dadosPlataforma.cnpjVerificado ? "Sim": "Não"} />
          <DetalheTabela titulo='Telefone comercial' valor={dadosPlataforma.telefoneComercial} />
          <DetalheTabela titulo='Telefone verificado pela nossa equipe' valor={dadosPlataforma.telefoneComercialVerificado ? "Sim": "Não"} />
          <DetalheTabela titulo='Site oficial' valor={dadosPlataforma.enderecoOnline} />
          <DetalheTabela titulo='Data de fundação' valor={dadosPlataforma.dataCadastro} />
          <DetalheTabela titulo='Quantidade de reclamações' valor={dadosPlataforma.reclameAqui && dadosPlataforma.reclameAqui.quantidadeReclamacoes} />
          <DetalheTabela titulo='Reclamações respondidas' valor={dadosPlataforma.reclameAqui && dadosPlataforma.reclameAqui.reclamacoesRespondidas + " %"}/>
          <DetalheTabela titulo='Índice de solução' valor={dadosPlataforma.reclameAqui && dadosPlataforma.reclameAqui.voltariaFazerNegocio + " %"}/>
          <DetalheTabela titulo='Voltaria a fazer negócio' valor={dadosPlataforma.reclameAqui && dadosPlataforma.reclameAqui.indiceSolucao + " %"}/>
          <DetalheTabela titulo='Nota do consumidor' valor={dadosPlataforma.reclameAqui && dadosPlataforma.reclameAqui.notaConsumidor}/>
          <DetalheTabela titulo='Nota geral da plataforma' valor={dadosPlataforma.reclameAqui && dadosPlataforma.reclameAqui.notaGeral}/>

        </Grid>
        </Box>
      </div>
    )
}
