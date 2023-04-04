import { StyleSheet, ImageBackground } from "react-native";
import StartScreen from "./screens/StartScreen";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "./constants/Colors";
export default function App() {
	return (
		<LinearGradient colors={[Colors.primary600, Colors.secondary500]} style={styles.rootScreen}>
			<ImageBackground
				source={require("./assets/background.png")}
				resizeMode="cover"
				style={styles.rootScreen}
				imageStyle={styles.backgroundImage}
			>
				<StartScreen />
			</ImageBackground>
		</LinearGradient>
	);
}

const styles = StyleSheet.create({
	rootScreen: {
		flex: 1,
	},
	backgroundImage: {
		opacity: 0.3,
	},
});
