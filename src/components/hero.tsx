import React, { ReactNode } from 'react';
import styled from 'styled-components';

// IMAGES
import DefaultHeroImg from '../assets/images/undraw_web_development.svg';

interface HeroProps {
	children?: ReactNode;
	img?: string;
}

export const Hero: React.FC<HeroProps> = ({ img }) => {
	return (
		<div className="mb-5">
			<Img src={img || DefaultHeroImg} alt="Hero" />
		</div>
	);
};

const Img = styled.img`
	object-fit: contain;
	height: 100%;
	width: 100%;
`;
