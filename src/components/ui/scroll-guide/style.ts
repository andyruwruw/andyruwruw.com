import { createStyles } from '@material-ui/core/styles';

const styles = createStyles({
  root: {
    position: 'fixed',
    left: '2rem',
    top: '10rem',
    
    flexDirection: 'column',
    alignItems: 'start',
    height: '100vh',
    display: 'flex',
    animation: 'enter-left .5s ease',
  },
  '@media (max-width: 560px)': {
    root: {
      display: 'none',
    }
  },
  bar: {
    display: 'block',
    width: '3rem',
    height: '.3rem',
    background: 'white',
    marginBottom: '4rem',
    transition: 'all .3s ease',
  },
  active: {
    width: '6rem',
  }
});

export default styles;
