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
      height: '100vh',
      scrollSnapAlign: 'center',
      width: '100vw',
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
      maxWidth: '150rem',
      width: '90%',
      [theme.breakpoints.between('xs', 'lg')]: {
        flexDirection: 'column-reverse',
        justifyContent: 'flex-end',
      },
      [theme.breakpoints.between('lg', 'xl')]: {
        flexDirection: 'row',
      },
    },
    content: {
      [theme.breakpoints.between('xs', 625)]: {
        marginTop: 'calc(100vw * .7)',
        maxWidth: '90rem',
        width: '100%',
      },
      [theme.breakpoints.between(625, 900)]: {
        marginTop: 'calc(100vw * .5)',
        maxWidth: '90rem',
        width: '100%',
      },
      [theme.breakpoints.between(900, 'lg')]: {
        marginTop: 'calc(100vw * .35)',
        maxWidth: '90rem',
        width: '100%',
      },
      [theme.breakpoints.between('lg', 'xl')]: {
        marginTop: '0px',
        width: '40%',
      },
      alignSelf: 'center',
    },
    graphicWrapper: {
      display: 'block',
      position: 'relative',
      [theme.breakpoints.between('xs', 625)]: {
        alignSelf: 'center',
        marginTop: '6rem',
        width: '75%',
      },
      [theme.breakpoints.between(625, 900)]: {
        alignSelf: 'center',
        marginTop: '4rem',
        width: '60%',
      },
      [theme.breakpoints.between(900, 'lg')]: {
        alignSelf: 'center',
        marginTop: '4rem',
        width: '40%',
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
    button: {
      animation: 'hide .3s, enter-left .2s ease .3s',
    },
  }),
);

export default useStyles;