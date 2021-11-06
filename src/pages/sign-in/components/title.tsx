import React, { ReactNode } from 'react';

// COMPONENTS
import { TitleRoot } from './title-root';

interface Title {
	text: string;
	size: 1 | 2 | 3 | 4 | 5 | 6;
	children?: ReactNode;
}

export const Title: React.FC<Title> = ({ text, size }) => {
	const buildText = () => {
		return `<h${size}>${text}</h${size}>`;
	};

	return <TitleRoot dangerouslySetInnerHTML={{ __html: buildText() }} />;
};
