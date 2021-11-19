import React, { useCallback, useMemo, useState, ChangeEvent } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import CurrencyInput from 'react-currency-input-field';
import DatePicker, { registerLocale } from 'react-datepicker';
import ptBR from 'date-fns/locale/pt-BR';
registerLocale('ptBR', ptBR);

// SERVICES
import { createAccountPost } from '../../services/account-post.service';

// ENUM
import { DarkColors } from '../../enums/dark-colors.enum';
import { ListDataFrequency } from '../../enums/list-data-frequency.enum';
import { LocalStorageKeys } from '../../enums/local-storage-keys.enum';

// TYPES
import { AccountPostFrequency } from '../../types/account-post-frequency.type';
import { AccountPostType } from '../../types/account-post-type.type';

// ENUMS
import { CreateAccountPost } from '../../interfaces/create-account-post.interface';
import { AccountInfo } from '../../interfaces/account-info.interface';

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
	const buildForm = useCallback(() => {
		setDescription('');
		setStartDate(new Date());
	}, []);

	const [description, setDescription] = useState<string>('');
	const [amount, setAmount] = useState<number>(0);
	const [type, setType] = useState<AccountPostType>('entry');
	const [frequency, setFrequency] =
		useState<AccountPostFrequency>('recurrent');
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
				value: ListDataFrequency.RECURRENT,
				label: 'Recorrente',
			},
			{
				value: ListDataFrequency.OCCASIONAL,
				label: 'Eventual',
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
			setType(e.target.value as AccountPostType);
		},
		[],
	);

	const handleChangeFrequencySelect = useCallback(
		(e: ChangeEvent<HTMLSelectElement>) => {
			setFrequency(e.target.value as AccountPostFrequency);
		},
		[],
	);

	const handleChangeDate = useCallback((e: Date) => {
		setStartDate(e);
	}, []);

	const handleSubmit = async () => {
		try {
			if (verifyInput()) {
				const localUser = localStorage.getItem(LocalStorageKeys.USER);

				if (localUser) {
					const accountInfo: AccountInfo = JSON.parse(localUser);

					const payload: CreateAccountPost = {
						description,
						amount,
						type,
						frequency,
						date: startDate,
						userId: accountInfo.id,
					};

					await createAccountPost(payload);

					buildForm();
					buildToast('success', 'Novo registro');
				}
			}
		} catch (error) {
			buildToast('error', error as string);
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
									defaultValue={type}
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
									defaultValue={frequency}
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
