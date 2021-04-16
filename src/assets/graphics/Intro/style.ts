import {
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core/styles';

import { parallax } from '../styles';

const SPARKLES = true;
const CURSOR = true;
const PEN = true;

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
    handRight: {
      transform: 'translateZ(50px)',
      animation: 'hide .6s, slide-left-z50 1s ease .5s, hoverx-left-z50 4s ease 1.6s infinite',
    },
    handLeft: {
      transform: 'translateZ(50px)',
      animation: 'hide .6s, slide-right-z50 1s ease .5s, hoverx-right-z50 4s ease 1.6s infinite',
    },
    sparkles: {
      transform: 'translateZ(40px)',
      animation: 'hide 1.4s',
    },
    front: {
      transform: 'translateZ(30px)',
      animation: 'hide .4s, slide-down-z30 .4s ease .4s',
    },
    back: {
      transform: 'translateZ(0px)',
      animation: 'hide .4s, slide-up-z0 .4s ease .4s',
    },
    fill: {
      transform: 'translateZ(-30px)',
    },
    sparkle1: {
      animation: SPARKLES ? 'hide-50-z40-rotate1deg 1s linear 0s infinite' : 'none',
    },
    sparkle2: {
      animation: SPARKLES ? 'hide-50-z40-rotate1deg 1s linear -.3s infinite' : 'none',
    },
    sparkle3: {
      animation: SPARKLES ? 'hide-50-z40-rotate1deg 1s linear -.7s infinite' : 'none',
    },
    blueSvg: {
      animation: 'hide .6s, slide-forwards-zn30 1s ease .6s, hoverz-forwards-zn30 4s ease 1.6s infinite',
    },
    redSvg: {
      animation: 'hide .6s, slide-backwards-zn30 1s ease .6s, hoverz-backwards-zn30 4s ease 1.6s infinite',
    },
    cursor: {
      animation: CURSOR ? 'hide .4s, slide-down-z30 .4s ease .4s, hoverz-forwards-z30 3s ease .8s infinite' : 'hide .4s, slide-down-z30 .4s ease .4s',
    },
    cursorHighlight: {
      animation: CURSOR ? 'hide 1.2s, flash-25 3s ease 1.2s infinite' : 'hide .4s, slide-down-z30 .4s ease .4s',
      transform: CURSOR ? 'translateZ(0px)' : 'translateZ(30px)',
    },
    pen: {
      animation: PEN ? 'hide .4s, slide-up-z0 .4s ease .4s, rotatez-z30 3s ease .8s infinite' : 'hide .4s, slide-up-z0 .4s ease .4s',
    },
  }),
);

export default useStyles;
