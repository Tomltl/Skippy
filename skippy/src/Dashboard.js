// import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
// import React, { useState, useEffect } from 'react'
// import {firebase} from '../config'
// import { useNavigation } from "@react-navigation/native";

// const Dashboard = () => {
//     const navigation = useNavigation();
//     const [name, setName] = useState('')

//     const changePassword = () => {
//         firebase.auth().sendPasswordResetEmail(firebase.auth().currentUser.email)
//         .then(() => {
//           alert('E-mail de réinitialisation du mot de passe envoyé !')
//         })
//         .catch(error => {
//           alert(error)
//         })
//       }

//     useEffect(() => {
//         firebase.firestore().collection("users")
//         .doc(firebase.auth().currentUser.uid).get()
//         .then((snapshot) => {
//             if(snapshot.exists){
//                 setName(snapshot.data())
//             } else {
//                 console.log('User does not exist')
//                 console.log(name.firstName)
//             }
//         })
//     }, [])

//     return (
//         <SafeAreaView style={StyleSheet.container}>
//             <Text style={{fontSize:20, fontWeight:'bold'}}>
//                     Hello, {name.firstName}
//                 </Text>
//                 <TouchableOpacity
//             onPress={()=>{
//               changePassword()
//           }}
//             style={styles.button}
//         >
//           <Text style={{fontWeight:'bold', fontSize:22}}>Change Password</Text>
//         </TouchableOpacity>
//                 <TouchableOpacity
//                 onPress={() => navigation.navigate("Home")}
//                 >
//                     <Text style={{fontSize: 22, fontWeight:'bold'}}>Sign out</Text>
//                     </TouchableOpacity>        
//             </SafeAreaView>
//     )
// }

// export default Dashboard

// const styles = StyleSheet.create({
//     container: {
//       flex:1,  
//       alignItems:'center',
//       marginTop:100,
//     },
//     button: {
//       marginTop:50,
//       height:70,
//       width:250,
//       backgroundColor:'#026efd',
//       alignItems:'center',
//       justifyContent:'center',
//       borderRadius:50,
//     }
//   });

import { useNavigation } from "@react-navigation/native";
import { Button, SafeAreaView, StyleSheet, Text, View, Pressable, Image, TouchableOpacity, ScrollView } from "react-native";
import {firebase} from './../config'
import React, { useState, useEffect } from 'react'



