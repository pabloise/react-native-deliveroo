import { View, Text, ScrollView } from 'react-native'
import {ArrowRightIcon} from 'react-native-heroicons/outline'
import React from 'react'
import RestaurantCard from './RestaurantCard'
import featuredCategories from '../data/featuredCategories'
import offersData from '../data/offersData'
import featuredData from '../data/featuredData'
import tastyData from '../data/tastyData'

const FeaturedRow = () => {

  return (
      featuredCategories.map((category) => {
        return (
          <View>
            <View className='mt-4 flex-row items-center justify-between px-4'>
              <Text className='font-bold text-lg'>{category.name}</Text>
              <ArrowRightIcon color='#00CCBB' />
            </View>
            <Text className='text-xs text-gray-500 px-4'>{category.short_description}</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                  paddingHorizontal: 15
              }}
              className='pt-4'
            >
              {category.id === 1 && <RestaurantCard data={offersData} />}
              {category.id === 2 && <RestaurantCard data={featuredData} />}
              {category.id === 3 && <RestaurantCard data={tastyData} />}
            </ScrollView>
          </View>
        )
      })
  )
}

export default FeaturedRow