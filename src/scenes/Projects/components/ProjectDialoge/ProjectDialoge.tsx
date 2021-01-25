import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

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
      margin: '0',
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
  const classes = useStyles();

  const contentStyle: React.CSSProperties = {
    backgroundImage: `url('https://raw.githubusercontent.com/andyruwruw/andyruwruw.com/master/src/assets/samples/${props.project?.image}.png')`,
  };
  
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
        </DialogTitle>

        <DialogContent dividers>
          
          {props.project?.description.map((paragraph) => (
            <p className={classes.description}>
              { paragraph }
            </p>
          ))}

          {props.project?.topics.length !== 0 &&
            <div>
              <p className={classes.subheader}>
                Topics
              </p>

              <div className={classes.toolsWrapper}>
                {props.project?.topics.map((topics) => (
                  <Chip
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
                {props.project?.tools.map((tool) => (
                  <Chip
                    size="small"
                    color="primary"
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
