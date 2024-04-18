import { StyleSheet, Text, View, VirtualizedList,ActivityIndicator } from 'react-native'
import React from 'react'
import HeightSpacer from '../Reusable/HeightSpacer'
import { COLORS, SIZES } from '../../constants/theme'
import Country from '../Tiles/Country/Country'
import fetchCities from '../../hooks/fetchCity'// this is to fetch the data from the backend
// import { ActivityIndicator } from 'react-native-paper'
// import {Country} from '../../components/index'

const Places = () => {

    // const {cities,isLoading, error, refetch} = fetchCities()  //accesing the data from the backend by this line of code
    const cities = [
        {
            _id: "64c62bfc65af9f8c969a8d04",
            City: "Varanasi",
            description:
                "One of the oldest continuously inhabited cities in the world, a major Hindu pilgrimage site on the banks of the Ganges River.",
            imageUrl:
                "https://lh3.googleusercontent.com/fife/ALs6j_GHNltu7ThOwd_rcBPwxJ6PkI_EcmPNiB1EyJyXoRtGLd6U4iIvDF_C7Wo2IxV5w9sGWVKOvyICMttM_R1jbgVFWkyeI13BtFR9gjzD4cA81w4uZ7pzWvML-NDI3VlMZhNcuYkCafhbbHplBkpDyWM33yYAgFpk4n2sdP2I4m-uI4r8gKtcaEDPEbvJF6pt6S2a4e0PNanWZLs0FDhnZAy8CyDJBjWGI4D-tMH9w-GWScXYZuC1Kzmu741p5_3kw1M-rJVyOaF_X4srdnmokgDcVVUlyyOntQ0VmgS7cMNG3G_tsvtbCWoM0x7NZaRN_MTQhkYzVWUBG4nI-Md7BX9ewJHKZ0awRifa3NZseWMAbOGpG3tw2EkBsKUit7W-pmYPM62kyxv25NVMaodXJdyk0cQJtEOR6KSdpIWASJ6I80roBhT7h1fA9kTF0KDe1XOY5WPmUNHLyizMEv96KsdMl8PVZDn5mKUoqaTdLbiLN0EjWaB1g6B5OS0TXO_VIUlvB8znosP1HagJJ48KDDVPddDyuYbq90re8a4ryzdXX6SEPKMk1FVtWvNA7-Qc0GTHOS0rGIcBrJJARE9Sq8wIOjscNnja9NNI9U3yjAUAkRhEjHwlTaojjEKr8e6lCHIm72VVSBrVIKGMJIhUg0NYaHfM3b66HqGzcNIiv9YAPh9pzIsov43udA1bvkE_9iMYFHPelukhSKRrK9UNDuZsODkOPwXT4LrI3nlXcIaPJM78keyApuhkyDtrPs44Hr7vUU9JNiLJZVPNhaebNhdWkqzNsEs3CBrJIUR05pIDGDtssELZN4-e4QfgX9hON8EIFP0D94Tp9fkD0QxdZBlATyEcV4zOShgxRL8LbPR6giwV8wLsZTV1SYWjqdPh9hPqkGj-_M0vOSs2PWTDYXUUm7ppKnAf0DcpBXoZKnGzK-Va_3yh96A-Sfc4oOGofe9A5V4XMTSkRVXeEY9k_mblUsW0myEf9Qw_IVcRbpmH6YKb23iUCm3Tum6XWNooo_NbIu2w8y3AhQlPQcXquIMcXKvmo5EIuD3TghcX45MdaKEdSmMSzkqAE36iHZxjvs2z_Tgx3PRGs2nW0sRozInwVLcHS-NsCzI2cV9OoY2vSDw6y3ayI3EpzbtKA2_WG98Tkyju-vfX0RIRPUtPIKjuSHAtNat-i0eicyLiX2idN4s1FSIy_5gT4ICKRVEmJxDmzqQjK0S1T_mXix14ANiEn8XEgi-QxTGkKSORTej3IR3levNI9UMJh0HH7yRhb-lfqz6TSnoT7bI0Dihy3n7N2CdnvtrVlRKisElowT7y9xP45wQd7UnOBMZ4mEFh8OHEfiZb4R1RcTkzEEfEoVJAutvKD8vkM5Zv3gRzKucCkVgeMv7ixvxKfm4wPPblWvKYASFJCuf2EqUsW5XZPCQwmW3nIrWlhjPSC35SjwKC9duJRp3VYy66Gmgv7HG8q3N5=s512",
                
                "popular": [
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
                              "title": "Banaras Hindu University",
                              "place_id": "64d2fd32618522e2fb342eec",
                              "imageUrl": "https://lh3.googleusercontent.com/fife/ALs6j_EjYWyhjBnZEA0OeRQAj-hze71nkVov8gilhFmvuHHfW-jMghDib4est-zSVaKUR8fikv6eVmlu-xeFW53WpzH7JuLOpyaAo3ywpJ4Ox386_ou3WuPTylT09EXFytQML4Yw-EuEStXPxH3_93-_IqxDsE_KX-1tp7VCfjHb9YL1ennqNcpZxvJcpy4zmrGd1wMhVSPa0kUj7OpMG3IEp9JERktzkJqA4z1MAyyNpXK-jmmiktAQmZrMfBA-A5wK4H0h5qHvRleS1BZKXT8Mwe4Ef1eTIThkGBjaeq5sr-mVw3kx2bw58R4qGDStiVJsoGN2HE-MKvAirafGs5rkpAt9-vCD1qRL1Bd8spzp35jvmqr6qlNkCA5cfAzCTFOTBiSCPuB2jwOe7vE5JuFHdqEdKesm3xTMMP-KJ9kEGC-GznSyxsERFu27ktzqjBoGR0CjJd3qRjZoun4e2_rZwLz2tqx-iZv0mbcVa4Tfzm7Mu5r8RavRfw6KAiYxMzRWMAd-er9q526Shq_9H65iB1inYLIzHQyxWcmKz1t8cCPrpr_CxwB83AieM1q7sH4TJuAIn2ex9JX--3BayZpBO8knmVU7cpQgkK2PkeIvM0KAyj2A_4f-xy5gvh5Nv5zEZf_gCig4i-IxWj1q6tSsbvpX7FcSzsGWUYjPNRE9zP9ij1f0oa9TgvpfCoqnKB2U5gu8RhNfvxHnJcLQsfyX8neuJlT2k90DqHyzrXyHV2GrHgzF5MzmBCqKl0zwEPcFCEocibkkcDjWtjUootxQa-bUBAeiDVEf3PMbP7XXV7iY4-WeSCGpBpvIktsMQVB8Ca0ZnNVxTF5WhV0Pw55xX3z-cuwbST5zhGFJaWzkLIbP6qTLylq3PMGLJOqU90s9dHyg70exnuuKWkcyTAffNWWeYDLZZxIBTpiT2PFPpMT0TimZkcUVbRJW1Kkk5CSyH2hl7xLZ0Mp-BcG4LlGnk3j0E0EjSnkrlCCXCtDrHpGIrEMcn1WhuqlpNRNymVqp0UJswtlvbeZIhwwpPKx9vtx-c_S4DnVVKQp43C9lwy5CGgz4heVIVM5YjV3O20AI767BsJqwNAueZh0pXzLkv1VRr3y3wTWiTVl1vOh8zyMiXwm8A7R_o8KyaVpFvDRgdE1Ec6pd2UykjCYhyZH7IUUVAirTMLWis2sMpmY4yIvt3DZ7Z3XDBCaSFxbteZ3cleMGiLTvGJdr9Ntq7WADmd6crGAfrn4VT099K40L138kVi0WsjHbQdCHXGGgtDuz0-LHSnpDh-l0Co_qoCRo8v6gzAxKofbVq_ZfbUq2AGlbx9_B5mk4BE7JrD2hFleExjST3LbhD7JAuX6HzN0gVHO2iTPY3XNqLMqRPx31uB8u7XVXVUZLoo4BCv5hQmvwTKkPnmDlRFQVYOpNb7G-Cp4boBI3RXz25vlqmdOPuURv6yjTCl6eHYeFMyngEd0s8dP2=s512",
                              "rating": 4.8,
                              "review": "1452 Reviews",
                              "latitude": 25.2677,
                        "longitude": 82.9913,
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
                            ],
                              "location": "Varanasi",
                              "description":"Banaras Hindu University (BHU), established in 1 (nineteen sixteen), is one of India's oldest universities and a pioneer in private initiatives for higher education. Located in Varanasi, this prestigious institute offers a vast array of courses across disciplines. ",

                            },
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
                            }
                          ],
                region: "Uttar Pradesh, India",
        },
        {
            _id: "64cf2c565d14628d0ac0a2b7",
            City: "Ayodhya",
            description:
                "Considered the birthplace of Lord Rama, a major Hindu pilgrimage site with the Ram Janmabhoomi temple complex.",
            imageUrl:
            "https://lh3.googleusercontent.com/fife/ALs6j_E30xikc510DYIsg1OExvTCG10WVKugtoeclrBRXDsTfAWBdfeZJeEDkmdCmyrzVsJb18F2oKbNbakGXZr8uLvJQRxLrb4-PcGPUvfyqje7kgPhUmVLsDiWSnCKmBPQEN-AWmuQc1yYbuL4LWlc6MbM9EkAYuz-_L8XvtApkiOQoqZBp8o7_RPI4fqGe5EpCIUPahwsbfU6SY4eBjfT-ZruG1DtGRLOcswXcIfyVXwjGnwQzgV3K4ZhYn9hD7UJxpGJGmmNLSs3UIIYRpGB0Oc25EbdZ5iDALO0_r8b57A6Yw1V7uVt9aobDoH3LoylbqomoPlRB4hd-VfCa8m2XfcpVTGhgeJe4yYBnkNJxiTHmL-i3C6XexLtyP9Mm1JgP6FbJoQKjHgE7OZlM9ejxnaBHeMNb9_wtsQhGhz7gFFFFwVeNqxZ4OQEbm8DloisYnUzlFKI9yI44LjM2lT1SliyzsoMEP02xiaY4MAILEc2rUT7nqMNyQXQajgEOZk4ziFGTHf6KGqFcxt0HyLSAk5oQ3w8omsUAUFpCXOEOAtfjyT5cJo12GO7OTMDc7FJHpF_xg9TtksGra20cWWeETKPNAycqYBeXDUbSB1pbxuzTTzZdBNuUNmZx-l4UfVYXLBT65h-nU5RBvg3kkGLeFvKEv5_opuLajFAHXX0BAvQzNBWiVCT2VUUIx1vH8rzM8xbUuL_rwwFWtOrpwuT-tB00zDhAgs7TiNm4u8jkCsuxLhbAS-LUoSF5jLbW0J6CKtsrCFSxgr3cs0_nzbAg9sm3C-A6aTyMdLC7U09QnuVV7BrQuz0pNrKXWyAgI3JNKEzKlpr-AOnKtFeq9c4BCmRQJ2haIJmmqqfgSu19-KpaBvboq_VERvfneFT_-zu-c2hH2qF6rCYwhM_-VtpWgxz2a_6BxI-HAk073-StWE4-r2JSbsPYadNqaAW_iSJUh_4318pLbaVu4v4NnFTYifUG-f6ymTj7J_3zoy-4NIw21i5JRlaqF6r9fv-kOIn7q6x_GZCgFwK2mJ_jgrg40blftzb077qhK6gn-D2LUJz5rrkeDsOxYDnaUglZWxFTd92Iqo1oLyJ1Bh8lt4jLXkUtK0JSsRgFGna5_DpizP3Sehsz4yHIf6ytU3It6L9maNwT0RDyHQZ8qvcuZPW5475c_GLPQsYxQQZ7gg-I6OE1XK5l6zi3eWZ9H6sXrmGUpBdd1MG-tlZK0glgJCm0dDCZrDeT0uyXfZ4gKQ5vnyK3kvDdodENIwIDvheNAu4IHKkCJKokU6z-0mQqXt9DYANeNcf1LLJDbbqyPL4PGBZEiVmyAiBM75zxPNK8ajNLPvZ1komqmzxBpIpzr-td8Ah5cPicpg6--9leYph4JLhCc0ITAx-RdbPVfk17mLIeenbf-J41GJWxgNohLSzqJecXptzxmOF7jQI7akgTsr0PTOz7Sj-Yr9CWZTXMdJLydTB=s512",
            
            "popular" :[
                {
                    "_id": "65c631650298a05640539adc",
                    "place_id": "64cf2c565d14628d0ac0a2b7",
                    "title": "Ram Janmabhoomi",
                    "location": "Ayodhya",
                    "imageUrl": "https://lh3.googleusercontent.com/fife/ALs6j_E0k2v4fDmrEaBb9t5mO_96mxZQ70Usx6UFJIR40jQ4U7bmIaCsBkUaf7SGNGKAv4UIfOUX4qVHIb3HEKFDXfQs9RCyq5NIK-TIOZEiPW_fOilKc2aX-SDGErIxTmKrnacaTk2f2mygEgiIoGsJtaqAAA9LWY64pu0HcP3i7wUbT8qa8dv2-rTruSBelpgUIj4IzPzj3sy8SwEIOt9czCQg20Vx5FzgGGEqQrlRqzNQOjBhz5hJMnseumIE4Y5Pe_Gnl-0iBNjyGDw7XLsyqRXj1DajdJMCb_QKvCUZOTQwNlFRkqcgTZg7AXR0FHLlQ9nAhOvmQvq3J0S2TLSnryqbREs-VCcRw-MDHcLLDEfb7w5vlcYFXd3-arr_7gFWkhiLp8AIQd5ESWJySmXIYb0uAIcLZzKJMTurk5yXmCHJzY0ZbJlmVi0Gpp_7lX0WnwI9or4WCpuDvD80SOtlNl1AQ-5Y6OjagJbNy3PpA3hTN-A4FaDa4vyCXXrhjVVLNQQW8sXW81DQcdI-q4ltbFhSwMTInu9NVGp_3gZuck-8-0gGlPDuk3hbtHYvDOgcRyG5-MuxgjtMhGC_buxDAIk015Njrd5WhCHitgtI85jRxhcTFtbjP1q3GC31tnwzlYgdrfz9WZJ7T1ij8fdYgJKqGAdzHX3BUVZ80seAaAuV4ox7I9Qy4sElhHGAxTPbfsg4_wS8fUOtLEJyvAb9iwTrEuNuTnvWHNm2486Vw_ov-HZGelG62_j7JTZXwuv88lmT0VXpMrjmec8obSrzriftazGzZ0kRJoYRtMXmuXh7O9VYV77xhkt9f7LUNs7i4WKKP4DzzrvD0oJkmjweKyeqpQaLoXm2wY2OKovBJMZ15CfaCn97FQvoAhI4X-9faRFj0jcRGhp7tIH_ea1v08HTe1_PwxEyCX7LSCMUSNFCxO1AaTUuGqyqjKCULdN8DYq8u1IXETmoEUMUDSQOyiaZCBOSmbcREPNjibGHNXHxr_77_q_DlZ0xxaBsRPtEFXnG5TXywkrwVW5IlLHH7g1ImUlmG_bFvjpgJT_ThpwxGJXPqJwjl8qx1RrCiiwXi1FIhYUaQra3ekuCKYt7_RGGr6qe7Kq3kPcbD2nxk1tYVgHQZ16NNeWHTUTIw6J7Y22E5VfBO4tUTQCe3gC4J1X9h6Z4v_XXx7qsS4VnMsg5tR_spwYA31U50eW2lMhO2zyaoSm5kj1ZeuiKi4mDxAh3R00e4Jn-4C9ExwWBQHadRxKHxh-U8SyqZWZVwwjVrHRJkbKIkhcMSbvz_Ohcq20zIw-gFd9orN_E8yl4K6KnStLum-j0WPbIGq5OCbTU-9srIkykNL3ZT3uq3_AaNXxiXih4oc1dpUuCy-j9KT0O2uLNEn0LOIYgZBLjiYIjRv6ay_qjWFoxDbzjRxusCbKHUVDQnOygAYDD9O7gmPWmSF7ETfvMGwN_6GxezCxc=s512",
                    "rating": 4.7,
                    "review": "1200 Reviews",
                    "description":"The Ram Mandir, currently under construction in Ayodhya, is a highly anticipated Hindu temple dedicated to Lord Rama, a revered figure in Hinduism. Here's a short description",
                    "popular":[
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
                          }
                    ]
                  },
                  {
                    "_id": "65d062a3de20d7c932f1f70a",
                    "title": "Ram Ki Paidi",
                    "place_id":"64cf2c565d14628d0ac0a2b7",
                    "imageUrl": "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-720x480/12/45/89/de.jpg",
                    "rating": 4.8,
                    "review": "1452 Reviews",
                    "location": "Ayodhya",
                    "description":"Contrary to its name, Ram Ki Paidi isn't actually a singular temple, but rather a series of ghats (bathing steps) situated on the banks of the Sarayu River in Ayodhya. Here's a short description",
                    "popular":[
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
                          }
                    ]
                  },
                  {
                      "_id": "65d30f789d008909fa8b7ce5",
                      "place_id": "64cf2c565d14628d0ac0a2b7",
                      "imageUrl": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/21/9c/de/photo6jpg.jpg?w=1200&h=-1&s=1",
                      "title": "Gulab Bari",
                      "location":"Ayodhya",
                      "rating": 4.8,
                      "review": "24 Reviews",
                      "description":"Gulab Bari in Ayodhya, literally translating to Garden of Roses, offers a beautiful blend of history and tranquility. Here's a concise description",
                    "popular":[
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
                          }
                    ]
                  }

            ],
            region: "Uttar Pradesh, India",
        },
        {
            _id: "64cf2c935d14628d0ac0a2b9",
            City: "Prayagraj",
            description:
                "The holy city at the confluence of the Ganges, Yamuna, and Saraswati rivers, famous for the Kumbh Mela festival.",
            imageUrl: "https://lh3.googleusercontent.com/fife/ALs6j_H2CqWP9hlCplmc3kAyClz_oSsRbDlKQR6Ll6CgTpguPeS-fQkm8ElqQaTPXEJ2vOqdd-7ecBzJV23XgIlAQMHxWsTtZtISXQRZtJm5APoQVe-lfaLjUhnEAob2ErsixP68meACqD3AV-Mt4GPYWgYwMBNrR23mItDlEq8lqmqqtJg5V_rjgvN9jM6krNvXVfQ3Wtlr0p4558Xxi7OI0Jm6iGREtg4DMHPtXu97OsmkUmp6uJWh4P9qXImTBd51pLAtVN4jrYmMlsB7S0Ko0-MDsdJAZaREXi6-9btKZ_R_bcFgVr_dq270GbK2Pa3_FeqSt3j2R3vE-ZMZPuWjRIjZB5tIzqaRgqkpX4DewksfI0ewx3liR69S3k-sUjQ_A5yNN7Qf7VL6O9nV-IvfdQ4kggxhkbU0vwCpPDpurEJaX38dM4isq8_41lecRSjzAl7WiB6bM0pgrBAMBoU5uC8_hXpu7iB9IPXRsAizQbsqB7PJmZbnmKAwVWDxurZJ7QFi0W-tLUHdnaMiZDAl4LPW3tvaRbd7sE0i9pnXYYIQaTEDs5aQSwJ5HHKfaEqcWsccCLWiDaX0WLpTbSD-C1pGEOAx-hYrK1bJNi6lnKwcF3HmULfjJo87XqgNMT7PQN2DNMlQXz1FoMcOp3Eesr-rr3FGURP33goOhR3bxmac3EkUzBm9G-4N5K245TSZ86USkGoUibv5d7QEFAzAOhpITIP-uq7VOSU0dvpjlIsQprreWsFhXuG3Xdo5GCmAxxg9vs7iFkXMlj0XvAUIbu-1QAtOyMI-XaIEmI6HGXGXnVZcKMTRIcKnIy-2w5OsqnYCf_1SyeCwKtu_7zdlgxuKW4ZG9peIJRR-inR7VdTuYrjQJWTpXVUICbu49sWU0Mh0mnE_SNFuTh4xbbEyBgwZeVI_J8zxrrOU4Ihe-mhjUZYBNEfUKuCnkr28Cax4O1MlkTS_2mbJVehrYgKmuGEEUODav1H6UnFP8fWxfTTxyu7qEpz0gD46JJkOw7wYmiqHbNoKjkqK5n4v1ZG93waxrO-vvhG-BY2YKr_odKCcbzL0h01itSqNtHPzeX_B5kRqaNEU17-elMZM9es4CDayne6ummhqfoC9H8wD-qT4pk-IzwFpJZ7Jb7ebSfCEW6oXve8vCOzeDFj6xM6Ks3xHClWSX2xBRHEC_h5wCmsy3WuPA9Nx-gWhN-icJfKlZozvxu7OC8D7PEP3iDCJC_v7WxpOf06y3ci3hZ8LY1xtKpqM0VWIaCNDfvrLFf3ahC-MCa4w58C8JyYlM2OptQF3tbBmbYx01DxYw8rh0N_p_rpDIX8tLZESsGdqCh-mZPbh6YjtBE1X3oQGefFGKcO34VNQASeupbBCNQoMOqMMQtPx35xTFFIXh3mCW4_0l927k3_OnDUCZcDeswxVxVVsBSGEbg-f7tvH95enxYI2K8NPwF6xwxIAb1Ppn4pubdsy=s512",
            "popular" :[
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
                    "title": "Triveni Sangam",
                    "place_id":"64cf2c565d14628d0ac0a2b7",
                    "imageUrl": "https://lh3.googleusercontent.com/fife/ALs6j_GZY6siq3CLkPL-1vEPQj6zalXed-W-bdE1e04wjqQXp2heQd8Iq51y1y5Cqw3M5mFS8Zf-RrKFE9z0LpJbDx3e_oJC09qIqHopEwhILVsDCivcDpr84QJbJaRz4HoksvNzJMXg49DM-WrSffEAmGK01aViPe80NaeauZegA4XQ2ZE6odJMboXEYToEJOGFk70dFVpO05rLZjVxTzLRm1wGLaAho7mG7uMDO5UNgCNyTZilYadkNpvCtS9kbOY_ShYdVq4B3wIDzyfq2JojS_hs6O1KaBADL17K6Xg76hfFN0XhJsp9MCsMBXukGlhlTIAI--WVoA1Mjm_NW928rNp6z7sjVwIsKEyPeIGaE-5nYn4yBWmOaOT99M9babuhAnKftLTrMOpxiQ_agQ7H2rFHDfyTbdosXL4bZm_TgSdjNhZp015GLwCGfRisA65lXHr0cRzBkPFwJooODXd0OIIk2Ti2PvfnWBOJrJCCEDRzk0pRxH3_2naptoqm1282ve8IRBLVrM4KMcn41h1rq2159jNR28BCcq725H3ac8OlzIkMMNX87SWNhTjyPr_TRvya5oYqaF4USLCL0NjcDIYmbvNPC4XTyCVT3b3ETZAUhWBfI6Fp3Xz3OcHzW3r6laQ4LcgdvyV8j2d7QRQpK75Ss2QV8Tkb2_QwXx8os6N5DNMBCZ683aa3uaBsmovADVQSTHLRBMvpvtjrVGwsQGBRDKWzDdkE2mpMzEy989SW5rIFaNNMN0lI1ByBAngXByNHd7fHP7GVSbshWeShp3C5Ca11VlWfYhphs-6PFxDB-2j6ccGPAzp9XTIzQFG1eYD_m3lYZd3TvIQ61I71tLShgwPzT7i9EYNQoYyBFSQOLuT6xxu7L-DkiLUA9cfas8FceCp0t43vJx-5fYYPRRa_uPHg5Ou8MWz0D75gYLYBUXz0kyqbEEjZyjH7K0rgsNGNdzcF1UvR5ZzZED0Ma4Llwr9I3GG5Soy-WnjWEAG9h8EXIUXgmtj_HI3V1otcpL8ciuXlANt1jX6KhAXuMoAtCKdsMU4hCLu37oR5KAhesB6YH1ohjzFhIIy_qQbZSV6evwi-oZn6cDwYBUwYMI4ZE24fgPy7GADQVRd8CyZNYnyMhQMEhtOUlmEkczQVV5HF-w314scZLABptpIvZv-k4yPMZ5aDwj5OyLSPO4E52Iz5Lu1nH0XzTjRjGAsTTTQfN5c3-NSi1ZmZcPF66FLHDi1KU-xeO0FJKHhiIaOpV-OaXLynxJM8UXilSC3RF-X-letNfpQAxvu2Jzp37B8k-vkRa3e5WEkAmOconvf_9U6TrTimjrUU5l15hMWXz4noEPZ6OWLSiEUVKXrT7YRIG7Sl8vLEmjBb_MlvanzTfIno_w1N3bulBN1Uu1-zPu271tkdbBI2jjX3Z2Srk0jYR6RnSOxhPaPTls0B5XB6nxLQxjSkvxRL3AauKGIE=s512",
                    "rating": 4.3,
                    "review": "2452 Reviews",
                    "location": "prayagraj",
                    "description":"Triveni Sangam, a name that resonates with spiritual significance, marks the sacred confluence of three holy rivers - the Ganges, Yamuna, and the mythical Saraswati. Revered by Hindus as a place of immense sanctity, taking a dip in the Sangam's waters is believed to cleanse one's sins and bring spiritual merit. ",
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

            ],
            region: "Uttar Pradesh, India",
        },
        {
            _id: "64cf2d095d14628d0ac0a2bd",
            City: "Sonbhadra",
            description:
                "A district known for its rich mineral resources and lush Sonbhadra National Park.",
            imageUrl:
                "https://lh3.googleusercontent.com/fife/ALs6j_Hh9zBj8URBdcaTrjA6eubB8sIJEXE32bLq8CNmg1pP2UmRgbH5bgXuaKVedn8U5TzjD5gi9OwZH_BiCaq17GJKKaWP4HJI1_Tp9m_jHgDufIRgHZ2KhsPZdZ4oqBnTa9S6dYjyLXjPqZ6_B9zya-F04n465R1ggKqCjG1eEolwHN_E0QWNrbdXtVPkBGnVkQzhlFxWZUW77qTY22ajefc5DcXoJyOIiE6T7em89rpICW5muvqVJT9kiBBQawYglbFBaT-CKDFGrlfvLiEboU6MdJ0yoNL_ZAV-2_tEhVabf_QTFgRJb8lfpdlPbir75vjjW5T7yhEOUe3LTggA438ZmoEO9g5LZ1Z56HAbUKCMOMmuy3ByBs1FI1lHKdrU20TCwMMVPVo4mrG9-UvysyOQ0HCuMKz59VUSJzZk2UkRgzZlG2y-V02vwO4UoxoMmXQL6oinQInYpSbSiDdMmSZDahLSeRemHIGIAyxWbBTT7sXlgZTUsLwgSMQPpo2iYEdA7tgDI_5zBofJschFNlJSsQhHJhgnbuh9YAAdUr8ZmHtWWqUYQmaCq9-RWaeDRIbaRLBG0paXq4PLraAE_2jG1U7tLyxbJzT-TjOQWTLQJ95zlawc5Qw8mBzOJDXvHfC3mWwzOSaFhZvIxJJl0Uin-HUAHgagSW7gUVlom6udy3yvBMBhPLIaYBigOTYDJPPs0YcnUMw1kvANHcdTrn_yufvtrduU3zZZc352Qp8lKn8jmTuNcsf4xp6kOeSV2CpO7QzhFAlXzvcH2tP26Km2-FmegU4nefjgp3bb2R2BxhM5JNGDopPSuNhxmhHddw6OWpen2rjuJdZVtlGcaybkO5gbq14xEJo1h5wzH4WfeopfvEBsGJpB1pOnK-47h7fDViF72QYYRft7vs4Bvf4fVt7UkI2RxMasg3xqHGIUnfk9DE0U3yUVYRnjtVejN9xyNz2x32hBKTqBgYNDu4OOoVtshWHAQdtuYgzTdvPNePLl4OW7u6vHjG-AWXLm_63J7ezfC5iBPUd2fWzrg4NWLsyl6xjJ9OiuIzvFUXf75CAabUxGZnd0-p1PwwlhoysjRNhqICQZY_fbfCNU0r0otI_kON1e-_cIUV0GIfeT_gHBYHcfgYXGadLBP3Bzd8WJvC2F1xVFoDeyETPOVU4Z5icjxx5wcMiyfPY4uVEJwX591owxmpzNloDQpKx2G4nb_MaSSRd9hn4FAbqduqNEQbrnPOtPWe7oHBDwb0abxH5FdGuPfshh6Kpq7YlJNB0TNVNVPmv6AkSLrX0CMsjoKblCPfiZZdjAC1P-BZ9RaBf7jyKKMbwIcYJ3K79HO2d-_qlka-3ySJcWfzP0W4dYXHGwzfEDpBVWe3uxlyG6qfxjvvt8rq_-CPBjvJlgJgeR5byLrspBGs60Hz-CGV0lUHLYVBQXKH2B7VgaNFD8W6GEiE92NkLK-7cm25y-l-A5=s512",
            region: "Uttar Pradesh, India",
            "popular" :[
                {
                    "_id": "64d062a3de20d7c932f1f70a",
            "place_id": "64c62bfc65af9f8c969a8d04",
            "title": "Rihand Dam",
            "location":"Sonbhadra",
            "description":"This massive dam on the Rihand River creates a picturesque reservoir, perfect for a scenic boat ride or a peaceful stroll along the banks.",
            "imageUrl": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQatqZtneBasHC2U-U9m24M6U1mWI_buysyASHEOuNv7AMz1ip5VEk0UvwI8jmX",
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
                            "location": "Sonbhadra, India",
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
                      "imageUrl": "https://lh3.googleusercontent.com/fife/ALs6j_FMtJJOmbNO1lBAu931L5RmdKckkLwsRCrLHaYfhycvf-7-hfZVpqwt7bTXoGklEpRf2EZbXbiyNurXEITzO31_x5NxIwz3mAES83tpFQbAG_JVAfGz9yW8kfqUpRtX_tWkq4oIyK3-E2skmWUwElhZNzTjy7AW4leW4NWfSpo5L35CUnj_U3MjPrfJorCmFqgiO3MK2ogNGlBnpBvJbr4lb1fMp7V656FTg_vSXy5cIP-0WWviqQiX_aK_jEZS1DqlksC9YPcUBTrccCDfjkPSvHXvsbvsur6rgWvI3tW_MjbnUWvmaytkqBAtw-ZbbtqIG_OeIqefrquR1A8bFbtN7FtEiG0Y2TeJ99Irrjlwm-DBZjl8AIWAFjVU9_CEvHfe-QyTqUzrV3IA3RP2nkKIeLM6RNUju4DPKGEYjUlBpNKzi1R1G12rPKIrdrEoD_2J8qdcCDH6UrhXom4c99OTEn-2E11NomNbqs1n5bmS_uOMp9mpXiWhfqOkZxYA2t3voojGFabT37stQ6rbEJI55eLlpegjAnDm-21Feoc7swbg_rOfUlJxWeFqEMj9_YkRh1Ns-Co9GGRe-QlMhmNCyTBT948fT3Uya34PVR1YRyQOfEpthF-XaSgW72XQMdwrnR2cONwfYOxkfNJ3Ke5K9mCuxZnYzGd2AV4R4akySHb1F4i0dfj8oKjltZy0xImjjJLZfhi0mbzbgE0vgbVL3odFUKN4CXXiMLWtjnTV5yhb44POe1a73sX42z4i1FBaJHU8xtcKyiG4aEd0riOgBRmoCHyScmbv2aAqR-IWMwZEr_i5jdBFYTjEfHvGgVJc8fpdssEECeZIK1LmphzqSo_cEfD8yf9bXWFS2UgoNH21cgjjLa13yYRdxAHR8eHMTvJMf5nUi9CYZJqO6YrlD4ow7MxrAopYROcpNPerqPnvibELKZj_itkinql9icsTrbXwY_FVc8Suo4vWP14LAr50F6tcKzFv1maJZNnJ0_LbuYVc5LL6Knvrbo1VjbemvuTaqVMHRHknlhOkoucSq3EtgLjdpV28VkmiwG68uEQLM9sPoQE81EXeW8OmoC6t2R2HC8rqNv7yi-NBo56sIgCsovW0Ew7dpw1NjG06w_q-dbZUBh7nd0LRN0lYlg3TrO4HvSa7oHBAXrnrKK8ar8Vo8dG9iTqG6xmT8JEn4M2dFffqgZQPEC35jqMpC2Jk5DdY8N8iUhqetEc3rllTx22v9SNk26W7PRs0d7uWCAS74hWcv7n-et5V1MFKd-W-yxsCa35VSxcTDTAfdISEGcstOGkWue_KmzES8Trtw20RWyH0WdKgw9ZsMBWPCopi0wfCnkb20Bu9bjrBWca2Zkv7iM2yzbwGVqeJjKHCFDsekaH0wZEhO5CFruKlw7DgYJ7pVyrfwPa5Xgj2PpEiZ7Z4ndkdZqu-FTpSem3A5iEvJCVpo6Xshp7hfr4=s512",
                      "title": "Chandraprabha Wildlife Sanctuary",
                      "location":"Sonbhadra",
                      "rating": 4.7,
                      "review": "240 Reviews",
                      "description":"Immerse yourself in the rich biodiversity of this sanctuary. Spot a variety of wildlife, including tigers, leopards, and sloth bears, or go bird watching and admire the vibrant avian life.",
                    "popular":[
                        {
                            "_id": "64d0b5a4d3cb4985a76ac1aa",
                            "city_id": "64c62bfc65af9f8c969a8d04",
                            "title": "Sonbhadra, India",
                            "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC4HYS134EmYAkoHPsiKjSRe0E9X0HsKCfZnerpy0FGGR0bN1A3akKXrEyHU8rqgSSZBQ&usqp=CAU",
                            "rating": 3,
                            "review": "32 Reviews",
                            "location": "Prayagraj, India",
                            "description":"35 Air Conditioned Rooms Including 2 Suites, With International Direct Dialing Telephone, Colour Television With Cable Network For All Latest Channels, Mini Fridge And All Rooms Have Bathtub With Extension Telephone.",
                            "price":"3999",
                        },
                       
                    ]
                  }

            ],
        },
        {
            _id: "64cf2d4d5d14628d0ac0a2bf",
            City: "SiliGuri",
            description:
                "The gateway to Northeast India, known for its bustling markets and the majestic Himalayas in the background.",
            imageUrl:
                "https://lh3.googleusercontent.com/fife/ALs6j_FFV_vS-BbtXJWbp-CytQ6mBq0YciAtf6cnBMrgy37esLHTS43vp40QT_AJX6mxajzRhojPt4CMXfEhLUM_2xG4DTprpIejDc-L-8vQ6EJMmnuB1ZcgjiDP4R8zLvRsrdThl8lOKzSTehcUm6J26PcwF0O5LHw6fub77YTJDtFzhVC7TOYjFUFtS9_kb7bYEgYZW9bBezrBV4YSxraf1116Bp3RUtqDoQVy88ipNKGx1l29DOpFMtHlPffnUWEfQNt3gYxukw3YrORrMDYmUsyVwsQsieJCDHN6P6eNUTiW1BI__pcZl-bAaeBuyAv_ZUFaQWlEa1PfyOJP3d3CY2azfj654VAtQchbW0gclsqxTDdbZVnqu9RuaFpnsOMIfoazQAS7nvJ2vBlSqDRLjRh37LY9RoBWOgwC9aDRFej3Tbmh23e7kYte32NeekBG0b19NCHT3SazLIsNH7WtRXYYRlhBBY2NvSSD73pJ40MpWp6wZSC8ZaljlsxOdopyc29CGXgkmnRTuYWxe0rbVA_MZHYhxtMZvlTiZFMR1qHZP9VRAeVuyOLan5DdQvgqAMXbu6vzYQexPEcioFtvntLZrijwFgNroATNLlpQJGUrsOdli7z6qiEW4KBopigXZ9rmnY4TpXKVIb7eXaCT2T_aJMd6_ijEcNY5zkLTBmyChk5rjna9bufbC6n7X3H3MfXsVOuAHMLa-JXun84m3mdgPUAzgLXKeGNnw-pN7F8HdmKPf63G7YidcZ1xnZTAAwRr99s2mwzO7vr2sMShRKW0Uc6P4RG5tIvLVPEv5Zb3DRUtlDIAtnbH41ELXZo5EBa2blwYxOvZgeb8YrCOeG9XGQsY87dLnlZ52Vc1l-sOsKAM1erWg-8-kCrqqG7NSxAg4ctk0RaXmgLFtTKhfzZ6Z8TdmpfGpMqbPDSBBj3RjRoubfGZPbPHBY9cREVOGN-OoomG-kThvmVWcgkx2kCJxAvsSRVyzH6TmgQfEkqfK6X3t6DP6_mHfDVswvld5NKhgp4t6F63-JqEkUIP9xL24DaHqXhcX_7rV5udgf9eHiExzK9LoNSepUvuND-1hjU7QuI7Vcqm2MwwjXw7vntQz43S6DWwZqaylHksI9cMNcusEsTv4h66g2CztpWXebIGZsAFOQ6EWM71vestkfkMHsYjFHLTj8SC9LwGW9usvvjbuRDU0FmPJL_19LTxHvHy6t1nbb40pfCS2P36bFemLmuagpNQ5LaXZHmo7-sf-3lClmF-xOL6Yrftv4p0Ni5rtLJ2SwtAcklmSDaSW16cGRKxB4JHIvHnA5UEF8vrm9wXx7gUm1GjDP1dCEa0KGqS3hIt3iiJTHPA8t7zVbPuEd-UfiYKH4EdPwezxSZ2uMdvOIJTySIEpigLNY2O2iTJdx8yuRkv7AnlQdGaG52bAIlfMMSKkcR6FzY__Hwe5XljOk1dazqURxcPl8Q2kejK=s512",
            region: "West Bengal, India",
        },
    ]


    // if(isLoading){
    //     return <ActivityIndicator size={SIZES.xxLarge} color={COLORS.lightBlue}/>
    // }
    return (
        <View>
            <HeightSpacer height={20} />

            <VirtualizedList
                data={cities}
                horizontal
                keyExtractor={(item) => item._id}
                showsHorizontalScrollIndicator={false}
                getItemCount={(data) => data.length}
                getItem={(data, index) => data[index]}
                renderItem={({ item, index }) => {
                    return ( // Add return statement here
                        <View style={{ marginRight: SIZES.medium }}>
                            <Country item={item}/>
                        </View>
                    );
                }}
            />

        </View>
    )
}

export default Places

const styles = StyleSheet.create({})