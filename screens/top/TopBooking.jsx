import { View, ScrollView, Text } from 'react-native';
import React from 'react';
import ReusableTile from '../../components/Reusable/ReusableTile';
import { COLORS, SIZES } from '../../constants/theme';
import reusable from '../../components/Reusable/reusable.style';
import { Reusablebtn } from '../../components';

const TopBooking = ({ navigation }) => {
  const hotels = [
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
  ];

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={{ margin: 20 }}>
          {hotels.map((item, index) => (
            <View key={index} style={{ backgroundColor: COLORS.lightWhite, marginBottom: 10, borderRadius: 16 }}>
              <ReusableTile item={item} />
              <View style={[reusable.rowWithSpace('space-between'), { marginHorizontal: 10 }, { marginBottom: 10 }]}>
                <Reusablebtn
                  onPress={() => { }}
                  btnText={"Details"}
                  width={(SIZES.width - 40) / 2.2}
                  backgroundColor={COLORS.lightWhite}
                  borderColor={COLORS.lightBlue}
                  borderWidth={1}
                  textColor={COLORS.lightBlue}
                />
                <Reusablebtn
                  onPress={() => { }}
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
    </View>
  );
};

export default TopBooking;
