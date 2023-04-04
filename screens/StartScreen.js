import React, { useState } from "react";
import { TextInput, View, StyleSheet, Text } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { Colors } from "../constants/Colors";
const StartScreen = () => {
	const [enteredMail, setEnteredMail] = useState("");
	return (
		<View style={styles.inputContainer}>
			<Text style={{ color: Colors.secondary600, fontSize: 24, fontWeight: "bold" }}>Email</Text>
			<TextInput
				style={styles.mailInput}
				keyboardType="url"
				autoCapitalize="none"
				autoCorrect={false}
			/>
			<View style={styles.buttonsContainer}>
				<View style={styles.buttonContainer}>
					<PrimaryButton>Login</PrimaryButton>
				</View>
			</View>
		</View>
	);
};

export default StartScreen;

const styles = StyleSheet.create({
	inputContainer: {
		justifyContent: "center",
		alignItems: "center",
		marginTop: 100,
		marginHorizontal: 20,
		borderRadius: 10,
		padding: 20,
		backgroundColor: Colors.primary800,
		elevation: 4,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
	},
	mailInput: {
		width: "100%",
		height: 40,
		borderColor: Colors.secondary600,
		borderWidth: 1,
		marginVertical: 10,
		color: Colors.secondary600,
		fontSize: 32,
		textAlign: "center",
		fontWeight: "bold",
	},
	buttonsContainer: {
		flexDirection: "row",
	},
	buttonContainer: {
		flex: 1,
	},
	inputLabel: {
		color: Colors.secondary600,
		fontSize: 24,
		fontWeight: "bold",
	},
});
