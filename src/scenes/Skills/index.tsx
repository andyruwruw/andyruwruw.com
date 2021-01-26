import React from 'react';
import { Link } from "react-router-dom";

import { skills, ISkill } from '../../config/index';
import BackIcon from '../../assets/icons/back.svg';
import Icon from '../../assets/skills/Icon';
import { paths } from '../../assets/skills/index';

import useStyles from './style';

export default function Skills() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Link
        className={classes.back}
        to="/?page=skills">
        <img
          className={classes.backIcon}
          src={BackIcon}/>
      </Link>

      <div className={classes.headerWrapper}>
        <h1 className={classes.title}>
          Skills
        </h1>
      </div>

      <span className={classes.mainDivider} />

      {skills.map((skill) => (
        <p>skill</p>
      ))}
    </div>
  );
}
