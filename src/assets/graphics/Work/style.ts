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
    handRight: {
      transform: 'translateZ(50px)',
      animation: 'hide .2s, slide-backwards-z50 1s ease .2s, hoverz-backwards-z50 1s ease 1.2s infinite',
    },
    handLeft: {
      transform: 'translateZ(50px)',
      animation: 'hide .2s, slide-backwards-z50 1s ease .2s, hoverz-backwards-z50 1s ease 1.7s infinite',
    },
    radialRed: {
      transform: 'translateZ(30px)',
      animation: 'hide .2s, slide-forwards-z30 1s ease .2s, hoverz-forwards-z30 4s ease 1.2s infinite',
    },
    radialBlue: {
      transform: 'translateZ(30px)',
      animation: 'hide .2s, slide-backwards-z30 1s ease .2s, hoverz-backwards-z30 4s ease 1.2s infinite',
    },
    face: {
      transform: 'translateZ(30px)',
    },
    top: {
      transform: 'translateZ(10px)',
      animation: 'slide-down-z10 1.2s ease',
    },
    back: {
      transform: 'translateZ(0px)',
      animation: 'slide-up-z0 1.2s ease',
    },
    behind: {
      transform: 'translateZ(-30px)',
    },
    sparkles: {
      transform: 'translateZ(-40px)',
      animation: 'slide-up-zn40 1.2s ease, hovery-zn40 2s ease 1.2s infinite',
    },
    front: {
      transform: 'translateZ(30px)',
      animation: 'hide .4s, slide-down-z30 .4s ease .4s',
    },
    bar: {
      animation: 'hide .4s, slide-backwards-zn30 .6s ease .4s',
    },
    barInside: {
      animation: 'hide .4s, slide-backwards-zn30 .6s ease .4s, stretchx-zn30 5s linear 1s infinite',
    },
  }),
);

export default useStyles;
