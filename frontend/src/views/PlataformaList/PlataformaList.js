import React, {useEffect, useState} from 'react'
import {makeStyles} from '@material-ui/styles';
import Axios from 'axios';
import {API_URL} from 'common/api';

import {PlataformasTable} from './components';
import Grid from "@material-ui/core/Grid";
import logomarca from "./images/logomarca.png";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(3)
    },
    content: {
        marginTop: theme.spacing(2)
    },
    image: {
        width: '412px',
        height: 'auto'
    },
    details: {
        textAlign: 'center'
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

export default function PlataformaList() {
    const classes = useStyles();

    const [plataformas, setPlataformas] = useState([]);

    useEffect(() => {
        Axios.get(`${API_URL}/plataformas/`).then(e => {
            setPlataformas(e.data)
        })
        // eslint-disable-next-line
    }, []);

    const calcularNumeroAvaliacoes = () => {
        if (plataformas && plataformas.length > 0) {
            return plataformas.map(plataforma => {
                return plataforma.numeroAvaliacoes;
            }).reduce((acc, cc) => acc + cc);
        } else {
            return 0;
        }
    };

    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item className={classes.image}>
                    <img className={classes.img} alt="complex" src={logomarca}/>
                </Grid>
                <Grid item xs={12} sm container className={classes.details}>
                    <Typography gutterBottom variant="h3">
                        Evite dores de cabeça. Veja a reputação das principais plataformas de empréstimo sem
                        expor suas informações pessoais.
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom>
                        Pesquise em mais de {plataformas.length} plataformas, navegue em mais
                        de {calcularNumeroAvaliacoes()} avaliações e escolha o
                        melhor negócio para você.
                    </Typography>
                </Grid>
            </Grid>
            <div className={classes.content}>
                <PlataformasTable plataformas={plataformas}/>
            </div>
        </div>
    );
};
