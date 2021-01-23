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
