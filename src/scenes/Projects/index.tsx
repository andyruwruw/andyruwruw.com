import React from 'react';
import { Tooltip } from '@material-ui/core';
import { Link } from "react-router-dom";

import { projects, IProject } from '../../config/index';
import BackIcon from '../../assets/icons/back.svg';
import Project from './components/Project/Project';
import ProjectDialoge from './components/ProjectDialoge/ProjectDialoge';

import useStyles from './style';

export default function Projects() {
  const classes = useStyles();

  const [project, setProject] = React.useState<IProject | null>(null);
  const [open, setOpen] = React.useState<boolean>(false);

  const handleClose = () => {
    setOpen(false);
  };

  function handleClick(value: IProject) {
    setOpen(true);
    setProject(value);
  }

  return (
    <div className={classes.root}>
      <Tooltip title="Back Home">
        <Link
          className={classes.back}
          to="/">
          <img
            className={classes.backIcon}
            src={BackIcon}/>
        </Link>
      </Tooltip>

      <div className={classes.headerWrapper}>
        <h1 className={classes.title}>
          Projects
        </h1>
      </div>

      <span className={classes.mainDivider} />

      <div className={classes.projectWrapper}>
        {projects.map((project, index) => (
          <Project
            key={project.title}
            project={project}
            index={index}
            handleClick={handleClick} />
        ))}
      </div>

      <ProjectDialoge
        open={open}
        project={project}
        handleClose={handleClose}/>
    </div>
  );
}
