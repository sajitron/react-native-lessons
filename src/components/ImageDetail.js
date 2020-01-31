import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = ({ title, imageSrc }) => {
	return (
		<View>
			<Image source={imageSrc} />
			<Text>{title}</Text>
		</View>
	);
};

const styles = StyleSheet.create({});

export default ImageDetail;
