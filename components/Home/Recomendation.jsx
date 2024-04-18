import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import reusable from '../Reusable/reusable.style';
import ReusableText from '../Reusable/ReusableText';
import { COLORS, SIZES, TEXT } from '../../constants/theme';
import { Feather } from '@expo/vector-icons';
import ReusableTile from '../Reusable/ReusableTile'

const Recomendation = () => {
    const navigation = useNavigation();
    const recommendations =  [
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
          "_id": "64d062a3de20d7c932f1f70a",
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
        {
          "_id": "65d062a3de20d7c932f1f70a",
          "title": "Mukha Falls",
          "place_id":"64cf2c565d14628d0ac0a2b7",
          "imageUrl": "https://lh3.googleusercontent.com/fife/ALs6j_ESA69oI1wM4uplHa6nTxG7XiEWxZAh2BHnx8KSPniN5UHO07td9hITLLsKrMe-yR0brDdQLvvg6R9_HMvs9hkSLY3gKW99_xPbktKuCRRGFoqZl23kkMRQuEAAXBaoitaLNPEmZ2HAlO2kcfFc5U6tLb0RozczYtVT8eS5kBAcwC_2QTOfIFSxFyJ9oeKS7lyWr8eOtssf90ro6sz5BBY_4ISZ9ea2lLEGeUl9eOUKgMzs-7cmdW94oJNkXVAmuTXXkEeFgEwYQptg44_QdZG14yu9bgfKm2ACTWZ1g6zQV5EMZRNcKfS-0cRd0GRjo5dn_npCNYsHbQ7zBWYbwe2Qr8zUXdjXeFpGfWvM-B9y_g7c5d96meQXMbOIQGJw5SKgewtW9Gaer-TPNBuLssY7xnzAKsUSoYYbVGx3FpqlayJ-LOXbmv_D5KbchOIksyjNHGqlv2okqh36wj9SPBalYDcsliEQuoIkShqbaQmf67zcjtQWPPod2JwKqUyxSVRSUx8QkKmZOdy2gSadzX4vQwROzDhGbsqGCHXkf_DRrTMw7KH2hocpkILEfxoQmzpvkfaCwswxG7LBuCS6c0FKVxJzP6zZiPyFximhPSJ4Vrxp0PRJbGR_crcQPsr5cKbZOeQIMjaDGb1p7GBnGYFymQkqDtkI628OUOx9tkoMQa5oc3Vn-S9-qDATtTdl2SrHA4otqVPk3yt4RFnyuk_A_-jX9T3HTpW8gbPyfEqEKZALuuvqrSJuCYESm_47oevDBz068zxoX52D85wHRRC07yODQ5HLBTtZqYAFQN4W4g_DFjv3HUAt0YYkazOxz_t9QjNZXaQ63u7JEB84b4KopZST1mnO9FXj22DqK2KPymqy72O3RYvADeGAdJks_Hs3gtos0w14RZXn68gSPdbYvl2Rksw79XaP7_Og36Izx4M12-bNlTsh8HKWSAUzRezbBo-ns-_JFScInq0Z7xR8_5Uh7W-wpLBFG_Ox6PVvLOsgZB1G_mwUaejc4gNYYhvuA4lC2-00RUHY4qMpYUNhXAELiIpXKsIfoAQBRPdsVJZq_JY9D5pS8ZC-1Tpkfp4OYEH7UcqsR1pZ_vMFZf-3zhT4QO8ssOmr1GGuzC6OB_OwmpzwL-rwqYD6IC3rNHRGrwaG9b1ovvRMEEpTltlP-poP-lGvFP2fOFo-huPwtwx9fxeyMe280PIgQ0qcDTXMo63s4KZD4FA5Us8QxaWo95cRGJQlVz_y15uvI2LQ-O82AG1y9RtdNSv9VSjnkiqIFDbz3dcrE_7r9FJm-14tFP_1vYAS9I2vgpQhdt_Xf8c--gppOjXW6ocOBMbrLxvkRafHopblVc_tqwYbxwNEweZ8emcvJxHvUCSanSVugXcbxotjQBGRbke4N4EEb3HU6lhhhPaOAXxZKbQubTo7UfmhM_Id1n2kcGdClx3qsvdGVEr6YeGW1eAJ81pP=s512",
          "rating": 4.3,
          "review": "2452 Reviews",
          "location": "Sonbhadra",
          "description":"Take a refreshing dip beneath the cascading waters of Mukha Falls, surrounded by lush greenery. The perfect spot for a picnic or a day of relaxation amidst nature.",
          "popular":[
              {
                  "_id": "64d0b5a4d3cb4985a76ac1aa",
                  "city_id": "64c62bfc65af9f8c969a8d04",
                  "title": "Hotel Clarks",
                  "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC4HYS134EmYAkoHPsiKjSRe0E9X0HsKCfZnerpy0FGGR0bN1A3akKXrEyHU8rqgSSZBQ&usqp=CAU",
                  "rating": 3,
                  "review": "32 Reviews",
                  "location": "Sonbhadra, India",
                  "description":"35 Air Conditioned Rooms Including 2 Suites, With International Direct Dialing Telephone, Colour Television With Cable Network For All Latest Channels, Mini Fridge And All Rooms Have Bathtub With Extension Telephone.",
                  "price":"3999",
              },
             
          ]
        },
        {
          "_id": "65d30f789d008909fa8b7ce5",
          "place_id": "64cf2c565d14628d0ac0a2b7",
          "imageUrl": "https://lh3.googleusercontent.com/fife/ALs6j_FjqI-cySGJb4xUdppd43cebT2u6-IVm_iH2mBXT1FP8cnTKcwIdGCwAoGlrg31ViJsf0mqQUu4tDaukT7ZELPRhpIX6gOCaAeK0Wfjj4eMk5_9nLMNBN-91buAQZWYffNpZ-q_iXMvO17CZQ52mAE-AyERhd9wszQ-iE2xSDTIqzpDkbgnqoID2qDPgwpBSim0WrXra8jcVP7bWpOqU6_bms0dk0msqg_v4PXbR8InoBL_iMdPpq-ItwCg1-4i13X3jsxtbNHMF-eYQtc8wUbtHNzwB22CoNCoNRTEtEEezNTxTM51w3-bcL6ihlhx5tY_7LBKwn2JB745ulv4eokNcYXd4oAgOHDQpe2-ciF8OSuyCxHEWdCKzfJdhBw-RJWVt7FBptLHBhe9S3X8WUJD15clYZWdShwjBQd8hkCo2WKLQRae-tz0eapBm6Q9eYx73LQ_3dC6IouSSXNTUHNgCw2SFcRd8x2ltDFYA7LaWXLomKZbSMZdE6O4U4UFmgGRULQpH7_EOqBDYGXB0qMDye0yGCOO_g6P9QmS9QOHIxJLO_mD88UhVrIrKZtYKKSPmjbb2hu-BWr-Tswr9QEXjM79GuX28qkoyJwXKEnKkCfKyq-bRodW3MN631IiFXdyMOS0-JM0-c6e5wW-IH23MKON_WEubmuhUVHAhvdoG5L_TTweORyVOB4sgBhvlZi7b7pVOpmb5SzR3OVIDBBTBuY9ULD3JdvaA9uYaQjQAQCo91em6FH64sumfCtWJl3zuCDr_ECMjiYRuGzqra1xV1NtnKpNnoWyxVgRqfnCiFv6l-6t-a7GtwnkwlET5e9gMbMj7LR5lA6ya0bL91ND1jzF5KjidnpJ2mQ2Y8EsjuLedhmgG9KPZQIeYssXUAvZeJoQgAb4HQw2d5TXPrkHwk8j0atEt-CfLQ84q56Xvngy1nFkwblvR5KlzMa7qrcccBtBNduFWiwCwYXJRfF-LptUSEh6Z9Vdd5Z88gjAkBe6Cz_fqLHNqF92ytIZDb4zf-axCSCfIPqJGfmA_T1nEuYeUDc3fnsH9FrqBl8_YJ9DlnimYZypOzVg-XkY_E6ov5U-JLxVYQh5C5eOa6rgYUsh2UhDFUaLwwlHUUMA2RU9EetKtYWQ6YeKNlmWPm72nuvt1POdvz23Ff4evhrgL1J_yIHJABxfI79j1W-h6_Zh-Nn23Dtsy4Gd1tTbkSJXrBW938mvQGKj8X4IKBCc9vDj85uv7dynDEXmJATYYclwLYMWMpb7IF91-E7xc0yFx7R-_esRaVgsZ4BehnLLYzQMg8zlItJW3A8FFQZbdHx3ORQdgkd1HawQQQf2TDRE2qI8OC___d52PmjQj8CjBG2lxOXTzTFDbF-Fqz_TUXGkn0p63axjfRizTvOd_n2JYFsGBIiyATM9dR10j8UbbgFFj_B4btaHnoqXGftsF4n_7OXrhbe3LvhFhj0p=s512",
          "title": "Khusro Bagh",
          "location":"Prayagraj",
          "rating": 4.7,
          "review": "240 Reviews",
          "description":"This beautiful Mughal garden complex, built in the 17th century by Emperor Jahangir, houses the tombs of Mughal royalty. Exquisite red sandstone mausoleums, adorned with intricate carvings and geometric patterns, stand as testaments to the grandeur of Mughal architecture.",
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
      }
,
        {
            "_id": "64d30f789d008909fa8b7ce5",
            "place_id": "64d2fd32618522e2fb342eec",
            "imageUrl": "https://lh3.googleusercontent.com/fife/ALs6j_GOneM9d3dI0RpHcwvKO-tXuYlu7HYtU405wQ779j860iRuKsANZVl-UrIENZmqpNezbYYzTHZ9HGMAAqc6wl5k1FgWQWlKAqkuVSPARGTCuELGEJDGoYOJ1g0Eywf4fmaKIXFWesSPYpKDTGbOBWXWlF4NQGpmfeq6_WoNZxJh5oURFedDKN9edhj4KOO7W5REBf7m4n5kmWgB0gxAs6Ct80qyIB4PxUk8Xl7FU6M6vS7Tp3cM3O9MFr5xulxNefEjKsMDBFWrbtIVZy8QyeOi-fnEW1fkRB-I8ITli__5bkHBe_5U7n5w297IqnUTHYYGO3KWYi_E7W2_pJoXKHtRkSgGQZYryQXgC-eG8SGAfFB5WVhMGtgMsNeLG6hqqtdJTNlvI3uVEmOa7GBqFAHAFcjeVwcsqgkMsnyWbK6PVZ-obwyavt1nRdU3cqMpNNYVcmnk6xC4XUMWNKEfto1fsaMhJc14NbiW_b4cju5EMVjusqiInL33Z920KpOm3PVYS25GG2mySgJLQPOqvKUv-i0hcpW-FrqvNw7OTi2Sdgic5aBfDOInyJqxm3veQu8K4ZsG1OqiH9Ply46LkMNGaPzzn9HGLQuZegoePmAy6NpU_LGv8bxVz7CdxcAroAMcWRnZKoSBNzY3FO0iVkB00GTnG9ATebTQOXIOzLTpem8GZCccFZ9EZCa4AhWqUT1_wgCPstQn0IrkmzrCHEUoTnQu7mH3FveQ-6toiylh3IbPV9FpLletjB-OERDahK7MPPLGD7D1S4jn-9ZlFmmRFad-21BnLonExPh4g_5lg10wjwjw1Uppslnn4EV8poJ_-gmMCzeJZH-HWKmzQ-5wDtdvUgj1rYFLEO22scEzOzyZLzqxgz7T8uUpUnAHImsJcLJWbK2R-X5UbjrZl93EOtI6_CESmcxJG1CrhBaJFvUGHkwOsPjR9s2cRKM0PSPgn13ymuuUhUGYrSrlt_DAcqyOzdbi729peu6S6QOVP6ZpbH_5Bn0SVIiSZZHRAhNTM4B8-4HXYwYtREBQG4BKZeeM8X9r-v4kx1vDU-VNrTn760zvM0J0I3vVzpIy_FZkbRHoV6GG1T281YegZQDSXLhvQTWHkdbmaBuc8tnkxoC8f-lHPE2SI0zg0rBb7HIynWTfIBQ9wsreRkAJe2E6tuXcMQ89yLOZpcAxJPhkxuVS53RH_5UwXP6mJdFPn7vl0vD2M94JaA6MkyWwDqGuNrLQ58cDl_k4NiXE13mk3kW1gBm3ZEcI3xcHTAyovYqw6hgR2EWXkka_1GnfU-HRtQ3-bRMcwn36hZ03j_xV4BUkLt2tuNqC1IndTrQhovgt-673_SwRFOJ0m4y0odY6vzZDn0CppLQ5LniH3UXpqp4_OL5e61Qbk6s5cSJmJHNmwT_x3B32pDIRTJNmccnpciYb2erx4NBPlUfNnvho0pZytZil1TFKzcov8LobZ6ob=s512",
            "title": "Sarnath",
            "location":"Varanasi",
            "rating": 4.8,
            "review": "24 Reviews",
            "latitude": 25.3716,
    "longitude": 83.0252,
    "popular": [
        {
            "availability": {
              "start": "2023-08-10T00:00:00.000Z",
              "end": "2023-08-17T00:00:00.000Z"
            },
            "coordinates": {
              "latitude": 25.3716,
              "longitude": 83.0252
            },
            "description": "The Pearl Courtyard is a laid-back hotel housed in a charming 1800s building near Sarnath. It offers a unique stay experience, combining historical ambiance with modern amenities. Here's a concise description",
            "contact": "64c5d95adc7efae2a45ec376",
            "_id": "64c675be3cfa5e847bcd5439",
            "country_id": "64c62bfc65af9f8c969a8d04",
            "title": "Pearl Courtyard",
            "imageUrl": "https://lh3.googleusercontent.com/p/AF1QipOME2pskTihys7QPCjM52_f4aIqny86QWm2_9wE=w252-h168-n-k-rw-no-v1",
            "rating": 4.3,
            "review": "1354 Reviews",
            "location": "Varanasi",
            "price": 2999,
            "__v": 1,
            "reviews": [
              {
                "_id": "64d38ff59af9119acfab0ece",
                "review": "We stayed three nights and 4 days at this property and I must say the staff and the service were outstanding. Great attitude of the service staff and the food made our stay just worth. The hotel was few yards from KVC and to the ghats. Will recommend 👌 every one.",
                "rating": 4.6,
                "user": {
                  "_id": "64c5d95adc7efae2a45ec376",
                  "username": "Girish Rai",
                  "profile": "https://api.deepai.org/job-view-file/e9521e2a-11ee-4212-9d83-e1c1e038f04e/outputs/output.jpg"
                },
                "updatedAt": "2022-08-09"
              },
              {
                "_id": "64d797efa5628cedef4fce58",
                "review": "The rooms are spacious and well-appointed, and the staff is friendly and professional.  The pool area is lovely, and the hotel is conveniently located near the ghats.",
                "rating": 4.6,
                "user": {
                  "_id": "64c5d95adc7efae2a45ec376",
                  "username": "Naman Raj",
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
    ],
            "description":"Sarnath, located just outside Varanasi, is one of the four most holy sites for Buddhists. Here, Gautama Buddha delivered his first sermon after attaining enlightenment, sharing his path to liberation. This sacred place boasts ancient stupas, monasteries, and archaeological remains, attracting pilgrims and history buffs alike."
        },
        
    ];

  return (
    <View style={styles.container}>
      <View style={[reusable.rowWithSpace('space-between'),{paddingBottom:20}]}>
      <ReusableText 
        text={"Recomendations"} 
        family="medium"
        size={TEXT.large}
        color={COLORS.black}
        />
        <TouchableOpacity onPress={() => navigation.navigate('Recomended')}>
            <Feather
            name='list'
            size={20}
            />
        </TouchableOpacity>
      </View>

    <FlatList
    data={recommendations}
    horizontal
    keyExtractor={(item) => item._id}
    contentContainerStyle={{columnGap: SIZES.medium}}
    showsHorizontalScrollIndicator={false}
    renderItem={({item})=>(
        <ReusableTile item={item} onPress={()=> navigation.navigate('PlaceDetails',{item:item})}/>
    )}
    />
    </View>
  )
}

export default Recomendation

const styles = StyleSheet.create({
    container:{
        paddingTop:30,

    }
})