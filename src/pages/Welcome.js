import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import welcome1 from "../../assets/welcome1.png"
import { colors, hr80 } from '../../src/global/Style';
const Welcome = ({navigation}) => {

    return (
        
        <View style={styles.container}>
            <Text style={styles.title}>
                Welcome to  Fatima  Meat
            </Text>
            <View style={styles.logoout}>
                <Image source={welcome1} style={styles.logo}/>
            </View>
            <Text style={styles.text}>
                High Quality Meat And Affordable Price
            </Text>
            <View style={hr80} />
            <View style={styles.btnout}>
                <TouchableOpacity  >
                    <Text style={styles.btn} onPress={()=>navigation.navigate("Signup")}>
                        Sign up
                    </Text>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <Text style={styles.btn} onPress={()=>navigation.navigate("Signin")}>
                            Sign In
                        </Text>
                </TouchableOpacity>

            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ff4242',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        fontSize: 50,
        color: colors.col1,
        textAlign: 'center',
        marginVertical: 100,
        fontWeight: '200',
    },
    logoout: {
        width: "80%",
        height: "30%",
        // backgroundColor: '#fff',
        alignItems: 'center',
    },
    logo: {
        width: '100%',
        height: '100%',
    },
    
    text: {
        fontSize: 18,
        width: '80%',
        color: colors.col1,
        textAlign: 'center',
    },
    btnout: {
        flexDirection: 'row',
    },
    btn: {
        fontSize: 20,
        color: colors.text1,
        textAlign: 'center',
        marginVertical: 30,
        marginHorizontal: 10,
        fontWeight: '700',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        paddingHorizontal: 20,
    },
})
export default Welcome;

