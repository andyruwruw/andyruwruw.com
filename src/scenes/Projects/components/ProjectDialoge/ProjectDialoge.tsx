import React, { useState, useEffect } from 'react';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import axios from 'axios';

import { IProject } from '../../../../config/index';

import useStyles from './styles';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
    title: {
      margin: '0 0 0 .8rem',
      fontSize: '2rem',
    },
  });

export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const {
    children,
    classes,
    onClose,
    ...other
  } = props;

  return (
    <MuiDialogTitle
      className={classes.root}
      disableTypography
      {...other}>
      <h2 className={classes.title}>
        { children }
      </h2>

      {onClose ? (
        <IconButton
          className={classes.closeButton}
          aria-label="close"
          onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(3),
    paddingBottom: theme.spacing(5),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme: Theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
}))(MuiDialogActions);

interface ProjectDialogeProps {
  open: boolean,
  project: IProject | null,
  handleClose: (event?: {}, reason?: "backdropClick" | "escapeKeyDown") => void,
}

export default function ProjectDialoge(props: ProjectDialogeProps) {
  const [downloads, setDownloads] = useState(-1);
  const [npmName, setNpmName] = useState('');

  useEffect(() => {
    if (props.project?.npm && props.project?.npm !== npmName && downloads === -1) {
      getDownloads(props.project?.npm);
    }
  }, []);

  const classes = useStyles();

  const contentStyle: React.CSSProperties = {
    backgroundImage: `url('https://raw.githubusercontent.com/andyruwruw/andyruwruw.com/master/src/assets/samples/${props.project?.image}.png')`,
  };

  const getDownloads = async (name: string) => {
    const { data } = await axios.get(`https://api.npmjs.org/downloads/point/1970-01-01:2038-01-19/${name}`);
    setDownloads(data.downloads);
    setNpmName(name);
  }
  
  return (
    <div>
      <Dialog
        open={props.open && props.project !== null}
        onClose={props.handleClose}
        aria-labelledby="customized-dialog-title">
        <div
          className={classes.image}
          style={contentStyle}/>

        <DialogTitle
          id="customized-dialog-title"
          onClose={props.handleClose}>
          { props.project?.title }

          {props.project?.end === 0 &&
            <Chip
              className={classes.wip}
              size="medium"
              color="primary"
              label="Work in Progress"/>
          }
        </DialogTitle>

        <DialogContent dividers>
          {props.project?.description.map((paragraph, index) => (
            <p
              key={`${props.project?.title}-desc-${index}`}
              className={classes.description}>
              { paragraph }
            </p>
          ))}

          {downloads !== -1 && props.project?.npm === npmName &&
            <p className={[classes.description, classes.bold].join(' ')}>
              Downloaded { downloads.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") } times.
            </p>
          }

          {props.project?.topics.length !== 0 &&
            <div>
              <p className={classes.subheader}>
                Topics
              </p>

              <div className={classes.toolsWrapper}>
                {props.project?.topics.sort().map((topics) => (
                  <Chip
                    key={`${props.project?.title}-topic-${topics}`}
                    size="small"
                    color="primary"
                    label={topics}/>
                ))}
              </div>
            </div>
          }

          {props.project?.tools.length !== 0 &&
            <div>
              <p className={classes.subheader}>
                Tools
              </p>

              <div className={classes.toolsWrapper}>
                {props.project?.tools.sort().map((tool) => (
                  <Chip
                    key={`${props.project?.title}-tool-${tool}`}
                    size="small"
                    color="primary"
                    className={classes.tools}
                    label={tool}/>
                ))}
              </div>
            </div>
          }
        </DialogContent>

        <DialogActions>
          {props.project?.github &&
            <a 
              href={props.project?.github}
              target="_blank"
              rel="noreferrer">
              <button className={classes.button}>
                Github
              </button>
            </a>
          }
          
          {props.project?.url && props.project?.end !== 0 &&
            <a 
              href={props.project?.url}
              target="_blank"
              rel="noreferrer">
              <button className={[classes.button, classes.link].join(' ')}>
                Visit
              </button>
            </a>
          }
        </DialogActions>
      </Dialog>
    </div>
  );
}
