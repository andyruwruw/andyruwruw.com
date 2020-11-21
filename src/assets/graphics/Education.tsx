import {
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core/styles';
import React from 'react';
import Tilt from 'react-parallax-tilt';
  
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    parallax: {
      pointerEvents: 'none',
      transformStyle: 'preserve-3d',
      position: 'relative',
    },
    svg: {
      position: 'absolute',
    },
    white: {
      fill: '#ffffff',
    },
    red: {
      fill: '#ff5777',
    },
    blue: {
      fill: '#1faaff',
    },
    back: {
      transform: 'translateZ(0px)',
      animation: 'hide .4s, slide-up-z0 .6s ease .4s',
    },
    front: {
      transform: 'translateZ(20px)',
      animation: 'hide .4s, slide-down-z20 .6s ease .4s',
    },
    clouds1: {
      animation: 'hide .4s, slide-down-z20 .6s ease .4s, hovery-z20 3s ease .8s infinite',
    },
    clouds2: {
      animation: 'hide .4s, slide-down-z20 .6s ease .4s, hovery-z20 3s ease 1.1s infinite',
    },
    clouds3: {
      animation: 'hide .4s, slide-down-z20 .6s ease .4s, hovery-z20 3s ease 1.4s infinite',
    },
    redFront: {
      transform: 'translateZ(50px)',
      animation: 'hide .6s, slide-backwards-z50 1s ease .6s, hoverz-forwards-z50 2s ease 1.6s infinite',
    },
    redForward: {
      transform: 'translateZ(-10px)',
      animation: 'hide .8s, slide-forwards-zn10 1s ease .8s, hoverz-forwards-zn10 2s ease 1.8s infinite',
    },
    blueFront: {
      transform: 'translateZ(30px)',
      animation: 'hide .5s, slide-backwards-z30 1s ease .5s, hoverz-forwardslight-z30 2s ease 1.5s infinite',
    },
    blueForward: {
      transform: 'translateZ(-40px)',
      animation: 'hide .5s, slide-forwards-zn40 1s ease .5s, hoverz-forwards-zn40 2s ease 1.5s infinite',
    },
    sparkles: {
      transform: 'translateZ(30px)',
    },
    sparkles1: {
      animation: 'hide .8s, hide-50 .8s ease .8s infinite',
    },
    sparkles2: {
      animation: 'hide .8s, hide-50 .8s ease 1.2s infinite',
    },
    inset: {
      transform: 'translateZ(-10px)',
      animation: 'hide .4s, slide-up-zn10 .6s ease .4s',
    },
  }),
);
  
