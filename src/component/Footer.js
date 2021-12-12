// import React from "react";
// import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
// import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import { useNavigation } from '@react-navigation/native';


// const Footer = () => {

//     const navigation = useNavigation();
//     return (
//         <View style={styles.footer}>
//             <View style={styles.view}>
//                 <TouchableOpacity>
//                     <AntDesign color='black' name="checksquareo" size={25}></AntDesign>
//                 </TouchableOpacity>
//                 <TouchableOpacity>
//                     <MaterialIcon color='black' name="brush" size={25}></MaterialIcon>
//                 </TouchableOpacity>
//                 <TouchableOpacity>
//                     <MaterialIcon color='black' name="mic-none" size={25}></MaterialIcon>
//                 </TouchableOpacity>
//                 <TouchableOpacity>
//                     <MaterialIcon color='black' name="crop-original" size={25}></MaterialIcon>
//                 </TouchableOpacity>
//             </View>
//             <View style={styles.plusView}>
//                 <TouchableOpacity style={styles.googlePlus} >
//                     <Image
//                         style={styles.addImg}
//                         source={require('../assests/images/add.png')} />
//                 </TouchableOpacity>
//             </View>
//         </View>
//     )
// }
// const styles = StyleSheet.create({
//     footer: {
//         height: 80,
//         backgroundColor: '#BDC3C7',
//         borderWidth: 0.2,
//         borderTopLeftRadius: 15,
//         borderTopRightRadius: 15,
//         flexDirection: 'row',
//         padding: 10,
//         borderColor:'#BDC3C7'
//     },
//     view: {
//         width: '50%',
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',

//     },
//     plusView: {
//         backgroundColor: 'transparent',
//         borderColor: 'transparent',
//         borderWidth: 10,
//         width: 67,
//         height: 67,
//         bottom: '70%',
//         right: '7%',
//         position: 'absolute',
//     },
//     googlePlus: {
//         borderRadius: 15,
//         marginRight:45,
//         height: 65,
//         width: 65,
//         borderWidth: 5,
//         alignSelf: 'center',
//         elevation: 8,
//         backgroundColor: '#CAD5E2',
//         borderColor:'#CAD5E2'
//     },
//     addImg: {
//         width: 55,
//         height:55,
//     },
// })
// export default Footer;