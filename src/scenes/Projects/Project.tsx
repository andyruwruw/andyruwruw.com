import React, { useEffect } from 'react';
import {
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core/styles';
import { useInView } from 'react-intersection-observer';
import Tilt from 'react-parallax-tilt';

import Divider from '../../components/ui/divider/Divider';
import IntroGraphic from '../../assets/graphics/Intro';

import { PORTFOLIO } from '../../config/index';

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
        fontSize: '4rem',
      },
      [theme.breakpoints.between(625, 990)]: {
        fontSize: '5rem',
      },
      [theme.breakpoints.between(990, 1600)]: {
        fontSize: '6rem',
      },
      [theme.breakpoints.between(1600, 'xl')]: {
        fontSize: '8rem',
      },
    },
    subTitle: {
      animation: 'hide .4s, enter-left .3s ease .4s',
      [theme.breakpoints.between('xs', 625)]: {
        fontSize: '1.8rem',
      },
      [theme.breakpoints.between(625, 'md')]: {
        fontSize: '2rem',
      },
      [theme.breakpoints.between('md', 'xl')]: {
        fontSize: '2.2rem',
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
        marginTop: 'calc(100vw * .6)',
        maxWidth: '90rem',
      },
      [theme.breakpoints.between(900, 'lg')]: {
        width: '100%',
        marginTop: 'calc(100vw * .4)',
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
    imageWrapper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
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
    image: {
      display: 'block',
      margin: '0 auto',
      width: '80%',
    }
  }),
);

interface ProjectProps {
  index: number,
  showChange: (index: number, val: boolean) => void,
  title: string,
  description: string,
  topics: string[],
  link: string,
  image: any,
}

export default function Project(props: ProjectProps) {
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
              { props.title }
            </h1>

            <Divider />

            {props.description.length &&
              <h2 className={classes.subTitle}>
                { props.description }
              </h2>
            }
          </div>
        }

        
        {inView && props.image === null &&
          <div className={classes.graphicWrapper}>
            <IntroGraphic />
          </div>
        }
        {inView && props.image !== null &&
          <div className={classes.imageWrapper}>
            <Tilt
              perspective={1000}
              transitionSpeed={50}
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              scale={1.02}
              trackOnWindow={true}>
              <img
                className={classes.image}
                src={props.image} />
            </Tilt>
          </div>
        }
      </div>
    </div>
  );
}