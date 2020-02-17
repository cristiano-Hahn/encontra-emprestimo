import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import {
    Card,
    CardContent,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Avatar,
    Typography
} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    root: {},
    content: {
        padding: 0
    },
    inner: {
        minWidth: 1050
    },
    nameContainer: {
        display: 'flex',
        alignItems: 'center'
    },
    avatar: {
        marginRight: theme.spacing(2)
    },
    actions: {
        justifyContent: 'flex-end'
    }
}));

const PlataformasTable = props => {
    const { className, plataformas, ...rest } = props;

    const classes = useStyles();

    const [selectedplataformas] = useState([]);

    return (
        <Card
            {...rest}
            className={clsx(classes.root, className)}
        >
            <CardContent className={classes.content}>
                <PerfectScrollbar>
                    <div className={classes.inner}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Avaliação geral</TableCell>
                                    <TableCell>Ações</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {plataformas.map(plataforma => (
                                    <TableRow
                                        className={classes.tableRow}
                                        hover
                                        key={plataforma.id}
                                        selected={selectedplataformas.indexOf(plataforma.id) !== -1}
                                    >
                                        <TableCell>
                                            <div className={classes.nameContainer}>
                                                <Avatar
                                                    className={classes.avatar}
                                                    src={plataforma.imagem}
                                                >
                                                    {plataforma.nome}
                                                </Avatar>
                                                <Typography variant="body1">{plataforma.nome}</Typography>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <Rating readOnly value={plataforma.notaGeral} />
                                        </TableCell>
                                        <TableCell>
                                            <Link to={"/plataformas/" + plataforma.id + "/detalhes"} className="btn">Ver detalhes</Link>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                </PerfectScrollbar>
            </CardContent>
        </Card>
    );
};

PlataformasTable.propTypes = {
    className: PropTypes.string,
    plataformas: PropTypes.array.isRequired
};

export default PlataformasTable;
