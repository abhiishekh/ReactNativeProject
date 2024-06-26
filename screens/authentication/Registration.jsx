import { TextInput, Text, View, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'
import styles from './signin.style'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { COLORS, SIZES } from '../../constants/theme'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { HeightSpacer, Reusablebtn, WidthSpacer } from '../../components'

const validationSchema = Yup.object().shape({
    password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required('Required'),
    username: Yup.string()
        .min(3, "Username must be at least 3 characters")
        .required('Required'),
    email: Yup.string()
        .email("Provide a valid email")
        .required('Required')
})

const Registration = ({navigation}) => {

    const [loader, setLoader] = useState(false)
    const [responseData, setresponseData] = useState(null)
    const [obsecureText, setobsecureText] = useState(false)
    const [showConfirmation, setShowConfirmation] = useState(false)

    const handleRegister = () => {
        console.log("Register button clicked"); // Check if the function is called
        setShowConfirmation(true);
    }

    return (
        <View style={styles.container}>
            <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    console.log("Form submitted"); // Check if the form is submitted
                    handleRegister();
                }}
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
                                Username
                            </Text>
                            <View>
                                <View
                                    style={styles.inputWrapper(touched.userame ? COLORS.lightBlue : COLORS.gray)}>

                                    <MaterialCommunityIcons
                                        name='face-man-profile'
                                        size={20}
                                        color={COLORS.gray}
                                    />
                                    <WidthSpacer width={10} />
                                    <TextInput
                                        placeholder='Enter Your Username'
                                        onFocus={() => { setFieldTouched('username') }}
                                        onBlur={() => { setFieldTouched('username') }}
                                        value={values.username}
                                        onChangeText={handleChange('username')}
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
                                Email
                            </Text>
                            <View>
                                <View
                                    style={styles.inputWrapper(touched.email ? COLORS.lightBlue : COLORS.gray)}>

                                    <MaterialCommunityIcons
                                        name='email-outline'
                                        size={20}
                                        color={COLORS.gray}
                                    />
                                    <WidthSpacer width={10} />
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
                                <View
                                    style={styles.inputWrapper(touched.email ? COLORS.lightBlue : COLORS.gray)}>

                                    <MaterialCommunityIcons
                                        name='lock-outline'
                                        size={20}
                                        color={COLORS.gray}
                                    />
                                    <WidthSpacer width={10} />
                                    <TextInput
                                        secureTextEntry={obsecureText}
                                        placeholder='Enter Your Password'
                                        onFocus={() => { setFieldTouched('password') }}
                                        onBlur={() => { setFieldTouched('password') }}
                                        value={values.password}
                                        onChangeText={handleChange('password')}
                                        autoCapitalize='none'
                                        autoCorrect={false}
                                        style={{ flex: 1 }}
                                    />

                                    <TouchableOpacity onPress={() => (
                                        setobsecureText(!obsecureText)
                                    )}>
                                        <MaterialCommunityIcons
                                            name={obsecureText ? "eye-outline" : "eye-off-outline"}
                                            size={18}
                                        />
                                    </TouchableOpacity>
                                </View>

                                {touched.password && errors.password && (
                                    <Text style={styles.errorMessage}>{errors.password}</Text>
                                )}
                            </View>
                        </View>

                        <HeightSpacer height={20} />

                        <Reusablebtn
                            onPress={handleSubmit}
                            btnText={"REGISTER"}
                            width={(SIZES.width - 40)}
                            backgroundColor={COLORS.green}
                            borderColor={COLORS.green}
                            borderWidth={0}
                            textColor={COLORS.white}
                        />
                    </View>
                )}
            </Formik>

            {/* Confirmation Popup */}
            <Modal
    visible={showConfirmation}
    animationType="slide"
    transparent={true}
    onRequestClose={() => setShowConfirmation(false)}
>
    <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
            <Text style={styles.confirmationText}>
                We will send you an email confirmation link shortly to verify you. After that, you can login to your account and add places, hotels and reviews.
            </Text>
            <TouchableOpacity
                style={styles.closeButton}
                onPress={()=> navigation.navigate('Home')}
            >
                <Text style={styles.closeButtonText}>Home</Text>
            </TouchableOpacity>
        </View>
    </View>
</Modal>

        </View>
    )
}

export default Registration


