import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import styles from './style';

interface ScrollGuideProps {
  shown: boolean[]
  classes: any,
}

class ScrollGuide extends React.Component<ScrollGuideProps, any> {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        {this.props.shown.map((val, index) => (
          <span
            key={`scroll-guide-${index}`}
            className={[classes.bar, val ? classes.active : ''].join(' ')} />
        ))}
      </div>
    )
  }
}

export default withStyles(styles)(ScrollGuide);
