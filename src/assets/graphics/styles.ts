import { Theme } from '@material-ui/core/styles';

export const parallax = (theme: Theme) => ({
  display: 'block',
  pointerEvents: 'none' as 'none',
  position: 'relative' as 'relative', // WHY.
  transformStyle: 'preserve-3d' as 'preserve-3d',
  [theme.breakpoints.between('xs', 625)]: {
    height: '60vw',
    width: '60vw',
  },
  [theme.breakpoints.between(625, 1200)]: {
    height: '300px',
    width: '300px',
  },
  [theme.breakpoints.between(1200, 'lg')]: {
    height: '400px',
    width: '400px',
  },
  [theme.breakpoints.between('lg', 2000)]: {
    height: '400px',
    width: '400px',
  },
  [theme.breakpoints.up(2000)]: {
    height: '500px',
    width: '500px',
  },
});
