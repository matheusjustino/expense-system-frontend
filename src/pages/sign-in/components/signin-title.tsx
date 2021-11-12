import React, { ReactNode } from 'react';
import styled from 'styled-components';

// COMPONENTS
import { TitleRoot } from './title-root';

interface SignInTitle {
	text: string;
	size: 1 | 2 | 3 | 4 | 5 | 6;
	children?: ReactNode;
}

export const SignInTitle: React.FC<SignInTitle> = ({ text, size }) => {
	const buildText = () => {
		return `<h${size}>${text}</h${size}>`;
	};

	return <Root dangerouslySetInnerHTML={{ __html: buildText() }} />;
};

const Root = styled(TitleRoot)`
	margin-bottom: 2.5rem;

	color: ${(props) => props.theme.colors.info};
`;
