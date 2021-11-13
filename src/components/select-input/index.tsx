import React, { ChangeEvent } from 'react';

// STYLES
import { Container } from './styles';

interface SelectInputOptions {
	value: string | number;
	label: string | number;
}

interface SelectInputProps {
	options: readonly SelectInputOptions[];
	defaultValue?: string | number;
	onChange: (event: ChangeEvent<HTMLSelectElement>) => void | undefined;
}

export const SelectInput: React.FC<SelectInputProps> = ({
	options,
	defaultValue,
	onChange,
}) => {
	return (
		<Container>
			<select onChange={onChange} defaultValue={defaultValue}>
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
