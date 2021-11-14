import React, { ReactNode } from 'react';

// IMAGES
import DefaultHeroImg from '../../assets/images/undraw_web_development.svg';

// STYLES
import { Img } from './styles';

interface AuthHeroProps {
	children?: ReactNode;
	img?: string;
}

export const AuthHero: React.FC<AuthHeroProps> = ({ img }) => {
	return (
		<div className="mb-5">
			<Img src={img || DefaultHeroImg} alt="Hero" />
		</div>
	);
};
