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
      fontSize: '1.5rem',
    },
    wip: {
      marginLeft: '1.6rem',
    },
    button: {
      fontSize: '1.6rem',
      padding: '.8rem 1.7rem',
      minWidth: '10rem',
      marginLeft: '2rem !important',
      transition: 'background .2s ease',
      border: 'none',
      '&:hover': {
        background: '#ffffff22',
      },
    },
    bold: {
      fontWeight: 500,
      color: '#ff828b',
    },
    image: {
      width: '100%',
      minWidth: '568px',
      height: '25rem',
      backgroundSize: '101% auto',
      backgroundPosition: 'center center',
    },
    subheader: {
      fontSize: '1.5rem',
      color: '#ffffff60',
      textTransform: 'uppercase',
      fontWeight: 500,
      margin: '2rem 0rem .5rem',
    },
    toolsWrapper: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        marginRight: theme.spacing(1),
        marginBottom: theme.spacing(1),
      },
    },
    tools: {
      fontSize: '.2rem !important',
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
