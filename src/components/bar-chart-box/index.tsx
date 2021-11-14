import React from 'react';
import { ResponsiveContainer, BarChart, Bar, Cell, Tooltip } from 'recharts';

// INTERFACES
import { BarChartBoxData } from '../../interfaces/bar-chart-box-data.interface';

// UTILS
import { FormatCurrency } from '../../utils/format-currency.utils';

// STYLES
import {
	Container,
	SideLeft,
	SideRight,
	LegendContainer,
	Legend,
} from './styles';

interface BarChartBoxProps {
	title: string;
	data: BarChartBoxData[];
}

export const BarChartBox: React.FC<BarChartBoxProps> = ({ title, data }) => {
	return (
		<Container>
			<SideLeft>
				<h2>{title}</h2>

				<LegendContainer>
					{data.map((indicator, index) => {
						return (
							<Legend key={index} color={indicator.color}>
								<div>{indicator.percent}%</div>
								<span>{indicator.name}</span>
							</Legend>
						);
					})}
				</LegendContainer>
			</SideLeft>

			<SideRight>
				<ResponsiveContainer>
					<BarChart data={data}>
						<Tooltip
							cursor={{ fill: 'none' }}
							formatter={FormatCurrency}
						/>
						<Bar dataKey="amount" name="Valor">
							{data.map((indicator) => {
								return (
									<Cell
										key={indicator.name}
										cursor="pointer"
										fill={indicator.color}
									/>
								);
							})}
						</Bar>
					</BarChart>
				</ResponsiveContainer>
			</SideRight>
		</Container>
	);
};
