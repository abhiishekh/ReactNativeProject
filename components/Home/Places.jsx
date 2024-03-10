import { StyleSheet, Text, View, VirtualizedList } from 'react-native'
import React from 'react'
import HeightSpacer from '../Reusable/HeightSpacer'
import { SIZES } from '../../constants/theme'
import Country from '../Tiles/Country/Country'
// import {Country} from '../../components/index'

const Places = () => {
    const countries = [
        {
            _id: "64c62bfc65af9f8c969a8d04",
            City: "Varanasi",
            description:
                "One of the oldest continuously inhabited cities in the world, a major Hindu pilgrimage site on the banks of the Ganges River.",
            imageUrl:
                "https://lh3.googleusercontent.com/fife/ALs6j_GHNltu7ThOwd_rcBPwxJ6PkI_EcmPNiB1EyJyXoRtGLd6U4iIvDF_C7Wo2IxV5w9sGWVKOvyICMttM_R1jbgVFWkyeI13BtFR9gjzD4cA81w4uZ7pzWvML-NDI3VlMZhNcuYkCafhbbHplBkpDyWM33yYAgFpk4n2sdP2I4m-uI4r8gKtcaEDPEbvJF6pt6S2a4e0PNanWZLs0FDhnZAy8CyDJBjWGI4D-tMH9w-GWScXYZuC1Kzmu741p5_3kw1M-rJVyOaF_X4srdnmokgDcVVUlyyOntQ0VmgS7cMNG3G_tsvtbCWoM0x7NZaRN_MTQhkYzVWUBG4nI-Md7BX9ewJHKZ0awRifa3NZseWMAbOGpG3tw2EkBsKUit7W-pmYPM62kyxv25NVMaodXJdyk0cQJtEOR6KSdpIWASJ6I80roBhT7h1fA9kTF0KDe1XOY5WPmUNHLyizMEv96KsdMl8PVZDn5mKUoqaTdLbiLN0EjWaB1g6B5OS0TXO_VIUlvB8znosP1HagJJ48KDDVPddDyuYbq90re8a4ryzdXX6SEPKMk1FVtWvNA7-Qc0GTHOS0rGIcBrJJARE9Sq8wIOjscNnja9NNI9U3yjAUAkRhEjHwlTaojjEKr8e6lCHIm72VVSBrVIKGMJIhUg0NYaHfM3b66HqGzcNIiv9YAPh9pzIsov43udA1bvkE_9iMYFHPelukhSKRrK9UNDuZsODkOPwXT4LrI3nlXcIaPJM78keyApuhkyDtrPs44Hr7vUU9JNiLJZVPNhaebNhdWkqzNsEs3CBrJIUR05pIDGDtssELZN4-e4QfgX9hON8EIFP0D94Tp9fkD0QxdZBlATyEcV4zOShgxRL8LbPR6giwV8wLsZTV1SYWjqdPh9hPqkGj-_M0vOSs2PWTDYXUUm7ppKnAf0DcpBXoZKnGzK-Va_3yh96A-Sfc4oOGofe9A5V4XMTSkRVXeEY9k_mblUsW0myEf9Qw_IVcRbpmH6YKb23iUCm3Tum6XWNooo_NbIu2w8y3AhQlPQcXquIMcXKvmo5EIuD3TghcX45MdaKEdSmMSzkqAE36iHZxjvs2z_Tgx3PRGs2nW0sRozInwVLcHS-NsCzI2cV9OoY2vSDw6y3ayI3EpzbtKA2_WG98Tkyju-vfX0RIRPUtPIKjuSHAtNat-i0eicyLiX2idN4s1FSIy_5gT4ICKRVEmJxDmzqQjK0S1T_mXix14ANiEn8XEgi-QxTGkKSORTej3IR3levNI9UMJh0HH7yRhb-lfqz6TSnoT7bI0Dihy3n7N2CdnvtrVlRKisElowT7y9xP45wQd7UnOBMZ4mEFh8OHEfiZb4R1RcTkzEEfEoVJAutvKD8vkM5Zv3gRzKucCkVgeMv7ixvxKfm4wPPblWvKYASFJCuf2EqUsW5XZPCQwmW3nIrWlhjPSC35SjwKC9duJRp3VYy66Gmgv7HG8q3N5=s512",
                region: "Uttar Pradesh, India",
        },
        {
            _id: "64cf2c565d14628d0ac0a2b7",
            City: "Ayodhya",
            description:
                "Considered the birthplace of Lord Rama, a major Hindu pilgrimage site with the Ram Janmabhoomi temple complex.",
            imageUrl:
            "https://lh3.googleusercontent.com/fife/ALs6j_E30xikc510DYIsg1OExvTCG10WVKugtoeclrBRXDsTfAWBdfeZJeEDkmdCmyrzVsJb18F2oKbNbakGXZr8uLvJQRxLrb4-PcGPUvfyqje7kgPhUmVLsDiWSnCKmBPQEN-AWmuQc1yYbuL4LWlc6MbM9EkAYuz-_L8XvtApkiOQoqZBp8o7_RPI4fqGe5EpCIUPahwsbfU6SY4eBjfT-ZruG1DtGRLOcswXcIfyVXwjGnwQzgV3K4ZhYn9hD7UJxpGJGmmNLSs3UIIYRpGB0Oc25EbdZ5iDALO0_r8b57A6Yw1V7uVt9aobDoH3LoylbqomoPlRB4hd-VfCa8m2XfcpVTGhgeJe4yYBnkNJxiTHmL-i3C6XexLtyP9Mm1JgP6FbJoQKjHgE7OZlM9ejxnaBHeMNb9_wtsQhGhz7gFFFFwVeNqxZ4OQEbm8DloisYnUzlFKI9yI44LjM2lT1SliyzsoMEP02xiaY4MAILEc2rUT7nqMNyQXQajgEOZk4ziFGTHf6KGqFcxt0HyLSAk5oQ3w8omsUAUFpCXOEOAtfjyT5cJo12GO7OTMDc7FJHpF_xg9TtksGra20cWWeETKPNAycqYBeXDUbSB1pbxuzTTzZdBNuUNmZx-l4UfVYXLBT65h-nU5RBvg3kkGLeFvKEv5_opuLajFAHXX0BAvQzNBWiVCT2VUUIx1vH8rzM8xbUuL_rwwFWtOrpwuT-tB00zDhAgs7TiNm4u8jkCsuxLhbAS-LUoSF5jLbW0J6CKtsrCFSxgr3cs0_nzbAg9sm3C-A6aTyMdLC7U09QnuVV7BrQuz0pNrKXWyAgI3JNKEzKlpr-AOnKtFeq9c4BCmRQJ2haIJmmqqfgSu19-KpaBvboq_VERvfneFT_-zu-c2hH2qF6rCYwhM_-VtpWgxz2a_6BxI-HAk073-StWE4-r2JSbsPYadNqaAW_iSJUh_4318pLbaVu4v4NnFTYifUG-f6ymTj7J_3zoy-4NIw21i5JRlaqF6r9fv-kOIn7q6x_GZCgFwK2mJ_jgrg40blftzb077qhK6gn-D2LUJz5rrkeDsOxYDnaUglZWxFTd92Iqo1oLyJ1Bh8lt4jLXkUtK0JSsRgFGna5_DpizP3Sehsz4yHIf6ytU3It6L9maNwT0RDyHQZ8qvcuZPW5475c_GLPQsYxQQZ7gg-I6OE1XK5l6zi3eWZ9H6sXrmGUpBdd1MG-tlZK0glgJCm0dDCZrDeT0uyXfZ4gKQ5vnyK3kvDdodENIwIDvheNAu4IHKkCJKokU6z-0mQqXt9DYANeNcf1LLJDbbqyPL4PGBZEiVmyAiBM75zxPNK8ajNLPvZ1komqmzxBpIpzr-td8Ah5cPicpg6--9leYph4JLhCc0ITAx-RdbPVfk17mLIeenbf-J41GJWxgNohLSzqJecXptzxmOF7jQI7akgTsr0PTOz7Sj-Yr9CWZTXMdJLydTB=s512",
            region: "Uttar Pradesh, India",
        },
        {
            _id: "64cf2c935d14628d0ac0a2b9",
            City: "Prayagraj",
            description:
                "The holy city at the confluence of the Ganges, Yamuna, and Saraswati rivers, famous for the Kumbh Mela festival.",
            imageUrl: "https://lh3.googleusercontent.com/fife/ALs6j_H2CqWP9hlCplmc3kAyClz_oSsRbDlKQR6Ll6CgTpguPeS-fQkm8ElqQaTPXEJ2vOqdd-7ecBzJV23XgIlAQMHxWsTtZtISXQRZtJm5APoQVe-lfaLjUhnEAob2ErsixP68meACqD3AV-Mt4GPYWgYwMBNrR23mItDlEq8lqmqqtJg5V_rjgvN9jM6krNvXVfQ3Wtlr0p4558Xxi7OI0Jm6iGREtg4DMHPtXu97OsmkUmp6uJWh4P9qXImTBd51pLAtVN4jrYmMlsB7S0Ko0-MDsdJAZaREXi6-9btKZ_R_bcFgVr_dq270GbK2Pa3_FeqSt3j2R3vE-ZMZPuWjRIjZB5tIzqaRgqkpX4DewksfI0ewx3liR69S3k-sUjQ_A5yNN7Qf7VL6O9nV-IvfdQ4kggxhkbU0vwCpPDpurEJaX38dM4isq8_41lecRSjzAl7WiB6bM0pgrBAMBoU5uC8_hXpu7iB9IPXRsAizQbsqB7PJmZbnmKAwVWDxurZJ7QFi0W-tLUHdnaMiZDAl4LPW3tvaRbd7sE0i9pnXYYIQaTEDs5aQSwJ5HHKfaEqcWsccCLWiDaX0WLpTbSD-C1pGEOAx-hYrK1bJNi6lnKwcF3HmULfjJo87XqgNMT7PQN2DNMlQXz1FoMcOp3Eesr-rr3FGURP33goOhR3bxmac3EkUzBm9G-4N5K245TSZ86USkGoUibv5d7QEFAzAOhpITIP-uq7VOSU0dvpjlIsQprreWsFhXuG3Xdo5GCmAxxg9vs7iFkXMlj0XvAUIbu-1QAtOyMI-XaIEmI6HGXGXnVZcKMTRIcKnIy-2w5OsqnYCf_1SyeCwKtu_7zdlgxuKW4ZG9peIJRR-inR7VdTuYrjQJWTpXVUICbu49sWU0Mh0mnE_SNFuTh4xbbEyBgwZeVI_J8zxrrOU4Ihe-mhjUZYBNEfUKuCnkr28Cax4O1MlkTS_2mbJVehrYgKmuGEEUODav1H6UnFP8fWxfTTxyu7qEpz0gD46JJkOw7wYmiqHbNoKjkqK5n4v1ZG93waxrO-vvhG-BY2YKr_odKCcbzL0h01itSqNtHPzeX_B5kRqaNEU17-elMZM9es4CDayne6ummhqfoC9H8wD-qT4pk-IzwFpJZ7Jb7ebSfCEW6oXve8vCOzeDFj6xM6Ks3xHClWSX2xBRHEC_h5wCmsy3WuPA9Nx-gWhN-icJfKlZozvxu7OC8D7PEP3iDCJC_v7WxpOf06y3ci3hZ8LY1xtKpqM0VWIaCNDfvrLFf3ahC-MCa4w58C8JyYlM2OptQF3tbBmbYx01DxYw8rh0N_p_rpDIX8tLZESsGdqCh-mZPbh6YjtBE1X3oQGefFGKcO34VNQASeupbBCNQoMOqMMQtPx35xTFFIXh3mCW4_0l927k3_OnDUCZcDeswxVxVVsBSGEbg-f7tvH95enxYI2K8NPwF6xwxIAb1Ppn4pubdsy=s512",
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
    return (
        <View>
            <HeightSpacer height={20} />

            <VirtualizedList
                data={countries}
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