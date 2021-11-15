import React, { useCallback, useMemo, useState, ChangeEvent } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import CurrencyInput from 'react-currency-input-field';
import DatePicker, { registerLocale } from 'react-datepicker';
import ptBR from 'date-fns/locale/pt-BR';
registerLocale('ptBR', ptBR);

// ENUM
import { DarkColors } from '../../enums/dark-colors.enum';
import { ListDataFrequency } from '../../enums/list-data-frequency.enum';

// COMPONENTS
import { ContentHeader } from '../../components/content-header';
import { SelectInput } from '../../components/select-input';

// STYLES
import {
	Container,
	Content,
	Form,
	InputWrapper,
	SpanWrapper,
	DateInputWrapper,
	DatePickerWrapper,
	ButtonWrapper,
} from './styles';

export const AccountPost: React.FC = () => {
	const [description, setDescription] = useState<string>('');
	const [amount, setAmount] = useState<number | undefined>(undefined);
	const [type, setType] = useState('entry');
	const [frequency, setFrequency] = useState<string>(
		ListDataFrequency['OCCASIONAL'],
	);
	const [startDate, setStartDate] = useState(new Date());

	const handleChangeAmount = (value: string | undefined) => {
		if (value === ',') {
			buildToast('error', 'Valor inválido ou mal formatado');
			return;
		}

		let newValue = 0;
		if (value) {
			const [valueLeft, valueRight] = value.split(',');

			if (valueRight && !!valueRight) {
				newValue = Number([valueLeft, valueRight].join('.'));
			} else {
				newValue = Number(valueLeft);
			}
		}

		setAmount(newValue);
	};

	const frequencyOptions = useMemo(
		() => [
			{
				value: ListDataFrequency.OCCASIONAL,
				label: 'Eventual',
			},
			{
				value: ListDataFrequency.RECURRENT,
				label: 'Recorrente',
			},
		],
		[],
	);

	const typeOptions = useMemo(
		() => [
			{
				value: 'entry',
				label: 'Entrada',
			},
			{
				value: 'exit',
				label: 'Saída',
			},
		],
		[],
	);

	const buildToast = useCallback((type: 'error' | 'success', msg: string) => {
		toast(msg, {
			type: type,
			autoClose: 2000,
			pauseOnFocusLoss: false,
		});
	}, []);

	const verifyInput = () => {
		if (!amount) {
			buildToast('error', 'O valor não pode ser 0');
			return false;
		}

		if (!!!description) {
			buildToast('error', 'A descrição não pode ser vazia');
			return false;
		}

		return true;
	};

	const handleChangeDescription = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			setDescription(e.target.value);
		},
		[],
	);

	const handleChangeTypeSelect = useCallback(
		(e: ChangeEvent<HTMLSelectElement>) => {
			setType(e.target.value);
		},
		[],
	);

	const handleChangeFrequencySelect = useCallback(
		(e: ChangeEvent<HTMLSelectElement>) => {
			setFrequency(e.target.value);
		},
		[],
	);

	const handleChangeDate = useCallback((e: Date) => {
		setStartDate(e);
	}, []);

	const handleSubmit = () => {
		if (verifyInput()) {
			buildToast('success', 'Novo registro');
			console.log(description, amount, type, frequency, startDate);
		}
	};

	return (
		<Container>
			<ContentHeader title="Novo Registro" lineColor={DarkColors.INFO} />

			<ToastContainer />

			<Content>
				<Form>
					<div className="row">
						<div className="col-lg-6 mb-3">
							<div className="input-group">
								<div className="input-group-prepend">
									<SpanWrapper>
										<span className="input-group-text">
											Descrição
										</span>
									</SpanWrapper>
								</div>
								<InputWrapper
									maxLength={62}
									className="form-control"
									type="text"
									value={description}
									onChange={handleChangeDescription}
								/>
							</div>
						</div>

						<div className="col-lg-6 mb-3">
							<div className="input-group">
								<div className="input-group-prepend">
									<SpanWrapper>
										<span className="input-group-text">
											Valor
										</span>
									</SpanWrapper>
								</div>
								<CurrencyInput
									placeholder="R$"
									decimalsLimit={2}
									allowNegativeValue={false}
									onValueChange={handleChangeAmount}
									decimalSeparator=","
									className="form-control"
								/>
							</div>
						</div>

						<div className="col-lg-3 mb-3">
							<div className="input-group">
								<div className="input-group-prepend">
									<SpanWrapper>
										<span className="input-group-text">
											Tipo
										</span>
									</SpanWrapper>
								</div>
								<SelectInput
									onChange={handleChangeTypeSelect}
									defaultValue="entry"
									options={typeOptions}
								/>
							</div>
						</div>

						<div className="col-lg-3 mb-3">
							<div className="input-group">
								<div className="input-group-prepend">
									<SpanWrapper>
										<span className="input-group-text">
											Frequência
										</span>
									</SpanWrapper>
								</div>
								<SelectInput
									onChange={handleChangeFrequencySelect}
									defaultValue={ListDataFrequency.OCCASIONAL}
									options={frequencyOptions}
								/>
							</div>
						</div>

						<div className="col-lg-3 mb-3">
							<DateInputWrapper className="input-group">
								<div className="input-group-prepend">
									<SpanWrapper>
										<span className="input-group-text">
											Data
										</span>
									</SpanWrapper>
								</div>
								<DatePickerWrapper>
									<DatePicker
										className="date-picker"
										locale="ptBR"
										dateFormat="dd/MM/yyyy"
										selected={startDate}
										onChange={handleChangeDate}
									/>
								</DatePickerWrapper>
							</DateInputWrapper>
						</div>
					</div>

					<ButtonWrapper className="mt-5">
						<button
							onClick={handleSubmit}
							type="button"
							className="btn"
						>
							Criar
						</button>
					</ButtonWrapper>
				</Form>
			</Content>
		</Container>
	);
};
