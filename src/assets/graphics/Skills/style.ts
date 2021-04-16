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
    redFront: {
      transform: 'translateZ(50px)',
      animation: 'hide .6s, slide-backwards-z50 1s ease .6s, hoverz-forwards-z50 2s ease 1.6s infinite',
    },
    redBack: {
      transform: 'translateZ(-10px)',
      animation: 'hide .8s, slide-forwards-zn10 1s ease .8s, hoverz-forwards-zn10 2s ease 1.8s infinite',
    },
    blueFront: {
      transform: 'translateZ(30px)',
      animation: 'hide .5s, slide-backwards-z30 1s ease .5s, hoverz-forwardslight-z30 2s ease 1.5s infinite',
    },
    blueBack: {
      transform: 'translateZ(-40px)',
      animation: 'hide .5s, slide-forwards-zn40 1s ease .5s, hoverz-forwards-zn40 2s ease 1.5s infinite',
    },
    front: {
      transform: 'translateZ(20px)',
      animation: 'hide .4s, slide-down-z20 .6s ease .4s',
    },
    middle: {
      transform: 'translateZ(0px)',
      animation: 'hide .4s, slide-up-z0 .6s ease .4s',
    },
    back: {
      transform: 'translateZ(-10px)',
      animation: 'hide .4s, slide-up-zn10 .6s ease .4s',
    },
  }),
);

export default useStyles;