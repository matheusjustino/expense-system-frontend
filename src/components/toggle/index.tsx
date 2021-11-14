import React, { useState } from 'react';

// CONTEXT
import { useTheme } from '../../contexts/theme.context';

// ENUMS
import { ThemeNames } from '../../enums/theme-names.enum';

// COMPONENTS
import { Container, ToggleLabel, ToggleSelector } from './styles';

export const Toggle: React.FC = () => {
	const { theme, toggleTheme } = useTheme();

	const [checked, setChecked] = useState<boolean>(
		() => theme.title !== ThemeNames.LIGHT,
	);

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
