import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
	const myName = 'Florian';
	return (
		<View>
			<Text style={styles.textStyle}>Getting Started with React Native!</Text>
			<Text style={styles.nameStyle}>My name is {myName}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	textStyle: {
		fontSize: 45
	},
	nameStyle: {
		fontSize: 20
	}
});

export default ComponentsScreen;
