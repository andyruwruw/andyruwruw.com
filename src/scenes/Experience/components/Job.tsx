import React from 'react';

import Divider from '../../../components/ui/divider/Divider';
import { IJob } from '../../../config/jobs';
import { getDate } from '../../../helpers/index';
import useStyles from './style';

interface JobProps {
  job: IJob,
  index: number,
}

export default function Job(props: JobProps) {
  const classes = useStyles();

  let style = {
    '--index': props.index,
  } as React.CSSProperties;

  return (
    <div
      className={classes.root}
      style={style}>
      

      <h1 className={classes.title}>
        { props.job.title }
      </h1>

      <a
        className={classes.link}
        href={props.job.link}
        target="_blank"
        rel="noreferrer">
        <h2 className={classes.company}>
          { props.job.company }
        </h2>
      </a>

      <p className={classes.date}>
        {getDate(props.job.start)} - {props.job.end < (new Date()).getTime() ? getDate(props.job.end) : 'Current'}
      </p>

      <Divider
        delay={props.index}
        single={true} />

      {props.job.description.map((p) => (
        <div className={classes.descriptionWrapper}>
          <svg
            className={classes.dot}
            height="4"
            width="4">
            <circle
              cx="2"
              cy="2"
              r="2"
              fill="currentColor" />
          </svg>

          <p className={classes.description}>
            { p }
          </p>
        </div>
      ))}
    </div>
  );
};