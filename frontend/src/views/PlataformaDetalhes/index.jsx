import React, { useState, useEffect } from 'react'
import { Button } from '@material-ui/core'
import ModalComentarios from './ModalComentarios'
import {
  useParams
} from "react-router-dom";
import Axios from 'axios';
export default function PlataformaDetalhes (props) {

    const { plataformaId } = useParams();
    const [modalVisible, setModalVisible] = useState(true)
    const [dadosPlataforma, setDadosPlataforma] = useState(null);
    const [avaliacoes, setAvaliacoes] = useState(null)

    useEffect(() => {
      Axios.get(`http://localhost:8080/plataformas/${plataformaId}`).then(e =>{
        setDadosPlataforma(e.data)
        console.log(e.data)
        Axios.get(`http://localhost:8080/plataformas/${plataformaId}/avaliacoes`).then(e =>{
      
        console.log(e.data)
          setAvaliacoes(e.data)
        })
      })
    // eslint-disable-next-line
    }, [])

    return (
      <div>
        <ModalComentarios
          open={modalVisible}
          handleClose={() => setModalVisible(false)}
          dadosPlataforma={dadosPlataforma}
          avaliacoes={avaliacoes}
        />
        <Button onClick={() => setModalVisible(true)}>
          Abrir modal
        </Button>
      </div>
    )
}
