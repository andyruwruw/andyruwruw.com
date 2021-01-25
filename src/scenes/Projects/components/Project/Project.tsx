import React from 'react';


import { IProject } from '../../../../config/index';

import useStyles from './style';

interface ProjectProps {
  index: number,
  project: IProject,
  handleClick: Function,
}

export default function Project(props: ProjectProps) {
  const classes = useStyles();

  const contentStyle: React.CSSProperties = {
    backgroundImage: `url('https://raw.githubusercontent.com/andyruwruw/andyruwruw.com/master/src/assets/images/${props.project.image}.png')`,
  };

  function openDetails() {
    props.handleClick(props.project);
  }

  return (
    <div
      className={classes.root}
      onClick={openDetails}>
      <div
        className={classes.wrapper}
        style={contentStyle}>
        <div className={classes.content}>
          <span className={classes.title}>
            { props.project.title }
          </span>

          <button className={classes.button}>
            Click for Details
          </button>
        </div>
      </div>
    </div>
  );
}
