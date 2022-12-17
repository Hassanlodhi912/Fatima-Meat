import React, { useEffect, useState } from 'react'
import{View ,Text,StyleSheet,TextInput,ScrollView} from "react-native"
import Categories from '../components/Categories'
import HomeHeadNav from '../components/HomeHeadNav'
import { AntDesign } from '@expo/vector-icons';
import { colors, } from '../global/Style';
import OfferSlider from '../components/OfferSlider'
import BottomNav from '../components/BottomNav';
import Cardslider from '../components/CardSlider'
import { StatusBar } from 'expo-status-bar';

const HomeScreen = () => {
    const [MuttonData, setMuttonData] = useState(["Mutton Whole Carcass","Mutton Leg","Mutton Mince","Mutton Shoulder"]);
  return (
    <View style={styles.container}>
        <HomeHeadNav/>
        <View style={styles.bottomnav}>
                <BottomNav  />
            </View>
            <ScrollView>
            <View style={styles.searchbox}>
                <AntDesign name='search1' size={24} color="black" style={styles.searchicon}/>

        <TextInput style={styles.input} placeholder='search' />
            </View>
        <Categories/>
        <OfferSlider/>
        <Cardslider title={"Mutton "} data={MuttonData}  />
    </ScrollView>
    </View>
  )
}
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight,
        flex: 1,
        backgroundColor: colors.col1,
        alignItems: 'center',
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