import { connect } from 'react-redux';

import { setCheap } from './../store/actions/setCheap.action';
import { setGood } from './../store/actions/setGood.action';
import { setFast } from './../store/actions/setFast.action';

import ToggleProjectButton from '../components/ToggleProjectButton.js';

const setMoney = dispatch => ({
  setMoney: money => dispatch(setCheap(money))
});

const setSpeed = dispatch => ({
  setSpeed: speed => dispatch(setFast(speed))
});

const setQuality = dispatch => ({
  setQuality: quality => dispatch(setGood(quality))
});


export default connect(
    setMoney,
    setSpeed,
    setQuality
)(ToggleProjectButton);