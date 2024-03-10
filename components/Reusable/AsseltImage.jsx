import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AsseltImage = ({width,height,radius,mode,data}) => {
  return (
    <Image source={data} style={styles.image(width,height,radius,mode)}/>
  )
}

export default AsseltImage

const styles = StyleSheet.create({
    image:(width,height,radius,mode)=>({
        width:width,
        height:height,
        borderRadius:radius,
        resizeMode:mode,
    })
})