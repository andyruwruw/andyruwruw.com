import React, { useEffect } from 'react';
import {
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core/styles';
import { useInView } from 'react-intersection-observer';

import Divider from '../../../../components/ui/divider/Divider';
import WorkGraphic from '../../../../assets/graphics/Work';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      width: '100vw',
      height: '100vh',
      scrollSnapAlign: 'center',
    },
    title: {
      animation: 'hide .2s, enter-left .2s ease .2s',
      [theme.breakpoints.between('xs', 625)]: {
        fontSize: '6rem',
      },
      [theme.breakpoints.between(625, 990)]: {
        fontSize: '8rem',
      },
      [theme.breakpoints.between(990, 1600)]: {
        fontSize: '10rem',
      },
      [theme.breakpoints.between(1600, 'xl')]: {
        fontSize: '12rem',
      },
    },
    subTitle: {
      animation: 'hide .4s, enter-left .3s ease .4s',
      [theme.breakpoints.between('xs', 625)]: {
        fontSize: '2rem',
      },
      [theme.breakpoints.between(625, 'md')]: {
        fontSize: '2.4rem',
      },
      [theme.breakpoints.between('md', 'xl')]: {
        fontSize: '2.8rem',
      },
    },
    subTitleSecond: {
      animation: 'hide .5s, enter-left .3s ease .5s',
      [theme.breakpoints.between('xs', 625)]: {
        fontSize: '2rem',
      },
      [theme.breakpoints.between(625, 'md')]: {
        fontSize: '2.4rem',
      },
      [theme.breakpoints.between('md', 'xl')]: {
        fontSize: '2.8rem',
      },
    },
    wrapper: {
      display: 'flex',
      justifyContent: 'center',
      width: '90%',
      maxWidth: '150rem',
      [theme.breakpoints.between('xs', 'lg')]: {
        justifyContent: 'flex-end',
        flexDirection: 'column-reverse',
      },
      [theme.breakpoints.between('lg', 'xl')]: {
        flexDirection: 'row',
      },
    },
    content: {
      [theme.breakpoints.between('xs', 625)]: {
        width: '100%',
        marginTop: 'calc(100vw * .75)',
        maxWidth: '90rem',
      },
      [theme.breakpoints.between(625, 900)]: {
        width: '100%',
        marginTop: 'calc(100vw * .55)',
        maxWidth: '90rem',
      },
      [theme.breakpoints.between(900, 'lg')]: {
        width: '100%',
        marginTop: 'calc(100vw * .35)',
        maxWidth: '90rem',
      },
      [theme.breakpoints.between('lg', 'xl')]: {
        width: '40%',
        marginTop: '0px',
      },
      alignSelf: 'center',
    },
    graphicWrapper: {
      display: 'block',
      position: 'relative',
      [theme.breakpoints.between('xs', 625)]: {
        alignSelf: 'center',
        width: '75%',
        marginTop: '6rem',
      },
      [theme.breakpoints.between(625, 900)]: {
        alignSelf: 'center',
        width: '60%',
        marginTop: '4rem',
      },
      [theme.breakpoints.between(900, 'lg')]: {
        alignSelf: 'center',
        width: '40%',
        marginTop: '4rem',
      },
      [theme.breakpoints.between('lg', 'xl')]: {
        alignSelf: 'flex-start',
        marginTop: 'calc((100vh - 55%) / 2)',
        width: '55%',
      },
    },
    button: {
      animation: 'hide .3s, enter-left .2s ease .3s',
    },
  }),
);

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
              <a
                className="link"
                href="https://www.linkedin.com/in/andrew-young-3322b3133/#experience-section"
                target="_blank"
                rel="noreferrer">
                See More
              </a>
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