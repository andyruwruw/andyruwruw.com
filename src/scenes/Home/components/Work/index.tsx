import React from 'react';
import {
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core/styles';
import { useInView } from 'react-intersection-observer';

import Divider from '../../../../components/ui/divider/Divider';
import WorkGraphic from '../../../../assets/graphics/Work';

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
  const { ref, inView, entry } = useInView({
    threshold: .2,
  });

  const classes = useStyles();

  return (
    <div ref={ref} className={classes.root}>
      <div className={classes.wrapper}>
        <div className={classes.content}>
          <h1>
            Work Experience
          </h1>

          <Divider />

          <h2>
            frontend developer for chess.com
          </h2>
        </div>

        <div className={classes.graphicWrapper}>
          {inView &&
            <WorkGraphic />
          }
        </div>
      </div>
    </div>
  );
}