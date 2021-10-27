import React from "react";
import { AppRegistry } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";

import Navigation from "./src/components/Navbar/Navigation";
import app from "./app.json";

const App = () => {
	return (
		<PaperProvider>
			<Navigation />
		</PaperProvider>
	);
};

AppRegistry.registerComponent(app.expo.name, () => App);
export default App;