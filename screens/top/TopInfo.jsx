import { View, Text } from 'react-native'
import React from 'react'
import ProfileTile from '../../components/Reusable/ProfileTile'

const TopInfo = ({navigation}) => {
  return (
    <View style={{marginTop:20,marginHorizontal:10}}>
      <ProfileTile title={"Personal Information" } icon={'user'}/>
      <ProfileTile title={"Payments" } icon={'creditcard'} onPress={()=>navigation.navigate('Payments')}/>
      <ProfileTile title={"Settings" } icon={'setting'} onPress={()=>navigation.navigate('Settings')}/>

    </View>
  )
}

export default TopInfo