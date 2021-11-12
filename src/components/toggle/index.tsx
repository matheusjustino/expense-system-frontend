import React, { useState } from 'react';

// CONTEXT
import { useTheme } from '../../contexts/theme.context';

// COMPONENTS
import { Container, ToggleLabel, ToggleSelector } from './styles';

export const Toggle: React.FC = () => {
	const [checked, setChecked] = useState<boolean>(true);
	const { toggleTheme } = useTheme();

	const handleSwitch = () => {
		toggleTheme();
		setChecked(!checked);
	};

	return (
		<Container>
			<ToggleLabel>Light</ToggleLabel>
			<ToggleSelector
				checked={checked}
				onChange={handleSwitch}
				checkedIcon={false}
				uncheckedIcon={false}
			/>
			<ToggleLabel>Dark</ToggleLabel>
		</Container>
	);
};
