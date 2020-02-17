import React from 'react';
import { Grid, Box, Typography } from '@material-ui/core';

const DetalheTabela = (props) => {
  return (
    <>
      <Grid container item style={{borderBottom: '2px solid #dedede', borderRadius: '6x'}}>
        <Grid item sm='6' alignItems='center' container style={{backgroundColor: 'white', width: '100%', height: '50px'}}>
          <Box paddingLeft={2}>
            <Typography variant='subtitle1'>{props.titulo}</Typography>
          </Box>
        </Grid>
        <Grid item sm='6' alignItems='center' container style={{backgroundColor: 'white', width: '100%', height: '50px'}}>
          <Box paddingLeft={2} >
            <Typography variant='subtitle2'>{props.valor}</Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default DetalheTabela;
