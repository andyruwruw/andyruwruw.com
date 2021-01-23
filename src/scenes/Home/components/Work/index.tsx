import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from "react-router-dom";

import Divider from '../../../../components/ui/divider/Divider';
import WorkGraphic from '../../../../assets/graphics/Work';

import useStyles from './style';

interface WorkProps {
  index: number,
  showChange: (index: number, val: boolean) => void,
}

export default function Work(props: WorkProps) {
  const { ref, inView } = useInView({
    threshold: .2,
  });

  useEffect(() => {
    props.showChange(props.index, inView);
  }, [inView]);

  const classes = useStyles();

  return (
    <div ref={ref} className={classes.root}>
      <div className={classes.wrapper}>
        {inView &&
          <div className={classes.content}>
            <h1 className={classes.title}>
              Work Experience
            </h1>

            <Divider />

            <h2 className={classes.subTitle}>
              frontend developer for chess.com
            </h2>

            <h2 className={classes.subTitleSecond}>
              web development teacher's assistant
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