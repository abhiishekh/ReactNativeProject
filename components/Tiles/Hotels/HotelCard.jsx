import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES, TEXT } from '../../../constants/theme'
import { HeightSpacer, NetworkImage, Rating, ReusableText } from '../../../components/index'
import reusable from '../../Reusable/reusable.style'


const HotelCard = ({ item, margin, onPress }) => {
    return (
        <TouchableOpacity style={styles.card(margin)} onPress={onPress}>
            <View>
                <View style={styles.image}>
                    <NetworkImage
                        source={item.imageUrl}
                        width={'90%'}
                        height={'100%'}
                        radius={16}
                    />
                </View>
                <HeightSpacer height={5} />
                <View style={{ padding: 10, marginBottom: 10 }}>

                    <ReusableText
                        text={item.title}
                        family="medium"
                        size={TEXT.medium}
                        color={COLORS.black}
                    />
                    <HeightSpacer height={5} />
                    <ReusableText
                        text={item.location}
                        family="medium"
                        size={TEXT.medium}
                        color={COLORS.gray}
                    />
                    <HeightSpacer height={5} />
                    <View style={reusable.rowWithSpace('space-between')}>
                        <Rating rating={item.rating} />

                        <ReusableText
                            text={` (${item.review}) `}
                            family="medium"
                            size={14}
                            color={COLORS.gray}
                        />

                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default HotelCard

const styles = StyleSheet.create({
    card: (margin) => ({
        width: SIZES.width / 2.2,
        height: 250,
        borderRadius: 16,
        backgroundColor: COLORS.lightWhite,
        marginRight: margin
    }),
    image: {
        alignItems: "center",
        marginTop: 10,
        height: 150
    }
})