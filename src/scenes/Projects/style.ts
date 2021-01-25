import {
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 'calc(100% - 4rem)',
      maxWidth: '150rem',
      margin: '10rem auto 0',
      paddingBottom: '3rem',
    },
    mainDivider: {
      animation: 'hide .4s, enter-left .4s ease .4s',
      display: 'block',
      margin: '1rem 0 2rem',
      width: '100%',
      height: '.4rem',
      borderRadius: '.5rem',
      background: '#ff4d5a',
    },
    headerWrapper: {
      display: 'flex',
      alignItems:'center',
      justifyContent: 'space-between',
      marginTop: '3rem',
      flexWrap: 'wrap',
    },
    back: {},
    backIcon: {
      display: 'block',
      width: '6rem',
      height: '6rem',
      marginBottom: '1rem',
      marginRight: '1rem',
      transition: 'all .2s ease',
      [theme.breakpoints.between('xs', 625)]: {
        width: '3rem',
        height: '3rem',
      },
      [theme.breakpoints.between(625, 1600)]: {
        width: '4rem',
        height: '4rem',
      },
      '&:hover': {
        opacity: .6,
        transform: 'scale(1.1, 1.1)',
      },
    },
    title: {
      animation: 'hide .2s, enter-left .2s ease .2s',
      [theme.breakpoints.between('xs', 625)]: {
        fontSize: '4rem',
      },
      [theme.breakpoints.between(625, 990)]: {
        fontSize: '6rem',
      },
      [theme.breakpoints.between(990, 1600)]: {
        fontSize: '6rem',
      },
      [theme.breakpoints.between(1600, 'xl')]: {
        fontSize: '8rem',
      },
    },
    formControl: {
      animation: 'hide .2s, enter-left .2s ease .2s',
      margin: theme.spacing(1),
      minWidth: 120,
      width: 'calc(40vw - 2rem)',
      maxWidth: 200,
      color: 'white',
      fontSize: '16px',
    },
    controls: {
      flexWrap: 'wrap',
      display: 'flex',
      alignItems: 'center',
    },
    projectWrapper: {
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginBottom: '2rem',
    },
  }));

export default useStyles;
