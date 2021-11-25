import React, { useMemo } from 'react';
import CountUp from 'react-countup';

// STYLES
import { Container } from './styles';

// IMAGES
import dollarImg from '../../assets/images/dollar.svg';
import arrowUp from '../../assets/images/arrow-up.svg';
import arrowDown from '../../assets/images/arrow-down.svg';

interface WalletBoxProps {
	title: string;
	amount: number;
	footerLabel: string;
	icon: 'dollar' | 'arrowUp' | 'arrowDown';
	color: string;
}

export const WalletBox: React.FC<WalletBoxProps> = ({
	title,
	amount,
	footerLabel,
	icon,
	color,
}) => {
	const iconSelected = useMemo(() => {
		switch (icon) {
			case 'dollar':
				return dollarImg;
			case 'arrowUp':
				return arrowUp;
			case 'arrowDown':
				return arrowDown;
			default:
				return undefined;
		}
	}, [icon]);

	return (
		<Container color={color}>
			<span>{title}</span>
			<h1>
				<strong>R$ </strong>
				<CountUp
					duration={1}
					delay={0}
					start={0}
					end={amount}
					// prefix="R$ "
					separator="."
					decimal=","
					decimals={2}
					preserveValue={true}
				/>
			</h1>
			<small>{footerLabel}</small>
			<img src={iconSelected} alt={title} />
		</Container>
	);
};
