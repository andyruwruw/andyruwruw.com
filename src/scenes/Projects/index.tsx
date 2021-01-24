import React from 'react';
import { Tooltip } from '@material-ui/core';
import { Link } from "react-router-dom";

import { projects, IProject } from '../../config/index';
import BackIcon from '../../assets/icons/back.svg';
import Project from './components/Project/Project';

import useStyles from './style';

export default function Projects() {
  const classes = useStyles();

  const [topic, setTopic] = React.useState('All');
  const [tool, setTool] = React.useState('All');

  const topics = Array.from(new Set(projects.map( (project) => project.topics ).flat(1)));
  topics.push('All');
  topics.sort();

  const tools = Array.from(new Set(projects.map( (project) => project.tools ).flat(1)));
  tools.push('All');
  tools.sort();

  let filteredProjects: IProject[];
  if (topic !== 'All') {
    filteredProjects = projects.filter((project) => project.topics.includes(topic));
  } else if (tool !== 'All') {
    filteredProjects = projects.filter((project) => project.tools.includes(tool));
  } else {
    filteredProjects = projects;
  }

  const [reload, setReload] = React.useState(false);

  const handleTopicChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setReload(true);

    setTopic(event.target.value as string);
    setTool('All');

    setTimeout(() => {
      setReload(false);
    }, 10);
  };

  const handleToolChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setReload(true);

    setTopic('All');
    setTool(event.target.value as string);

    setTimeout(() => {
      setReload(false);
    }, 10);
  };

  const reactProjects = projects.filter((project) => project.tools.includes('React.js'));

  const vueProjects = projects.filter((project) => project.tools.includes('Vue.js'));

  const npmProjects = projects.filter((project) => project.tools.includes('npm'));

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

      <h1 className={classes.title}>
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
      ))}
    </div>
  );
}
