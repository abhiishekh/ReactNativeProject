import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import AppBar from '../../components/Reusable/AppBar'
import { COLORS, SIZES, TEXT } from '../../constants/theme'
import styles from './HotelDetails.style'
import { DescriptionText, HeightSpacer, HotelMap, NetworkImage, ReusableText, Reusablebtn, ReviewList } from '../../components'
import reusable from '../../components/Reusable/reusable.style'
import { Rating } from 'react-native-stock-star-rating'
import { Feather } from '@expo/vector-icons'
import { useRoute } from '@react-navigation/native'

const HotelDetails = ({ navigation }) => {
  const route = useRoute();
  const { item } = route.params;
  const hotel = {
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
  }


  let coordinates = {
    id:hotel._id,
    title:hotel.title,
    latitude:hotel.coordinates.latitude,
    longitude:hotel.coordinates.longitude,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01
  }
  return (
    <ScrollView>
      <View style={{ height: 80 }}>
        <AppBar
          top={50}
          left={20}
          right={20}
          title={item.title}
          color={COLORS.white}
          icon={'search1'}
          color1={COLORS.white}
          onPress={() => navigation.goBack()}
          onPress1={() => navigation.navigate("HotelSearch",{item:item})}
        />
      </View>

      <View>
        <View style={styles.container}>
          <NetworkImage
            source={item.imageUrl}
            width={"100%"}
            height={220}
            radius={25}
          />
          <View style={styles.titleConatiner}>
            <View style={styles.titleColumn}>
              <ReusableText
                text={item.title}
                family="medium"
                size={SIZES.xLarge}
                color={COLORS.black}
              />
              <HeightSpacer height={10} />
              <ReusableText
                text={item.location}
                family="medium"
                size={SIZES.medium}
                color={COLORS.black}
              />
              <HeightSpacer height={5} />

              <View style={reusable.rowWithSpace('space-between')}>
                <Rating
                  maxStars={5}
                  stars={hotel.rating}
                  bordered={false}
                  color={'#FD9942'}
                />
                <ReusableText
                  text={`(${item.review})`}
                  family="medium"
                  size={SIZES.large}
                  color={COLORS.gray}
                />
              </View>
            </View>
          </View>
        </View>

        <View style={[styles.container, { paddingTop: 90 }]}>
          <ReusableText
            text={"Description"}
            family="medium"
            size={SIZES.large}
            color={COLORS.black}
          />

          <HeightSpacer height={10} />

          <DescriptionText text={item.description} />

          <HeightSpacer height={10} />

          <ReusableText
            text={"Location"}
            family="medium"
            size={SIZES.large}
            color={COLORS.black}
          />

          <HeightSpacer height={10} />

          <ReusableText
            text={item.location}
            family="regular"
            size={SIZES.small+2}
            color={COLORS.gray}
          />
          <HotelMap coordinates={coordinates}/>
          
            <View style={reusable.rowWithSpace('space-between')}>
            <ReusableText
            text={'Reviews'}
            family="medium"
            size={SIZES.large}
            color={COLORS.black}
          />
          <TouchableOpacity>
            <Feather name='list' size={20}/>
          </TouchableOpacity>
            </View>

            <HeightSpacer height={10}/>
            <ReviewList reviews={item.reviews}/>


        </View>
          <View style={[reusable.rowWithSpace('space-between'),styles.bottom]}>
          <View>
          <ReusableText
            text={`\₹ ${item.price}`}
            family="medium"
            size={SIZES.medium}
            color={COLORS.black}
          />
          <HeightSpacer height={5}/>

          <ReusableText
            text={'Jan 01 - Dec 25'}
            family="medium"
            size={SIZES.medium}
            color={COLORS.black}
          />


          </View>
          <Reusablebtn
                        onPress={() => navigation.navigate("SelectRoom",{item:item})}
                        btnText={"Select Room"}
                        width={(SIZES.width - 40)/2.2}
                        backgroundColor={COLORS.green}
                        borderColor={COLORS.green}
                        borderWidth={0}
                        textColor={COLORS.white}
                    />
          </View>


      </View>
    </ScrollView>
  )
}

export default HotelDetails
