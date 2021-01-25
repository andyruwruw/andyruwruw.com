import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import Divider from '../../../../components/ui/divider/Divider';
import IntroGraphic from '../../../../assets/graphics/Intro';
import { SectionProps } from '../../index';

import useStyles from './style';

export default function Intro(props: SectionProps) {
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
              ANDREW YOUNG
            </h1>

            <Divider />

            <h2 className={classes.subTitle}>
              fullstack developer /
            </h2>

            <h2 className={classes.subTitleSecond}>
              undergrad student.
            </h2>
          </div>
        }

        <div className={classes.graphicWrapper}>
          {inView &&
            <IntroGraphic />
          }
        </div>
      </div>
    </div>
  );
}