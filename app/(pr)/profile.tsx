import React from 'react';
import {  Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function Profile() {
  return (
    <SafeAreaView>
      <View >
        <Text className="text-xl font-bold text-blue-500">
          Welcome to Nativewind!
        </Text>
      </View>
    </SafeAreaView>
  );
}

