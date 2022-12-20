import { StyleSheet, Text, View, StatusBar, TextInput, FlatList, Image, ScrollView, TouchableOpacity } from 'react-native'
import {colors,nonveg} from "../global/Style"
import { MaterialIcons } from '@expo/vector-icons';
import hassan from "../../assets/hassan.jpg";
const CardSlider = ({title,data,navigation}) => {
  return (
    
    <View style={styles.container}>
    <Text style={styles.cardouthead}>
        {title} 
        <MaterialIcons name="goat" size={32} color="red" style={styles.myicon} />
    </Text>
    
        <TouchableOpacity onPress={()=>navigation.navigate("Detail")}
        >
         <View style={styles.card} >
             <View style={styles.s1} >
                <Image source={hassan} style={styles.cardimgin}/>
             </View>
             <View style={styles.s2}>
                 <Text style={styles.txt1}>hassan</Text>
                 <View style={styles.s2in}>
                     <Text style={styles.txt2}>Rs.2000/-</Text>
                 </View>
             </View>
             <View style={styles.s3}>
             </View>
         </View>
     </TouchableOpacity>
</View>
  )
}

export default CardSlider
const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
    },
    //card
    cardouthead: {
        color: colors.text3,
        width: '90%',
        fontSize: 30,
        fontWeight: '200',
        borderRadius: 10,
        marginHorizontal: 10,
    },
    cardsout: {
        width: '100%',
        // backgroundColor: 'red',
    },
    card: {
        // backgroundColor: "aqua",
        width: 300,
        height: 300,
        margin: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#e8e8e8',
        backgroundColor: colors.col1,
    },
    cardimgin: {
        width: "100%",
        height: 200,
        borderRadius: 10,
    },
    s2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // backgroundColor: 'aqua',
    },
    txt1: {
        fontSize: 18,
        color: colors.text3,
        marginHorizontal: 5,
        width: 150,
    },
    txt2: {
        fontSize: 20,
        color: colors.text2,
        marginRight: 10,
    },
    s2in: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,

    },
    s3: {
        alignItems: 'center',
        position: 'absolute',
        bottom: 1,
        width: '100%',
    },
    buybtn: {
        backgroundColor: colors.text1,
        color: colors.col1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        fontSize: 20,
        borderRadius: 10,
        width: '90%',
        textAlign: 'center',
    }
})