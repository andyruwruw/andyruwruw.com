import React from 'react';
import {
  createStyles,
  withStyles,
} from '@material-ui/core/styles';
import ScrollSnap from 'scroll-snap';

import ScrollGuide from '../../components/ui/scroll-guide/ScrollGuide';
import { PORTFOLIO } from '../../config/index';
import Project from './Project';

const styles = createStyles({
  root: {
    display: 'block',
    width: '100vw',
    height: '100vh',
  },
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    overflow: 'auto',
    overflowX: 'hidden',
    height: '100%',
  },
});

interface ProjectsState {
  shown: boolean[],
}

interface ProjectsProps {
  classes: any,
}

class Projects extends React.Component<ProjectsProps, ProjectsState> {
  container: React.RefObject<HTMLDivElement>;

  constructor(props: any) {
    super(props);

    this.container = React.createRef();

    this.state = {
      shown: [
        true,
        false,
        false,
        false,
        false,
        false,
      ],
    };
  }

  bindScrollSnap() {
    const element = this.container.current;
    const snapObject = new ScrollSnap(element, {
      snapDestinationY: '100%',
      threshold: .01,
    });

    snapObject.bind();
  }

  componentDidMount() {
    this.bindScrollSnap();
  }

  toggleShownHide = (index: number, val: boolean) => {
    this.setState((state) => {
      state.shown[index] = val;
      return state;
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <ScrollGuide shown={this.state.shown} />

        <div
          className={classes.wrapper}
          ref={this.container}>
          {PORTFOLIO.map((project, index) => (
            <Project
              index={index}
              showChange={this.toggleShownHide}
              title={project.title}
              description={project.description}
              topics={project.tools}
              link={project.url}
              image={project.image}/>
          ))}

        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Projects);
