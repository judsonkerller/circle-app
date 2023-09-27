import { StatusBar } from "expo-status-bar";
import { Dimensions, StyleSheet, Text, View } from "react-native";

export default function App() {
	// Tamanho do círculo em milímetros
	const circleSizeMm = 15;

	const deviceWidth = Dimensions.get("window").width;
	const deviceScale = Dimensions.get("window").scale;

	console.log("Scale", deviceScale);
	console.log("Width", deviceWidth);

	const circleSizePt = (circleSizeMm / 25.4) * deviceWidth;

	return (
		<View style={styles.container}>
			<View
				style={[
					styles.circle,
					{ width: circleSizePt, height: circleSizePt },
				]}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	circle: {
		backgroundColor: "blue",
		borderRadius: 999,
	},
});
