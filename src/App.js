import React, { useState } from 'react';
import { Menu, CurrentPage, ColorPicker, Dropper } from './components';
import coloringImgs from './data/coloringImgs';
import dropperImg from './img/eyedropper.png';
import './App.css';

const App = props => {
	let stateColoredImg = coloringImgs;
	const [colorState, setColorState] = useState({ background: '#fff'}),
		[imageState, setImageState] = useState(0),
		[pathIdState, setPathIdState] = useState(0),
		[pathColorState, setPathColorState] = useState('#FFFFFF'),
		[dropperState, setDropperState] = useState(false);

	const changeColorState = color => {
		setColorState({ background: color.hex})
	}

	const changeImageState = ImgId => {
		setImageState(ImgId);
	}

	const changePathColorState = (imgIndex, pathId, currColor) => {
		stateColoredImg[imgIndex].paths[pathId].fill = currColor;
		setPathIdState(pathId);
		setPathColorState(currColor);
	}

	const changeDropperState = dropper => {
		dropper ? setDropperState(false) : setDropperState(true);
	}

	const defaultDropperState = () => {
		setDropperState(false)
	}

	const componentProps = {
		menu: {
			coloringImgs: stateColoredImg,
			changeImageState,
			imageState
		},
		currentPage: {
			currImg: stateColoredImg[imageState],
			changePathColorState,
			pathColorState,
			pathIdState,
			colorState,
			changeColorState,
			imageState,
			dropperState,
			changeDropperState,
			dropperImg
		},
		colorPicker: {
			colorState,
			changeColorState,
			defaultDropperState
		},
		dropper: {
			dropperState,
			changeDropperState,
			colorState,
			dropperImg
		}
	}

	return (
		<div className="App">
			<div className="main-container">
				<Menu {...componentProps.menu} />
				<CurrentPage {...componentProps.currentPage} />
				<div onClick={defaultDropperState}>
					<ColorPicker {...componentProps.colorPicker} />
				</div>
				<Dropper {...componentProps.dropper} />
			</div>
		</div>
	)
}

export default App;