import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AsseltImage, HeightSpacer, ReusableText, Reusablebtn } from '../../components'
import { COLORS, SIZES, TEXT } from '../../constants/theme'
import ReusableTile from '../../components/Reusable/ReusableTile'
import { useRoute } from '@react-navigation/native'
// import { useRoute } from '@react-navigation/native'

const Successful = ({ navigation }) => {
    
    const hotel =  {
        "_id": "64c675be3cfa5e847bcd5439",
        "country_id": "64c62bfc65af9f8c969a8d04",
        "title": "STAY BANARAS",
        "imageUrl": "https://lh5.googleusercontent.com/p/AF1QipMlH3WijRgx10Wk9y9BzWNiPX-HSOCW_y5uUI2F=w592-h404-n-k-no",
        "rating": 4.4,
        "review": "1355 Reviews",
        "location": "Varanasi"
      }

      const router = useRoute();
      const { item } = router.params;
    return (
        <View>
            <View style={{ marginTop: "40%" }}>
                <AsseltImage data={require('../../assets/images/checked.png')}
                    width={"100%"}
                    height={200}
                    mode={"contain"}
                />
                <HeightSpacer height={40} />

                <View style={{ alignItems: "center" }}>
                    <ReusableText
                        text={"Booking Successful"}
                        family="medium"
                        size={TEXT.xLarge}
                        color={COLORS.black}
                    />

                    <HeightSpacer height={20} />


                    <ReusableText
                        text={"You can find your booking details below"}
                        family="regular"
                        size={SIZES.medium}
                        color={COLORS.gray}
                    />

                    <HeightSpacer height={20} />



                </View>
                <View style={{ margin: 20 }}>
                    <ReusableText
                        text={"Room Details"}
                        family="bold"
                        size={SIZES.medium}
                        color={COLORS.dark}
                    />

                    <HeightSpacer height={20} />


                    <ReusableTile item={item} />

                    <HeightSpacer height={40} />

                    <Reusablebtn
                        onPress={() => navigation.navigate("Bottom")}
                        btnText={"Done"}
                        width={(SIZES.width - 50)}
                        backgroundColor={COLORS.green}
                        borderColor={COLORS.green}
                        borderWidth={0}
                        textColor={COLORS.white}
                    />

                </View>
            </View>
        </View>
    )
}

export default Successful

const styles = StyleSheet.create({})