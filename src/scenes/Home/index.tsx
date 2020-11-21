import React from 'react';
import {
  createStyles,
  withStyles,
} from '@material-ui/core/styles';
import ScrollSnap from 'scroll-snap';

import Intro from './components/Intro/index';
import Work from './components/Work/index';
import Projects from './components/Projects/index';
import Education from './components/Education/index';
import Skills from './components/Skills/index';
import Contact from './components/Contact/index';
import ScrollGuide from '../../components/ui/scroll-guide/ScrollGuide';


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

interface HomeState {
  shown: boolean[],
}

interface HomeProps {
  classes: any,
}

class Home extends React.Component<HomeProps, HomeState> {
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
          <Intro
            index={0}
            showChange={this.toggleShownHide} />

          <Work
            index={1}
            showChange={this.toggleShownHide} />
    
          <Projects
            index={2}
            showChange={this.toggleShownHide} />
    
          <Education
            index={3}
            showChange={this.toggleShownHide} />

          <Skills
            index={4}
            showChange={this.toggleShownHide} />

          <Contact
            index={5}
            showChange={this.toggleShownHide} />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
