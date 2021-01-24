import {
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
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
    },
  }),
);

export default useStyles;
