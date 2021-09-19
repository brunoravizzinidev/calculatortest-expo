import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

Reactotron.setAsyncStorageHandler(AsyncStorage)
	.configure({
		port: 9090,
	})
	.useReactNative({
		asyncStorage: false,
		networking: {
			ignoreUrls: /symbolicate|127.0.0.1/,
		},
		editor: false,
		errors: { veto: (stackFrame) => false },
		overlay: false,
	})
	.connect();
