import { StatusBar } from 'expo-status-bar'
import React from 'react'
import{View ,Text,StyleSheet,TextInput} from "react-native"
import Categories from '../components/Categories'
import HomeHeadNav from '../components/HomeHeadNav'
import { AntDesign } from '@expo/vector-icons';
import { colors, veg, nonveg } from '../global/Style';
import OfferSlider from '../components/OfferSlider'

const HomeScreen = () => {

  return (
    <View style={styles.container}>
        {/* <StatusBar/> */}
        <HomeHeadNav/>
        {/* <View style={styles.bottomnav}>
                <BottomNav navigation={navigation} />
            </View> */}
            <View style={styles.searchbox}>
                <AntDesign name='search1' size={24} color="black" style={styles.searchicon}/>

        <TextInput style={styles.input} placeholder='search' />
            </View>
        <Categories/>
        <OfferSlider/>
    </View>
  )
}
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        // marginTop: 50,
        flex: 1,
        backgroundColor: colors.col1,
        // alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    searchbox: {
        flexDirection: 'row',
        width: '90%',
        backgroundColor: colors.col1,
        borderRadius: 30,
        alignItems: 'center',
        padding: 10,
        margin: 20,
        elevation: 10,
    },
    input: {
        marginLeft: 10,
        width: '90%',
        fontSize: 18,
        color: colors.text1,
    },
    searchicon: {
        color: colors.text1,
    },
    seacrhresultsouter: {
        width: '100%',
        marginHorizontal: 30,
        height: '100%',
        backgroundColor: colors.col1,
    },
    searchresultsinner: {
        width: '100%',
    },
    searchresult: {
        width: '100%',
        flexDirection: 'row',
        // alignItems: 'center',
        padding: 5,
    },
    searchresulttext: {
        marginLeft: 10,
        fontSize: 18,
        color: colors.text1,
    },
    bottomnav: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: colors.col1,
        zIndex: 20,
    }
})