const Dashboard = () => {
  const navigation = useNavigation();
      const [name, setName] = useState('')
  
      const changePassword = () => {
          firebase.auth().sendPasswordResetEmail(firebase.auth().currentUser.email)
          .then(() => {
            alert('E-mail de réinitialisation du mot de passe envoyé !')
          })
          .catch(error => {
            alert(error)
          })
        }
  
      useEffect(() => {
          firebase.firestore().collection("users")
          .doc(firebase.auth().currentUser.uid).get()
          .then((snapshot) => {
              if(snapshot.exists){
                  setName(snapshot.data())
              } else {
                  console.log('User does not exist')
                  console.log(name.firstName)
              }
          })
      }, [])

  return (
    // <SafeAreaView>
    //   <Text>This is Second screen</Text>
    //   <Button onPress={() => navigation.navigate("Modal")} title="Open Modal" />
    // </SafeAreaView>
    <View style={styles.container2}>
            <View style={styles.retour}>
        <Pressable onPress={() => navigation.navigate("Home2")}>
    {/* <Text style={{color: "white", marginRight: 30,}}>retour</Text>
     */}
     <Image
        style={styles.flamme3}
        source={require('../assets/retour.png')}
        />
    </Pressable>
    <View style={styles.bonj}>
    <Text style={styles.bonjour}>Profil</Text>
    </View>
    </View>
    <ScrollView style={styles.body2}>
        <View style={styles.haut}>
    <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 40}}>
    <Image
        style={styles.flamme2}
        source={require('../assets/compte.png')}
      />
      <View>
      <Text style={{color: 'white', marginLeft: 20, fontSize: 20, fontWeight: '600', marginBottom: 3}}>{name.firstName}</Text>
      <Text style={{color: '#F6F4E2', marginLeft: 20}}>{name.email}</Text>
      </View>
      </View>
      <Text style={{color: '#F6F4E2', marginLeft: 25, marginTop: 40}}>PROFIL</Text>
    </View>
    <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 40, marginTop: 20, borderBottomWidth: 1, borderColor: 'white', paddingBottom: 7, justifyContent: 'space-between', paddingRight: 30}}>
    <Image
        style={styles.flamme1}
        source={require('../assets/utilisateur.png')}
      />
      <Text style={{color: 'white', fontSize: 18, marginLeft: 20,}}>Information du profil</Text>
      <Image
        style={styles.flamme17}
        source={require('../assets/retour.png')}
      />
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 40, marginTop: 20, justifyContent: 'space-between', paddingRight: 30}}>
    <Image
        style={styles.flamme1}
        source={require('../assets/débit.png')}
      />
      <Text style={{color: 'white', fontSize: 18, marginLeft: 20,}}>Méthodes de paiement</Text>
      <Image
        style={styles.flamme17}
        source={require('../assets/retour.png')}
      />
      </View>
      <Text style={{color: '#F6F4E2', marginLeft: 25, marginTop: 40}}>FESTIVAL</Text>
      <View style={styles.festival}>
      <Image
        style={styles.flamme18}
        source={require('../assets/logomara.png')}
      />
      <View>
      <Text style={{color: 'white', fontSize: 16,}} onPress={() => navigation.navigate("festival")}>Festival sélectionné</Text>
      <Text style={{color: 'white', fontSize: 20, fontWeight: '600'}} onPress={() => navigation.navigate("festival")}>Maravilla</Text>
      </View>
      <Image
        style={styles.flamme16}
        source={require('../assets/retour.png')}
      />
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 40, marginTop: 20, justifyContent: 'space-between', paddingRight: 30}}>
    <Image
        style={styles.flamme2}
        source={require('../assets/billet.png')}
      />
      <Text style={{color: 'white', fontSize: 18, marginLeft: 20,}}>Méthodes de paiement</Text>
      <Image
        style={styles.flamme17}
        source={require('../assets/retour.png')}
      />
      </View>
      <Text style={{color: '#F6F4E2', marginLeft: 25, marginTop: 40}}>PARAMÈTRES</Text>
      <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 40, marginTop: 20, borderBottomWidth: 1, borderColor: 'white', paddingBottom: 7, justifyContent: 'space-between', paddingRight: 30}}>
    <Image
        style={styles.flamme22}
        source={require('../assets/stylo.png')}
      />
      <Text style={{color: 'white', fontSize: 18, marginLeft: 20,}}>Paramètres du compte</Text>
      <Image
        style={styles.flamme17}
        source={require('../assets/retour.png')}
      />
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 40, marginTop: 20, borderBottomWidth: 1, borderColor: 'white', paddingBottom: 7, justifyContent: 'space-between', paddingRight: 30}}>
    <Image
        style={styles.flamme22}
        source={require('../assets/yeux.png')}
      />
      <Text style={{color: 'white', fontSize: 18, marginLeft: 20,}} onPress={()=>{changePassword()}}>Changer de mot de passe</Text>
      <Image
        style={styles.flamme17}
        source={require('../assets/retour.png')}
      />
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 40, marginTop: 20, borderBottomWidth: 1, borderColor: 'white', paddingBottom: 7, justifyContent: 'space-between', paddingRight: 30}}>
    <Image
        style={styles.flamme22}
        source={require('../assets/notif.png')}
      />
      <Text style={{color: 'white', fontSize: 18, marginLeft: 20,}}>Notification</Text>
      <Image
        style={styles.flamme17}
        source={require('../assets/retour.png')}
      />
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 40, marginTop: 20, borderBottomWidth: 1, borderColor: 'white', paddingBottom: 7, justifyContent: 'space-between', paddingRight: 30}}>
    <Image
        style={styles.flamme22}
        source={require('../assets/acc.png')}
      />
      <Text style={{color: 'white', fontSize: 18, marginLeft: 20,}}>Accessibilité</Text>
      <Image
        style={styles.flamme17}
        source={require('../assets/retour.png')}
      />
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 40, marginTop: 20, borderBottomWidth: 1, borderColor: 'white', paddingBottom: 7, justifyContent: 'space-between', paddingRight: 30}}>
    <Image
        style={styles.flamme22}
        source={require('../assets/langue.png')}
      />
      <Text style={{color: 'white', fontSize: 18, marginLeft: 20,}}>Langue</Text>
      <Image
        style={styles.flamme17}
        source={require('../assets/retour.png')}
      />
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 40, marginTop: 20, justifyContent: 'space-between', paddingRight: 30, paddingBottom: 80,}}>
    <Image
        style={styles.flamme222}
        source={require('../assets/langue.png')}
      />
      <Text style={{color: 'red', fontSize: 18, marginLeft: 20,}} onPress={()=>{
              firebase.auth().signOut(); navigation.navigate('Home')
          }}>Se déconnecter</Text>
      <Image
        style={styles.flamme17}
        source={require('../assets/retour.png')}
      />
      </View>
      
      </ScrollView>
    </View>
  );

}

