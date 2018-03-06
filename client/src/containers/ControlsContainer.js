import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel } from 'material-ui/Input';
import Select from 'material-ui/Select';
import Radio, { RadioGroup } from 'material-ui/Radio';
import { FormLabel, FormControl, FormControlLabel, FormHelperText } from 'material-ui/Form';
import { MenuItem } from 'material-ui/Menu';
import { onChangeSelect, onChangeRadio } from '../actions/ControlsActions'; 

const mapStateToProps = (state, ownProps) => {
  return {
    select: state.ui.select,
    radio: state.ui.radio,
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    onChangeSelect: (event) => dispatch(onChangeSelect(event.target.value)),
    onChangeRadio: (event) => dispatch(onChangeRadio(event.target.value)),
  };
}
const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
});


class ControlsContainer extends Component {
  render() {
    const { classes, onChangeSelect, select, onChangeRadio, radio } = this.props;
    return (
      <form className={classes.root} autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="select-simple">Select</InputLabel>
          <Select
            value={select}
            onChange={onChangeSelect}
            onBlur={undefined}
            inputProps={{
              name: 'select',
              id: 'select-simple',
            }}
          >
            <MenuItem value=""><em>None</em></MenuItem>
            <MenuItem value={"Ten"}>Ten</MenuItem>
            <MenuItem value={"Twenty"}>Twenty</MenuItem>
            <MenuItem value={"Thirty"}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl component="fieldset" required className={classes.formControl}>
          <FormLabel component="legend">Gender</FormLabel>
          <RadioGroup
            aria-label="Onomatopoeia"
            name="onomatopoeia"
            className={classes.group}
            value={radio}
            onChange={onChangeRadio}
          >
            <FormControlLabel value="Flip" control={<Radio />} label="Flip" />
            <FormControlLabel value="Flap" control={<Radio />} label="Flap" />
            <FormControlLabel value="Blop" control={<Radio />} label="Blop" />
            <FormControlLabel value="Drop" control={<Radio />} label="Drop" />
          </RadioGroup>
        </FormControl>
      </form>

   
    );
  }
}

ControlsContainer.propTypes = {
  classes: PropTypes.object.isRequired,

};

ControlsContainer = withStyles(styles)(ControlsContainer);
ControlsContainer = connect(mapStateToProps, mapDispatchToProps)(ControlsContainer);

export default ControlsContainer;