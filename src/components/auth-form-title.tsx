import React, { ReactNode } from 'react';
import styled from 'styled-components';

// COMPONENTS
import { TitleRoot } from './title-root';

interface AuthFormTitleProps {
	text: string;
	size: 1 | 2 | 3 | 4 | 5 | 6;
	children?: ReactNode;
}

export const AuthFormTitle: React.FC<AuthFormTitleProps> = ({ text, size }) => {
	const buildText = () => {
		return `<h${size}>${text}</h${size}>`;
	};

	return <Root dangerouslySetInnerHTML={{ __html: buildText() }} />;
};

const Root = styled(TitleRoot)`
	margin-bottom: 1.5rem;
`;
