import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ReviewTile from '../Tiles/Reviews/ReviewTile'

const ReviewList = ({reviews}) => {
  return (
   <FlatList 
   data={reviews}
   scrollEnabled={false}
   showsVerticalScrollIndicator={false}
   keyExtractor={(item)=> item._id}
   renderItem={({item}) =>(
    <ReviewTile review={item}/>
   )}
   />
  )
}

export default ReviewList

const styles = StyleSheet.create({})