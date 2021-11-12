import React from 'react';

// STYLES
import { Container } from './styles';

interface SelectInputProps {
	options: {
		value: string | number;
		label: string;
	}[];
}

export const SelectInput: React.FC<SelectInputProps> = ({ options }) => {
	return (
		<Container>
			<select>
				{options.map((option, index) => {
					return (
						<option key={index} value={option.value}>
							{option.label}
						</option>
					);
				})}
			</select>
		</Container>
	);
};
