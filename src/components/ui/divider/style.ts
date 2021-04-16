import {
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '--delay': 0,
      padding: '1rem .5rem',
      [theme.breakpoints.down(1200)]: {
        display: 'none',
      },
    },
    line: {
      display: 'block',
      width: '8.8rem',
      height: '.4rem',
      borderRadius: '.5rem',
      background: '#ff4d5a',
    },
    first: {
      marginLeft: '0',
      animation: 'hide calc(var(--delay) * .1s), enter-left .3s ease calc(var(--delay) * .1s)',
    },
    second: {
      marginTop: '1.5rem',
      marginLeft: '5.4rem',
      animation: 'hide calc((var(--delay) * .1s) + .1s), enter-left .3s ease calc((var(--delay) * .1s) + .1s)',
    },
  }),
);

export default useStyles;
