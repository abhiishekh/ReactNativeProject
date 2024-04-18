import { View, Text, FlatList, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AppBar from '../../components/Reusable/AppBar'
import { COLORS } from '../../constants/theme'
import ReusableTile from '../../components/Reusable/ReusableTile'

const HotelList = ({navigation}) => {
  const hotels =  [
    {
     
      "description": "The Pearl Courtyard is a laid-back hotel housed in a charming 1800s building near Sarnath. It offers a unique stay experience, combining historical ambiance with modern amenities. Here's a concise description",
      "contact": "64c5d95adc7efae2a45ec376",
      "_id": "64c675be3cfa5e847bcd5439",
      "city_id": "64c62bfc65af9f8c969a8d04",
      "title": "Pearl Courtyard",
      "imageUrl": "https://lh3.googleusercontent.com/p/AF1QipOME2pskTihys7QPCjM52_f4aIqny86QWm2_9wE=w252-h168-n-k-rw-no-v1",
      "rating": 4.3,
      "review": "1354 Reviews",
      "location": "Varanasi",
      "price": 2999,
      "__v": 1,
      
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
        "city_id": "64c62bfc65af9f8c969a8d04",
        "title": "BriRama Palace",
        "description":"Fascinating palace and perfect location for the main Ghats - with amazing style both internally and from the outside. Impeccable service and staff, and one of the best restaurants in Varanasi. Would recommend wholeheartedly.",
        "imageUrl": "https://images.trvl-media.com/lodging/16000000/15080000/15077900/15077866/4c661643.jpg?impolicy=fcrop&w=575&h=323&p=0.5&q=mediumHigh",
        "rating": 4.5,
        "review": "1450 Reviews",
        "location": "Varanasi, India",
        "price":"26900",
        "reviews": [
          {
            "_id": "64d38ff59af9119acfab0ece",
            "review": "I only went for dinner at Darbhanga Restaurant in the BrijRama hotel. It is very well located overlooking the Ganges. From the main road you have to walk through narrow lanes to reach here.",
            "rating": 3,
            "user": {
              "_id": "64c5d95adc7efae2a45ec376",
              "username": "Sohan",
              "profile": "https://api.deepai.org/job-view-file/e9521e2a-11ee-4212-9d83-e1c1e038f04e/outputs/output.jpg"
            },
            "updatedAt": "2020-08-09"
          },
          {
            "_id": "64d797efa5628cedef4fce58",
            "review": "The rooms are spacious and well-appointed, and the staff is friendly and professional.  The pool area is lovely, and the hotel is conveniently located near the ghats.",
            "rating": 4.6,
            "user": {
              "_id": "64c5d95adc7efae2a45ec376",
              "username": "Mohan",
              "profile": "https://api.deepai.org/job-view-file/e9521e2a-11ee-4212-9d83-e1c1e038f04e/outputs/output.jpg"
            },
            "updatedAt": "2023-08-09"
          }
        ]
    },
    {
        "_id": "64d0b5a4d3cb4985a76ac1aa",
        "city_id": "64c62bfc65af9f8c969a8d04",
        "title": "Hotel Clarks",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC4HYS134EmYAkoHPsiKjSRe0E9X0HsKCfZnerpy0FGGR0bN1A3akKXrEyHU8rqgSSZBQ&usqp=CAU",
        "rating": 3,
        "review": "32 Reviews",
        "location": "Prayagraj, India",
        "description":"35 Air Conditioned Rooms Including 2 Suites, With International Direct Dialing Telephone, Colour Television With Cable Network For All Latest Channels, Mini Fridge And All Rooms Have Bathtub With Extension Telephone.",
        "price":"3999",
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
      "description": "Stay Banaras is a new breed of independent experiential hotel in India's oldest holy city, Varanasi — a 60-year-old heritage home tailored to imbibe a mix of Indian aesthetics with an unexpected eclectic contemporary twist. pool, landscaped gardens, and a formal eatery. According to Google Hotels, a night's stay starts at ₹17,413.",
      "contact": "64c5d95adc7efae2a45ec376",
      "_id": "65c675be3cfa5e847bcd5439",
      "city_id": "64c62bfc65af9f8c969a8d04",
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
          "review": "One of the fantastic places I have been to lately. This place has an excellent experience to offer to all. Starting from the time you check-in, till the time you bid adieu, they take utmost care of you.",
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
      ],
      "rooms": {
        "1BHK": {
          "price": 999
        },
        "2BHK": {
          "price": 1599
        },
        "3BHK": {
          "price": 2999
        }
      }
  },
    {
      "_id": "64c675793cfa5e847bcd5436",
      "title": "Hotel Premiere Villa",
      "city_id": "64c62bfc65af9f8c969a8d04",
      "imageUrl": "https://lh5.googleusercontent.com/p/AF1QipPqg1YgVD_29Q8GAm3CTzOiGGm6XkR--mI4hhsb=w592-h404-n-k-no",
      "rating": 4,
      "review": "685 Reviews",
      "location": "Varanasi",
      "description":"Hotel Premiere Villa offers 3-star accommodation in Varanasi and features a terrace. The property is around 1.5 km from Assi Ghat, 2.5 km from Harishchandra Ghat and 2.5 km from Kedar Ghat.",
      "price":"5999",
    },
    {
      "_id": "64c675793cfa5e847bcd5437",
      "title": "Awadh hotel",
      "city_id": "64c62bfc65af9f8c969a8d04",
      "imageUrl": "https://lh3.googleusercontent.com/p/AF1QipNsQ6c2q8u5RnzLc8qvVb9PhlBv25VMh4-SU-WD=w480-h360-n-k-rw-no-v1",
      "rating": 4,
      "review": "785 Reviews",
      "location": "Ayodhya",
      "description":"Set in a residential area, this casual hotel is 5 km from both Badi Devkali Devi Temple and the Guptar Ghat riverside temple complex. Ayodhya Cantt railway station is 1 km away.",
      "price":"1999",
    },
    {
      "_id": "64c675793cfa5e847bcd5438",
      "title": "Hotel Sahu Inn",
      "city_id": "64c62bfc65af9f8c969a8d04",
      "imageUrl": "https://ik.imagekit.io/hotelzifyprod/d46bc7a2-adcf-43ec-8884-3399eeeca1bd.jpg?tr=w-600,ar-1-1,h-500,q-100,fo-auto",
      "rating": 4.8,
      "review": "556 Reviews",
      "location": "Ayodhya",
      "description":"Welcome to Sahu Inn Ayodhya  Your Oasis of Comfort in the Heart of Ayodhya! ",
      "price":"1499",
    },
    //prayagraj hotels
    {
      "_id": "65c675793cfa5e847bcd5438",
      "title": "Hotel Allahabad",
      "city_id": "64c62bfc65af9f8c969a8d04",
      "imageUrl": "https://ik.imagekit.io/hotelzifyprod/d46bc7a2-adcf-43ec-8884-3399eeeca1bd.jpg?tr=w-600,ar-1-1,h-500,q-100,fo-auto",
      "rating": 4.8,
      "review": "556 Reviews",
      "location": "Prayagrah",
      "description":"Welcome to Sahu Inn Ayodhya  Your Oasis of Comfort in the Heart of Ayodhya! ",
      "price":"1499",
    }
]

  return (
      // <ScrollView> 
        // {/* remove the above line if you are getting the error like virtualizedList can not like this */}
    <SafeAreaView style={{marginHorizontal:20}}>
      <View style={{height:50}}>
        <AppBar 
        top={10}
        left={0}
        right={0}
        title={'Nearby Hotels'} color={COLORS.white} icon={'search1'} color1={COLORS.white}

        onPress={()=> navigation.goBack()}
        onPress1={()=> navigation.navigate('HotelSearch', { hotels: hotels })}/>
      </View>
      <View style={{paddingTop:20}}>
        <FlatList
        data={hotels}
        keyExtractor={(item) =>item._id}
        renderItem={({item})=>(
          <View style ={ {marginBottom:10}}>
          <ReusableTile item={item} onPress={() => navigation.navigate('HotelDetails', { item: item})}/>
          </View>
        )}
        />
      </View>
    </SafeAreaView>
      // </ScrollView>
  )
}

export default HotelList