import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import Divider from '../../../../components/ui/divider/Divider';
import EductionGraphic from '../../../../assets/graphics/Education';

import useStyles from './style';

interface EducationProps {
  index: number,
  showChange: (index: number, val: boolean) => void,
}

export default function Education(props: EducationProps) {
  const { ref, inView } = useInView({
    threshold: .2,
  });

  useEffect(() => {
    props.showChange(props.index, inView);
  }, [inView]);

  const classes = useStyles();

  return (
    <div
      ref={ref}
      className={classes.root}>
      <div className={classes.wrapper}>
        {inView &&
          <div className={classes.content}>
            <h1 className={classes.title}>
              Undergrad Student
            </h1>

            <Divider />

            <h2 className={classes.subTitle}>
              b.s. in computer science
            </h2>

            <h2 className={classes.subTitleSecond}>
              brigham young university
            </h2>
          </div>
        }

        <div className={classes.graphicWrapper}>
          {inView &&
            <EductionGraphic />
          }
        </div>
      </div>
    </div>
  );
}