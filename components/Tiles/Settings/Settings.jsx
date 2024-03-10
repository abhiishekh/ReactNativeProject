import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../../constants/theme'
import AppBar from '../../Reusable/AppBar'
import ReusableText from '../../Reusable/ReusableText'
import HeightSpacer from '../../Reusable/HeightSpacer'
import SettingsTile from './SettingsTile'

const Settings = ({navigation}) => {
    return (
        <View style={{ backgroundColor: COLORS.lightWhite, flex: 1 }}>
            <View style={{ height: 120 }}>
                <AppBar
                    top={40}
                    left={20}
                    right={20}
                    color={COLORS.white}
                    onPress={() => navigation.goBack()}
                />
            </View>
            <View style={{marginHorizontal:20}}>
                <ReusableText
                text={"Account Settings"}
                family={"regular"}
                size={SIZES.xLarge}
                color={COLORS.black}
                />
                <HeightSpacer height={10}/>
                <SettingsTile title={"Language"}/>
                <HeightSpacer height={10}/>
                <SettingsTile title={"Country"} title1={"INDIA"}/>
                <HeightSpacer height={10}/>
                <SettingsTile title={"Currency"} title1={"INR"}/>

                <HeightSpacer height={40}/>



                <ReusableText
                text={"Support"}
                family={"regular"}
                size={SIZES.xLarge}
                color={COLORS.black}
                />
                
                <SettingsTile title={"Get Help"} title1={""}/>
                <HeightSpacer height={10}/>
                <SettingsTile title={"Give Feedback"} title1={""}/>
                <HeightSpacer height={40}/>

                <ReusableText
                text={"Legal"}
                family={"regular"}
                size={SIZES.xLarge}
                color={COLORS.black}
                />
                <SettingsTile title={"Terms of Service"} title1={""}/>
                <HeightSpacer height={10}/>
                <SettingsTile title={"Privacy Policy"} title1={""}/>
                <HeightSpacer height={10}/>
            </View>
        </View>
    )
}

export default Settings

const styles = StyleSheet.create({})