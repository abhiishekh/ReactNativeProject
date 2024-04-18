import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { DescriptionText, HeightSpacer, NetworkImage, ReusableText, Reusablebtn } from '../../components';
import AppBar from '../../components/Reusable/AppBar';
import { COLORS, SIZES, TEXT } from '../../constants/theme';
import reusable from '../../components/Reusable/reusable.style';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import PopularList from '../../components/Country/PopularList';
import { useRoute } from '@react-navigation/native'

const PlaceDetails = () => {
    const navigation = useNavigation(); // Get navigation from useNavigation hook
    const route = useRoute();
    const { item } = route.params;

    const place = {

        "_id": "64c631650298a05640539adc",
        "place_id": "64c62bfc65af9f8c969a8d04",
        "title": "Kashi Viswanath Temple",
        "location": "Varanasi",
        "imageUrl": "https://lh3.googleusercontent.com/fife/ALs6j_F2DY00VCgX_Nx5vhh-28j2dNLgVEuB1yNiYc93RdquRvmvOlCg9Q5fnBlMRTAAUu-2gGH78QTtlUJfsOY61oGebxgR3DzXOrPHVj_IvNEeMA_uLmMFAyp8QaBNH1ufmHFFD8kzz7oaLCv5XboFE2jXcVorckknX73SbgNr8cHqBLwYaWzuacgoZ2QnuwMVKOZe-rpipJXgKSAOmpzqF-D582aTHlFgmnas78wybcRWRVNhGsN5vb83ZPAmIP0MQ4JqHXdXEIRKbo577JKu2rxZcFovOm8k84H8by-cq2sKBkGesiT3ATkxGuiTT2lngFjpdTHqsl7lWSVowgWi4okj9m0lxncUh4N7e-ygobhOmjSAuj_Fca_N8iJCPOLrUMZ44TJYcO_ROViQMOklAPFiga0_rbuTO2VZ83N0yK0COpLwnmNvXQYdzwrAxUe5BkzWw2N1jWoJqBJHq5e1EAUulu5CzsVCpyiIbWVfN2Epes5vwv08ZuTXb64cbh5tJX0HPumpu5QdPwoj1anfhCQDO7Cwxjs6yq-vxo5R58GGT4e26HYwp9njwxbndDqeXJvGqr4TbFRvfZ7XyRrCF6UWHSUFMPoB2vAl6COw4yInvCP-Kd0hNoVwym7Rtqdx9zZgBbI-qfQFxAAkRmY31jVEAUIELvnyZ-rNbfV-UZXyUTtEknpOhSl5TdbLOK6ewaynELQ9W2qK9nhpCOiM4aUFtOplDYYqCl8McUvgrWcRgDSy9IRG6bD28DX2Cg8tdjCobLzDwjABMi0HW1cd1F0HG_cSFgBpnMN5Gu2wpHfT7OaPrYq8-eR18rmzQ52d59l945xtz6tBjv8Oi7NdoALsLGy2Az1X3vpYXMsaNwSDSKsKYbhgZCKZnAUQQ3pFAPT00PafEkAnJpOKh2462F8kDT9rDmYNTlA6rjT-d0uM9mBPfZcDXuGNIBCANWkOXHTRjNea_lUHMK5yRadSLOUtcZ4_qH7J2Qek1Furtx2_rH6d0jXTvlB2KFUZA5ErMacMsRUZZT-qb908eqtuBmSpCQqI6UMe2FNkEQQfQSgF9RKzx50HXdvYRhwsQFb6rBj603BWEfAjqlWNHd7_YznyZnNIqlTAoR3PvE72UoV4fRNIYsYuvFhPRyiCzFOG0YwGARUP9OgqpQMutA77rx4tUbEWjnop3x1h0DKGsj6exyPVXJOpwTT0AJUuFaQ-59CtuDYXNlUDTEU98TUWmSnrH2mx9o_QVM3wvv0gP8UtIqfiU5w-mUXRSvpDxW0v84_X_CYJ0Mgj6RklBHNpckycQPTur_6pyRAHHzJ9vMpVeaY-sqn9KKdPK24Wdq_Zjo9El_FlHOvAAA7CwILECnY8BehQJA72K37CHHk7N1sHYIo3ggiK_xAolL8ZQvwwu5q64sv-15yrUpasms0LKyqX19RkzYBPQ1Coeg7nN2QnkEzs0u64R-GNuqk09ZwRG7A=s512",
        "rating": 4.7,
        "review": "1200 Reviews",
        "latitude": 22.307351,
        "longitude": 73.173791,
        "description" : "The Kashi Vishwanath Temple is a beacon of spirituality for Hindus. Dedicated to Lord Shiva, the Lord of the Universe, it's considered one of the twelve Jyotirlinga shrines, the holiest Shiva temples in India. The temple's towering golden spire is a prominent landmark in the city, drawing pilgrims from all corners of the country. A visit to this revered site is believed to be a significant step on the path to liberation, making it a deeply meaningful destination for many.",

        "popular": [
            {
                "_id": "64c675be3cfa5e847bcd5439",
                "title": "STAY BANARAS",
                "imageUrl": "https://lh5.googleusercontent.com/p/AF1QipMlH3WijRgx10Wk9y9BzWNiPX-HSOCW_y5uUI2F=w592-h404-n-k-no",
                "rating": 4.4,
                "review": "1355 Reviews",
                "location": "Varanasi"
            },
            {
                "_id": "64c675793cfa5e847bcd5436",
                "title": "Hotel Premiere Villa",
                "imageUrl": "https://lh5.googleusercontent.com/p/AF1QipPqg1YgVD_29Q8GAm3CTzOiGGm6XkR--mI4hhsb=w592-h404-n-k-no",
                "rating": 4,
                "review": "685 Reviews",
                "location": "Varanasi"
            }
        ]

    };

    return (
        <ScrollView>
            <View>
                <NetworkImage
                    source={item.imageUrl}
                    width={"100%"}
                    height={450}
                    radius={30}
                />

                <AppBar
                    top={40}
                    left={20}
                    right={20}
                    title={item.title}
                    color={COLORS.white}
                    // icon={'search1'}
                    // color1={COLORS.white}
                    onPress={() => navigation.goBack()}
                    onPress1={() => { }}
                />
            </View>

            <View style={styles.description}>
                <HeightSpacer height={15} />
                <ReusableText
                    text={item.location}
                    family="medium"
                    size={TEXT.medium}
                    color={COLORS.black}
                />

                <DescriptionText text={item.description} />

                <View style={{ alignContent: "center" }}>
                    <HeightSpacer height={20} />
                    <View style={reusable.rowWithSpace('space-between')}>
                        <ReusableText
                            text={"Popular Hotels"}
                            family="medium"
                            size={TEXT.large}
                            color={COLORS.black}
                        />

                        <TouchableOpacity onPress={() => { }}>
                            {/* <Feather name='list' size={20} /> */}
                        </TouchableOpacity>
                    </View>
                    <HeightSpacer height={20} />
                    <PopularList data={item.popular}/>
                    <HeightSpacer height={10} />
                    <Reusablebtn
                        onPress={() => navigation.navigate("HotelSearch",{item})}
                        btnText={"Find the best Hotels"}
                        width={(SIZES.width - 40)}
                        backgroundColor={COLORS.green}
                        borderColor={COLORS.green}
                        borderWidth={0}
                        textColor={COLORS.white}
                    />
                    <HeightSpacer height={50} />
                </View>
            </View>
        </ScrollView>
    );
}

export default PlaceDetails;

const styles = StyleSheet.create({
    description: {
        marginHorizontal: 20,
    }
});
