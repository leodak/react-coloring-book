import React from 'react';


const Dropper = props => {
	return(
		<div onClick={() => props.changeDropperState(props.dropperState)} style={{backgroundColor: '#eee', width: '40px', height: '40px'}}>
			<img src={props.dropperImg} alt="Eyedropper icon" style={{display: 'block', maxWidth: '30px', margin: '10px auto', paddingTop: '6px'}}/>
		</div>
	)
}

export default Dropper