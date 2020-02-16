import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardActions,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TablePagination,
  Link
} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';

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
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);


  const handlePageChange = (event, page) => {
    setPage(page);
  };

  const handleRowsPerPageChange = event => {
    setRowsPerPage(event.target.value);
  };

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
                {plataformas.slice(0, rowsPerPage).map(plataforma => (
                  <TableRow
                    className={classes.tableRow}
                    hover
                    key={plataforma.id}
                    selected={selectedplataformas.indexOf(plataforma.id) !== -1}
                  >
                    <TableCell>
                      <div className={classes.nameContainer}>
                        {plataforma.nome}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Rating readOnly value={plataforma.notaGeral} />
                    </TableCell>
                    <TableCell>
                    <Link href={plataforma.endereco_online} >
                      Ver detalhes
                    </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </PerfectScrollbar>
      </CardContent>
      <CardActions className={classes.actions}>
        <TablePagination
          component="div"
          count={plataformas.length}
          onChangePage={handlePageChange}
          onChangeRowsPerPage={handleRowsPerPageChange}
          page={page}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </CardActions>
    </Card>
  );
};

PlataformasTable.propTypes = {
  className: PropTypes.string,
  plataformas: PropTypes.array.isRequired
};

export default PlataformasTable;
