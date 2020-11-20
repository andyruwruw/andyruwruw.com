import React from 'react';
import {
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '1rem .5rem',
    },
    line: {
      display: 'block',
      width: '8.8rem',
      height: '.4rem',
      borderRadius: '.5rem',
      background: '#ff4d5a',
    },
    first: {
      marginLeft: '0',
      animation: 'enter-left .3s ease 0s',
    },
    second: {
      marginTop: '1.5rem',
      marginLeft: '5.4rem',
      animation: 'hide .1s, enter-left .3s ease .1s',
    },
  }),
);

export default function Intro() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <span className={[classes.line, classes.first].join(' ')} />

      <span className={[classes.line, classes.second].join(' ')} />
    </div>
  );
}