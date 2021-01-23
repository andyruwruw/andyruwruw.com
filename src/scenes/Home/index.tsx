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

interface HomeState {
  shown: boolean[],
}

interface HomeProps {
  classes: Classes,
}

class Home extends React.Component<HomeProps, HomeState> {
  container: React.RefObject<HTMLDivElement>;

  constructor(props: HomeProps) {
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

  /**
   * Instantiate scroll-snap
   */
  bindScrollSnap() {
    const element = this.container.current;
    const snapObject = new ScrollSnap(element, {
      snapDestinationY: '100%',
      threshold: .01,
    });

    snapObject.bind();
  }

  /**
   * 
   * 
   * @param {number} index Index of component
   * @param {boolean} val State of component
   */
  toggleShownHide = (index: number, val: boolean) => {
    this.setState((state) => {
      state.shown[index] = val;
      return state;
    });
  }

  componentDidMount() {
    this.bindScrollSnap();
  }

  render() {
    return (
      <div className={this.props.classes.root}>
        <ScrollGuide shown={this.state.shown} />

        <div
          className={this.props.classes.wrapper}
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

const styles = createStyles({
  root: {
    display: 'block',
    height: '100vh',
    width: '100vw',
  },
  wrapper: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    overflow: 'auto',
    overflowX: 'hidden',
  },
});

export default withStyles(styles)(Home);
