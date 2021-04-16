import {
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core/styles';

import { parallax } from '../styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    parallax: parallax(theme),
    svg: {
      position: 'absolute',
    },
    white: {
      fill: '#ffffff',
    },
    red: {
      fill: '#ff5777',
    },
    blue: {
      fill: '#1faaff',
    },
    front: {
      transform: 'translateZ(30px)',
    },
    middle: {
      transform: 'translateZ(0px)',
    },
    back: {
      transform: 'translateZ(-30px)',
    },
    redFront: {
      transform: 'translateZ(20px)',
      animation: 'hide .5s, slide-forwards-z20 .5s ease .5s, hoverz-forwards-z20 2s ease 1s infinite',
    },
    redBack: {
      transform: 'translateZ(-10px)',
      animation: 'hide .6s, slide-forwards-zn10 .6s ease .6s, hoverz-forwards-zn10 2.4s ease 1.2s infinite'
    },
    blueFront: {
      transform: 'translateZ(10px)',
      animation: 'hide .5s, slide-forwards-z10 .5s ease .5s, hoverz-forwards-z10 1.8s ease 1s infinite',
    },
    blueBack: {
      transform: 'translateZ(-20px)',
      animation: 'hide .6s, slide-forwards-zn20 .5s ease .6s, hoverz-backwards-zn20 2s ease 1.1s infinite',
    },
    boxes: {
      transform: 'translateZ(0px)',
      animation: 'hide .4s, enter-right .6s ease .4s',
    },
    topLeft: {
      animation: 'hide .2s, enter-left .6s ease .2s',
    },
    topLeftGear1: {
      transformOrigin: '562px 287px',
      animation: 'hide .2s, enter-left .6s ease .2s, rotatez 10s linear 1.1s infinite',
    },
    topLeftGear2: {
      transformOrigin: '388px 811px',
      animation: 'hide .2s, enter-left-z30 .6s ease .2s, rotatez-full-z30 10s linear 1.1s infinite',
    },
    topLeftGear3: {
      transformOrigin: '769px 722px',
      animation: 'hide .2s, enter-left-zn30 .6s ease .2s, rotatez-zn30 10s linear 1.1s infinite',
    },
    topRight: {
      animation: 'hide .3s, slide-down-z30 .6s ease .3s',
    },
    middleRight: {
      animation: 'hide .3s, enter-right-zn30 .6s ease .3s',
    },
    middleLeft: {
      animation: 'hide .3s, enter-left-z30 .6s ease .3s',
    },
    bottom: {
      animation: 'hide .3s, enter-up .6s ease .3s',
    },
    squiggles: {
      animation: 'hide .3s, enter-forwards .6s ease .3s',
    }
  }),
);

export default useStyles;