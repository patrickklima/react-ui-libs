import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import ControlsContainer from './ControlsContainer';
import DisplayContainer from './DisplayContainer';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class AppContainer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <ControlsContainer/>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <DisplayContainer />
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}
AppContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

AppContainer = withStyles(styles)(AppContainer);
export default AppContainer;
