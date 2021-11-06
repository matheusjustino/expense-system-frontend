import React from 'react';
import styled from 'styled-components';

// IMAGES
import heroImg from '../../../assets/images/undraw_wallet.svg';

export const Hero: React.FC = () => {
	return (
		<div className="mb-5">
			<Img src={heroImg} alt="Hero" />
		</div>
	);
};

const Img = styled.img`
	object-fit: contain;
	height: 100%;
	width: 100%;
`;
