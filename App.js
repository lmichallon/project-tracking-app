import React from "react";
import { AppRegistry } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";

import Home from "./src/pages/Home/Home"
import app from "./app.json";

const App = () => {
	return (
		<PaperProvider>
			<Home />
		</PaperProvider>
	);
};

AppRegistry.registerComponent(app.expo.name, () => App);
export default App;