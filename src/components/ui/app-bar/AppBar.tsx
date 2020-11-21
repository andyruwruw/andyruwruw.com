import React from 'react';
import {
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core/styles';
import {
  AppBar as MaterialAppBar,
  Toolbar,
} from '@material-ui/core';
import {
  Link,
} from "react-router-dom";

import GithubIcon from '../../../assets/icons/github.svg';
import LinkedInIcon from '../../../assets/icons/linkedin.svg';
import SpotifyIcon from '../../../assets/icons/spotify.svg';

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
      fontSize: '2.5rem',
      color: 'white',
      textDecoration: 'none',
      fontFamily: '\'Josefin Sans\', sans-serif',
    },
    iconWrapper: {
      display: 'flex',
    },
    icon: {
      display: 'block',
      width: '4rem',
      height: '4rem',
      marginLeft: '2rem',
    },
    toolBar: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '3rem',
      width: '95%',
      maxWidth: '150rem',
      margin: '0 auto',
    },
  }),
);

function AppBar() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <MaterialAppBar
        color="transparent"
        position="fixed">
        <div className={classes.toolBar}>
          <Link className={classes.title} to="/">
            Andrew Young
          </Link>

          <div className={classes.iconWrapper}>
            <a
              href="https://www.linkedin.com/in/andrew-young-3322b3133/"
              target="_blank">
              <img
                className={classes.icon}
                src={LinkedInIcon}
                alt="andrew-young-3322b3133"/>
            </a>

            <a
              href="https://github.com/andyruwruw"
              target="_blank">
              <img
                className={classes.icon}
                src={GithubIcon}
                alt="andyruwruw"/>
            </a>

            <a
              href="https://open.spotify.com/user/12146574234?si=Fec6rYDRSwWxQs07zS892Q"
              target="_blank">
              <img
                className={classes.icon}
                src={SpotifyIcon}
                alt="spotify:user:12146574234"/>
            </a>
          </div>
        </div>
      </MaterialAppBar>
    </React.Fragment>
  )
}

export default AppBar;