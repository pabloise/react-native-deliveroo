import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import {StarIcon} from 'react-native-heroicons/solid'
import {MapPinIcon} from 'react-native-heroicons/outline'
import { useNavigation } from '@react-navigation/native'

const RestaurantCard = ({data}) => {

  const navigation = useNavigation()

  return (
      data.map((item) => {
        return (
          <TouchableOpacity 
          className='bg-white mr-3 shadow pb-4'
          onPress={() => navigation.navigate('RestaurantScreen', {
            id: item.id,
            imgUrl: item.imgUrl,
            title: item.title,
            rating: item.rating,
            genre: item.genre,
            address: item.address,
            short_description: item.short_description,
            dishes: item.dishes,
            long: item.long,
            lat: item.lat
          })}
          >
            <Image
              source={{
                uri: item.imgUrl
              }}
              className='h-36 w-64 rounded-sm'
            />
            <View className='px-3 pb-4'>
              <Text className='font-bold text-lg pt-2'>{item.title}</Text>
            </View>
            <View className='flex-row items-center space-x-1 ml-2'>
              <StarIcon color='green' opacity={0.5} size={22} />
              <Text className='text-xs text-gray-500'>
                <Text className='text-green-500'>{item.rating}</Text> - {item.genre}
              </Text>
            </View>
            <View className='flex-row items-center space-x-1 ml-2'>
              <MapPinIcon color='gray' opacity={0.4} size={22}/>
              <Text className='text-xs text-gray-500'>Nearby - {item.address}</Text>
            </View>
          </TouchableOpacity>
        )
      })
  )
}

export default RestaurantCard