import { Text, View, Pressable, StyleSheet } from "react-native";
import { Colors, primary700 } from "../constants/Colors";
const PrimaryButton = ({ children }) => {
	const pressHandler = () => {
		console.log("pressed");
	};
	return (
		<View style={styles.buttonOuter}>
			<Pressable
				style={({ pressed }) =>
					pressed ? [styles.buttonInner, styles.pressed] : [styles.buttonInner]
				}
				onPress={pressHandler}
				android_ripple={{ color: primary700 }}
			>
				<Text style={styles.buttonText}>{children}</Text>
			</Pressable>
		</View>
	);
};

export default PrimaryButton;

const styles = StyleSheet.create({
	buttonOuter: {
		borderRadius: 28,
		margin: 4,
		overflow: "hidden",
	},

	buttonInner: {
		backgroundColor: Colors.secondary500,
		paddingVertical: 8,
		paddingHorizontal: 16,
		elevation: 3,
	},
	buttonText: {
		color: "#fff",
		textAlign: "center",
	},
	pressed: {
		opacity: 0.75,
	},
});
