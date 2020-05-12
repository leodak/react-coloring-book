import React from 'react';
import { SketchPicker } from 'react-color';
// import defaultSwatches from '../../data/defaultSwatches';

const ColorPicker = props => {


	let options = {
		color: props.colorState.background,
		onChange: props.changeColorState,
		onChangeComplete: props.changeColorState,
		disableAlpha: true,
		// presetColors: defaultSwatches
	};

	return (
		<SketchPicker {...options} />
	)
}

export default ColorPicker