import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import reusable from '../../components/Reusable/reusable.style'
import {  HeightSpacer, ReusableText } from '../../components'
import { COLORS, SIZES, TEXT } from '../../constants/theme'
import {AntDesign}  from '@expo/vector-icons';
import styles from './home.style'
// import Places from '../../components/Home/Places'
import Places from '../../components/Home/Places'
import Recomendation from '../../components/Home/Recomendation'
import BestHotels from '../../components/Home/BestHotels'

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={reusable.container}>
     <View>
      <View style={reusable.rowWithSpace('space-between')}>
      <ReusableText 
        text={"Hey Abhishek! "} 
        family="regular"
        size={TEXT.large}
        color={COLORS.black}
        />

        <TouchableOpacity style={styles.box}
        onPress={()=> navigation.navigate('Search')}
        >
          <AntDesign name='search1' size={26}/>
        </TouchableOpacity>
      </View>

      <HeightSpacer height={SIZES.xLarge}/>
      <ReusableText 
        text={"Places"} 
        family="medium"
        size={TEXT.large}
        color={COLORS.black}
        />
        <Places/>

        <HeightSpacer height={15}/>

      <Recomendation/>

      <HeightSpacer height={20}/>
      <BestHotels/>


     </View>
    </SafeAreaView>
  )
}

export default Home

