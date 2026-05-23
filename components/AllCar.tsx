import React from 'react';
import { FlatList, Image, Text, View } from 'react-native';

const bmwCars = [
  {
    id: 1,
    name: 'BMW M3 Competition',
    model: '2024',
    price: 85000,
    color: 'Black',
    image:
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80',
    engine: '3.0L Twin-Turbo Inline-6',
    horsepower: 503,
    transmission: '8-Speed Automatic',
    fuelType: 'Petrol',
    mileage: '12 km/l',
    seatingCapacity: 5,
    stock: 8,
  },
  {
    id: 2,
    name: 'BMW M4 Coupe',
    model: '2024',
    price: 90000,
    color: 'Blue',
    image:
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
    engine: '3.0L Twin-Turbo Inline-6',
    horsepower: 503,
    transmission: '8-Speed Automatic',
    fuelType: 'Petrol',
    mileage: '11 km/l',
    seatingCapacity: 4,
    stock: 5,
  },
  {
    id: 3,
    name: 'BMW X5 xDrive40i',
    model: '2025',
    price: 72000,
    color: 'White',
    image:
      'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80',
    engine: '3.0L Turbo Inline-6',
    horsepower: 375,
    transmission: '8-Speed Automatic',
    fuelType: 'Petrol',
    mileage: '10 km/l',
    seatingCapacity: 7,
    stock: 12,
  },
  {
    id: 4,
    name: 'BMW X7 M60i',
    model: '2025',
    price: 110000,
    color: 'Grey',
    image:
      'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1200&q=80',
    engine: '4.4L Twin-Turbo V8',
    horsepower: 523,
    transmission: '8-Speed Automatic',
    fuelType: 'Petrol',
    mileage: '8 km/l',
    seatingCapacity: 7,
    stock: 4,
  },
  {
    id: 5,
    name: 'BMW i4 eDrive40',
    model: '2024',
    price: 58000,
    color: 'Red',
    image:
      'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80',
    engine: 'Electric Motor',
    horsepower: 335,
    transmission: 'Single-Speed',
    fuelType: 'Electric',
    mileage: '484 km/range',
    seatingCapacity: 5,
    stock: 10,
  },
  {
    id: 6,
    name: 'BMW i7 xDrive60',
    model: '2025',
    price: 125000,
    color: 'Silver',
    image:
      'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=80',
    engine: 'Dual Electric Motor',
    horsepower: 536,
    transmission: 'Single-Speed',
    fuelType: 'Electric',
    mileage: '500 km/range',
    seatingCapacity: 5,
    stock: 3,
  },
  {
    id: 7,
    name: 'BMW 330i Sedan',
    model: '2024',
    price: 47000,
    color: 'White',
    image:
      'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1200&q=80',
    engine: '2.0L Turbo Inline-4',
    horsepower: 255,
    transmission: '8-Speed Automatic',
    fuelType: 'Petrol',
    mileage: '14 km/l',
    seatingCapacity: 5,
    stock: 15,
  },
  {
    id: 8,
    name: 'BMW 530i Sedan',
    model: '2025',
    price: 62000,
    color: 'Black',
    image:
      'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80',
    engine: '2.0L Turbo Inline-4',
    horsepower: 255,
    transmission: '8-Speed Automatic',
    fuelType: 'Petrol',
    mileage: '13 km/l',
    seatingCapacity: 5,
    stock: 7,
  },
  {
    id: 9,
    name: 'BMW X3 xDrive30i',
    model: '2024',
    price: 51000,
    color: 'Blue',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    engine: '2.0L Turbo Inline-4',
    horsepower: 248,
    transmission: '8-Speed Automatic',
    fuelType: 'Petrol',
    mileage: '12 km/l',
    seatingCapacity: 5,
    stock: 9,
  },
  {
    id: 10,
    name: 'BMW XM',
    model: '2025',
    price: 160000,
    color: 'Green',
    image:
      'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80',
    engine: '4.4L Twin-Turbo V8 Hybrid',
    horsepower: 644,
    transmission: '8-Speed Automatic',
    fuelType: 'Hybrid',
    mileage: '9 km/l',
    seatingCapacity: 5,
    stock: 2,
  },
];


export default function AllCar() {
  return (
    <View className="flex-1 bg-gray-100">
      <FlatList
        data={bmwCars}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ padding: 12 }}
        renderItem={({ item }) => (
          <View className="flex-row bg-white rounded-2xl mb-3 overflow-hidden shadow-sm">

            <Image
              source={{ uri: item.image }}
              className="w-36 h-28"
              resizeMode="cover"
            />

            <View className="flex-1 p-3 justify-center">
              <Text className="text-base font-bold text-gray-900 mb-2">{item.name}</Text>

              <View className="flex-row justify-between items-center">
                <Text className="text-sm text-gray-700">Model {item.model}</Text>
                <Text className="text-sm text-blue-600 font-semibold">${item.price.toLocaleString()}</Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}
