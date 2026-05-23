
import AllCar from '@/components/AllCar';
import ImageSlider from '@/components/ImageSlider';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';

export default function Index() {
	return (
		<View style={{ flex: 1, backgroundColor: '#fff' }}>
			{/* <ScrollView contentContainerStyle={{ paddingBottom: 24 }}> */}
				<ImageSlider />

				<View className="mt-8 items-center" style={{ paddingHorizontal: 16 }}>
					<Text className="text-3xl font-bold text-gray-900">Explore All the Models</Text>
					<Text className="text-base text-gray-500 mt-2 text-center" style={{ maxWidth: 520 }}>
						Discover the full range of our AI models and their capabilities.
					</Text>

					<View className="mt-4 h-1 w-16 rounded-full bg-blue-500 shadow-sm" />
				</View>

				<AllCar />
			{/* </ScrollView> */}
		</View>
	);
}

