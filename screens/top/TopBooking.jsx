import React, { useState } from 'react';
import { View, ScrollView, Modal, Text, TouchableOpacity } from 'react-native';
import ReusableTile from '../../components/Reusable/ReusableTile';
import { COLORS, SIZES } from '../../constants/theme';
import reusable from '../../components/Reusable/reusable.style';
import { Reusablebtn } from '../../components';

const TopBooking = ({ navigation }) => {
  const [showCancelMessage, setShowCancelMessage] = useState(false);
  const hotels = [
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
  ];

  const handleCancel = () => {
    // Add logic here for cancelling booking
    // For now, just show the message
    setShowCancelMessage(true);
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={{ margin: 20 }}>
          {hotels.map((item, index) => (
            <View key={index} style={{ backgroundColor: COLORS.lightWhite, marginBottom: 10, borderRadius: 16 }}>
              <ReusableTile item={item} />
              <View style={[reusable.rowWithSpace('space-between'), { marginHorizontal: 10 }, { marginBottom: 10 }]}>
                <Reusablebtn
                  onPress={() => navigation.navigate('HotelDetails', { item: item })}
                  btnText={"Details"}
                  width={(SIZES.width - 40) / 2.2}
                  backgroundColor={COLORS.lightWhite}
                  borderColor={COLORS.lightBlue}
                  borderWidth={1}
                  textColor={COLORS.lightBlue}
                />
                <Reusablebtn
                  onPress={handleCancel}
                  btnText={"Cancel"}
                  width={(SIZES.width - 40) / 2.2}
                  backgroundColor={COLORS.red}
                  borderColor={COLORS.white}
                  borderWidth={1}
                  textColor={COLORS.white}
                />
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      <Modal
        visible={showCancelMessage}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setShowCancelMessage(false)}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <View style={{ backgroundColor: COLORS.lightRed, padding: 20, borderRadius: 10 }}>
            <Text style={{ fontSize: SIZES.body3, textAlign: 'center', marginBottom: 10,fontFamily:"bold" }}>You can cancel booking only before 2 days.</Text>
            <TouchableOpacity onPress={() => setShowCancelMessage(false)}>
              <Text style={{ color: COLORS.blue, fontSize: SIZES.body3, textAlign: 'center' }}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default TopBooking;