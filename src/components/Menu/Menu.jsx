import React from 'react';
import Slider from 'react-slick';
import Style from './Menu.css';

const Menu = props => {
	const settings = {
		className: "coloring-slider",
		dots: false,
		centerMode: true,
		infinite: true,
		centerPadding: "60px",
		speed: 800,
		initialSlide: 0,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	};

	return (
		<div style={Style} className="coloring-page-slider">
			<div className="slider-container">
				<Slider {...settings} >
					{props.coloringImgs.map(image => (
						<div key={image.id} className={`coloring-slide ${image.id === props.imageState ? 'curr-image' : null }`} onClick={() => props.changeImageState(image.id)} >
							<img src={require(`../../img/${image.name}-thumb.jpg`)} alt={image.name} />
						</div>
					))}	
				</Slider>
			</div>
		</div>
	)
}

export default Menu;