export default function EducationGraphic() {
  const classes = useStyles();
  
  return (
    <Tilt
      className={classes.parallax}
      perspective={1000}
      transitionSpeed={50}
      tiltMaxAngleX={5}
      tiltMaxAngleY={5}
      scale={1.02}
      trackOnWindow={true}>
      <svg className={[classes.svg, classes.sparkles, classes.sparkles2].join(' ')} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2578.09 2659.35">
        <g id="sparkles">
          <path className={classes.white} d="M1881.49,704a118,118,0,0,0,11.15-14.57c3.35-5.06,6.51-10.23,9.4-15.55s5.65-10.7,8.15-16.23a139.53,139.53,0,0,0,6.67-17.07,10.08,10.08,0,0,0-17.21-9.6,139.74,139.74,0,0,0-11,14.64c-3.39,5-6.54,10.21-9.53,15.48s-5.74,10.65-8.28,16.16a118.41,118.41,0,0,0-6.54,17.14,10.12,10.12,0,0,0,17.21,9.6Z" transform="translate(-188.95 -170.33)"/>
        </g>
      </svg>

      <svg className={[classes.svg, classes.sparkles, classes.sparkles1].join(' ')} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2578.09 2659.35">
        <g id="sparkles">
          <path className={classes.white} d="M1901.47,742.19a10.09,10.09,0,0,0,11,9.11,129.47,129.47,0,0,0,18-3.19q8.87-2.13,17.49-4.94c5.76-1.86,11.43-4,17-6.32a126.58,126.58,0,0,0,16.47-8.06,10.1,10.1,0,0,0-6.11-18.74,128.41,128.41,0,0,0-18.06,3.19c-5.9,1.42-11.73,3-17.48,4.94s-11.43,4-17,6.32a129.19,129.19,0,0,0-16.47,8.06A10.12,10.12,0,0,0,1901.47,742.19Z" transform="translate(-188.95 -170.33)"/>
        </g>
      </svg>

      <svg className={[classes.svg, classes.redForward].join(' ')} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2578.09 2659.35">
        <g id="red_forward" data-name="red forward">
          <rect className={classes.red} x="197.79" y="977.47" width="83.07" height="83.07" rx="4" transform="translate(-995.24 800.28) rotate(-74.13)"/>
          <path className={classes.red} d="M956.18,1598.35a4,4,0,0,0,4.46-5.3l-42.35-116.69a4,4,0,0,0-6.83-1.21l-79.87,95a4,4,0,0,0,2.36,6.51Z" transform="translate(-188.95 -170.33)"/>
          <path className={classes.red} d="M2139.67,422c3.09-17.11-8.63-33.43-25.7-36.78l-1.62-.32L2092.57,381a6,6,0,0,1-3.46-9.72l41.31-49.68a23.07,23.07,0,0,0-33.09-32l-98.9,88.2a31.5,31.5,0,0,0-10,17.69c-3.27,17.19,8.47,33.68,25.64,37.05l1.68.33,20.58,4a6,6,0,0,1,3.5,9.67l-44.51,54.76a23.07,23.07,0,0,0,1.51,30.78c8.8,8.88,23.2,8.84,32.39.36L2130,439.67A31.58,31.58,0,0,0,2139.67,422Z" transform="translate(-188.95 -170.33)"/>
        </g>
      </svg>

      <svg className={[classes.svg, classes.redFront].join(' ')} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2578.09 2659.35">
        <g id="red_front" data-name="red front">
          <path className={classes.red} d="M2742.92,959.38,2584.89,815a4,4,0,0,0-6.6,2.09l-46,209a4,4,0,0,0,5.12,4.68l204-64.69A4,4,0,0,0,2742.92,959.38Z" transform="translate(-188.95 -170.33)"/>
          <path className={classes.red} d="M1177.83,170.91,894,343a4,4,0,0,0,.15,6.92L1185.07,509.7a4,4,0,0,0,5.92-3.59l-7.09-331.86A4,4,0,0,0,1177.83,170.91Z" transform="translate(-188.95 -170.33)"/>
          <path className={classes.red} d="M2366.11,2050.13l-77.86-65a6,6,0,0,1,1.69-10.21l36.8-14.16,2.42-.93a39.69,39.69,0,0,0,7.44-70.28L2176,1784.69a28.81,28.81,0,0,0-37.3,5c-10.7,12.08-9,30.94,3.31,41.42l83.33,71.18a6,6,0,0,1-1.74,10.16L2185.82,1927l-2.52,1a39.51,39.51,0,0,0-18.92,15.27c-12.17,18.57-6.1,43.88,12.7,55.72L2332.76,2097a28.83,28.83,0,0,0,37.17-5.55C2380.45,2079.27,2378.48,2060.45,2366.11,2050.13Z" transform="translate(-188.95 -170.33)"/>
          <path className={classes.red} d="M983.05,792a39.75,39.75,0,0,0-19.73-14.22c-21.1-6.84-44,5.63-50.53,26.82l-.49,1.58-15.69,50.62a6,6,0,0,1-10.05,2.39l-90.91-94.23A28.8,28.8,0,0,0,752,802.4L881.14,971.65a39.59,39.59,0,0,0,19.71,13.83c21,6.6,43.7-5.9,50.21-26.92l.47-1.51,15.38-49.62a6,6,0,0,1,10.1-2.34l83.66,88.73a28.79,28.79,0,0,0,37.54,3.79c13.23-9.33,15.83-28.12,6.22-41.14Z" transform="translate(-188.95 -170.33)"/>
          <path className={classes.red} d="M982.33,1718.76,757.1,1784a39.78,39.78,0,0,0-20.18,13.52c-13.79,17.37-10.16,43.2,7.33,56.83l1.07.84L801.64,1899a6,6,0,0,1-1.36,10.26L651.8,1971.85a28.79,28.79,0,0,0,19.61,54.05l232.76-71.34a39.77,39.77,0,0,0,19.8-13.64c13.53-17.34,9.81-43-7.54-56.56l-1-.8L860,1840.34a6,6,0,0,1,1.42-10.29l139.82-57a28.79,28.79,0,0,0-18.86-54.32Z" transform="translate(-188.95 -170.33)"/>
        </g>
      </svg>

      <svg className={[classes.svg, classes.blueForward].join(' ')} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2578.09 2659.35">
        <g id="blue_forward" data-name="blue forward">
          <rect className={classes.blue} x="2661.06" y="1284.67" width="83.07" height="83.07" rx="4" transform="translate(499.05 3392.9) rotate(-74.13)"/>
          <rect className={classes.blue} x="1512.04" y="237.05" width="83.07" height="83.07" rx="4" transform="translate(671.89 1526.47) rotate(-74.13)"/>
          <path className={classes.blue} d="M592.36,612.53a4,4,0,0,0,6.67,1.89l91-88.29a4,4,0,0,0-1.69-6.72l-122-34.66a4,4,0,0,0-5,4.82Z" transform="translate(-188.95 -170.33)"/>
        </g>
      </svg>

      <svg className={[classes.svg, classes.blueFront].join(' ')} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2578.09 2659.35">
        <g id="blue_front" data-name="blue front">
          <path className={classes.blue} d="M2756,2076.19a4,4,0,0,0-4.38-3.58l-109.86,11a4,4,0,0,0-3.58,4.38l11.05,109.86a4,4,0,0,0,4.38,3.58l109.86-11.05a4,4,0,0,0,3.58-4.38Z" transform="translate(-188.95 -170.33)"/>
          <path className={classes.blue} d="M471.63,1718.57l-140-80.86a4,4,0,0,0-5.46,1.46l-80.86,140.06a4,4,0,0,0,1.46,5.46l140,80.86a4,4,0,0,0,5.47-1.46L473.1,1724A4,4,0,0,0,471.63,1718.57Z" transform="translate(-188.95 -170.33)"/>
          <path className={classes.blue} d="M991.55,1198,698.14,1092.6a40,40,0,0,0-24.22-.93c-21.38,5.86-33.83,28.85-27.94,50.21l.23.82,32,116a6,6,0,0,1-7.29,7.4l-233-60.33a28.77,28.77,0,0,0-16.52,55.08l306.27,104.73a40,40,0,0,0,24,.64c21.39-6.06,33.54-28.69,27.62-50.12l-.22-.78-31.69-114.84a6,6,0,0,1,7.36-7.38l219.55,59.73A28.77,28.77,0,0,0,991.55,1198Z" transform="translate(-188.95 -170.33)"/>
          <path className={classes.blue} d="M2661.26,1714.29a28.77,28.77,0,0,0-17.76-36.61l-210.9-73.15a6,6,0,0,1-2-10.19l82.6-71.93,1.28-1.11a40.18,40.18,0,0,0-16.91-69.34l-286.5-69.52a28.87,28.87,0,0,0-34.58,20.53c-4,14.8,4.71,30.07,19.24,34.92l199.38,66.43a6,6,0,0,1,2,10.22l-81.72,71.18-1.23,1.06a40.19,40.19,0,0,0,16.31,69.22l296.33,76.72A28.89,28.89,0,0,0,2661.26,1714.29Z" transform="translate(-188.95 -170.33)"/>
          <path className={classes.blue} d="M2370.85,706.94c14.49-16.55,12.2-42.4-4.4-56.84l-1.11-1-44-38.27a6,6,0,0,1,2-10.19L2447.89,557a28.79,28.79,0,0,0,18.38-34.23c-3.84-15.25-19.51-24.38-34.85-20.9L2222,549.29a39.69,39.69,0,0,0-20.94,12.35c-14.75,16.56-12.56,42.53,4.18,57.09l1.16,1,44.79,39a6,6,0,0,1-1.89,10.16l-132.88,48.38a28.79,28.79,0,0,0,16.66,55l217.16-52.87A39.61,39.61,0,0,0,2370.85,706.94Z" transform="translate(-188.95 -170.33)"/>
        </g>
      </svg>

      <svg className={[classes.svg, classes.back].join(' ')} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2578.09 2659.35">
        <g id="back">          
          <path className={classes.white} d="M2431.54,2442.41a204.89,204.89,0,0,0-87.31-14.56,219,219,0,0,0-44.46,6.72l-.43.11a19.61,19.61,0,0,1-23.72-13.61c-47.54-165.93-171.59-255.73-477.1-349.27a30.48,30.48,0,0,1-21.56-29.1h0a30.44,30.44,0,0,1,22-29.23l3.49-1c5.14-1.47,10.07-3.63,15.1-5.47l7.5-2.86,7.35-3.31a271,271,0,0,0,55.69-32.71c34.5-26.19,62.41-60.82,81.54-99,2.47-4.75,4.93-9.5,7-14.41s4.43-9.72,6.41-14.65l5.7-14.89c2-4.94,3.39-10,5.11-15,3.51-10,6-20.27,8.88-30.42l3.59-15.38,1.76-7.69,1.49-7.74c8.08-41.23,12.34-82.88,14-124.43,3.3-83.16-2.08-165.91-10.49-248h0a13.11,13.11,0,0,0-13-11.82H1327.47a90,90,0,0,1-36.42-7.7l-2.83-1.25c-3-1.37-5.83-3-8.94-4.15l-9.31-3.43c-12.64-4-25.89-6.59-39.32-6.57a134.62,134.62,0,0,0-39.53,5.94,137.32,137.32,0,0,0-35.71,17.55,135.33,135.33,0,0,0-49.77,61.08c-9.86,25-12.3,51.71-9.13,77.56s12.7,51.15,28.43,72.57a132.78,132.78,0,0,0,28,28.21l.21.15a54.8,54.8,0,0,1,22.42,44.2V2010.3a38,38,0,0,1-27.36,36.5q-35.22,10.28-69,20C823,2140.53,633.58,2195.07,568.41,2356.54a13.24,13.24,0,0,1-18.79,6.68,192.65,192.65,0,0,0-65.2-22.15,206.11,206.11,0,0,0-92.61,7.06,10,10,0,0,0-4.56,15.93,9.56,9.56,0,0,0,9.68,3.1h0a204.67,204.67,0,0,1,83.26-1.56c27.22,5.21,53,16.6,74.28,33.35A147.76,147.76,0,0,1,602,2463.57a175.89,175.89,0,0,1,9.49,40.12c.15,1.3.23,2.62.35,3.92a13,13,0,0,0-.84,9,12.83,12.83,0,0,0,1.68,3.61c.32,8.46.25,17-.26,25.56l0,.23a9.87,9.87,0,0,0,9.18,10.38,10.17,10.17,0,0,0,10.49-8.76c.45-3,.86-6,1.2-9a19.71,19.71,0,0,1,17-17.46c37.69-4.7,72.32,10,90.13,19.49a16.69,16.69,0,0,1,8,20.21c-.76,2.17-1.46,4.26-2,5.92a145.44,145.44,0,0,0-6.14,47.67,9.91,9.91,0,0,0,13.07,9.06,9.74,9.74,0,0,0,6.64-8.9v-.17a134.25,134.25,0,0,1,8.11-40.34,119.6,119.6,0,0,1,20.36-34.84,126.94,126.94,0,0,1,30.66-26.17,143.81,143.81,0,0,1,37.26-15.8c26.11-7.08,54.49-6.91,79.85,2.4,25.5,9,47.24,27.22,62.06,50.83l.08.11a9.86,9.86,0,0,0,13.56,3.09c4.51-2.81,5.66-8.84,3.19-13.55a141.08,141.08,0,0,0-28.67-37.78,136.86,136.86,0,0,0-41.1-26.28,146.93,146.93,0,0,0-17.74-5.9c-9.77-2.57-15.73-12.58-12.72-22.22a124.79,124.79,0,0,1,10.58-24.37A143,143,0,0,1,964.53,2380a163.53,163.53,0,0,1,53.42-26,166.82,166.82,0,0,1,29.37-5.39l7.44-.52c2.49,0,5-.17,7.47-.16l7.61.12,7.6.39a181,181,0,0,1,58.41,13.78,140.33,140.33,0,0,1,48.22,33.66c13.5,14.31,23.49,31.77,30.08,50.7.94,2.64,1.8,5.31,2.6,8a12.52,12.52,0,0,0,2.59,9.77,242.17,242.17,0,0,1,5.76,42.29v.13a9.87,9.87,0,0,0,10.19,9.32,10.17,10.17,0,0,0,9.54-9.71c.3-5.46,0-14.76-.43-23.06a20.31,20.31,0,0,1,17.4-21.06,153.85,153.85,0,0,1,50.54.63,138.59,138.59,0,0,1,37.16,12.45,133.68,133.68,0,0,1,32.15,22.19,126.69,126.69,0,0,1,24,30.6,123.58,123.58,0,0,1,13.28,36.48,130.09,130.09,0,0,1,1.56,39.13,161.36,161.36,0,0,1-9.71,38.91l0,.11a9.87,9.87,0,0,0,5.5,12.66,10.14,10.14,0,0,0,12.65-4.92,154.42,154.42,0,0,0,14.33-41.77A38.78,38.78,0,0,1,1470,2579a150.18,150.18,0,0,1,32.33-6.16,164.2,164.2,0,0,1,63.09,7.53c20.17,6.73,39.14,17.29,54.1,32,1.25,1.2,2.42,2.46,3.61,3.71a13.17,13.17,0,0,0,6.2,7.06,109.91,109.91,0,0,1,21.1,43l0,.1a9.86,9.86,0,0,0,11.72,7.27c5.17-1.13,8.28-6.4,7.55-11.64a118.56,118.56,0,0,0-10.87-35.51c-.33-.67-.67-1.35-1-2a49.12,49.12,0,0,1-2.67-39.15c21.8-60.47,86-96.34,145.74-101.31,67.76-5.63,145.5,26.18,174.38,97.21a26.42,26.42,0,0,1-6.6,29.34l-.12.12a138.93,138.93,0,0,0-29.78,39.27,134.83,134.83,0,0,0-13.6,47.05A9.91,9.91,0,0,0,1937,2707.5a9.73,9.73,0,0,0,7.72-8v-.07a120.08,120.08,0,0,1,14-39,121.94,121.94,0,0,1,26.35-31.56c21-18.07,47.74-29.12,75.28-34.13s56.58-4,83.58,4.1c4.15,1.23,8.22,2.69,12.26,4.25a13,13,0,0,0,6.25,3.38,12.5,12.5,0,0,0,2.56.3,154.76,154.76,0,0,1,50,36.14l.1.11a9.86,9.86,0,0,0,14,.53,10.15,10.15,0,0,0,.69-13.69,165.78,165.78,0,0,0-35-32.66l-.14-.1a23.11,23.11,0,0,1-8.74-27.1,177.93,177.93,0,0,1,24.27-45.15,168.6,168.6,0,0,1,26.94-28.42,176.63,176.63,0,0,1,32.71-21.88,190,190,0,0,1,36.87-14.45,207.85,207.85,0,0,1,39.2-7.09,216.26,216.26,0,0,1,79.44,8.19l.11,0a9.87,9.87,0,0,0,12.21-6.52A10.18,10.18,0,0,0,2431.54,2442.41ZM1147.41,1559.79c-12.42-17.24-20.08-38.18-22.61-59.72s-.37-43.79,7.41-63.31c15.59-38.79,56.19-68.32,98.37-68,10.51-.16,21,1.85,31.12,4.84l7.53,2.68c2.52.85,4.87,2.23,7.32,3.31,5,2.05,9.47,5.18,14.17,7.87,2.35,1.36,4.45,3.18,6.69,4.74s4.57,3.13,6.56,4.85a128.15,128.15,0,0,1,11.73,10.82c3.74,3.88,7.28,8,10.7,12.35,1.65,2.19,3.38,4.35,4.94,6.61s3.26,4.66,4.53,6.52l.55.81a9.87,9.87,0,0,0,11.82,3.58c5-2,7.23-7.89,5.46-13a94.16,94.16,0,0,0-3.58-8.75l0-.09a17.14,17.14,0,0,1,15.4-24.64l417.69-.42a45.41,45.41,0,0,1,43.74,33.2c4,14.22,8,28.44,12.13,42.63,8.26,28.36,16.25,56.81,24.73,85.12l.78,2.65c.23.81.61,2,.7,2.46a33.71,33.71,0,0,1,.81,3.82,23.79,23.79,0,0,1,.36,3.86l.06,1.94-.17,1.93a31.07,31.07,0,0,1-5,14.61,32.61,32.61,0,0,1-11.25,10.69,34.27,34.27,0,0,1-7.26,3l-1.91.51c-.64.18-1.74.37-2.59.55l-5.43,1.1c-28.94,5.92-57.8,12.27-86.33,20.33a9.89,9.89,0,0,0-6.84,12.18,10.2,10.2,0,0,0,11.09,7.11c29.31-3.32,58.28-8.33,87.17-13.76l5.44-1c1-.2,1.69-.3,2.84-.57l3.46-.84a60.45,60.45,0,0,0,13.26-5.25,59.46,59.46,0,0,0,20.83-19.23,58.22,58.22,0,0,0,9.57-26.73l.31-3.59,0-3.6a52,52,0,0,0-.57-7.16,62.09,62.09,0,0,0-1.43-7c-.29-1.3-.51-1.9-.77-2.88l-.76-2.66c-3.19-11.42-11-38.37-19.29-66.55-12.7-43.36,19.82-86.77,65-86.77H1973a16.43,16.43,0,0,1,16.38,15c6.31,72.47,9.62,145.16,6.45,217.35-1.69,40.52-5.88,80.83-13.63,120.24l-1.42,7.39-1.69,7.32-3.41,14.62c-2.78,9.58-5.1,19.34-8.41,28.71-1.62,4.69-3,9.51-4.79,14.11l-5.33,13.89c-1.85,4.59-4,9-6,13.57s-4.19,8.92-6.46,13.28c-17.65,35.2-42.48,66.26-73.35,89.91a243.66,243.66,0,0,1-50.2,29.74l-6.68,3.06-6.88,2.65c-4.61,1.69-9.08,3.72-13.84,5.08l-14.09,4.5-14.38,3.7c-38.39,9.37-78.29,12-117.26,6.47s-76.3-19.2-112.83-35.56l-.09,0a9.89,9.89,0,0,0-12.81,4.46,10.17,10.17,0,0,0,3.54,13A265.27,265.27,0,0,0,1582.2,2012a308,308,0,0,0,62.11,15.61,313,313,0,0,0,38,3.24c38.41.94,67.91,34.58,62.47,72.61a45.84,45.84,0,0,1-1,5.24c-25,89.6-102.75,152.05-206.59,162.73-98.52,10.15-213.92-28.11-287.07-130-31.72-44.19-48.28-97.48-48.28-151.87V1676.82a47.51,47.51,0,0,1,43.52-47.34l.2,0a177.36,177.36,0,0,0,18.77-2.22,9.84,9.84,0,0,0,8.37-10.67c-.45-5.06-5-8.8-10-8.92h-.42c-5.72-.14-11.39.22-17-.22-5.63-.13-11.15-.92-16.66-1.46a143.57,143.57,0,0,1-31.54-8.07A109.35,109.35,0,0,1,1147.41,1559.79ZM2239,2461.15a197.71,197.71,0,0,0-19.47,14.17,192.83,192.83,0,0,0-57.88,82.5,21.77,21.77,0,0,1-26,13.41c-6.64-1.73-13.52-3.35-18.17-4a192.68,192.68,0,0,0-61.93.87,180.58,180.58,0,0,0-33.77,9.48,18.4,18.4,0,0,1-23.5-9.85c-34.59-80.42-122.63-116.48-199.52-110.11-65.16,5.42-135,43.38-163.93,107.71a16.87,16.87,0,0,1-24.55,7.45,161.66,161.66,0,0,0-36.29-17.68,181.26,181.26,0,0,0-73.8-9.47,166.57,166.57,0,0,0-34.25,6.3,21.92,21.92,0,0,1-27.25-13.85,137.29,137.29,0,0,0-9.76-22.59,153.29,153.29,0,0,0-28.68-37.47,160,160,0,0,0-38.4-27.2A166.22,166.22,0,0,0,1317.3,2436c-16.4-3.06-43-1.15-60.94.75a26.6,26.6,0,0,1-26.84-15c-6.73-14.1-16.78-33.27-26-43.58a167.16,167.16,0,0,0-56.94-40.52,208,208,0,0,0-67.06-16.45l-8.59-.51-8.59-.21c-2.87,0-5.82.08-8.73.13l-8.73.53a189,189,0,0,0-34.31,6.3,190.87,190.87,0,0,0-62.47,30.51,164,164,0,0,0-46.26,52.61,151.1,151.1,0,0,0-14.63,37.75,24.46,24.46,0,0,1-20.4,18.6,151,151,0,0,0-17.61,3.61,153.35,153.35,0,0,0-44.46,20c-6.84,4.45-16.1,13.12-23.73,20.77a24.58,24.58,0,0,1-29.88,3.77c-28.65-16.91-62.75-24-98.4-20.48a19.11,19.11,0,0,1-20.88-15.72l-.1-.55c-.86-3.87-1.59-7.76-2.57-11.6s-2.16-7.66-3.36-11.45a161.38,161.38,0,0,0-30.29-54.35,28.52,28.52,0,0,1-5-28.54c54.4-143.25,218-199.54,442.63-264.89a19.52,19.52,0,0,1,23.5,11.48q2,4.93,4.15,9.82c5,11.55,10.58,22.84,16.46,33.94s12.36,21.89,19.21,32.41,14.17,20.7,21.94,30.51a9.93,9.93,0,0,0,15.66-.17,9.76,9.76,0,0,0,.51-11.11l0,0q-9.37-15.37-17.82-31.21c-5.63-10.55-10.94-21.25-15.84-32.13s-9.5-21.87-13.78-33c-1-2.7-2.35-6.35-3.64-10a13.62,13.62,0,0,1,9-17.7q37.14-10.7,76.12-22.09a13.43,13.43,0,0,1,16.26,7.85c29.76,74,78.91,133.44,143.32,172.88a342.36,342.36,0,0,0,178.07,50.37,328.59,328.59,0,0,0,33.63-1.72c116.52-12,203.39-83.26,230.16-185.31a19.8,19.8,0,0,1,24.92-14.05q30.12,9.27,57.8,18.5a17.49,17.49,0,0,1,11.85,18.91q-.74,5.45-1.61,10.88c-1.81,10.59-3.8,21.16-6.42,31.58s-5.47,20.8-9,31c-3.34,10.25-7.21,20.33-11.34,30.37l0,.06a9.91,9.91,0,0,0,4.89,12.68,10.17,10.17,0,0,0,12.86-4,270.32,270.32,0,0,0,16-30.3,312.4,312.4,0,0,0,12.35-32.47,330.72,330.72,0,0,0,8.84-33.6l0-.21a17.78,17.78,0,0,1,23.58-13c206.46,76.83,297.87,158.46,335.79,291A28.2,28.2,0,0,1,2239,2461.15Z" transform="translate(-188.95 -170.33)"/>
          
          <path className={classes.white} d="M1791.65,2300.54l0,0a368.36,368.36,0,0,1-92.94,66.11,357.67,357.67,0,0,1-53.07,21.31,395.28,395.28,0,0,1-55.79,13.26,428,428,0,0,1-57.21,5.68,456.29,456.29,0,0,1-57.62-1.58c-38.36-3.49-76.25-11.36-113.61-22l-.05,0a9.88,9.88,0,0,0-6.59,18.58c37.26,15.89,77.2,25.59,117.65,29.85a453.21,453.21,0,0,0,122-3.18A419.45,419.45,0,0,0,1654,2414a385.25,385.25,0,0,0,56.7-23.76c36.43-18.85,69.75-44.54,95.55-76.4a9.87,9.87,0,0,0-14.56-13.28Z" transform="translate(-188.95 -170.33)"/>
          
          <path className={classes.white} d="M1422,1902.91a149.1,149.1,0,0,0,12.14,14,144.94,144.94,0,0,0,13.76,12.34,99.39,99.39,0,0,0,15.46,10.29,10.09,10.09,0,0,0,12.88-14.86l-.13-.18a160.12,160.12,0,0,0-11.3-13.48c-4-4.26-7.86-8.5-12-12.55s-8.16-8.12-12.34-12.08-8.53-8-12.79-11.36l-.64-.51a10,10,0,0,0-15.21,12.23A93.68,93.68,0,0,0,1422,1902.91Z" transform="translate(-188.95 -170.33)"/>
          
          <path className={classes.white} d="M1679.64,1709.81c1.66,1.48,3.38,2.82,5.1,4.19,3.45,2.69,7,5.22,10.65,7.63a141.42,141.42,0,0,0,23.26,12.2c4,1.79,8.25,3.14,12.43,4.6,4.29,1.13,8.53,2.49,12.93,3.27,8.69,2,17.7,2.59,26.66,2.89a135.73,135.73,0,0,0,52.09-10.54A140.3,140.3,0,0,0,1846,1721.8q5.49-3.6,10.65-7.66c1.7-1.4,3.39-2.78,5-4.27s3.16-2.94,5-4.83a9.84,9.84,0,0,0-12.5-15.08l-.86.58c-1.17.79-2.84,2-4.38,2.89s-3.17,2-4.77,3c-3.22,1.93-6.54,3.73-9.88,5.45a155.78,155.78,0,0,1-20.62,8.8c-3.49,1.29-7.06,2.24-10.59,3.31-3.6.79-7.15,1.78-10.77,2.33-7.18,1.52-14.48,1.78-21.73,2.11a132.36,132.36,0,0,1-43.18-7.53,154.46,154.46,0,0,1-20.64-8.85c-3.36-1.71-6.66-3.53-9.87-5.49-1.59-1-3.18-2-4.72-3s-3.18-2.14-4.34-3l-.79-.55a9.84,9.84,0,0,0-12.57,15C1676.45,1706.91,1677.94,1708.32,1679.64,1709.81Z" transform="translate(-188.95 -170.33)"/>
          
          <path className={classes.white} d="M1307.65,2360.36l-.06-.05c-5.21-4.19-10.61-7.88-16.06-11.44s-10.92-7-16.49-10.38-11.14-6.64-16.81-9.84-11.39-6.36-17.44-9.15l-.08,0a10,10,0,0,0-11.56,15.95,128,128,0,0,0,15.32,13.79,188.17,188.17,0,0,0,16.89,11.71,172.7,172.7,0,0,0,18.07,9.76,115.73,115.73,0,0,0,19.31,7.25,10.06,10.06,0,0,0,8.91-17.56Z" transform="translate(-188.95 -170.33)"/>
        </g>
      </svg>

      <svg className={[classes.svg, classes.front].join(' ')} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2578.09 2659.35">
        <g id="front">
          <path className={classes.white} d="M2200.85,1130.15a55.57,55.57,0,1,0-55.57-55.57A55.63,55.63,0,0,0,2200.85,1130.15Zm0-84.86a29.29,29.29,0,1,1-29.28,29.29A29.32,29.32,0,0,1,2200.85,1045.29Z" transform="translate(-188.95 -170.33)"/>

          <path className={classes.white} d="M1213.17,1273.25A32.85,32.85,0,0,0,1246,1306.1h660.72a32.86,32.86,0,0,0,32.86-32.85v-117.5a21.05,21.05,0,0,1,40.22-8.72c28.45,64.86,93.63,108.47,165.8,108.47,104.51,0,188.61-89.07,180.38-195.28-6.83-88.19-77.85-159.29-166-166.05-77.45-5.94-147.48,36.6-178.67,104.47a21.71,21.71,0,0,1-19.78,12.54h0a21.91,21.91,0,0,1-21.91-21.91V822.05a32.86,32.86,0,0,0-32.86-32.85H1464.06a9.87,9.87,0,0,1-9.86-9.86V714.69c0-67.37,55.1-124.55,122.46-124.4,49,.11,93.39,28.51,110.61,70.75,3.47,8.52,6.24,19.44,8.23,32.44a59.57,59.57,0,0,0,103.65,30.22,59.92,59.92,0,0,0,14.34-47.32c-1.59-12.09-3.26-21-5.1-27.14a244,244,0,0,0-86-123.91,239.92,239.92,0,0,0-144.58-48.94c-133.89-.74-243.43,111.41-243.43,245.3v57.65a9.87,9.87,0,0,1-9.86,9.86H1246a32.85,32.85,0,0,0-32.85,32.85V927.53h0v345.71Zm772.27-235.78c.2,0,.38,0,.58-.06a11.24,11.24,0,0,0,1.41-.15,11.57,11.57,0,0,0,1.2-.23c.41-.11.81-.23,1.21-.38a11.5,11.5,0,0,0,1.22-.49c.36-.17.7-.37,1-.57s.75-.46,1.11-.72a11.43,11.43,0,0,0,.94-.78,11,11,0,0,0,.92-.89,10.61,10.61,0,0,0,.79-1,11.54,11.54,0,0,0,.75-1.08,10.65,10.65,0,0,0,.57-1.05,10.43,10.43,0,0,0,.57-1.33c.07-.18.17-.34.23-.53A154.07,154.07,0,0,1,2149.47,920c81.06,2,147.64,67.65,150.69,148.67,3.31,88-67.29,160.6-154.54,160.6-68.38,0-129.45-45.79-148.52-111.34-.06-.24-.18-.43-.26-.66a12.6,12.6,0,0,0-.54-1.32,9.78,9.78,0,0,0-.57-1.06c-.23-.38-.47-.75-.73-1.1a10.61,10.61,0,0,0-.79-1c-.29-.32-.59-.63-.91-.92s-.6-.52-.93-.77a11.84,11.84,0,0,0-1.1-.75c-.34-.2-.67-.38-1-.55a12.9,12.9,0,0,0-1.26-.54c-.37-.14-.76-.25-1.15-.36s-.84-.21-1.27-.28a12.1,12.1,0,0,0-1.35-.13c-.25,0-.48-.08-.74-.08H1851.05a13.15,13.15,0,0,0-13.14,13.15v27.07a9.86,9.86,0,0,1-9.86,9.86h-27.5a9.86,9.86,0,0,1-9.85-9.86v-27.07a13.15,13.15,0,0,0-13.15-13.15h-69a13.14,13.14,0,0,0-13.14,13.15v60a9.85,9.85,0,0,1-9.86,9.86H1658a9.85,9.85,0,0,1-9.86-9.86V1047.32a9.85,9.85,0,0,1,9.86-9.85Zm-624.82-319c0-119,96.79-215.76,215.76-215.76,94.76,0,179.81,63.36,206.82,154.08,1,3.27,2.5,9.93,4.23,23.06a33.64,33.64,0,0,1-8,26.56,33.29,33.29,0,0,1-57.91-16.86c-2.3-15-5.62-28-9.87-38.39-21.23-52.07-75.51-87.06-135.09-87.12-81.75-.07-148.6,69.53-148.6,151.27v40.28a33.66,33.66,0,0,1-33.65,33.65h0a33.66,33.66,0,0,1-33.65-33.65ZM1239.45,822.05a6.57,6.57,0,0,1,6.57-6.57h660.72a6.58,6.58,0,0,1,6.58,6.57v82.49a9.86,9.86,0,0,1-9.86,9.86H1249.31a9.86,9.86,0,0,1-9.86-9.86Zm0,128.49a9.86,9.86,0,0,1,9.86-9.85h654.15a9.86,9.86,0,0,1,9.86,9.85v50.78a9.86,9.86,0,0,1-9.86,9.86H1635a13.14,13.14,0,0,0-13.14,13.14v180.22a13.14,13.14,0,0,0,13.14,13.15h73.53a13.15,13.15,0,0,0,13.15-13.15v-60a9.85,9.85,0,0,1,9.85-9.86h23a9.85,9.85,0,0,1,9.86,9.86v27.07a13.14,13.14,0,0,0,13.14,13.14h73.5a13.14,13.14,0,0,0,13.15-13.14v-27.07a9.85,9.85,0,0,1,9.85-9.86h29.41a9.86,9.86,0,0,1,9.86,9.86v128.7a6.58,6.58,0,0,1-6.58,6.57H1246a6.57,6.57,0,0,1-6.57-6.57Z" transform="translate(-188.95 -170.33)"/>
          
          <path className={classes.white} d="M1312.47,874.26c14.33.94,28.66,1.54,43,2s28.66.87,43,1.14q43,.74,86,1.1l43,0,43-.42c28.66-.47,57.32-1.36,86-3.87a9.89,9.89,0,0,0,0-19.71c-28.66-2.51-57.32-3.4-86-3.87l-43-.41h-43q-43,.36-86,1.1c-14.33.27-28.66.56-43,1.14s-28.66,1.09-43,2a9.88,9.88,0,0,0,0,19.71Z" transform="translate(-188.95 -170.33)"/>
          
          <circle className={classes.white} cx="1832.16" cy="864.41" r="21.36" transform="translate(-380.28 596.61) rotate(-22.5)"/>
          
          <circle className={classes.white} cx="1739.75" cy="864.41" r="21.36" transform="translate(-387.32 561.25) rotate(-22.5)"/>
          
          <path className={classes.white} d="M1377,1221.88h122.79c6.79,0,11.42-7.4,8.89-14.2l-28.13-75.42a28.55,28.55,0,0,1,5.3-28.86,63.18,63.18,0,1,0-95.26-.4,29.13,29.13,0,0,1,5.64,29.28l-28.11,75.4C1365.54,1214.48,1370.18,1221.88,1377,1221.88Z" transform="translate(-188.95 -170.33)"/>
        </g>
      </svg>

      <svg className={[classes.svg, classes.front, classes.clouds1].join(' ')} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2578.09 2659.35">
        <g id="front">
          <path className={classes.white} d="M1262.74,2714.16a137.46,137.46,0,0,0-22.13-35.81,135.83,135.83,0,0,0-32.35-27.46,144.51,144.51,0,0,0-39.06-16.33,154,154,0,0,0-83.23,2.2c-26.78,8.19-51.26,24.27-68.66,46a9.87,9.87,0,0,0,14.78,13v0a133,133,0,0,1,60.78-35.32,137.94,137.94,0,0,1,69.8-.5,121.53,121.53,0,0,1,59.25,35c15.84,17.11,26.44,39,32.24,62.67l0,.15a9.87,9.87,0,0,0,19.35-3.7A159.62,159.62,0,0,0,1262.74,2714.16Z" transform="translate(-188.95 -170.33)"/>
        </g>
      </svg>

      <svg className={[classes.svg, classes.front, classes.clouds2].join(' ')} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2578.09 2659.35">
        <g id="front">
          <path className={classes.white} d="M1844.54,2735a98.92,98.92,0,0,0-28.3-12.39c-20.21-5.42-42.15-3.82-61.54,3.51a111.21,111.21,0,0,0-49.07,36.47,100.77,100.77,0,0,0-21.06,56.8,9.88,9.88,0,0,0,19.57,2.27l0-.11a95.15,95.15,0,0,1,21-43.33,96.56,96.56,0,0,1,38.81-27.57,83.55,83.55,0,0,1,46.59-4c15.54,3.17,30.2,11.06,43.13,21.95l.1.09a9.88,9.88,0,0,0,13.72-14.14A114.11,114.11,0,0,0,1844.54,2735Z" transform="translate(-188.95 -170.33)"/>
        </g>
      </svg>

      <svg className={[classes.svg, classes.front, classes.clouds3].join(' ')} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2578.09 2659.35">
        <g>
          <path className={classes.white} d="M2412.73,2675.93a105.9,105.9,0,0,0-26.55-16.67c-19.44-8.53-41.64-10.36-62.34-6.29a117.63,117.63,0,0,0-55.75,28.4,115.4,115.4,0,0,0-20.16,24.49,108.58,108.58,0,0,0-10.36,22.81,105.69,105.69,0,0,0-19.16,1.51,114,114,0,0,0-56,27.1,103.88,103.88,0,0,0-32.2,52.58,9.88,9.88,0,0,0,18.79,5.94l0-.09a95.68,95.68,0,0,1,29.39-39.61,98,98,0,0,1,44.47-20.06,86,86,0,0,1,47.58,5.16c15,6.24,28.16,16.94,39.1,30.35l.08.1a9.88,9.88,0,0,0,16.16-11.27,115.76,115.76,0,0,0-19.14-24.05,101.63,101.63,0,0,0-25.94-17.89,97.15,97.15,0,0,0-16.13-6,90.25,90.25,0,0,1,21.94-31.07,93.84,93.84,0,0,1,42.8-22.73,82.94,82.94,0,0,1,48,2.73c15.37,5.57,28.94,16.11,40.07,29.3l.14.16a9.87,9.87,0,0,0,15.65-12A121.33,121.33,0,0,0,2412.73,2675.93Z" transform="translate(-188.95 -170.33)"/>
          
          <path className={classes.white} d="M766.86,2701.73a119.94,119.94,0,0,0-58.45-9,133.26,133.26,0,0,0-44.75,12.12,122.46,122.46,0,0,0-8-12.62c-18.79-26-47.64-43.79-78.44-50.85s-64.2-3.78-92.76,10.39a128.9,128.9,0,0,0-37.82,28.4,138.28,138.28,0,0,0-25,39.33,9.87,9.87,0,0,0,17.81,8.44l0-.05c12.68-23.75,32.11-42.86,55.74-53.53a120.41,120.41,0,0,1,76.15-7.42c25.37,5.73,48.73,19.81,64.58,40.12a100.77,100.77,0,0,1,9.89,15.2,12.59,12.59,0,0,0,4.7,10,130.41,130.41,0,0,1,9.32,48.39v.14a9.87,9.87,0,0,0,19.7.65,145.49,145.49,0,0,0-3.8-46.29q-.83-3.2-1.82-6.36a107.9,107.9,0,0,1,37-11.49,96.06,96.06,0,0,1,47.05,5.73,75,75,0,0,1,35.78,29.16c8.53,13.22,12.58,29.34,13.23,45.87v.13a9.85,9.85,0,0,0,19.7-.47c-.14-19.23-4.29-39.32-14.75-56.73C801.64,2723.45,785.29,2709.67,766.86,2701.73Z" transform="translate(-188.95 -170.33)"/>
        </g>
      </svg>

      <svg className={[classes.svg, classes.inset].join(' ')} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2578.09 2659.35">
        <g id="inset">
          <path className={classes.white} d="M1213.75,1541.56a9.94,9.94,0,0,0,1.53-14l-.39-.48a78.62,78.62,0,0,1-12.3-20.3,58.51,58.51,0,0,1-4-21.93,64.84,64.84,0,0,1,4.28-22.11,72,72,0,0,1,11.81-20l.46-.55a10,10,0,0,0-12.6-15,60.68,60.68,0,0,0-23.16,24.45,70,70,0,0,0-8.21,33.08,68.89,68.89,0,0,0,8.43,33.2,66.56,66.56,0,0,0,22.68,24.26A10,10,0,0,0,1213.75,1541.56Z" transform="translate(-188.95 -170.33)"/>
        </g>
      </svg>
    </Tilt>
  )
}


