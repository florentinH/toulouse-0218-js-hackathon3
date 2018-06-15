import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/lab/Slider';

const styles = {
  container: {
    width: 300,
    height: 150,
    marginTop: 30,
    marginLeft: 70,
  },
};

class SimpleSlider extends React.Component {
  state = { value: 50 };

  handleChange = (event, value) => this.setState({ value });

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.container}>
        <Typography id="label">Autour de moi</Typography>
        <Slider value={value} aria-labelledby="label" onChange={this.handleChange} />
      </div>
    );
  }
}

SimpleSlider.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleSlider);