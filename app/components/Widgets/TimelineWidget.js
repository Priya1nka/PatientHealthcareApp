import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@mui/styles/withStyles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import PapperBlock from '../PapperBlock';
import styles from './widget-jss';

const dataTimeline = [
  {
    time: '11:20',
    title: 'Updated Product',
    desc: 'Quisque a consequat ante, at volutpat enim.'
  },
  {
    time: 'Yesteray',
    title: 'You liked James products',
    desc: 'Aenean sit amet magna vel magna fringilla fermentum.'
  },
  {
    time: 'Yesterday',
    title: 'James just like your product',
    desc: 'Nam posuere accumsan porta.'
  },
  {
    time: '11 Oct 2018',
    title: 'Jenna commented on your product',
    desc: 'Curabitur egestas consequat lorem.'
  },
  {
    time: 'Last week',
    title: 'Jihan Doe just like your product',
    desc: 'Vestibulum nec mi suscipit, dapibus purus a'
  },
];

function TimelineWidget(props) {
  const { classes } = props;
  return (
    <PapperBlock whiteBg noMargin title="Recent Activity" icon="ion-ios-time-outline" desc="">
      <div className={classes.activityWrap}>
        <List>
          {dataTimeline.map((item, index) => (
            <ListItem key={index.toString()} className={classes.activityList}>
              <ListItemIcon>
                <div className={classes.timeDot}>
                  <time>{item.time}</time>
                  <span />
                </div>
              </ListItemIcon>
              <ListItemText primary={item.title} className={classes.activityText} secondary={item.desc} />
            </ListItem>
          ))}
        </List>
      </div>
    </PapperBlock>
  );
}

TimelineWidget.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TimelineWidget);
