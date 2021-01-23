import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import React from 'react';

import Divider from '../../components/ui/divider/Divider';
import { IJob, jobs } from '../../config/index';
import Job from './components/Job';

import useStyles from './style';

export default function Experience() {
  const classes = useStyles();

  const [topic, setTopic] = React.useState('Coding');
  const [type, setType] = React.useState('All');
  
  const skills = Array.from(new Set(jobs.map( (job) => job.topics ).flat(1)));
  skills.push('All');
  skills.sort();

  const types = Array.from(new Set(jobs.map( (job) => job.type )));
  types.push('All');
  types.sort();

  let filteredJobs: IJob[];
  if (type === 'All') {
    filteredJobs = jobs.filter((job) => job.topics.includes(topic));
  } else {
    filteredJobs = jobs.filter((job) => job.type === type);
  }

  const [reload, setReload] = React.useState(false);

  const handleTopicChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setReload(true);

    setTopic(event.target.value as string);
    setType('All');

    setTimeout(() => {
      setReload(false);
    }, 10);
  };

  const handleTypeChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setReload(true);

    setTopic('All');
    setType(event.target.value as string);

    setTimeout(() => {
      setReload(false);
    }, 10);
  };

  return (
    <div className={classes.root}>
      <h1 className={classes.title}>
        Work Experience
      </h1>

      <span className={classes.mainDivider} />

      <div className={classes.controls}>
        <FormControl
          className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">
            Filter by Topic
          </InputLabel>

          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={topic}
            onChange={handleTopicChange}>
            {skills.map((skill) => (
              <MenuItem value={skill}>{skill}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl
          className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">
            Filter by Type
          </InputLabel>

          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={type}
            onChange={handleTypeChange}>
            {types.map((type) => (
              <MenuItem value={type}>{type}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      {!reload &&
        <div className={classes.jobList}>
          {filteredJobs.map((job, index) => (
            <div id={`job-${job.start}`}>
              <Job
                job={job}
                index={index} />
            </div>
          ))}
        </div>
      }
    </div>
  );
};