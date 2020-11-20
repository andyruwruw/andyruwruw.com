import React from 'react';
import {
  createStyles,
  withStyles,
} from '@material-ui/core/styles';
import ScrollSnap from 'scroll-snap';

import Intro from './components/Intro/index';
import Education from './components/Education/index';
import Projects from './components/Projects/index';
import Work from './components/Work/index';


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

class Home extends React.Component<any, any> {
  container: React.RefObject<HTMLDivElement>;

  constructor(props: any) {
    super(props);
    this.container = React.createRef();
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

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div
          className={classes.wrapper}
          ref={this.container}>
          <Intro />

          <Work />
    
          <Projects />
    
          <Education />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
