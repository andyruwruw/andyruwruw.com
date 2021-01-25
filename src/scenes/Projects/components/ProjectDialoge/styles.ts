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
    description: {
      fontSize: '1.8rem',
    },
    button: {
      fontSize: '1.4rem',
      padding: '.7rem 1.7rem',
      minWidth: '10rem',
      marginLeft: '2rem !important',
      transition: 'background .2s ease',
      border: 'none',
      '&:hover': {
        background: '#ffffff22',
      },
    },
    image: {
      width: '100%',
      height: '20rem',
      backgroundSize: 'auto 100%',
    },
    link: {
      color: '#ffffff',
      background: '#ff4d5a',
      '&:hover': {
        background: '#c43b45',
      },
    },
  }),
);

export default useStyles;
