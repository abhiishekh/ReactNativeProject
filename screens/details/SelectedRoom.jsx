import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import AppBar from '../../components/Reusable/AppBar';
import { COLORS, SIZES } from '../../constants/theme';
import { AsseltImage, NetworkImage, ReusableText,HeightSpacer } from '../../components';
import reusable from '../../components/Reusable/reusable.style';

const SelectedRoom = ({ navigation }) => {
    const route = useRoute();
    const { item } = route.params;
    const [guests, setGuests] = useState(1);
    const [totalPrice, setTotalPrice] = useState(item.price * guests);

    useEffect(() => {
        setTotalPrice(item.price * guests);
    }, [guests, item.price]);

    return (
        <View>
            <View style={{ height: 100 }}>
                <AppBar
                    top={50}
                    left={20}
                    right={20}
                    title={item.title}
                    color={COLORS.white}
                    onPress={() => navigation.goBack()}
                />
            </View>
            <View style={{ marginHorizontal: 20 }}>
                <View style={{ backgroundColor: COLORS.lightWhite, borderRadius: 16 }}>
                    <NetworkImage
                        source={item.imageUrl}
                        width={"100%"}
                        height={200}
                        radius={20}
                    />
                    <View style={{ margin: 10 }}>
                        <ReusableText
                            text={item.title}
                            family="medium"
                            size={SIZES.medium}
                            color={COLORS.dark}
                        />
                        <View style={reusable.rowWithSpace('space-between')}>
                            <ReusableText
                                text={"Price per night:"}
                                family="regular"
                                size={SIZES.medium}
                                color={COLORS.black}
                            />
                            <ReusableText
                                text={`₹ ${item.price}`}
                                family="regular"
                                size={SIZES.medium}
                                color={COLORS.black}
                            />
                        </View>
                        <View style={reusable.rowWithSpace('space-between')}>
                            {/* <ReusableText
                                text={"Number of Guests"}
                                family="regular"
                                size={SIZES.medium}
                                color={COLORS.black}
                            /> */}
                            {/* <View style={reusable.rowWithSpace('flex-start')}>
                                <TouchableOpacity onPress={() => setGuests(guests - 1)}>
                                    <AsseltImage mode={"contain"} width={20} height={20} data={require('../../assets/images/minus.png')} />
                                </TouchableOpacity>
                                <ReusableText
                                    text={guests.toString()}
                                    family="regular"
                                    size={SIZES.medium}
                                    color={COLORS.black}
                                    style={{ marginHorizontal: 10 }}
                                />
                                <TouchableOpacity onPress={() => setGuests(guests + 1)}>
                                    <AsseltImage mode={"contain"} width={20} height={20} data={require('../../assets/images/plus.png')} />
                                </TouchableOpacity>
                            </View> */}
                        </View>
                        {/* <View style={reusable.rowWithSpace('space-between')}>
                            <ReusableText
                                text={"Total Price"}
                                family="regular"
                                size={SIZES.medium}
                                color={COLORS.black}
                            />
                            <ReusableText
                                text={`\₹ ${totalPrice}`}
                                family="regular"
                                size={SIZES.medium}
                                color={COLORS.black}
                            />
                        </View> */}
                        <HeightSpacer height={15} />
                        <View style={[reusable.rowWithSpace('space-between'), { alignItems: 'center' }]}>
                            <ReusableText
                                text={"Payment Method"}
                                family="regular"
                                size={SIZES.medium}
                                color={COLORS.black}
                            />
                            <View style={reusable.rowWithSpace('flex-end')}>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate("BookHotel", { item, guests, totalPrice, paymentMethod: 'UPI' })}
                                    style={[styles.paymentButton, { backgroundColor: COLORS.lightGreen }]}
                                >
                                    {/* <AsseltImage mode={"contain"} width={30} height={20} data={require('../../assets/images/upi.png')} /> */}
                                    <ReusableText
                                        text={"UPI"}
                                        family="regular"
                                        size={SIZES.medium}
                                        color={COLORS.black}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => navigation.navigate("Successful", { item, guests, totalPrice, paymentMethod: 'Self Checking' })}
                                    style={[styles.paymentButton, { backgroundColor: COLORS.lightBlue }]}
                                >
                                    {/* <AsseltImage mode={"contain"} width={30} height={20} data={require('../../assets/images/self-checking.png')} /> */}
                                    <ReusableText
                                        text={"Self Checking"}
                                        family="regular"
                                        size={SIZES.medium}
                                        color={COLORS.black}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default SelectedRoom;

const styles = StyleSheet.create({
    paymentButton: {
        flexDirection: 'column',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: COLORS.gray,
        marginRight: 10,
    },
});
