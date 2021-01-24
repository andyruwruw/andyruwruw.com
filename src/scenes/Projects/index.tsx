import React from 'react';
import { Tooltip } from '@material-ui/core';
import { Link } from "react-router-dom";

import { projects, IProject } from '../../config/index';
import BackIcon from '../../assets/icons/back.svg';
import Project from './components/Project/Project';

import useStyles from './style';

export default function Projects() {
  const classes = useStyles();

  const reactProjects = projects.filter((project) => project.tools.includes('React.js') && project.end );

  const vueProjects = projects.filter((project) => project.tools.includes('Vue.js') && project.end );

  const npmProjects = projects.filter((project) => project.topics.includes('npm') && project.end );

  const notFinished = projects.filter((project) => project.end === 0);

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

      <div className={classes.projectWrapper}>
        {projects.map((project, index) => (
          <Project
            key={project.title}
            project={project}
            index={index} />
        ))}
      </div>

      {/* <h1 className={classes.title}>
        React Projects
      </h1>

      {reactProjects.map((project, index) => (
        <Project
          key={project.title}
          project={project}
          index={index} />
      ))}

      <h1 className={classes.title}>
        Vue.js Projects
      </h1>

      {vueProjects.map((project, index) => (
        <Project
          key={project.title}
          project={project}
          index={index} />
      ))}

      <h1 className={classes.title}>
        NPM Packages
      </h1>

      {npmProjects.map((project, index) => (
        <Project
          key={project.title}
          project={project}
          index={index} />
      ))}

      <h1 className={classes.title}>
        In Progress
      </h1>

      {notFinished.map((project, index) => (
        <Project
          key={project.title}
          project={project}
          index={index} />
      ))} */}
    </div>
  );
}
