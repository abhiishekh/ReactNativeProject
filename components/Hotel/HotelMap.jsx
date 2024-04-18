import { StyleSheet, TouchableOpacity, View, Linking } from 'react-native'
import React from 'react'
import MapView, { Marker } from 'react-native-maps'

const HotelMap = ({ coordinates }) => {
  const handleMapPress = () => {
    // Construct the URL for Google Maps directions
    const { latitude, longitude } = coordinates;
    const url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;

    // Open Google Maps with directions
    Linking.openURL(url);
  };

  return (
    <TouchableOpacity onPress={handleMapPress}>
      <MapView style={styles.maps} region={coordinates}>
        <Marker coordinate={coordinates} title={coordinates.title} />
      </MapView>
    </TouchableOpacity>
  )
}

export default HotelMap

const styles = StyleSheet.create({
  maps: {
    marginVertical: 10,
    height: 120,
    width: "100%",
    borderRadius: 12
  }
})
