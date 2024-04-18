import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme";


const styles = StyleSheet.create({
            container:{
                flex:1,
                padding:20,
                backgroundColor:COLORS.lightWhite,
            },
            inputWrapper:(borderColor) =>({
                borderColor:borderColor,
                backgroundColor:COLORS.lightWhite,
                borderWidth:1,
                height:50,
                borderRadius:12,
                flexDirection:"row",
                paddingHorizontal: 15,
                alignItems:"center"
            }),
            wrapper:{
                marginBottom:20
            },
            label:{
                fontFamily:"regular",
                marginBottom:5,
                marginEnd:5,
                textAlign:"right",
                fontSize:SIZES.small,
            },
            errorMessage:{
                color: COLORS.red,
                fontSize:SIZES.small,
                fontFamily:'regular',
                marginTop:5,
                marginLeft:5,
            },
            modalContainer: {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.5)' // Minimalist background color with opacity
            },
            modalContent: {
                backgroundColor: COLORS.lightWhite, // Background color for the modal content
                padding: 20,
                borderRadius: 10,
                width: '80%', // Adjust the width as needed
                alignItems: 'center'
            },
            confirmationText: {
                textAlign: 'center',
                marginBottom: 20,
                color:COLORS.black,
                fontFamily:"bold"
            },
            closeButton: {
                backgroundColor: '#ccc',
                padding: 10,
                borderRadius: 5
            },
            closeButtonText: {
                color: '#000',
                fontWeight: 'bold'
            }
})

export default styles