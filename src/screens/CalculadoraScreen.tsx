import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

import { stylesMaster } from '../theme/appTheme';
import BotonCalc from '../components/BotonCalc';
import { useCalculadora } from '../hooks/useCalculadora';

const CalculadoraScreen = () => {
	const {
		numero,
		numeroAnterior,
		armarNumeroFunc,
		limpiarFunc,
		toggleSign,
		btnDelete,
		btnDividir,
		btnRestar,
		btnMultiplicar,
		btnSumar,
		calcular,
	} = useCalculadora();

	return (
		<View style={stylesMaster.calcContainer}>
			{numeroAnterior !== '0' && (
				<Text style={stylesMaster.resultadoSmall}>
					{numeroAnterior}
				</Text>
			)}
			<Text
				style={stylesMaster.resultado}
				numberOfLines={1}
				adjustsFontSizeToFit={true}
			>
				{numero}
			</Text>
			<View style={stylesMaster.rowStyle}>
				<BotonCalc texto="C" action={limpiarFunc} color="#9B9B9B" />
				<BotonCalc texto="+/-" color="#9B9B9B" action={toggleSign} />
				<BotonCalc texto="Del" color="#9B9B9B" action={btnDelete} />
				<BotonCalc texto="/" color="#f11b1b" action={btnDividir} />
			</View>
			<View style={stylesMaster.rowStyle}>
				<BotonCalc texto="7" action={armarNumeroFunc} />
				<BotonCalc texto="8" action={armarNumeroFunc} />
				<BotonCalc texto="9" action={armarNumeroFunc} />
				<BotonCalc texto="X" color="#f11b1b" action={btnMultiplicar} />
			</View>
			<View style={stylesMaster.rowStyle}>
				<BotonCalc texto="4" action={armarNumeroFunc} />
				<BotonCalc texto="5" action={armarNumeroFunc} />
				<BotonCalc texto="6" action={armarNumeroFunc} />
				<BotonCalc texto="-" color="#f11b1b" action={btnRestar} />
			</View>
			<View style={stylesMaster.rowStyle}>
				<BotonCalc texto="1" action={armarNumeroFunc} />
				<BotonCalc texto="2" action={armarNumeroFunc} />
				<BotonCalc texto="3" action={armarNumeroFunc} />
				<BotonCalc texto="+" color="#f11b1b" action={btnSumar} />
			</View>
			<View style={stylesMaster.rowStyle}>
				<BotonCalc texto="0" action={armarNumeroFunc} ancho />
				<BotonCalc texto="." action={armarNumeroFunc} />
				<BotonCalc texto="=" color="#f11b1b" action={calcular} />
			</View>
		</View>
	);
};

export default CalculadoraScreen;
