import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';

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
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme: Theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
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
        <DialogTitle
          id="customized-dialog-title"
          onClose={props.handleClose}>
          { props.project?.title }
        </DialogTitle>

        <DialogContent dividers>
          <div
            className={classes.image}
            style={contentStyle}/>
          {props.project?.description.map((paragraph) => (
            <p className={classes.description}>
              { paragraph }
            </p>
          ))}
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
