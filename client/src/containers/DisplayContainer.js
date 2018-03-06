import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import Chip from 'material-ui/Chip';

const mapStateToProps = (state, ownProps) => {
  return {
    select: state.ui.select,
    radio: state.ui.radio,
  };
}
const mapDispatchToProps = (dispatch) => {
  return {

  };
}
const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing.unit,
  },
});
class DisplayContainer extends Component {
  render() {
    const {classes, select, radio} = this.props;
    return (
      <div className={classes.root}>
        <Chip label={select} className={classes.chip} />
        <Chip label={radio} className={classes.chip} />
        
      </div>
    );
  }
}

DisplayContainer.propTypes = {

};

DisplayContainer = withStyles(styles)(DisplayContainer);
DisplayContainer = connect(mapStateToProps, mapDispatchToProps)(DisplayContainer);
export default DisplayContainer;