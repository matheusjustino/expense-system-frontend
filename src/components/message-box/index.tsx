import React from 'react';

// IMAGES
import happyImg from '../../assets/images/happy.svg';

// STYLES
import { Container } from './styles';

interface MessageBoxProps {
	title: string;
	description: string;
	footerText: string;
	icon: string;
}

export const MessageBox: React.FC<MessageBoxProps> = ({
	title,
	description,
	footerText,
	icon,
}) => {
	return (
		<Container>
			<header>
				<h1>
					{title}
					<img src={icon || happyImg} alt="Status da carteira" />
				</h1>

				<p>{description}</p>
			</header>

			<footer>
				<span>{footerText}</span>
			</footer>
		</Container>
	);
};
