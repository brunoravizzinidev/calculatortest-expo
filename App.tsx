import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView } from 'react-native';
import CalculadoraScreen from './src/screens/CalculadoraScreen';
import { stylesMaster } from './src/theme/appTheme';

export default function App() {
	return (
		<SafeAreaView style={stylesMaster.fondo}>
			<StatusBar backgroundColor="#eeeeee" style="dark" />
			<CalculadoraScreen />
		</SafeAreaView>
	);
}
