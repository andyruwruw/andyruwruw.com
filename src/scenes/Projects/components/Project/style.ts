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
  }),
);

export default useStyles;
