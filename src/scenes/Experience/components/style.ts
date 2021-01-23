import {
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '--index': 0,
      width: 'calc(100% - 2rem)',
      minWidth: '400px',
      margin: '3rem 0',
    },
    header: {
      borderRadius: '.8rem',
      margin: '1rem 0',
    },
    title: {
      animation: 'hide calc((var(--index) * .1s) + .2s), enter-left .2s ease calc((var(--index) * .1s) + .2s)',
      [theme.breakpoints.between('xs', 625)]: {
        fontSize: '3rem',
      },
      [theme.breakpoints.between(625, 990)]: {
        fontSize: '3rem',
      },
      [theme.breakpoints.between(990, 1600)]: {
        fontSize: '3rem',
      },
      [theme.breakpoints.between(1600, 'xl')]: {
        fontSize: '4rem',
      },
    },
    company: {
      animation: 'hide calc((var(--index) * .1s) + .3s), enter-left .2s ease calc((var(--index) * .1s) + .3s)',
      color: 'rgb(240, 240, 240, .8)',
      margin: '.5rem 0 .5rem .3rem',
      [theme.breakpoints.between('xs', 625)]: {
        fontSize: '2rem',
      },
      [theme.breakpoints.between(625, 990)]: {
        fontSize: '2rem',
      },
      [theme.breakpoints.between(990, 1600)]: {
        fontSize: '2rem',
      },
      [theme.breakpoints.between(1600, 'xl')]: {
        fontSize: '2rem',
      },
    },
    date: {
      animation: 'hide calc((var(--index) * .1s) + .3s), enter-left .2s ease calc((var(--index) * .1s) + .3s)',
      color: 'rgb(240, 240, 240, .3)',
      margin: '.5rem 0 .5rem .3rem',
      [theme.breakpoints.between('xs', 625)]: {
        fontSize: '2rem',
      },
      [theme.breakpoints.between(625, 990)]: {
        fontSize: '2rem',
      },
      [theme.breakpoints.between(990, 1600)]: {
        fontSize: '2rem',
      },
      [theme.breakpoints.between(1600, 'xl')]: {
        fontSize: '2rem',
      },
    },
    descriptionWrapper: {
      animation: 'hide calc((var(--index) * .1s) + .4s), enter-left .2s ease calc((var(--index) * .1s) + .4s)',
      color: 'rgba(255, 255, 255, 0.7)',
      display: 'flex',
    },
    dot: {
      marginTop: '1.6rem',
    },
    description: {
      marginLeft: '.8rem',
      [theme.breakpoints.between('xs', 625)]: {
        fontSize: '1.5rem',
      },
      [theme.breakpoints.between(625, 990)]: {
        fontSize: '2rem',
      },
      [theme.breakpoints.between(990, 1600)]: {
        fontSize: '2rem',
      },
      [theme.breakpoints.between(1600, 'xl')]: {
        fontSize: '2rem',
      },
    },
    link: {
      cursor: 'pointer',
      textDecoration: 'none',
    },
  }));

export default useStyles;
