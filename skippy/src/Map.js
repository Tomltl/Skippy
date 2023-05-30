import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Pressable, Image, ScrollView } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { useNavigation } from "@react-navigation/native";
import {firebase} from './../config'
import CustomMarkerImage from '../assets/ping3.png';
import CustomMarkerImage2 from '../assets/scène3.png';
import CustomMarkerImage3 from '../assets/toilet.png';
import CustomMarkerImage4 from '../assets/toilet-1.png';
import CustomMarkerImage5 from '../assets/toilet-2.png';
import CustomMarkerImage14 from '../assets/toilet-3.png';
import CustomMarkerImage6 from '../assets/bv.png';
import CustomMarkerImage7 from '../assets/bj.png';
import CustomMarkerImage8 from '../assets/bo.png';
import CustomMarkerImage9 from '../assets/br.png';
import CustomMarkerImage10 from '../assets/nv.png';
import CustomMarkerImage11 from '../assets/nj.png';
import CustomMarkerImage12 from '../assets/no.png';
import CustomMarkerImage13 from '../assets/nr.png';

const Map = () => {
    const [initializing, setInitializing] = useState(true)
    const [user, setUser] = useState();
  
    function onAuthStateChanged(user) {
      setUser(user);
      if (initializing) setInitializing(false);
    }
  
    useEffect(() => {
      const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
      return subscriber;
    }, []);
  
      if(initializing) return null;


    const navigation = useNavigation();
    const festivalLocation = {
        latitude: 44.49013711180918,
        longitude: 0.1643434759556004,
    };
    const festivalLocation2 = {
        latitude: 44.49113704714444,   
        longitude: 0.16840693210997706,
    };
    const festivalLocation3 = {
        latitude: 44.488309473768766,  
        longitude: 0.16650009518881514,
    };
    const festivalLocation4 = {
        latitude: 44.491801889086815,
        longitude: 0.16020110580879723,
    };
    const festivalLocation5 = {
        latitude: 44.48888865822759,
        longitude: 0.15993383998717547,
    };
    const festivalLocation6 = {
        latitude: 44.489983794811366, 
        longitude: 0.16174991876833772,
    };
    const festivalLocation7 = {
        latitude: 44.48951138547356, 
        longitude: 0.16621486383804593,
    };
    const festivalLocation8 = {
        latitude: 44.488523608130244,   
        longitude: 0.1631546205880212,
    };
    const festivalLocation9 = {
        latitude: 44.48857371318083,    
        longitude: 0.16263287419785305,
    };
    const festivalLocation10 = {
        latitude: 44.49131510963175,        
        longitude: 0.16495063220033077,
    };
    const festivalLocation11 = {
        latitude: 44.49145110244573,      
        longitude: 0.16403757601753655,
    };

     
     


    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 44.48992985062902,
                    longitude: 0.16451282938475692,
                    latitudeDelta: 0.0120,
                    longitudeDelta: 0.00100,
                }}
                
            >
                <Marker
                    coordinate={festivalLocation}
                    prodvider={PROVIDER_GOOGLE}
                    pinColor='black'
                    stlye={styles.markerImage}
                    image={CustomMarkerImage}
                    // image={require("../assets/ping.png")}
                />
                <Marker
                    coordinate={festivalLocation2}
                    prodvider={PROVIDER_GOOGLE}
                    pinColor='black'
                    stlye={styles.markerImage}
                    image={CustomMarkerImage2}
                    // image={require("../assets/ping.png")}
                />
                <Marker
                    coordinate={festivalLocation3}
                    prodvider={PROVIDER_GOOGLE}
                    pinColor='black'
                    stlye={styles.markerImage}
                    image={CustomMarkerImage2}
                    // image={require("../assets/ping.png")}
                />
                <Marker
                    coordinate={festivalLocation4}
                    prodvider={PROVIDER_GOOGLE}
                    pinColor='black'
                    stlye={styles.markerImage}
                    image={CustomMarkerImage2}
                    // image={require("../assets/ping.png")}
                />
                <Marker
                    coordinate={festivalLocation5}
                    prodvider={PROVIDER_GOOGLE}
                    pinColor='black'
                    stlye={styles.markerImage}
                    image={CustomMarkerImage3}
                    // image={require("../assets/ping.png")}
                />
                <Marker
                    coordinate={festivalLocation6}
                    prodvider={PROVIDER_GOOGLE}
                    pinColor='black'
                    stlye={styles.markerImage}
                    image={CustomMarkerImage4}
                    // image={require("../assets/ping.png")}
                />
                <Marker
                    coordinate={festivalLocation7}
                    prodvider={PROVIDER_GOOGLE}
                    pinColor='black'
                    stlye={styles.markerImage}
                    image={CustomMarkerImage5}
                    // image={require("../assets/ping.png")}
                />
                <Marker
                    coordinate={festivalLocation8}
                    prodvider={PROVIDER_GOOGLE}
                    pinColor='black'
                    stlye={styles.markerImage}
                    image={CustomMarkerImage6}
                    // image={require("../assets/ping.png")}
                />
                <Marker
                    coordinate={festivalLocation9}
                    prodvider={PROVIDER_GOOGLE}
                    pinColor='black'
                    stlye={styles.markerImage}
                    image={CustomMarkerImage11}
                    // image={require("../assets/ping.png")}
                />
                <Marker
                    coordinate={festivalLocation10}
                    prodvider={PROVIDER_GOOGLE}
                    pinColor='black'
                    stlye={styles.markerImage}
                    image={CustomMarkerImage13}
                    onPress={() => navigation.navigate("Steak Frites")}
                    // image={require("../assets/ping.png")}
                />
                <Marker
                    coordinate={festivalLocation11}
                    prodvider={PROVIDER_GOOGLE}
                    pinColor='black'
                    stlye={styles.markerImage}
                    image={CustomMarkerImage8}
                    // image={require("../assets/ping.png")}
                />
            </MapView>
                    <View style={styles.footer2}>
                    {(() => {
    if (user){
        return (
    <Pressable style= {styles.Button} onPress={() => navigation.navigate("Home2")}>
    <Image
        style={styles.flamme1}
        source={require('../assets/accueil.png')}
      />
    </Pressable>
            )
          }
          
          return null;
      })()}
            {(() => {
    if (!user){
        return (
    <Pressable style= {styles.Button} onPress={() => navigation.navigate("Home")}>
    <Image
        style={styles.flamme1}
        source={require('../assets/accueil.png')}
      />
    </Pressable>
            )
          }
          
          return null;
      })()}
            <Pressable onPress={() => navigation.navigate("Map")}>
            <Image
                style={styles.flamme1}
                source={require('../assets/pingp.png')}
            />
            </Pressable>
            <Pressable onPress={() => navigation.navigate("Skippy")}>
            <Image
                style={styles.flamme1}
                source={require('../assets/pomme.png')}
            />
            </Pressable>
            {/* <Text style={{fontSize: 20}}>Footer Part Text</Text> */}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 1,
    },
    footer2: {
        backgroundColor: '#7502BC',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 60,
        flexDirection: 'row',
        paddingHorizontal: 40,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    flamme2: {
        resizeMode: 'contain',
        width: 50,
        height: 50,
    },
    flamme1: {
        resizeMode: 'contain',
        width: 30,
        height: 30,
    },
    markerImage: {
        width: 20,
        backgroundColor: 'blue'
    },
    carte:{
        resizeMode: 'contain',
        width: 10,
        height: 10,
    }
});

export default Map;
