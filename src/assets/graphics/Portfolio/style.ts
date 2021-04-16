import {
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core/styles';

import { parallax } from '../styles';

const SPARKLES = true;

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
    inset: {
      transform: 'translateZ(-20px)',
      animation: 'hide .6s, slide-forwards-zn20 .5s ease .6s',
    },
    furtherInset: {
      transform: 'translateZ(-50px)',
      animation: 'hide .8s, slide-forwards-zn50 .5s ease .8s',
    },
    smallInset: {
      transform: 'translateZ(-5px)',
      animation: 'hide .6s, slide-forwards-zn5 .5s ease .6s',
    },
    squiggles: {
      transform: 'translateZ(10px)',
      animation: 'hide 1s, slide-down-z10 .6s ease 1s, hovery-z10 1s ease 1.6s infinite',
    },
    sparkles: {
      transform: 'translateZ(20px)',
      animation: 'hide 1s, slide-down-z20 .8s ease 1s',
    },
    sparkle1: {
      animation: SPARKLES ? 'hide-50-z20-rotate1deg 1s linear 0s infinite' : 'none',
    },
    sparkle2: {
      animation: SPARKLES ? 'hide-50-z20-rotate1deg 1s linear -.3s infinite' : 'none',
    },
    sparkle3: {
      animation: SPARKLES ? 'hide-50-z20-rotate1deg 1s linear -.7s infinite' : 'none',
    },
    back: {
      animation: 'hide .4s, slide-up-z0 .4s ease .4s',
    },
    goop1: {
      animation: 'hide .6s, slide-forwards-zn20 .5s ease .6s, hoverz-backwards-zn20 2s ease 1.1s infinite',
    },
    goop2: {
      animation: 'hide .6s, slide-forwards-zn20 .5s ease .6s, hoverz-backwards-zn20 2s ease 2.1s infinite',
    },
  }),
);

export default useStyles;
