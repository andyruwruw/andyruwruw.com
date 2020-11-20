import React from 'react';
import {
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core/styles';
import { useInView } from 'react-intersection-observer';

import Divider from '../../../../components/ui/divider/Divider';
import IntroGraphic from '../../../../assets/graphics/Intro';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      width: '100vw',
      height: '100vh',
      scrollSnapAlign: 'center',
    },
    title: {
      animation: 'hide .2s, enter-left .2s ease .2s',
    },
    subTitle: {
      animation: 'hide .4s, enter-left .3s ease .4s',
    },
    subTitleSecond: {
      animation: 'hide .5s, enter-left .3s ease .5s',
    },
    wrapper: {
      display: 'flex',
      justifyContent: 'center',
      width: '90%',
      maxWidth: '150rem',
      [theme.breakpoints.between('xs', 'lg')]: {
        justifyContent: 'flex-end',
        flexDirection: 'column-reverse',
      },
      [theme.breakpoints.between('lg', 'xl')]: {
        flexDirection: 'row',
      },
    },
    content: {
      [theme.breakpoints.between('xs', 'lg')]: {
        width: '100%',
        marginTop: 'calc(100vh - 100vw)',
      },
      [theme.breakpoints.between('lg', 'xl')]: {
        width: '40%'
      },
      alignSelf: 'center',
    },
    graphicWrapper: {
      display: 'block',
      position: 'relative',
      [theme.breakpoints.between('xs', 'md')]: {
        alignSelf: 'center',
        marginTop: '0',
        width: '100%',
      },
      [theme.breakpoints.between('md', 'xl')]: {
        alignSelf: 'flex-start',
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
      transform: 'translateZ(50px)',
    },
    fill: {
      animation: 'hide .6s, enter-right .4s ease .6s',
      transform: 'translateZ(40px)',
    },
    front: {
      animation: 'hide .3s, enter-right .4s ease .3s',
      transform: 'translateZ(15px)',
    },
    back: {
      animation: 'hide .1s, enter-right .4s ease .1s',
      transform: 'translateZ(0px)',
    },
    parallax: {
      transformStyle: 'preserve-3d',
    },
  }),
);

export default function Intro() {
  const { ref, inView, entry } = useInView({
    threshold: .2,
  });

  const classes = useStyles();

  return (
    <div
      ref={ref}
      className={classes.root}>
      <div className={classes.wrapper}>
        <div className={classes.content}>
          <h1 className={classes.title}>
            ANDREW YOUNG
          </h1>

          <Divider />

          <h2 className={classes.subTitle}>
            fullstack developer /
          </h2>

          <h2 className={classes.subTitleSecond}>
            undergrad student.
          </h2>
        </div>

        <div className={classes.graphicWrapper}>
          {inView &&
            <IntroGraphic />
          }
        </div>
      </div>
    </div>
  );
}