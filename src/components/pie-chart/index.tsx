import React from 'react';
import {
	PieChart as PieChartRc,
	Pie,
	ResponsiveContainer,
	Cell,
} from 'recharts';

// INTERFACES
import { PieChartData } from '../../interfaces/pie-chart-data.interface';

// STYLES
import {
	Container,
	SideLeft,
	LegendContainer,
	Legend,
	SideRight,
} from './styles';

interface PieChartProps {
	data: PieChartData[];
}

export const PieChart: React.FC<PieChartProps> = ({ data }) => {
	return (
		<Container>
			<SideLeft>
				<h2>Relação</h2>
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
					<PieChartRc>
						<Pie data={data} dataKey="percent">
							{data.map((indicator, index) => {
								console.log(indicator);
								return (
									<Cell key={index} fill={indicator.color} />
								);
							})}
						</Pie>
					</PieChartRc>
				</ResponsiveContainer>
			</SideRight>
		</Container>
	);
};
