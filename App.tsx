import { Dimensions, StyleSheet, View } from "react-native";

export default function App() {
	const circleSizeMm = 15;

	const deviceWidth = Dimensions.get("window").width;
	const deviceScale = Dimensions.get("window").scale;

	const circleSizePt = ((circleSizeMm / 25.4) * deviceWidth) / deviceScale;

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
