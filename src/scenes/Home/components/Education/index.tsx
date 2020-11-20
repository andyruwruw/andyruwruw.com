import React from 'react';
import {
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core/styles';

import Divider from '../../../../components/ui/divider/Divider';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      width: '100vw',
      height: '100vh',
      scrollSnapAlign: 'center',
    },
    wrapper: {
      display: 'flex',
      justifyContent: 'center',
      width: '90%',
      maxWidth: '150rem',
      [theme.breakpoints.between('xs', 'sm')]: {
        flexDirection: 'column-reverse',
      },
      [theme.breakpoints.between('sm', 'md')]: {
        flexDirection: 'row',
      },
      [theme.breakpoints.between('md', 'xl')]: {
        flexDirection: 'row',
      },
    },
    content: {
      [theme.breakpoints.between('xs', 'md')]: {
        width: '100%',
      },
      [theme.breakpoints.between('md', 'xl')]: {
        width: '40%'
      },
      alignSelf: 'center',
    },
    graphicWrapper: {
      alignSelf: 'flex-start',
      display: 'block',
      position: 'relative',
      [theme.breakpoints.between('xs', 'md')]: {
        marginTop: '0',
        width: '100%',
      },
      [theme.breakpoints.between('md', 'xl')]: {
        marginTop: 'calc((100vh - 55%) / 2)',
        width: '55%',
      },
    },
    graphicImage: {
      width: '100%',
      position: 'absolute',
    },
    hands: {
      animation: 'hide .5s, enter-right .4s ease .5s',
    },
    front: {
      animation: 'hide .3s, enter-right .4s ease .3s',
    },
    fill: {
      animation: 'hide .6s, enter-right .4s ease .6s',
    },
    back: {
      animation: 'hide .1s, enter-right .4s ease .1s',
    },
  }),
);

export default function Intro() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <div className={classes.content}>
          <h1>
            Undergrad Student
          </h1>

          <Divider />

          <h2>
            b.s. in computer science
          </h2>

          <h2>
            brigham young university
          </h2>
        </div>

        <div className={classes.graphicWrapper}>

        </div>
      </div>
    </div>
  );
}