import React, { createContext, ReactNode, useContext } from 'react';
import { toast, ToastContainer } from 'react-toastify';

interface ToastContextData {
	buildToast: (type: 'error' | 'success', msg: string) => void;
}

interface ToastProviderProps {
	children?: ReactNode;
}

export const ToastContext = createContext<ToastContextData>(
	{} as ToastContextData,
);

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
	const buildToast = (type: 'error' | 'success', msg: string) => {
		toast(msg, {
			type: type,
			autoClose: 2000,
			pauseOnFocusLoss: false,
		});
	};

	const toastProviderData: ToastContextData = {
		buildToast,
	};

	return (
		<ToastContext.Provider value={toastProviderData}>
			<ToastContainer />
			{children}
		</ToastContext.Provider>
	);
};

export const useToast = () => {
	const toastContext = useContext(ToastContext);
	return toastContext;
};
