import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'
import CategoriesData from '../data/CategoriesData'

const Categories = () => {
  return (
    <ScrollView
    contentContainerStyle={{
        paddingHorizontal: 15,
        paddingVertical: 10
    }}
        horizontal
        showsHorizontalScrollIndicator={false}

    >
      {CategoriesData.map((category) => {
        return (
          <CategoryCard title={category.title} imgUrl={category.imgURL} />
        )
      })}
    </ScrollView>
  )
}

export default Categories