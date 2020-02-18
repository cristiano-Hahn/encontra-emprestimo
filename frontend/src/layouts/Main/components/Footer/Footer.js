import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/styles';
import {Typography, Link} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(5)
    }
}));

const Footer = props => {
    const {className, ...rest} = props;

    const classes = useStyles();

    return (
        <center
            {...rest}
            className={clsx(classes.root, className)}
        >
            <Typography variant="body1">
                &copy;{' '}
                MegaMH . 2020
            </Typography>
            <Typography variant="caption">
                Criado por: 
                <Link href="https://www.linkedin.com/in/anderson-vargas-b91029117/" target="_blank">Anderson Vargas, </Link>
                <Link href="https://www.linkedin.com/in/clediano-estefenon-580603170/" target="_blank">Clediano Estefenon, </Link> 
                <Link href="https://www.linkedin.com/in/cleiton-estefenon-786074184/" target="_blank">Cleiton Estefenon, </Link>
                <Link href="https://www.linkedin.com/in/cristiano-dall-agnol-hahn-78a386128/" target="_blank">Cristiano Hahn  e </Link>
                <Link href="https://www.linkedin.com/in/paulo-cella-056b5b80/" target="_blank">Paulo Cella</Link>.
            </Typography>
        </center>
    );
};

Footer.propTypes = {
    className: PropTypes.string
};

export default Footer;
