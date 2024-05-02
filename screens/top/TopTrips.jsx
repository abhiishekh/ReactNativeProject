
import React, { useState } from 'react';
import { View, FlatList, TouchableOpacity, Modal, Text, TextInput, Alert, ScrollView, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import ReusableTile from '../../components/Reusable/ReusableTile';
import { COLORS } from '../../constants/theme';

const TopTrips = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);


  const [places, setPlaces] = useState([
    {
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
              "_id": "64c675793cfa5e847bcd5436",
              "title": "Hotel Premiere Villa",
              "imageUrl": "https://lh5.googleusercontent.com/p/AF1QipPqg1YgVD_29Q8GAm3CTzOiGGm6XkR--mI4hhsb=w592-h404-n-k-no",
              "rating": 4,
              "review": "685 Reviews",
              "location": "Varanasi"
          }
      ]
      },
  {
    "_id": "67d062a3de20d7c932f1f70a",
"place_id": "64c62bfc65af9f8c969a8d04",
"title": "Allahabad Fort",
"location":"Prayagraj",
"description":"Prayagraj, formerly known as Allahabad, is a city steeped in history and religion. Here are some of the most popular places to visit in Prayagraj",
"imageUrl": "https://lh3.googleusercontent.com/fife/ALs6j_EmVxm2v39LqrU_kZeP2iY6wybBtEtrhEVK0wGZGeta0w-Jj0EjDnZkUSM-xwa2kRDus8kcVwLE636tprpMiJ5cu_WKTxvdRKdinMUoGVEc84IVBDnazBKwg6-mHXpdYM-nqYWWSgXnGIc0MX0lszXwo_UESVCjHPOYwc_iitw1H4I8hweRKh6hpzMopB17u4Wq-sa92q1v7QahNYxzX_Fn_RCW0aGvpZCKGDjvR070RRR5JLe0vRkQD_EkdQEWLYbtD8n1psg713C98l2Jg_ZXNtn8kcJc5YCvPoSlGBRGxp_pLm7EXd5NLdoFFPJRkNwhNP8J5dU6f8Mm5euqdvJtbha7hEtA52JWSLOq04abotwoo1Nq1MDttNW4je7O2pG8ZhU-zvPdTt71J4dMR0qow5_MtxSebjybnlql9PcK7zRF7ABMvVy-qCFf7hW9gPWv10NSSdgCdYB94UFD8cKOdVH_hgWUiLMJAjkJGJb8S5IaVi87nmWKBW8G4Z-a8NVFVMzeerbiCmnDCfsv76InYwL45Q92bVe5DUbIa7LveO3T3lf2XoKu2e88gua_HD9-1xFjrpZxMmXMXIQI8BULS35c2CIXpM3RFv9SES3YUh2vSJGGPr-MId6Qk6Crm9NvA-P7SbSfIs_YVkldvRGhm8Lns0geruDagL1qXc6zhiexYwvhBflYUDzJ85hOohu6_FpESsamlIG6mxs_JYJJAQWW8Ds8ZlWLb_UEXi49gIN978ooKmIgvFy3Zo2ycskh-h7uS-7NMpKIlafVk5M-eFfQ-xceOePnksp42GCM5eiW9WcaTsTqU3odW9q1WotNsdpqGlnueAwJLq-U8BpFOsdrdaTJODBM8aBDllYKl8kKz1hll0aTq2vts_8vaFA2-Q61F7EGNDmJEH5foyIeXXsVX4ITZtShymD_Q5awWyovaA6berLO8ovpE0CJ9P2iTL-81JUjgW_c22iiid_xGmmG02mLdt9sxxMgHCjm_GmcUtUr9XxFLAXBsp_aCfsuuK7UpvB1siGhB7OfZVluQcYunfUKwvjuwGHqo8a76XtdYbuvDw1v8-bD4q-BrnFMRa657OE2oO4_PJNg1bZtAJXeVZsqr2ilfz_VtFnoJRLEKym-zpv-OJTW7RhcTxErrHHasUPD9qAHXB-i3r66jf25EwSFjQnBAVjhIeaBWQ3cB0stJKV7wTTAgIGAH1VkuFSv3-_RuqT3ZqGsr_h3-RXkWd3UbsDCfGhUAJv7jIBzPQI4yzDYhabIOUdbc_Ym1iUyuefOVOpIGqaEgNa1OQaP_Su_JtGoes9NwJ-3CZQAyrjP0CdMYlYCzQ48b789EOnnQVcJYGMKHFNWcDdKFD6ugAoQFPk5uW7KmUJzyhDLx32YMBtM_H5uwiPjRTLI9XgqK19jZlDCsmzIzcJI2JNkv42vuzE5ezc5b7Gn56lyAzvcpTMShQSkdNVltpUk=s512",
"rating": 4.8,
"review": "14 Reviews",
    "popular":[
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
    
    ]
  },
  
   
]);
const [newPlace, setNewPlace] = useState({
  image: null,
  title: '',
  location: '',
  rating: '',
  reviews: '',
  description: '',
});

