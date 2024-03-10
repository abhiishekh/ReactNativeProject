import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppBar from '../../components/Reusable/AppBar';
import { COLORS, SIZES } from '../../constants/theme';
import ReusableTile from '../../components/Reusable/ReusableTile';
import { HeightSpacer, Reusablebtn } from '../../components';


const SelectRoom = ({ navigation }) => {
  const rooms =  [
    {
        "_id": "64c674d23cfa5e847bcd5430",
        "country_id": "64c62bfc65af9f8c969a8d04",
        "title": "Taj Ganges",
        "imageUrl": "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_600,q_auto,w_600//hotelier-images/15/03/bcb127108a78b40dfc302e2d1b2223d5d504ccfb475074840c9b83ae454e.jpeg",
        "rating": 5.0,
        "review": "1204 Reviews",
        "location": "Varanasi, India"
    },
    {
        "_id": "64c675183cfa5e847bcd5433",
        "country_id": "64c62bfc65af9f8c969a8d04",
        "title": "BriRama Palace",
        "imageUrl": "https://images.trvl-media.com/lodging/16000000/15080000/15077900/15077866/4c661643.jpg?impolicy=fcrop&w=575&h=323&p=0.5&q=mediumHigh",
        "rating": 4.5,
        "review": "2345 Reviews",
        "location": "Varanasi, India"
    },
    {
        "_id": "64d0b5a4d3cb4985a76ac1aa",
        "country_id": "64c62bfc65af9f8c969a8d04",
        "title": "Hotel Clarks",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC4HYS134EmYAkoHPsiKjSRe0E9X0HsKCfZnerpy0FGGR0bN1A3akKXrEyHU8rqgSSZBQ&usqp=CAU",
        "rating": 4.7,
        "review": "3134 Reviews",
        "location": "Prayagraj, India"
    },
    {
      "_id": "64c675be3cfa5e847bcd5439",
      "country_id": "64c62bfc65af9f8c969a8d04",
      "title": "STAY BANARAS",
      "imageUrl": "https://lh5.googleusercontent.com/p/AF1QipMlH3WijRgx10Wk9y9BzWNiPX-HSOCW_y5uUI2F=w592-h404-n-k-no",
      "rating": 4.4,
      "review": "1355 Reviews",
      "location": "Varanasi"
    },
    {
      "_id": "64c675793cfa5e847bcd5436",
      "title": "Hotel Premiere Villa",
      "country_id": "64c62bfc65af9f8c969a8d04",
      "imageUrl": "https://lh5.googleusercontent.com/p/AF1QipPqg1YgVD_29Q8GAm3CTzOiGGm6XkR--mI4hhsb=w592-h404-n-k-no",
      "rating": 4,
      "review": "685 Reviews",
      "location": "Varanasi"
    }
]
  return (
    <View>
      <View style={{ height: 100 }}>
        <AppBar
          top={50}
          left={20}
          right={20}
          title={'Select Room'}
          color={COLORS.white}

          onPress={() => navigation.goBack()}

        />

      </View>

      <FlatList
        data={rooms}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item)=> item._id}
        renderItem={({item}) => (
          <View style={styles.tileColumn}>
            <View style={styles.tile}>
            <ReusableTile item={item}/>
            <HeightSpacer height={10}/>

            <View style={styles.btnStyle}>
            <Reusablebtn
                        onPress={() => navigation.navigate("SelectedRoom",{item})}
                        btnText={"Select Room"}
                        width={(SIZES.width - 50)}
                        backgroundColor={COLORS.green}
                        borderColor={COLORS.green}
                        borderWidth={0}
                        textColor={COLORS.white}
                    />
            </View>
            </View>
          </View>
        )}

      />
    </View>
  )
}

export default SelectRoom

const styles = StyleSheet.create({
  tileColumn: {marginHorizontal:20, marginBottom:10},
  tile:{backgroundColor:COLORS.lightWhite, borderRadius: 12},
  btnStyle:{margin:10, alignItems:"center"}
})