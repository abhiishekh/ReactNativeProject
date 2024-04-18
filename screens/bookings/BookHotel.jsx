import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, SIZES } from '../../constants/theme';

const BookHotel = ({ route }) => {
  const { totalPrice } = route.params;
  const [upiId, setUpiId] = useState('');

  const sendPaymentRequest = () => {
    if (!upiId) {
      alert('Please enter your UPI ID.');
      return;
    }

    // Construct the UPI payment URL with the recipient's UPI ID and payment amount
    const paymentUrl = `upi://pay?pa=${upiId}&pn=Hotel Booking&tn=Payment for hotel booking&am=${totalPrice}&cu=INR`;

    // Open the payment URL to send the payment request
    Linking.openURL(paymentUrl).catch(err => console.error('Error:', err));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Payment Details</Text>
        </View>
        <View style={styles.totalPriceContainer}>
          <Text style={styles.totalPriceText}>Total Price: ₹ {totalPrice}</Text>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Enter Your UPI ID</Text>
          <TextInput
            style={styles.input}
            placeholder="Your UPI ID"
            value={upiId}
            onChangeText={text => setUpiId(text)}
          />
        </View>
        <TouchableOpacity style={styles.payButton} onPress={sendPaymentRequest}>
          <Text style={styles.payButtonText}>Pay Now</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

export default BookHotel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  scrollView: {
    flexGrow: 1,
    padding: 20,
  },
  header: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: SIZES.h2,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  totalPriceContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  totalPriceText: {
    fontSize: SIZES.body3,
    fontWeight: 'bold',
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: SIZES.body3,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.gray,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: SIZES.body3,
  },
  payButton: {
    backgroundColor: COLORS.green,
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: 'center',
  },
  payButtonText: {
    fontSize: SIZES.body2,
    color: COLORS.white,
    fontWeight: 'bold',
  },
});
