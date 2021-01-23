import React from 'react';

import useStyles from './style';

interface DividerProps {
  delay?: number,
  single?: boolean,
}

export default function Divider(props: DividerProps) {
  const classes = useStyles();

  const style = {
    '--delay': props.delay ? props.delay : 0,
  } as React.CSSProperties;

  return (
    <div
      className={classes.root}
      style={style}>
      <span className={[classes.line, classes.first].join(' ')} />

      {!props.single &&
        <span className={[classes.line, classes.second].join(' ')} />
      }
    </div>
  );
}
