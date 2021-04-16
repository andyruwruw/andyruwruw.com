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
      fontSize: '2.5rem',
      color: 'white',
      textDecoration: 'none',
      fontFamily: '\'Josefin Sans\', sans-serif',
      lineHeight: '40px',
      [theme.breakpoints.between('xs', 625)]: {
        fontSize: '1.5rem',
        lineHeight: '30px',
      },
    },
    spotifyLink: {
      [theme.breakpoints.between('xs', 625)]: {
        display: 'none',
      },
    },
    iconWrapper: {
      display: 'flex',
    },
    icon: {
      display: 'block',
      width: '4rem',
      height: '4rem',
      marginLeft: '2rem',
      [theme.breakpoints.between('xs', 625)]: {
        width: '2.5rem',
        height: '2.5rem',
      },
    },
    toolBar: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '3rem',
      width: 'calc(100% - 6rem)',
      maxWidth: '150rem',
      margin: '0 auto',
    },
  }),
);

export default useStyles;
