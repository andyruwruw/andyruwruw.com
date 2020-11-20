import React from 'react';
import {
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      width: '100vw',
      background: '#333646',
    },
    content: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      width: '95vw',
      maxWidth: '120rem',
      padding: '2rem 0',
    },
    aside: {
      minWidth: '13rem',
      padding: '0 2rem',
    },
    name: {
      display: 'block',
      fontSize: '4rem',
      color: '#EBEBEC',
      fontWeight: 500,
      textAlign: 'left',
    },
    links: {
      display: 'flex',
      justifyContent: 'start',
      alignItems: 'center',
      marginBottom: '2rem',
    },
    linkImage: {
      width: '1.5rem',
      height: '1.5rem',
      margin: '.25rem 1rem .25rem 0',
    },
    divider: {
      display: 'block',
      background: '#FFC25C',
      width: '5rem',
      height: '.5rem',
      margin: '1rem 0',
    },
    title: {
      display: 'block',
      color: '#9798A0',
      textAlign: 'left',
      fontSize: '1rem',
      fontWeight: 500,
    },
    headline: {
      display: 'block',
      color: '#EAEAEB',
      textAlign: 'left',
      fontSize: '1.5rem',
    },
    text: {
      color: '#9798A0',
    },
    main: {
      display: 'block',
      padding: '0 2rem',
    },
  }),
);


export default function Project() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

    </div>
  );
}