export default Dashboard;

const styles = StyleSheet.create({
    haut: {
        // marginHorizontal: 20,
        // marginRight: 50,
        // marginTop: 80,
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
      retour: {
        justifyContent: 'center',
        flexDirection: 'row',
        paddingBottom: 20,
        marginTop: 80,
        alignItems: 'center'
      },
      bonjour: {
        color: 'white',
        fontWeight: 600,
        fontSize: 30,
        marginRight: 50,
      },
      bonj: {
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        textAlign: 'center',
      },
      footer2: {
        backgroundColor: '#6AA79E',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 70,
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
      flamme22: {
        resizeMode: 'contain',
        width: 50,
        height: 30,
      },
      flamme222: {
        resizeMode: 'contain',
        width: 50,
        height: 30,
        opacity: 0
      },
      flamme1: {
        resizeMode: 'contain',
        width: 30,
        height: 30,
      },
      flamme17: {
        resizeMode: 'contain',
        width: 20,
        height: 20,
        transform: [{scaleX: -1}],
        // paddingRight: 130,
      },
      flamme16: {
        resizeMode: 'contain',
        width: 20,
        height: 20,
        transform: [{scaleX: -1}],
        marginRight: 10,
        // paddingRight: 130,
      },
      flamme18: {
        resizeMode: 'contain',
        width: 80,
        height: 80,
        marginLeft: 10,
        // paddingRight: 130,
      },
      flamme3: {
        resizeMode: 'contain',
        width: 20,
        height: 20,
        marginRight: 30,
      },
      flamme4: {
        resizeMode: 'contain',
        width: 20,
        height: 20,
      },
      prénom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 40,
        marginLeft: 40,
        marginTop: 50,
        borderBottomWidth: 2,
        borderColor: '#6AA79E',
        paddingBottom: 10,
      },
      prénom2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: 40,
        marginLeft: 40,
        marginTop: 50,
        borderBottomWidth: 2,
        borderColor: '#2D2D2D',
        paddingBottom: 10,
      },
      maravilla: {
        flexDirection: 'row',
      },
      festival: {
        flexDirection: 'row', 
        alignItems: 'center', 
        backgroundColor: '#424140', 
        justifyContent: 'space-between',
        marginLeft: 25, 
        marginRight: 25,
        borderRadius: 25,
        paddingBottom: 5,
        marginTop: 20,  
      }
});
