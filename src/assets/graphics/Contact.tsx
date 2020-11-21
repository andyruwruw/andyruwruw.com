import {
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core/styles';
import React from 'react';
import Tilt from 'react-parallax-tilt';

const SPARKLES = true;
  
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    parallax: {
      pointerEvents: 'none',
      transformStyle: 'preserve-3d',
      position: 'relative',
    },
    svg: {
      position: 'absolute',
    },
    white: {
      fill: '#ffffff',
    },
    red: {
      fill: '#ff5777',
    },
    blue: {
      fill: '#1faaff',
    },
  }),
);
  
export default function ContactGraphic() {
  const classes = useStyles();
  
  return (
    <Tilt
      className={classes.parallax}
      perspective={1000}
      transitionSpeed={50}
      tiltMaxAngleX={5}
      tiltMaxAngleY={5}
      scale={1.02}
      trackOnWindow={true}>

    </Tilt>
  )
}


