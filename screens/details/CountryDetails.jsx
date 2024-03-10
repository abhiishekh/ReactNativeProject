import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRoute } from '@react-navigation/native'
import { DescriptionText, HeightSpacer, NetworkImage, ReusableText, Reusablebtn } from '../../components'
import AppBar from '../../components/Reusable/AppBar'
import { COLORS, SIZES, TEXT } from '../../constants/theme'
import reusable from '../../components/Reusable/reusable.style'
import { Feather } from '@expo/vector-icons'
import PopularList from '../../components/Country/PopularList'

const CountryDetails = ({ navigation }) => {
  const route = useRoute();
  const { item } = route.params;
  const country = 
    {
      "_id": "64c62bfc65af9f8c969a8d04",
           " City": "Varanasi",
            "description":
                "One of the oldest continuously inhabited cities in the world, a major Hindu pilgrimage site on the banks of the Ganges River.",
            "imageUrl":
                "https://lh3.googleusercontent.com/fife/ALs6j_GHNltu7ThOwd_rcBPwxJ6PkI_EcmPNiB1EyJyXoRtGLd6U4iIvDF_C7Wo2IxV5w9sGWVKOvyICMttM_R1jbgVFWkyeI13BtFR9gjzD4cA81w4uZ7pzWvML-NDI3VlMZhNcuYkCafhbbHplBkpDyWM33yYAgFpk4n2sdP2I4m-uI4r8gKtcaEDPEbvJF6pt6S2a4e0PNanWZLs0FDhnZAy8CyDJBjWGI4D-tMH9w-GWScXYZuC1Kzmu741p5_3kw1M-rJVyOaF_X4srdnmokgDcVVUlyyOntQ0VmgS7cMNG3G_tsvtbCWoM0x7NZaRN_MTQhkYzVWUBG4nI-Md7BX9ewJHKZ0awRifa3NZseWMAbOGpG3tw2EkBsKUit7W-pmYPM62kyxv25NVMaodXJdyk0cQJtEOR6KSdpIWASJ6I80roBhT7h1fA9kTF0KDe1XOY5WPmUNHLyizMEv96KsdMl8PVZDn5mKUoqaTdLbiLN0EjWaB1g6B5OS0TXO_VIUlvB8znosP1HagJJ48KDDVPddDyuYbq90re8a4ryzdXX6SEPKMk1FVtWvNA7-Qc0GTHOS0rGIcBrJJARE9Sq8wIOjscNnja9NNI9U3yjAUAkRhEjHwlTaojjEKr8e6lCHIm72VVSBrVIKGMJIhUg0NYaHfM3b66HqGzcNIiv9YAPh9pzIsov43udA1bvkE_9iMYFHPelukhSKRrK9UNDuZsODkOPwXT4LrI3nlXcIaPJM78keyApuhkyDtrPs44Hr7vUU9JNiLJZVPNhaebNhdWkqzNsEs3CBrJIUR05pIDGDtssELZN4-e4QfgX9hON8EIFP0D94Tp9fkD0QxdZBlATyEcV4zOShgxRL8LbPR6giwV8wLsZTV1SYWjqdPh9hPqkGj-_M0vOSs2PWTDYXUUm7ppKnAf0DcpBXoZKnGzK-Va_3yh96A-Sfc4oOGofe9A5V4XMTSkRVXeEY9k_mblUsW0myEf9Qw_IVcRbpmH6YKb23iUCm3Tum6XWNooo_NbIu2w8y3AhQlPQcXquIMcXKvmo5EIuD3TghcX45MdaKEdSmMSzkqAE36iHZxjvs2z_Tgx3PRGs2nW0sRozInwVLcHS-NsCzI2cV9OoY2vSDw6y3ayI3EpzbtKA2_WG98Tkyju-vfX0RIRPUtPIKjuSHAtNat-i0eicyLiX2idN4s1FSIy_5gT4ICKRVEmJxDmzqQjK0S1T_mXix14ANiEn8XEgi-QxTGkKSORTej3IR3levNI9UMJh0HH7yRhb-lfqz6TSnoT7bI0Dihy3n7N2CdnvtrVlRKisElowT7y9xP45wQd7UnOBMZ4mEFh8OHEfiZb4R1RcTkzEEfEoVJAutvKD8vkM5Zv3gRzKucCkVgeMv7ixvxKfm4wPPblWvKYASFJCuf2EqUsW5XZPCQwmW3nIrWlhjPSC35SjwKC9duJRp3VYy66Gmgv7HG8q3N5=s512",
    "popular": [
      {
        "_id": "64c631650298a05640539adc",
        "place_id": "64c62bfc65af9f8c969a8d04",
        "title": "Kashi Viswanath Temple",
        "location":"Varanasi",
        "imageUrl": "https://lh3.googleusercontent.com/fife/ALs6j_F2DY00VCgX_Nx5vhh-28j2dNLgVEuB1yNiYc93RdquRvmvOlCg9Q5fnBlMRTAAUu-2gGH78QTtlUJfsOY61oGebxgR3DzXOrPHVj_IvNEeMA_uLmMFAyp8QaBNH1ufmHFFD8kzz7oaLCv5XboFE2jXcVorckknX73SbgNr8cHqBLwYaWzuacgoZ2QnuwMVKOZe-rpipJXgKSAOmpzqF-D582aTHlFgmnas78wybcRWRVNhGsN5vb83ZPAmIP0MQ4JqHXdXEIRKbo577JKu2rxZcFovOm8k84H8by-cq2sKBkGesiT3ATkxGuiTT2lngFjpdTHqsl7lWSVowgWi4okj9m0lxncUh4N7e-ygobhOmjSAuj_Fca_N8iJCPOLrUMZ44TJYcO_ROViQMOklAPFiga0_rbuTO2VZ83N0yK0COpLwnmNvXQYdzwrAxUe5BkzWw2N1jWoJqBJHq5e1EAUulu5CzsVCpyiIbWVfN2Epes5vwv08ZuTXb64cbh5tJX0HPumpu5QdPwoj1anfhCQDO7Cwxjs6yq-vxo5R58GGT4e26HYwp9njwxbndDqeXJvGqr4TbFRvfZ7XyRrCF6UWHSUFMPoB2vAl6COw4yInvCP-Kd0hNoVwym7Rtqdx9zZgBbI-qfQFxAAkRmY31jVEAUIELvnyZ-rNbfV-UZXyUTtEknpOhSl5TdbLOK6ewaynELQ9W2qK9nhpCOiM4aUFtOplDYYqCl8McUvgrWcRgDSy9IRG6bD28DX2Cg8tdjCobLzDwjABMi0HW1cd1F0HG_cSFgBpnMN5Gu2wpHfT7OaPrYq8-eR18rmzQ52d59l945xtz6tBjv8Oi7NdoALsLGy2Az1X3vpYXMsaNwSDSKsKYbhgZCKZnAUQQ3pFAPT00PafEkAnJpOKh2462F8kDT9rDmYNTlA6rjT-d0uM9mBPfZcDXuGNIBCANWkOXHTRjNea_lUHMK5yRadSLOUtcZ4_qH7J2Qek1Furtx2_rH6d0jXTvlB2KFUZA5ErMacMsRUZZT-qb908eqtuBmSpCQqI6UMe2FNkEQQfQSgF9RKzx50HXdvYRhwsQFb6rBj603BWEfAjqlWNHd7_YznyZnNIqlTAoR3PvE72UoV4fRNIYsYuvFhPRyiCzFOG0YwGARUP9OgqpQMutA77rx4tUbEWjnop3x1h0DKGsj6exyPVXJOpwTT0AJUuFaQ-59CtuDYXNlUDTEU98TUWmSnrH2mx9o_QVM3wvv0gP8UtIqfiU5w-mUXRSvpDxW0v84_X_CYJ0Mgj6RklBHNpckycQPTur_6pyRAHHzJ9vMpVeaY-sqn9KKdPK24Wdq_Zjo9El_FlHOvAAA7CwILECnY8BehQJA72K37CHHk7N1sHYIo3ggiK_xAolL8ZQvwwu5q64sv-15yrUpasms0LKyqX19RkzYBPQ1Coeg7nN2QnkEzs0u64R-GNuqk09ZwRG7A=s512",
        "rating": 4.7,
        "review": "1200 Reviews"
    },
      {
        "_id": "64d062a3de20d7c932f1f70a",
        "title": "Banaras Hindu University",
        "imageUrl": "https://lh3.googleusercontent.com/fife/ALs6j_EjYWyhjBnZEA0OeRQAj-hze71nkVov8gilhFmvuHHfW-jMghDib4est-zSVaKUR8fikv6eVmlu-xeFW53WpzH7JuLOpyaAo3ywpJ4Ox386_ou3WuPTylT09EXFytQML4Yw-EuEStXPxH3_93-_IqxDsE_KX-1tp7VCfjHb9YL1ennqNcpZxvJcpy4zmrGd1wMhVSPa0kUj7OpMG3IEp9JERktzkJqA4z1MAyyNpXK-jmmiktAQmZrMfBA-A5wK4H0h5qHvRleS1BZKXT8Mwe4Ef1eTIThkGBjaeq5sr-mVw3kx2bw58R4qGDStiVJsoGN2HE-MKvAirafGs5rkpAt9-vCD1qRL1Bd8spzp35jvmqr6qlNkCA5cfAzCTFOTBiSCPuB2jwOe7vE5JuFHdqEdKesm3xTMMP-KJ9kEGC-GznSyxsERFu27ktzqjBoGR0CjJd3qRjZoun4e2_rZwLz2tqx-iZv0mbcVa4Tfzm7Mu5r8RavRfw6KAiYxMzRWMAd-er9q526Shq_9H65iB1inYLIzHQyxWcmKz1t8cCPrpr_CxwB83AieM1q7sH4TJuAIn2ex9JX--3BayZpBO8knmVU7cpQgkK2PkeIvM0KAyj2A_4f-xy5gvh5Nv5zEZf_gCig4i-IxWj1q6tSsbvpX7FcSzsGWUYjPNRE9zP9ij1f0oa9TgvpfCoqnKB2U5gu8RhNfvxHnJcLQsfyX8neuJlT2k90DqHyzrXyHV2GrHgzF5MzmBCqKl0zwEPcFCEocibkkcDjWtjUootxQa-bUBAeiDVEf3PMbP7XXV7iY4-WeSCGpBpvIktsMQVB8Ca0ZnNVxTF5WhV0Pw55xX3z-cuwbST5zhGFJaWzkLIbP6qTLylq3PMGLJOqU90s9dHyg70exnuuKWkcyTAffNWWeYDLZZxIBTpiT2PFPpMT0TimZkcUVbRJW1Kkk5CSyH2hl7xLZ0Mp-BcG4LlGnk3j0E0EjSnkrlCCXCtDrHpGIrEMcn1WhuqlpNRNymVqp0UJswtlvbeZIhwwpPKx9vtx-c_S4DnVVKQp43C9lwy5CGgz4heVIVM5YjV3O20AI767BsJqwNAueZh0pXzLkv1VRr3y3wTWiTVl1vOh8zyMiXwm8A7R_o8KyaVpFvDRgdE1Ec6pd2UykjCYhyZH7IUUVAirTMLWis2sMpmY4yIvt3DZ7Z3XDBCaSFxbteZ3cleMGiLTvGJdr9Ntq7WADmd6crGAfrn4VT099K40L138kVi0WsjHbQdCHXGGgtDuz0-LHSnpDh-l0Co_qoCRo8v6gzAxKofbVq_ZfbUq2AGlbx9_B5mk4BE7JrD2hFleExjST3LbhD7JAuX6HzN0gVHO2iTPY3XNqLMqRPx31uB8u7XVXVUZLoo4BCv5hQmvwTKkPnmDlRFQVYOpNb7G-Cp4boBI3RXz25vlqmdOPuURv6yjTCl6eHYeFMyngEd0s8dP2=s512",
        "rating": 4.8,
        "review": "1452 Reviews",
        "location": "Varanasi"
      }
    ],
    "region": "Uttar Pradesh, India",
  }
  return (
    // <SafeAreaView style={styles.container}>
    <ScrollView>
      <View>
        <NetworkImage source={country.imageUrl}
          width={"100%"}
          height={350}
          radius={30} />


        <AppBar 
        top={40}
        left={20}
        right={20}
        title={country.country}
          color={COLORS.white}
          icon={'search1'}
          color1={COLORS.white}
          onPress={() => navigation.goBack()}
          onPress1={() => { }} />

      </View>

      <View style={styles.description}>
        <ReusableText
          text={country.region}
          family="medium"
          size={TEXT.xLarge}
          color={COLORS.black}
        />

        <DescriptionText text={country.description}  />

        <View style={{ alignContent: "center" }}>
          <HeightSpacer height={20} />
          <View style={reusable.rowWithSpace('space-between')}>
            <ReusableText
              text={"Popular Description"}
              family="medium"
              size={TEXT.large}
              color={COLORS.black}
            />

            <TouchableOpacity onPress={() => { }}>
              <Feather name='list' size={20} />
            </TouchableOpacity>



          </View>
          <HeightSpacer height={20} />
          <PopularList data={country.popular} />
          <HeightSpacer height={10} />
          <Reusablebtn
            onPress={() => navigation.navigate("HotelSearch")}
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
    // </SafeAreaView>
  )
}

export default CountryDetails

const styles = StyleSheet.create({
  container: {
    top: 20,
    backgroundColor: "#F3F4F8",
    marginHorizontal: 20,
  },
  description: {
    marginHorizontal: 20,
    paddingTop: 20,
  }
})