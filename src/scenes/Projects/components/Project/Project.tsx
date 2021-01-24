import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Tilt from 'react-parallax-tilt';

import { IProject } from '../../../../config/index';

import useStyles from './style';

interface ProjectProps {
  index: number,
  project: IProject,
}

export default function Project(props: ProjectProps) {
  const classes = useStyles();

  const rootStyle: React.CSSProperties = {
    backgroundImage: `url('https://raw.githubusercontent.com/andyruwruw/andyruwruw.com/master/src/assets/images/${props.project.image}.png')`,
  };

  return (
    <div
      className={classes.root}
      style={rootStyle}>
    </div>
  );
}
