import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import Divider from '../../../../components/ui/divider/Divider';
import SkillsGraphic from '../../../../assets/graphics/Skills';
import { SectionProps } from '../../index';

import useStyles from './style';

export default function Skills(props: SectionProps) {
  const { index, showChange } = props;
  const { ref, inView } = useInView({
    threshold: .2,
  });

  useEffect(() => {
    showChange(index, inView);
  }, [inView]);

  const classes = useStyles();

  return (
    <div
      id="skills-section"
      ref={ref}
      className={classes.root}>
      <div className={classes.wrapper}>
        {inView &&
          <div className={classes.content}>
            <h1 className={classes.title}>
              My Skills
            </h1>

            <Divider />

            <h2 className={classes.subTitle}>
              i'm a vue.js fanboy,
            </h2>

            <h2 className={classes.subTitle}>
              but i do some other stuff too.
            </h2>

            <button className={classes.button}>
              See Skills (Coming Soon)
            </button>
          </div>
        }

        <div className={classes.graphicWrapper}>
          {inView &&
            <SkillsGraphic />
          }
        </div>
      </div>
    </div>
  );
}