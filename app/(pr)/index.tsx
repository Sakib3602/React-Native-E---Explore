import ImageSlider from '@/components/ImageSlider';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function Index() {
	return (
	
			<View >
				<ImageSlider></ImageSlider>
			</View>
		
	);
}

const styles = StyleSheet.create({
	container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
	text: { fontSize: 18 },
});