const handleAddPlace = () => {
  // Add the new place to the places array
  setPlaces([...places, newPlace]);

  // Reset the form fields
  setNewPlace({
    image: null,
    title: '',
    location: '',
    rating: '',
    reviews: '',
    description: '',
  });

  // Show a confirmation popup
  Alert.alert(
    'Success',
    'Your response has been recorded and will be reflected soon.',
    [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
    { cancelable: false }
  );

  // Close the modal
  setModalVisible(false);
};

const pickImage = async () => {
  const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
  if (status !== 'granted') {
    alert('Sorry, we need camera roll permissions to make this work!');
    return;
  }

  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  if (!result.cancelled) {
    setNewPlace({ ...newPlace, image: result.assets[0].uri });
  }
};

const renderFooter = () => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.green,
        padding: 10,
        alignItems: 'center',
        borderRadius: 5,
        marginTop: 20,
      }}
      onPress={() => setModalVisible(true)}
    >
      <Text style={{ color: COLORS.white, fontWeight: 'bold' }}>Add a Place</Text>
    </TouchableOpacity>
  );
};

return (
  <View style={{ flex: 1 }}>
    <FlatList
      data={places}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.title}
      renderItem={({ item }) => (
        <View style={{ marginBottom: 10 }}>
          <ReusableTile item={item} onPress={() => navigation.navigate('PlaceDetails', { item: item })} />
        </View>
      )}
      ListFooterComponent={renderFooter}
    />

    <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <ScrollView style={{ backgroundColor: COLORS.white, padding: 20, borderRadius: 10, width: '80%' }}>
          <TouchableOpacity onPress={pickImage} style={{ marginBottom: 10 }}>
            {newPlace.image ? (
              <Image source={{ uri: newPlace.image }} style={{ width: 200, height: 200, marginBottom: 10 }} />
            ) : (
              <View style={{ width: 200, height: 200, backgroundColor: COLORS.gray, marginBottom: 10 }} />
            )}
            <Text style={{ textAlign: 'center', color: COLORS.blue }}>Select Image</Text>
          </TouchableOpacity>
          <TextInput
            style={{ borderWidth: 1, borderColor: COLORS.gray, borderRadius: 5, padding: 10, marginBottom: 10 }}
            placeholder="Title"
            value={newPlace.title}
            onChangeText={(text) => setNewPlace({ ...newPlace, title: text })}
          />
          <TextInput
            style={{ borderWidth: 1, borderColor: COLORS.gray, borderRadius: 5, padding: 10, marginBottom: 10, height: 100 }}
            placeholder="Description of the place"
            value={newPlace.description}
            onChangeText={(text) => setNewPlace({ ...newPlace, description: text })}
            multiline={true}
          />
          <TextInput
            style={{ borderWidth: 1, borderColor: COLORS.gray, borderRadius: 5, padding: 10, marginBottom: 10 }}
            placeholder="Location"
            value={newPlace.location}
            onChangeText={(text) => setNewPlace({ ...newPlace, location: text })}
          />
          <TextInput
            style={{ borderWidth: 1, borderColor: COLORS.gray, borderRadius: 5, padding: 10, marginBottom: 10 }}
            placeholder="Rating"
            value={newPlace.rating}
            onChangeText={(text) => setNewPlace({ ...newPlace, rating: text })}
          />
          <TextInput
            style={{ borderWidth: 1, borderColor: COLORS.gray, borderRadius: 5, padding: 10, marginBottom: 10 }}
            placeholder="Number of Reviews"
            value={newPlace.reviews}
            onChangeText={(text) => setNewPlace({ ...newPlace, reviews: text })}
          />

          <TouchableOpacity
            style={{
              backgroundColor: COLORS.green,
              padding: 10,
              alignItems: 'center',
              borderRadius: 5,
              marginTop: 10,
            }}
            onPress={handleAddPlace}
          >
            <Text style={{ color: COLORS.white, fontWeight: 'bold' }}>Add Place</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.red,
              padding: 10,
              alignItems: 'center',
              borderRadius: 5,
              marginTop: 10,
            }}
            onPress={() => setModalVisible(false)}
          >
            <Text style={{ color: COLORS.white, fontWeight: 'bold' }}>Close</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </Modal>
  </View>
);
};

export default TopTrips;
// const styles = StyleSheet.create({})