import React from 'react';

// STYLES
import { Container, TitleContainer, Controllers } from './styles';

interface ContentHeaderProps {
	title: string;
	lineColor: string;
}

export const ContentHeader: React.FC<ContentHeaderProps> = ({
	title,
	lineColor,
	children,
}) => {
	return (
		<Container>
			<TitleContainer lineColor={lineColor}>
				<h1>{title}</h1>
			</TitleContainer>

			<Controllers>{children}</Controllers>
		</Container>
	);
};
