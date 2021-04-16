import {
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core/styles';

import {
  root,
  title,
  subTitle,
  subTitleSecond,
  wrapper,
  content,
  graphicWrapper,
} from '../../styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root,
    title: title(theme),
    subTitle: subTitle(theme),
    subTitleSecond: subTitleSecond(theme),
    wrapper: wrapper(theme),
    content: content(theme),
    graphicWrapper: graphicWrapper(theme),
  }),
);

export default useStyles;
