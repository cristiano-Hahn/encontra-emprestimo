import React, { useState, useEffect } from 'react'
import { Button } from '@material-ui/core'
import ModalAvaliacoes from './ModalAvaliacoes'
import {
  useParams
} from "react-router-dom";
import Axios from 'axios';
import ModalAvaliar from './ModalAvaliar';
import { API_URL } from 'common/api';


export default function PlataformaDetalhes (props) {

    const { plataformaId } = useParams();
    const [modalAvaliacoesVisible, setModalAvaliacoesVisible] = useState(false)
    const [modalAvaliarVisible, setModalAvaliarVisible] = useState(true)
    const [dadosPlataforma, setDadosPlataforma] = useState(null);
    const [avaliacoes, setAvaliacoes] = useState(null)

    useEffect(() => {
      Axios.get(`${API_URL}/plataformas/${plataformaId}`).then(e =>{
        setDadosPlataforma(e.data)
        console.log(e.data)
        buscarAvaliacoes()
      })
    // eslint-disable-next-line
    }, [])

    function buscarAvaliacoes(){
      Axios.get(`${API_URL}/plataformas/${plataformaId}/avaliacoes`).then(e =>{
          setAvaliacoes(e.data)
        })
    }

    function handleCloseModalAvaliar(avaliou){
      setModalAvaliarVisible(false)
      if(avaliou){
        buscarAvaliacoes()
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
        <Button onClick={() => setModalAvaliacoesVisible(true)}>
          Abrir modal de avaliações
        </Button>
        <Button onClick={() => setModalAvaliarVisible(true)}>
          Abrir modal de avaliar
        </Button>
      </div>
    )
}
