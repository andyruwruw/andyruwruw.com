import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

import Divider from '../../../../components/ui/divider/Divider';
import PortfolioGraphic from '../../../../assets/graphics/Portfolio';
import { SectionProps } from '../../index';

import useStyles from './style';

export default function Projects(props: SectionProps) {
  const { ref, inView } = useInView({
    threshold: .2,
  });

  useEffect(() => {
    props.showChange(props.index, inView);
  }, [inView]);

  const classes = useStyles();

  return (
    <div
      id="projects-section"
      ref={ref}
      className={classes.root}>
      <div className={classes.wrapper}>
        {inView &&
          <div className={classes.content}>
            <h1 className={classes.title}>
              My Portfolio
            </h1>

            <Divider />

            <h2 className={classes.subTitle}>
              i'm a bit of a passion
            </h2>

            <h2 className={classes.subTitleSecond}>
              project workaholic.
            </h2>

            <button className={classes.button}>
              <Link
                className="link"
                to="/projects">
                See More
              </Link>
            </button>
          </div>
        }

        <div className={classes.graphicWrapper}>
          {inView &&
            <PortfolioGraphic />
          }
        </div>
      </div>
    </div>
  );
}