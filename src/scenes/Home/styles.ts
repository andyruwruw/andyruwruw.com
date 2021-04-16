import {
  Theme,
} from '@material-ui/core/styles';

export const root = {
  display: 'flex',
  justifyContent: 'center',
  height: '100vh',
  scrollSnapAlign: 'center',
  width: '100vw',
};

export const title = (theme: Theme) => ({
  animation: 'hide .2s, enter-left .2s ease .2s',
  [theme.breakpoints.between('xs', 625)]: {
    fontSize: '5rem',
  },
  [theme.breakpoints.between(625, 1200)]: {
    fontSize: '6rem',
  },
  [theme.breakpoints.down(1200)]: {
    textAlign: 'center',
  },
  [theme.breakpoints.between(1200, 1600)]: {
    fontSize: '8rem',
  },
  [theme.breakpoints.up(1600)]: {
    fontSize: '10rem',
  },
});

export const subTitle = (theme: Theme) => ({
  animation: 'hide .4s, enter-left .3s ease .4s',
  [theme.breakpoints.between('xs', 625)]: {
    fontSize: '2rem',
  },
  [theme.breakpoints.down(1200)]: {
    textAlign: 'center',
  },
  [theme.breakpoints.between(625, 1200)]: {
    fontSize: '2.2rem',
  },
  [theme.breakpoints.up(1200)]: {
    fontSize: '2.4rem',
  },
});

export const subTitleSecond = (theme: Theme) => ({
  animation: 'hide .5s, enter-left .3s ease .5s',
  [theme.breakpoints.between('xs', 625)]: {
    fontSize: '2rem',
  },
  [theme.breakpoints.down(1200)]: {
    textAlign: 'center',
  },
  [theme.breakpoints.between(625, 1200)]: {
    fontSize: '2.2rem',
  },
  [theme.breakpoints.up(1200)]: {
    fontSize: '2.4rem',
  },
});

export const wrapper = (theme: Theme) => ({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  maxWidth: '125rem',
  width: 'calc(100% - 4rem)',
  [theme.breakpoints.between('xs', 1200)]: {
    flexDirection: 'column-reverse',
    justifyContent: 'center',
    alignItems: 'center',
  },
  [theme.breakpoints.up(1200)]: {
    flexDirection: 'row',
  },
});

export const content = (theme: Theme) => ({
  [theme.breakpoints.between('xs', 1200)]: {
    width: '100%',
    maxWidth: '50rem',
    marginTop: '6rem',
  },
  [theme.breakpoints.up(1200)]: {
    width: '40%',
    marginTop: '0px',
  },
  alignSelf: 'center',
});

export const graphicWrapper = (theme: Theme) => ({
  alignItems: 'center',
  display: 'flex',
  height: '100%',
  justifyContent: 'center',
  position: 'relative' as 'relative', // Why.
  [theme.breakpoints.between('xs', 625)]: {
    width: '75%',
    height: '275px',
  },
  [theme.breakpoints.between(625, 1200)]: {
    width: '60%',
    height: '300px',
  },
  [theme.breakpoints.down(1200)]: {
    alignSelf: 'center',
  },
  [theme.breakpoints.between(1200, 'lg')]: {
    alignSelf: 'start',
    width: '30%',
  },
  [theme.breakpoints.between('lg', 2000)]: {
    alignSelf: 'start',
    width: '40%',
  },
  [theme.breakpoints.up(2000)]: {
    alignSelf: 'start',
    width: '50%',
  },
});

export const button = (theme: Theme) => ({
  animation: 'hide .3s, enter-left .2s ease .3s',
  marginTop: '2rem',
  [theme.breakpoints.down(1200)]: {
    display: 'block',
    margin: '0 auto',
  },
});
