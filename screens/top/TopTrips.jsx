import { View, FlatList } from 'react-native';
import React from 'react';
import ReusableTile from '../../components/Reusable/ReusableTile';



const TopTrips = ({navigation}) => {
  const places =  [
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
      "place_id": "64c62bfc65af9f8c969a8d04",
      "title": "Allahabad Fort",
      "location":"Prayagraj",
      "imageUrl": "https://lh3.googleusercontent.com/fife/ALs6j_EmVxm2v39LqrU_kZeP2iY6wybBtEtrhEVK0wGZGeta0w-Jj0EjDnZkUSM-xwa2kRDus8kcVwLE636tprpMiJ5cu_WKTxvdRKdinMUoGVEc84IVBDnazBKwg6-mHXpdYM-nqYWWSgXnGIc0MX0lszXwo_UESVCjHPOYwc_iitw1H4I8hweRKh6hpzMopB17u4Wq-sa92q1v7QahNYxzX_Fn_RCW0aGvpZCKGDjvR070RRR5JLe0vRkQD_EkdQEWLYbtD8n1psg713C98l2Jg_ZXNtn8kcJc5YCvPoSlGBRGxp_pLm7EXd5NLdoFFPJRkNwhNP8J5dU6f8Mm5euqdvJtbha7hEtA52JWSLOq04abotwoo1Nq1MDttNW4je7O2pG8ZhU-zvPdTt71J4dMR0qow5_MtxSebjybnlql9PcK7zRF7ABMvVy-qCFf7hW9gPWv10NSSdgCdYB94UFD8cKOdVH_hgWUiLMJAjkJGJb8S5IaVi87nmWKBW8G4Z-a8NVFVMzeerbiCmnDCfsv76InYwL45Q92bVe5DUbIa7LveO3T3lf2XoKu2e88gua_HD9-1xFjrpZxMmXMXIQI8BULS35c2CIXpM3RFv9SES3YUh2vSJGGPr-MId6Qk6Crm9NvA-P7SbSfIs_YVkldvRGhm8Lns0geruDagL1qXc6zhiexYwvhBflYUDzJ85hOohu6_FpESsamlIG6mxs_JYJJAQWW8Ds8ZlWLb_UEXi49gIN978ooKmIgvFy3Zo2ycskh-h7uS-7NMpKIlafVk5M-eFfQ-xceOePnksp42GCM5eiW9WcaTsTqU3odW9q1WotNsdpqGlnueAwJLq-U8BpFOsdrdaTJODBM8aBDllYKl8kKz1hll0aTq2vts_8vaFA2-Q61F7EGNDmJEH5foyIeXXsVX4ITZtShymD_Q5awWyovaA6berLO8ovpE0CJ9P2iTL-81JUjgW_c22iiid_xGmmG02mLdt9sxxMgHCjm_GmcUtUr9XxFLAXBsp_aCfsuuK7UpvB1siGhB7OfZVluQcYunfUKwvjuwGHqo8a76XtdYbuvDw1v8-bD4q-BrnFMRa657OE2oO4_PJNg1bZtAJXeVZsqr2ilfz_VtFnoJRLEKym-zpv-OJTW7RhcTxErrHHasUPD9qAHXB-i3r66jf25EwSFjQnBAVjhIeaBWQ3cB0stJKV7wTTAgIGAH1VkuFSv3-_RuqT3ZqGsr_h3-RXkWd3UbsDCfGhUAJv7jIBzPQI4yzDYhabIOUdbc_Ym1iUyuefOVOpIGqaEgNa1OQaP_Su_JtGoes9NwJ-3CZQAyrjP0CdMYlYCzQ48b789EOnnQVcJYGMKHFNWcDdKFD6ugAoQFPk5uW7KmUJzyhDLx32YMBtM_H5uwiPjRTLI9XgqK19jZlDCsmzIzcJI2JNkv42vuzE5ezc5b7Gn56lyAzvcpTMShQSkdNVltpUk=s512",
      "rating": 4.8,
      "review": "14 Reviews"
  },
  {
    "_id": "64d09f90364e1c37c8b4b140",
    "place_id": "64c62bfc65af9f8c969a8d04",
    "title": "ISKCON Siliguri",
    "location":"Darjeeling",
    "imageUrl": "https://lh3.googleusercontent.com/fife/ALs6j_HD1pElPs5WKSdISiYhD8tvY1A2JGs8kNA1JznfUL-bctKPwe9kFNastptUl6F9l04WIEXKpuBZYuszJ7dQfgkr5rHq3Rappu_rzfaN2KEeoC-I-XYkypO_YF88GFmhssawwCSXgGHiO8d3NYhQKQWFy3gFUrCugsW78AhBtVmHnsrLgPzole-3-GZfpCD82txcLZhQc1NNBAGOSUuTqHdWVVZb9EcZLpZH1OcQQ_3Ln2JkRzMhRPV55ncN753byQSddtdXEps0aEROB3O8KnoHYEfOxHz7badGLbL9mFmWo3mb1UzdxAV3lsNGuiWTMbzVZSLvP9y_3LaLD2nQB83J_tYA9hhh9Vz23VnLSQcn7VlxrZB6-ADG4ss5rVdjPtGDMK-_LHZ5_bRuRwU_gXnraeAwXr4MeIW18TEQpVGXeKibIBqd6S-nqlmq-CkR9h7j5_O-rJExe3GFX174Qfr35VYLmITYHoq4a0JQQrJ4ro_jNi4rw8g6UZVLbsnfd0-AXqyMaokbN0n5fuAyT6KwIt0RRS7NvkUAtIlo2j6yG5iJb8yFViEaCRHoF2ei0INIBTwQ7BdGU7QJkFK1-2MJNMgo-TJV7EmKGb3PooTRxJxFFTVT9mpFz8-4-L5Fwp_hGi5hPZSiQ5XWl41ZHiXNyouO30_rfDbi2q0P9vxpB7_sguKvdd3htMJloBPpLItweVt-uoa9dXNBQdxRdHokD_sIS_1ca9CVeceyAyuOLPC1iOUWBqWFSc0OHgWpZm4nGFQFBDM3fTKy0x0r4m39lohfW2cmTBFlBjzhsOnqA-N3P8bawX8an6x5P1mq4z9cFUu-cGIDueWhjvWpT728pIoF2m19b7_LxMtB5b816HFY-md8oWvRMiUaBF6XL1qKpOxNYsqF1CDVixtomg7KES1PShH9UsvwRMPs7PCzj7n4xetqC12LfQROyUtnQm9gfyG8zcUrpkkvxY0Vhd_cW2QOeNR1Dgt3dpiO8Q8pkQCbF22NhXSfFxAdZpFY4ImHXdXvoCfzQSHtnvncZkuibSsqmVYNKW9AiV7vlTIfdkkanT2PcTDIvk3LtJR0-iDE18ZyaHGIPJDc1xlNDFmNs8CDVpUvg-e9GLhATXPzzk-95b4TjgukbVM_WRpeP-BES0_SHnfsLreucv9B4dXdq-lMy5uD8QYH1KLh4U2YVPf8enjWRwmbG9BShbF4QdJVgxOE1S3WCMzvj1JVkpyNcDFOUh4l1Wg_AhImdV1igxK0aTYCML-sI1OJzqATpwW2bjYrivKExplidl8zg2m-NWtcvFn86a736MyN5M9nDujBkG0-WXv6AmYpISXabBawd19RcIrPBTqAyLmheXMmZRCDSe3jE2Ofjn178pQ02O8cwmszgYU1EzGGUFh8_zjYF9ScumD1zCTs3nrH4vJfyUYZGYl8_nEsNTBWHBp0worhDaSDqonFDNKbx9CZxquF=s512",
    "rating": 4.8,
    "review": "24 Reviews"
},
   
];
  return (
    <View style={{ margin: 20 }}>
    <FlatList
      data={places}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => (
        <View style={{marginBottom:10}}>
          <ReusableTile item={item} onPress={()=>navigation.navigate('PlaceDetails',item._id)}/>
          </View>
      )}
    />
  </View>
  )
}

export default TopTrips

// const styles = StyleSheet.create({})