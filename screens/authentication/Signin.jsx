import { TextInput, Text, View, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import styles from './signin.style'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { COLORS, SIZES } from '../../constants/theme'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { HeightSpacer, Reusablebtn } from '../../components'

const validationSchema = Yup.object().shape({
    password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required('Required'),
    email: Yup.string()
        .email("Provide a valid email")
        .required('Required')
})

const Signin = ({ navigation }) => {
    const handleSignIn = async (values) => {
        const { email, password } = values;

        // Check if email and password match the expected values
        if (email === "abhishekmaurya4877@gmail.com" && password === "abhi@123") {
            // Navigate to the home screen
            navigation.navigate('Home');
        } else {
            // Show error popup
            Alert.alert("Error", "Wrong credentials, Please provide correct info to sign in.", [
                {
                    text: "OK",
                    onPress: () => {},
                    style: "cancel"
                }
            ]);
        }
    }

    return (
        <View style={styles.container}>
            <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={validationSchema}
                onSubmit={(values) => handleSignIn(values)}
            >
                {({
                    handleChange,
                    touched,
                    handleSubmit,
                    values,
                    errors,
                    isValid,
                    setFieldTouched
                }) => (
                    <View>
                        <View style={styles.wrapper}>
                            <Text style={styles.label}>
                                Email
                            </Text>
                            <View>
                                <View style={styles.inputWrapper(touched.email ? COLORS.lightBlue : COLORS.gray)}>
                                    <MaterialCommunityIcons
                                        name='email-outline'
                                        size={20}
                                        color={COLORS.gray}
                                    />
                                    <TextInput
                                        placeholder='Enter Email'
                                        onFocus={() => { setFieldTouched('email') }}
                                        onBlur={() => { setFieldTouched('email') }}
                                        value={values.email}
                                        onChangeText={handleChange('email')}
                                        autoCapitalize='none'
                                        autoCorrect={false}
                                        style={{ flex: 1 }}
                                    />
                                </View>

                                {touched.email && errors.email && (
                                    <Text style={styles.errorMessage}>{errors.email}</Text>
                                )}
                            </View>
                        </View>

                        <View style={styles.wrapper}>
                            <Text style={styles.label}>
                                Password
                            </Text>
                            <View>
                                <View style={styles.inputWrapper(touched.email ? COLORS.lightBlue : COLORS.gray)}>
                                    <MaterialCommunityIcons
                                        name='lock-outline'
                                        size={20}
                                        color={COLORS.gray}
                                    />
                                    <TextInput
                                        secureTextEntry={true}
                                        placeholder='Enter Your Password'
                                        onFocus={() => { setFieldTouched('password') }}
                                        onBlur={() => { setFieldTouched('password') }}
                                        value={values.password}
                                        onChangeText={handleChange('password')}
                                        autoCapitalize='none'
                                        autoCorrect={false}
                                        style={{ flex: 1 }}
                                    />
                                </View>

                                {touched.password && errors.password && (
                                    <Text style={styles.errorMessage}>{errors.password}</Text>
                                )}
                            </View>
                        </View>

                        <HeightSpacer height={20} />

                        <Reusablebtn
                            onPress={handleSubmit}
                            btnText={"SIGN IN"}
                            width={(SIZES.width - 40)}
                            backgroundColor={COLORS.green}
                            borderColor={COLORS.green}
                            borderWidth={0}
                            textColor={COLORS.white}
                        />
                    </View>
                )}
            </Formik>
        </View>
    )
}

export default Signin
