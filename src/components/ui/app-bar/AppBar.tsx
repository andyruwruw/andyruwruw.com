import React from 'react';
import {
  AppBar as MaterialAppBar,
  Tooltip,
} from '@material-ui/core';
import { Link } from "react-router-dom";

import SourceCodeIcon from '../../../assets/icons/sourcecode.svg';
import GithubIcon from '../../../assets/icons/github.svg';
import LinkedInIcon from '../../../assets/icons/linkedin.svg';
import SpotifyIcon from '../../../assets/icons/spotify.svg';

import useStyles from './style';

function AppBar() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <MaterialAppBar
        color="transparent"
        position="fixed">
        <div className={classes.toolBar}>
          <Link
            className={classes.title}
            to="/">
            Andrew Young
          </Link>

          <div className={classes.iconWrapper}>
            <Tooltip title="Website Source Code">
              <span>
                <a
                  href="https://github.com/andyruwruw/andyruwruw.com"
                  target="_blank"
                  rel="noreferrer">
                  <img
                    className={classes.icon}
                    src={SourceCodeIcon}
                    alt="andyruwruw/andyruwruw.com"/>
                </a>
              </span>
            </Tooltip>

            <Tooltip title="LinkedIn">
              <span>
                <a
                  href="https://www.linkedin.com/in/andrew-young-3322b3133/"
                  target="_blank"
                  rel="noreferrer">
                  <img
                    className={classes.icon}
                    src={LinkedInIcon}
                    alt="andrew-young-3322b3133"/>
                </a>
              </span>
            </Tooltip>

            <Tooltip title="Github">
              <span>
                <a
                  href="https://github.com/andyruwruw"
                  target="_blank"
                  rel="noreferrer">
                  <img
                    className={classes.icon}
                    src={GithubIcon}
                    alt="andyruwruw"/>
                </a>
              </span>
            </Tooltip>

            <Tooltip
              className={classes.spotifyLink}
              title="Spotify">
              <span>
                <a
                  href="https://open.spotify.com/user/12146574234?si=Fec6rYDRSwWxQs07zS892Q"
                  target="_blank"
                  rel="noreferrer">
                  <img
                    className={classes.icon}
                    src={SpotifyIcon}
                    alt="spotify:user:12146574234"/>
                </a>
              </span>
            </Tooltip>
          </div>
        </div>
      </MaterialAppBar>
    </React.Fragment>
  )
}

export default AppBar;
