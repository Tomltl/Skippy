import { useNavigation } from "@react-navigation/native";
import React, {useState} from "react";
import { Button, SafeAreaView, StyleSheet, Text, View, Pressable, Image, ScrollView, } from "react-native";
import {firebase} from './../config'
import { LinearGradient } from 'expo-linear-gradient';

const Second = () => {
  const navigation = useNavigation();

  return (
    // <SafeAreaView>
    //   <Text>This is Second screen</Text>
    //   <Button onPress={() => navigation.navigate("Modal")} title="Open Modal" />
    // </SafeAreaView>
    <View style={styles.container2}>
    <View style={styles.body2}>
        <View style={styles.haut}>
    <Pressable style= {styles.Button}>
    <Image
        style={styles.flamme2}
        source={require('../assets/loupe.png')}
      />
    </Pressable>
      {/* <Text style={{fontSize: 20, color: 'white'}}>Body Part Text</Text> */}
    
    <Pressable style= {styles.Button} onPress={() => navigation.navigate("Registration")}>
    <Image
        style={styles.flamme2}
        source={require('../assets/compte.png')}
      />
    </Pressable>
    </View>
    <ScrollView>
    <View style={styles.hello}>
      <View style={styles.confeti}>
    <Text style={{color: 'white', fontSize: 18, fontWeight: 600}}>Bonjour, </Text>
    <Image
        style={styles.flamme11}
        source={require('../assets/confeti.png')}
      />
      </View>
      <View style={styles.confeti}>
    <Text style={{color: 'white', fontSize: 18, fontWeight: 600}}>Voici le programme du jour 1</Text>
    <Image
        style={styles.flamme11}
        source={require('../assets/bgbg.png')}
      />
      </View>
    </View>
    <View style={styles.ici}>
    <Text style={{color: 'white', fontSize: 18,}} onPress={() => navigation.navigate("Map")}>Trouve grâce à la carte</Text>
    <Pressable onPress={() => navigation.navigate("Map")}>
    <Image
        style={styles.flamme2}
        source={require('../assets/ici2.png')}
      />
      </Pressable>
    </View>
    <View style={styles.trois}>
    <View style={styles.artiste}>
    <Text style={{color: 'white', fontSize: 22, fontWeight: 600}}>Les artistes</Text>
    <Text style={{color: 'white', fontSize: 22, fontWeight: 600}}>Populaires</Text>
    </View>
    <View style={styles.artiste}>
    <Text style={{color: 'white', fontSize: 12,}}>Voir tous</Text>
    </View>
    </View>
    <ScrollView horizontal={true} style={styles.artiste3}>
    <View>
    <Image
        style={styles.artistes1}
        source={require('../assets/tiakola.png')}
      />
    </View>
    <View>
    <Image
        style={styles.artistes}
        source={require('../assets/david.png')}
      />
    </View>
    <View>
    <Image
        style={styles.artistes}
        source={require('../assets/central.png')}
      />
    </View>
    </ScrollView>
    <View style={styles.trois}>
    <View>
    <Text style={{color: 'white', fontSize: 22, fontWeight: 600}}>Evénements</Text>
    <Text style={{color: 'white', fontSize: 22, fontWeight: 600}}>Populaires</Text>
    </View>
    <View>
    <Text style={{color: 'white', fontSize: 12,}}>Voir tous</Text>
    </View>
    </View>
    <ScrollView horizontal={true} style={styles.artiste3}>
    <View>
    <Image
        style={styles.artistes12}
        source={require('../assets/immersion.png')}
      />
    </View>
    <View>
    <Image
        style={styles.artistes}
        source={require('../assets/feudance.png')}
      />
    </View>
    <View>
    <Image
        style={styles.artistes}
        source={require('../assets/illusion.png')}
      />
    </View>
    </ScrollView>
    </ScrollView>
    </View>

    <View style={styles.footer2}>
    <Pressable style= {styles.Button} onPress={() => navigation.navigate("Home")}>
    <Image
        style={styles.flamme1}
        source={require('../assets/accueilp.png')}
      />
    </Pressable>
    <Pressable onPress={() => navigation.navigate("Map")}>
    <Image
        style={styles.flamme1}
        source={require('../assets/ping.png')}
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

}

export default Second;

const styles = StyleSheet.create({
    haut: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginHorizontal: 20,
        marginTop: 40,
        marginBottom: 20,
      },
    container2: {
        flex: 1,
        backgroundColor: '#2D2D2D',
        justifyContent: 'center',
      },
      body2: {
        flex: 1,
        backgroundColor: '#2D2D2D',
        // justifyContent: 'space-between',
        // alignItems: 'center',
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
        width: 40,
        height: 40,
      },
      flamme1: {
        resizeMode: 'contain',
        width: 30,
        height: 30,
      },
      hello: {
        marginLeft: 25,
      },
      ici: {
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#7502BC',
        justifyContent: 'space-between',
        marginHorizontal: 25,
        paddingHorizontal: 35,
        borderRadius: 15,
        height: 70,
      },
      artiste: {
        marginTop: 25,
      },
      trois: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 25, 
      },
      artiste3 :{
        flexDirection: 'row'
      },
      artistes: {
        resizeMode: 'contain',
        width: 200,
        height: 200,
        marginVertical: 20,
        marginHorizontal: 10,
      },
      artistes1: {
        resizeMode: 'contain',
        width: 200,
        height: 200,
        marginVertical: 20,
        marginHorizontal: 10,
        marginLeft: 25,
      },
      flamme11: {
        resizeMode: 'contain',
        width: 30,
        height: 30,
        marginLeft: 20,
      },
      confeti: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      artistes12: {
        resizeMode: 'contain',
        width: 200,
        height: 200,
        marginVertical: 20,
        marginHorizontal: 10,
        marginLeft: 25,
      },

});
