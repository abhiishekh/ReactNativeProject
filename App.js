import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as Splashscreen from "expo-splash-screen";
import { useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CountryDetails, Failed, HotelDetails, HotelList, HotelSearch, Onboarding, Payments, PlaceDetails, Recomended, Search, SelectRoom, SelectedRoom, Successful, TopInfo } from './screens';
import BottomTabNavigation from './navigation/BottomTabNavigation';
import { Settings } from './components';
import home from './screens/home/Home'
import BookHotel from './screens/bookings/BookHotel';



const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    regular: require("./assets/fonts/regular.otf"),
    medium: require("./assets/fonts/medium.otf"),
    bold: require("./assets/fonts/bold.otf"),
    light: require("./assets/fonts/light.otf"),
    xtrabold: require("./assets/fonts/xtrabold.otf")
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await Splashscreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Onboarding' component={Onboarding} options={{ headerShown: false }} />
        <Stack.Screen name='Bottom' component={BottomTabNavigation} options={{ headerShown: false }} />
        <Stack.Screen name='Search' component={Search} options={{ headerShown: false }} />
        <Stack.Screen name='CountryDetails' component={CountryDetails} options={{ headerShown: false }} />
        <Stack.Screen name='Recomended' component={Recomended} options={{ headerShown: false }} />
        <Stack.Screen name='PlaceDetails' component={PlaceDetails} options={{ headerShown: false }} />
        <Stack.Screen name='HotelDetails' component={HotelDetails} options={{ headerShown: false }} />
        <Stack.Screen name='HotelList' component={HotelList} options={{ headerShown: false }} />
        <Stack.Screen name='HotelSearch' component={HotelSearch} options={{ headerShown: false }} />
        <Stack.Screen name='SelectRoom' component={SelectRoom} options={{ headerShown: false }} />
        <Stack.Screen name='Payments' component={Payments} options={{ headerShown: false }} />
        <Stack.Screen name='Settings' component={Settings} options={{ headerShown: false }} />
        <Stack.Screen name='home' component={home} options={{ headerShown: false }} />
        <Stack.Screen name='SelectedRoom' component={SelectedRoom} options={{ headerShown: false }} />
        <Stack.Screen name='Successful' component={Successful} options={{ headerShown: false }} />
        <Stack.Screen name='Failed' component={Failed} options={{ headerShown: false }} />
        <Stack.Screen name='BookHotel' component={BookHotel} options={{ headerShown: false }} />
        

        {/* <Stack.Screen name='TopInfo' component={TopInfo} options={{ headerShown: false }} /> */}


      


      
      </Stack.Navigator>
    </NavigationContainer>
  );
}
