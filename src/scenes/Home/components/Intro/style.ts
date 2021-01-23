import {
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core/styles';

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
      [theme.breakpoints.between('xs', 625)]: {
        fontSize: '6rem',
      },
      [theme.breakpoints.between(625, 990)]: {
        fontSize: '8rem',
      },
      [theme.breakpoints.between(990, 1600)]: {
        fontSize: '10rem',
      },
      [theme.breakpoints.between(1600, 'xl')]: {
        fontSize: '12rem',
      },
    },
    subTitle: {
      animation: 'hide .4s, enter-left .3s ease .4s',
      [theme.breakpoints.between('xs', 625)]: {
        fontSize: '2rem',
      },
      [theme.breakpoints.between(625, 'md')]: {
        fontSize: '2.4rem',
      },
      [theme.breakpoints.between('md', 'xl')]: {
        fontSize: '2.8rem',
      },
    },
    subTitleSecond: {
      animation: 'hide .5s, enter-left .3s ease .5s',
      [theme.breakpoints.between('xs', 625)]: {
        fontSize: '2rem',
      },
      [theme.breakpoints.between(625, 'md')]: {
        fontSize: '2.4rem',
      },
      [theme.breakpoints.between('md', 'xl')]: {
        fontSize: '2.8rem',
      },
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
      [theme.breakpoints.between('xs', 625)]: {
        width: '100%',
        marginTop: 'calc(100vw * .75)',
        maxWidth: '90rem',
      },
      [theme.breakpoints.between(625, 900)]: {
        width: '100%',
        marginTop: 'calc(100vw * .6)',
        maxWidth: '90rem',
      },
      [theme.breakpoints.between(900, 'lg')]: {
        width: '100%',
        marginTop: 'calc(100vw * .4)',
        maxWidth: '90rem',
      },
      [theme.breakpoints.between('lg', 'xl')]: {
        width: '40%',
        marginTop: '0px',
      },
      alignSelf: 'center',
    },
    graphicWrapper: {
      display: 'block',
      position: 'relative',
      [theme.breakpoints.between('xs', 625)]: {
        alignSelf: 'center',
        width: '75%',
        marginTop: '6rem',
      },
      [theme.breakpoints.between(625, 900)]: {
        alignSelf: 'center',
        width: '60%',
        marginTop: '4rem',
      },
      [theme.breakpoints.between(900, 'lg')]: {
        alignSelf: 'center',
        width: '40%',
        marginTop: '4rem',
      },
      [theme.breakpoints.between('lg', 2000)]: {
        alignSelf: 'flex-start',
        marginTop: 'calc((100vh - 45%) / 2)',
        width: '45%',
      },
      [theme.breakpoints.between(2000, 'xl')]: {
        alignSelf: 'flex-start',
        marginTop: 'calc((100vh - 55%) / 2)',
        width: '55%',
      },
    },
  }),
);

export default useStyles;