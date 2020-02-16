import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/styles';
import Axios from 'axios';
import { API_URL } from 'common/api';

import { PlataformasToolbar, PlataformasTable } from './components';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3)
    },
    content: {
        marginTop: theme.spacing(2)
    }
}));

export default function PlataformaList() {
    const classes = useStyles();

    const [plataformas, setPlataformas] = useState([])

    useEffect(() => {
        Axios.get(`${API_URL}/plataformas/`).then(e => {
            setPlataformas(e.data)
        })
        // eslint-disable-next-line
    }, [])


    return (
        <div className={classes.root}>
            <PlataformasToolbar />
            <div className={classes.content}>
                <PlataformasTable plataformas={plataformas} />
            </div>
        </div>
    );
};
