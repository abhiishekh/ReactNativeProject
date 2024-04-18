import { View, Text, Image } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { TopBooking, TopInfo, TopTrips } from '../screens';
import { COLORS, SIZES } from '../constants/theme';
import { HeightSpacer, NetworkImage, ReusableText } from '../components';
import AppBar from '../components/Reusable/AppBar';
import styles from './topTab.style';


const Tab = createMaterialTopTabNavigator();


const TopTab = ({navigation}) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ backgroundColor: COLORS.lightWhite }}>
                <View>
                    
                    <NetworkImage 
                    source={"https://wallpapers.com/images/featured/profile-background-b5vedq7mz8mjvslu.webp"}
                     
                    width={"100%"}
                        height={300}
                        radius={0}
                    />
                    <AppBar
                        top={40}
                        left={20}
                        right={20}
                        color={COLORS.white}
                        icon={'logout'}
                        color1={COLORS.white}

                        onPress1={()=> navigation.navigate('Home')}
                    />

                    <View style={styles.profile}>
                        <Image
                            source={require('../assets/images/myprofile.jpg')}
                            style={styles.image}
                        />
                        <HeightSpacer height={5}/>


                        {/* <View style={styles.name}> */}
                            <View style={{alignItems:"center"}}>
                            <ReusableText
                            text={"Abhishek Maurya"}
                            family={"medium"}
                            size={SIZES.medium}
                            color={COLORS.white}
                            />
                            </View>
                        {/* </View> */}
                        <HeightSpacer height={5}/>
                        <View style={styles.name}>
                            <View style={{alignItems:"center"}}>
                            <ReusableText
                            text={"abhishekmaurya4877@gmail.com"}
                            family={"medium"}
                            size={SIZES.medium}
                            color={COLORS.white}
                            />
                            </View>
                        </View>

                    </View>

                </View>

            </View>
            <Tab.Navigator>
                <Tab.Screen name='Bookings' component={TopBooking} />
                {/* <Tab.Screen name='Trips' component={TopTrips} /> */}
                <Tab.Screen name='Info' component={TopInfo} />

            </Tab.Navigator>
        </View>
    )
}

export default TopTab