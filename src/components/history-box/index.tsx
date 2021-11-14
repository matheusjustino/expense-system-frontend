import React from 'react';
import {
	ResponsiveContainer,
	LineChart,
	Line,
	XAxis,
	CartesianGrid,
	Tooltip,
} from 'recharts';

// UTILS
import { FormatCurrency } from '../../utils/format-currency.utils';

// INTERFACES
import { HistoryBoxData } from '../../interfaces/history-box-data.interface';

// STYLES
import {
	Container,
	ChartContainer,
	Header,
	LegendContainer,
	Legend,
} from './styles';

interface HistoryBoxProps {
	data: HistoryBoxData[];
	lineColorGains: string;
	lineColorExpenses: string;
	historyFilter: string;
}

export const HistoryBox: React.FC<HistoryBoxProps> = ({
	data,
	lineColorExpenses,
	lineColorGains,
	historyFilter,
}) => {
	return (
		<Container>
			<Header>
				<h2>Histórico Anual</h2>

				<LegendContainer>
					<Legend color={lineColorGains}>
						<div></div>
						<span>Entradas</span>
					</Legend>

					<Legend color={lineColorExpenses}>
						<div></div>
						<span>Saídas</span>
					</Legend>
				</LegendContainer>
			</Header>

			<ChartContainer>
				<ResponsiveContainer>
					<LineChart
						data={data}
						margin={{ right: 20, left: 20, top: 10, bottom: 10 }}
					>
						<CartesianGrid strokeDasharray="3 3" stroke="#cecece" />
						<XAxis dataKey={historyFilter} stroke="#cecece" />
						<Tooltip formatter={FormatCurrency} />

						<Line
							type="monotone"
							dataKey="gains"
							name="Entradas"
							stroke={lineColorGains}
							strokeWidth={5}
							dot={{ r: 4 }}
							activeDot={{ r: 7 }}
						/>

						<Line
							type="monotone"
							dataKey="expenses"
							name="Saídas"
							stroke={lineColorExpenses}
							strokeWidth={5}
							dot={{ r: 4 }}
							activeDot={{ r: 7 }}
						/>
					</LineChart>
				</ResponsiveContainer>
			</ChartContainer>
		</Container>
	);
};
