import { useRef, useState } from 'react';

enum Operadores {
	sumar,
	restar,
	multiplicar,
	dividir,
}

export const useCalculadora = () => {
	const [numeroAnterior, setNumeroAnterior] = useState('0');
	const [numero, setNumero] = useState('0');

	const ultimaOperacion = useRef<Operadores>();

	const limpiarFunc = () => {
		setNumero('0');
		setNumeroAnterior('0');
	};

	const armarNumeroFunc = (numeroTexto: string) => {
		// no acepta doble punto
		if (numero.includes('.') && numeroTexto === '.') {
			return;
		}

		if (numero.startsWith('0') || numero.startsWith('-0')) {
			// punto decimal
			if (numeroTexto === '.') {
				setNumero(numero + numeroTexto);
				// ver si es cero y ya hay punto
			} else if (numeroTexto === '0' && numero.includes('.')) {
				setNumero(numero + numeroTexto);
				// si es dif de 0 y no hay punto
			} else if (numeroTexto !== '0' && !numero.includes('.')) {
				setNumero(numeroTexto);
				// evitar 000.
			} else if (numeroTexto === '0' && !numero.includes('.')) {
				setNumero(numero);
			} else {
				setNumero(numero + numeroTexto);
			}
		} else {
			setNumero(numero + numeroTexto);
		}
	};

	const toggleSign = () => {
		if (numero.includes('-')) {
			setNumero(numero.replace('-', ''));
		} else {
			setNumero('-' + numero);
		}
	};

	const btnDelete = () => {
		const delText = numero.slice(0, -1);
		if (delText && delText !== '-') {
			setNumero(delText);
		} else if (delText && delText === '-') {
			setNumero('0');
		} else {
			setNumero('0');
		}
	};

	const cambiarNumPorAnt = () => {
		if (numero.endsWith('.')) {
			setNumeroAnterior(numero.slice(0, -1));
		} else {
			setNumeroAnterior(numero);
		}
		setNumero('0');
	};

	const btnDividir = () => {
		cambiarNumPorAnt();
		ultimaOperacion.current = Operadores.dividir;
	};

	const btnMultiplicar = () => {
		cambiarNumPorAnt();
		ultimaOperacion.current = Operadores.multiplicar;
	};

	const btnRestar = () => {
		cambiarNumPorAnt();
		ultimaOperacion.current = Operadores.restar;
	};

	const btnSumar = () => {
		cambiarNumPorAnt();
		ultimaOperacion.current = Operadores.sumar;
	};

	const calcular = () => {
		if (numeroAnterior === '0') {
			return;
		}

		const num1 = Number(numero);
		const num2 = Number(numeroAnterior);

		switch (ultimaOperacion.current) {
			case Operadores.sumar:
				setNumero(`${num1 + num2}`);
				break;

			case Operadores.restar:
				setNumero(`${num2 - num1}`);
				break;

			case Operadores.multiplicar:
				setNumero(`${num1 * num2}`);
				break;

			case Operadores.dividir:
				setNumero(`${num2 / num1}`);
				break;
		}

		setNumeroAnterior('0');
	};

	return {
		numeroAnterior,
		numero,
		limpiarFunc,
		armarNumeroFunc,
		toggleSign,
		btnDelete,
		btnDividir,
		btnMultiplicar,
		btnRestar,
		btnSumar,
		calcular,
	};
};
