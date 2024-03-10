import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView, { Marker } from 'react-native-maps'

const Location = () => {
  const coordinates = {
    latitude: 25.321684,
    longitude: 82.987289,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
    title: "My Location"
  };
  return (
    <MapView initialRegion={coordinates} style={styles.mapStyle}>
      <Marker coordinate={coordinates} title={coordinates.title} />
    </MapView>
  )
}

export default Location

const styles = StyleSheet.create({
  mapStyle:{
    ...StyleSheet.absoluteFillObject
  }
})