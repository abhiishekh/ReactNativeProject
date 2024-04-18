import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import reusable from '../Reusable/reusable.style'
import ReusableText from '../Reusable/ReusableText'
import { COLORS, SIZES, TEXT } from '../../constants/theme'
import {Feather} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
// import HotelCard from '../Tiles/Hotels/HotelCard'
import HotelCard from '../../components/Tiles/Hotels/HotelCard'

const BestHotels = () => {

    const navigation = useNavigation();
    const hotels =  [
      {
        "availability": {
          "start": "2023-08-10T00:00:00.000Z",
          "end": "2023-08-17T00:00:00.000Z"
        },
        "coordinates": {
          "latitude": 25.3176,
          "longitude": 82.9739
        },
        "description": "The Taj Ganges, Varanasi is a grand hotel with refined rooms and suites. It also features an outdoor pool, landscaped gardens, and a formal eatery. According to Google Hotels, a night's stay starts at ₹17,413.",
        "contact": "64c5d95adc7efae2a45ec376",
        "_id": "64c675be3cfa5e847bcd5439",
        "country_id": "64c62bfc65af9f8c969a8d04",
        "title": "STAY BANARAS",
        "imageUrl": "https://lh5.googleusercontent.com/p/AF1QipMlH3WijRgx10Wk9y9BzWNiPX-HSOCW_y5uUI2F=w592-h404-n-k-no",
        "rating": 4.4,
        "review": "1355 Reviews",
        "location": "Varanasi",
        "rating": 5.0,
        "review": "1204 Reviews",
        "location": "Varanasi, India",
        "price": 17430,
        "__v": 1,
        "reviews": [
          {
            "_id": "64d38ff59af9119acfab0ece",
            "review": "The Taj Ganges was an unforgettable experience!  From the moment we arrived, we were treated like royalty. The staff was incredibly attentive and helpful, always going the extra mile to ensure our comfort.  Our room was spacious and beautifully decorated, with stunning views of the Ganges River.",
            "rating": 4.6,
            "user": {
              "_id": "64c5d95adc7efae2a45ec376",
              "username": "Ashish",
              "profile": "https://api.deepai.org/job-view-file/e9521e2a-11ee-4212-9d83-e1c1e038f04e/outputs/output.jpg"
            },
            "updatedAt": "2023-08-09"
          },
          {
            "_id": "64d797efa5628cedef4fce58",
            "review": "The rooms are spacious and well-appointed, and the staff is friendly and professional.  The pool area is lovely, and the hotel is conveniently located near the ghats.",
            "rating": 4.6,
            "user": {
              "_id": "64c5d95adc7efae2a45ec376",
              "username": "Abhishek",
              "profile": "https://api.deepai.org/job-view-file/e9521e2a-11ee-4212-9d83-e1c1e038f04e/outputs/output.jpg"
            },
            "updatedAt": "2023-08-09"
          }
        ]
      },
      {
        "availability": {
          "start": "2023-08-10T00:00:00.000Z",
          "end": "2023-08-17T00:00:00.000Z"
        },
        "coordinates": {
          "latitude": 25.3176,
          "longitude": 82.9739
        },
        "_id": "64c674d23cfa5e847bcd5430",
            "country_id": "64c62bfc65af9f8c969a8d04",
            "title": "Taj Ganges",
        "description": "The Taj Ganges, Varanasi is a grand hotel with refined rooms and suites. It also features an outdoor pool, landscaped gardens, and a formal eatery. According to Google Hotels, a night's stay starts at ₹17,413.",
        "contact": "64c5d95adc7efae2a45ec376",
        "imageUrl": "https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_600,q_auto,w_600//hotelier-images/15/03/bcb127108a78b40dfc302e2d1b2223d5d504ccfb475074840c9b83ae454e.jpeg",
        "rating": 5.0,
        "review": "1204 Reviews",
        "location": "Varanasi, India",
        "price": 17430,
        "__v": 1,
        "reviews": [
          {
            "_id": "64d38ff59af9119acfab0ece",
            "review": "The Taj Ganges was an unforgettable experience!  From the moment we arrived, we were treated like royalty. The staff was incredibly attentive and helpful, always going the extra mile to ensure our comfort.  Our room was spacious and beautifully decorated, with stunning views of the Ganges River.",
            "rating": 4.6,
            "user": {
              "_id": "64c5d95adc7efae2a45ec376",
              "username": "Ashish",
              "profile": "https://api.deepai.org/job-view-file/e9521e2a-11ee-4212-9d83-e1c1e038f04e/outputs/output.jpg"
            },
            "updatedAt": "2023-08-09"
          },
          {
            "_id": "64d797efa5628cedef4fce58",
            "review": "The rooms are spacious and well-appointed, and the staff is friendly and professional.  The pool area is lovely, and the hotel is conveniently located near the ghats.",
            "rating": 4.6,
            "user": {
              "_id": "64c5d95adc7efae2a45ec376",
              "username": "Abhishek",
              "profile": "https://api.deepai.org/job-view-file/e9521e2a-11ee-4212-9d83-e1c1e038f04e/outputs/output.jpg"
            },
            "updatedAt": "2023-08-09"
          }
        ]
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
          "_id": "64c675793cfa5e847bcd5436",
          "title": "Hotel Premiere Villa",
          "country_id": "64c62bfc65af9f8c969a8d04",
          "imageUrl": "https://lh5.googleusercontent.com/p/AF1QipPqg1YgVD_29Q8GAm3CTzOiGGm6XkR--mI4hhsb=w592-h404-n-k-no",
          "rating": 4,
          "review": "685 Reviews",
          "location": "Varanasi",
          "reviews": [
            
            {
              "_id": "64d797efa5628cedef4fce58",
              "review": "The rooms are spacious and well-appointed, and the staff is friendly and professional.  The pool area is lovely, and the hotel is conveniently located near the ghats.",
              "rating": 4.6,
              "user": {
                "_id": "64c5d95adc7efae2a45ec376",
                "username": "Abhishek",
                "profile": "https://api.deepai.org/job-view-file/e9521e2a-11ee-4212-9d83-e1c1e038f04e/outputs/output.jpg"
              },
              "updatedAt": "2023-08-09"
            }
          ],
          "price":"2999",
          "description":"Hotel Premiere Villa could be a good option for budget-conscious travelers who prioritize location and friendly service. However, be aware of the potential downsides regarding inconsistent amenities and maintenance issues."
        }
    ]
  return (
    <View>
      <View style={[reusable.rowWithSpace('space-between'),{paddingBottom:20}]}>
      <ReusableText 
        text={"Nearby Hotels"} 
        family="medium"
        size={TEXT.large}
        color={COLORS.black}
        />
        <TouchableOpacity onPress={() => navigation.navigate('HotelList')}>
            <Feather
            name='list'
            size={20}
            />
        </TouchableOpacity>
      </View>

      <FlatList 
      data={hotels}
      horizontal
      keyExtractor={(item)=>item._id}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{columnGap: SIZES.medium}}
      renderItem={({item})=>(
        <HotelCard item={item} margin={10} onPress={()=>navigation.navigate('HotelDetails',{item:item})}/>
      )}
      />
    </View>
  )
}

export default BestHotels

const styles = StyleSheet.create({})