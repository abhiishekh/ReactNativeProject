import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AppBar from '../../components/Reusable/AppBar'
import { COLORS } from '../../constants/theme'
import ReusableTile from '../../components/Reusable/ReusableTile'

const Recomended = ({navigation}) => {
const recommendations =  [
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
      "_id": "64d09e3f364e1c37c8b4b13c",
      "place_id": "64c62bfc65af9f8c969a8d04",
      "title": "Anpara Sonbhadra",
      "location":"Sonbhadra",
      "imageUrl": "https://lh3.googleusercontent.com/fife/ALs6j_HzASADSvP583y4npxUusPtxhC_ZkY5ywv2u-pxWJQEpo48ua4VvkhUf0-Jz36-xPh_8puu7iTwPR_dhlKEA4f-xeRiVi2V_cB8NwnikTSONTbsj8H5cQ_FPO2f9iQYi06IKy8m5bT8iMj0A13AMsrxjpZEtg1y3dcQJVI7ibqXmkplR8u0wlAvh8faPz6V4n82miV24DuXJi8f3sxxZkqECy__FZ41CVMOF6fZ41gFgcuu5Mjy0kCBZyetgni9UafzCoTOOkWAF_8iPuYjVoYFAf_mK1L-LRLDPF_ztI2J3FAv_b3NE-q85DvYmvB3m1z75DzJQr3024AsTKE73HyPQDQfAeqH2BjRhWevrLmYxJuuGyKCybD8VDQYjfYKKsr0zAuIfcu8UXYNNja-3NIEBEJvhc56p0b17CsRUE7wbe27ZvBt6YvRLQxqBSlch5_8kNoyoZ3bWHEtr18S3u6OCmMF_Trz717JlM2BTydw5QB3N0rgMYOqlgZxCHLgeb8M64xDE79tQvNa-8c-lNx40EhaZ4j7gNmuzhxJU0gc0-lp5krsLKSrE21oitpjS3dzIumOAn5sTS_Jkfs-9ZyiNzCI7CtLZkZGluM4uRzsPv-_yEP2e0V1snGzdkBs_MzCuw8LtE6XevTL5XeCk5tRXw2hEQeqBRUXaUp3Mfct7PuocE-lORddWydl5IHljkEYGGsn-EPm3xr5o3Sa4EHjFhgU1CJg7uGNFReQKS72ftAoXYzI0bn-9OeanJGJI9n1RqDvMiiWi6G3s156lZnTCUfgzz6s_x_K6mZ2bYJQJVJoHvO4iqje2WmeVLVSuUVDPrFl3__QKLUzhuyIGYMAFpF1TGqqNKp-d8oQZIYbJOLW-2EetwdtHT6jg5BNUin0bWN3dTKzbYwLu6bffHMX5RwRj1igZFaYpmpJ-iaM4KnGiEgXz85W2AiObY6TkCvOxe__xSV91-afVagXwXw-jTp8XAMilwjPDcINDAwr7wykhhXTFiWRMGvSnCDFzka8A4o9F-MJgfsE6Eh65bVVvkjRfseTXpBJtpScVaIl6w68RClHQ95xgY6JCzuWHoeLgL2vyy_i-H7f_xPkxN_aUOBxnHxP_l_dg6UkubAl8ejhkXxW9ksfeioVDuguBPB4IazSf22M733jrHJ2n-EwPYCyoVqy5IhtRk7gjh7-O01Aojwr1NTRLyLx4kcMUg20sxcjPpjwXxBzhDKOlRdKJyiZnJavbhS_-LEGPW4x_eMmIEiqRneJ_6GuEEnwOth-pWn6_soKHO-W98qJ-pwgjoOrDRxk1ElCV42JYFHiZaZIAQXb4Zlo6WTYH4wvaO_E13uiNdXqk1xBewpZmPcrrTNuAxg7Z6Pzbir6IVlTPgZVIWuoPiLHTLb71yUmpj8FKY1iEzufl3EYxdxnzjI1-LLc2MFz5x62mKQnyWfpI3kAydjwHR-Z3eJCKZ9sK23_=s512",
      "rating": 4.6,
      "review": "21 Reviews"
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
  {
      "_id": "64d30f789d008909fa8b7ce5",
      "place_id": "64d2fd32618522e2fb342eec",
      "imageUrl": "https://lh3.googleusercontent.com/fife/ALs6j_GOneM9d3dI0RpHcwvKO-tXuYlu7HYtU405wQ779j860iRuKsANZVl-UrIENZmqpNezbYYzTHZ9HGMAAqc6wl5k1FgWQWlKAqkuVSPARGTCuELGEJDGoYOJ1g0Eywf4fmaKIXFWesSPYpKDTGbOBWXWlF4NQGpmfeq6_WoNZxJh5oURFedDKN9edhj4KOO7W5REBf7m4n5kmWgB0gxAs6Ct80qyIB4PxUk8Xl7FU6M6vS7Tp3cM3O9MFr5xulxNefEjKsMDBFWrbtIVZy8QyeOi-fnEW1fkRB-I8ITli__5bkHBe_5U7n5w297IqnUTHYYGO3KWYi_E7W2_pJoXKHtRkSgGQZYryQXgC-eG8SGAfFB5WVhMGtgMsNeLG6hqqtdJTNlvI3uVEmOa7GBqFAHAFcjeVwcsqgkMsnyWbK6PVZ-obwyavt1nRdU3cqMpNNYVcmnk6xC4XUMWNKEfto1fsaMhJc14NbiW_b4cju5EMVjusqiInL33Z920KpOm3PVYS25GG2mySgJLQPOqvKUv-i0hcpW-FrqvNw7OTi2Sdgic5aBfDOInyJqxm3veQu8K4ZsG1OqiH9Ply46LkMNGaPzzn9HGLQuZegoePmAy6NpU_LGv8bxVz7CdxcAroAMcWRnZKoSBNzY3FO0iVkB00GTnG9ATebTQOXIOzLTpem8GZCccFZ9EZCa4AhWqUT1_wgCPstQn0IrkmzrCHEUoTnQu7mH3FveQ-6toiylh3IbPV9FpLletjB-OERDahK7MPPLGD7D1S4jn-9ZlFmmRFad-21BnLonExPh4g_5lg10wjwjw1Uppslnn4EV8poJ_-gmMCzeJZH-HWKmzQ-5wDtdvUgj1rYFLEO22scEzOzyZLzqxgz7T8uUpUnAHImsJcLJWbK2R-X5UbjrZl93EOtI6_CESmcxJG1CrhBaJFvUGHkwOsPjR9s2cRKM0PSPgn13ymuuUhUGYrSrlt_DAcqyOzdbi729peu6S6QOVP6ZpbH_5Bn0SVIiSZZHRAhNTM4B8-4HXYwYtREBQG4BKZeeM8X9r-v4kx1vDU-VNrTn760zvM0J0I3vVzpIy_FZkbRHoV6GG1T281YegZQDSXLhvQTWHkdbmaBuc8tnkxoC8f-lHPE2SI0zg0rBb7HIynWTfIBQ9wsreRkAJe2E6tuXcMQ89yLOZpcAxJPhkxuVS53RH_5UwXP6mJdFPn7vl0vD2M94JaA6MkyWwDqGuNrLQ58cDl_k4NiXE13mk3kW1gBm3ZEcI3xcHTAyovYqw6hgR2EWXkka_1GnfU-HRtQ3-bRMcwn36hZ03j_xV4BUkLt2tuNqC1IndTrQhovgt-673_SwRFOJ0m4y0odY6vzZDn0CppLQ5LniH3UXpqp4_OL5e61Qbk6s5cSJmJHNmwT_x3B32pDIRTJNmccnpciYb2erx4NBPlUfNnvho0pZytZil1TFKzcov8LobZ6ob=s512",
      "title": "Sarnath",
      "location":"Varanasi",
      "rating": 4.8,
      "review": "24 Reviews"
  }
];

  return (
    <SafeAreaView style={{marginHorizontal:20}}>
      <View style={{height:50}}>
        <AppBar 
        top={10}
        left={0}
        right={0}
        title={'Recomendation'}
         color={COLORS.white}
          icon={'search1'}
           color1={COLORS.white}
        onPress={()=> navigation.goBack()}
        onPress1={()=> navigation.navigate('Search')}/>
      </View>
      <View style={{paddingTop:20}}>
        <FlatList
        data={recommendations}
        keyExtractor={(item) =>item._id}
        renderItem={({item})=>(
          <View style ={ {marginBottom:10}}>
          <ReusableTile item={item} onPress={() => navigation.navigate('PlaceDetails',item._id)}/>
          </View>
        )}
        />
      </View>
    </SafeAreaView>
  )
}

export default Recomended