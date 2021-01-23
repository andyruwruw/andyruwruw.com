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
      margin: '15rem auto 0',
      marginTop: '',
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
    jobList: {
      display: 'flex',
      alignItems: 'top',
      flexDirection: 'column',
      justifyContent: 'space-between',
      marginTop: '3rem',
    },
    formControl: {
      animation: 'hide .2s, enter-left .2s ease .2s',
      margin: theme.spacing(1),
      minWidth: 200,
      color: 'white',
      fontSize: '16px',
    },
    controls: {
      flexWrap: 'wrap',
      display: 'flex',
      alignItems: 'center',
    },
  }));

export default useStyles;
