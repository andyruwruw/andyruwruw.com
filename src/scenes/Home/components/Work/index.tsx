import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from "react-router-dom";

import Divider from '../../../../components/ui/divider/Divider';
import WorkGraphic from '../../../../assets/graphics/Work';
import { SectionProps } from '../../index';

import useStyles from './style';

export default function Work(props: SectionProps) {
  const { ref, inView } = useInView({
    threshold: .2,
  });

  useEffect(() => {
    props.showChange(props.index, inView);
  }, [inView]);

  const classes = useStyles();

  return (
    <div
      id="work-section"
      ref={ref}
      className={classes.root}>
      <div className={classes.wrapper}>
        {inView &&
          <div className={classes.content}>
            <h1 className={classes.title}>
              Work Experience
            </h1>

            <Divider />

            <h2 className={classes.subTitle}>
              software engineer intern - adobe
            </h2>

            <h2 className={classes.subTitleSecond}>
              frontend dev intern - chess.com
            </h2>

            <button className={classes.button}>
              <Link
                className="link"
                to="/experience">
                See More
              </Link>
            </button>
          </div>
        }
        <div className={classes.graphicWrapper}>
          {inView &&
            <WorkGraphic />
          }
        </div>
      </div>
    </div>
  );
}