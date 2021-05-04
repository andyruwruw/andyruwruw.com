import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import Divider from '../../../../components/ui/divider/Divider';
import ContactGraphic from '../../../../assets/graphics/Contact';
import { SectionProps } from '../../index';

import useStyles from './style';

export default function Education(props: SectionProps) {
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
              Contact Me
            </h1>

            <Divider />

            <h2 className={classes.subTitle}>
              andrew@youngshome.com
            </h2>
          </div>
        }

        <div className={classes.graphicWrapper}>
          {inView &&
            <ContactGraphic />
          }
        </div>
      </div>
    </div>
  );
}
