import {
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: '0',
    },
    title: {
      display: 'block',
      margin: '0 auto',
      color: 'white',
      textAlign: 'center',
      fontSize: '2rem',
      fontFamily: '\'Ubuntu\', sans-serif',
    },
    wrapper: {
      '--index': 0,
      animation: 'hide calc((var(--index) * .1s) + .2s), enter-left .2s ease calc((var(--index) * .1s) + .2s)',
      width: '30rem',
      height: '30rem',
      margin: '1rem',
      maxWidth: 'calc(100vw - 2rem)',
      maxHeight: 'calc(100vw - 2rem)',
      backgroundSize: 'auto 110%',
      backgroundPosition: 'center',
      display: 'flex',
      justifyContent: 'center',
      boxShadow: '4px 4px 4px #00000044',
      overflow: 'hidden',
      transition: 'background-size .3s ease',
      '&:hover': {
        backgroundSize: 'auto 115%',
      },
    },
    button: {
      marginTop: '1.5rem',
      fontSize: '1.5rem',
      animation: 'hide .3s, enter-left .2s ease .3s',
    },
    content: {
      opacity: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      background: '#000000B0',
      transition: 'opacity .3s ease',
      cursor: 'pointer',
      '&:hover': {
        opacity: '100%',
      },
    },
  }),
);

export default useStyles;
