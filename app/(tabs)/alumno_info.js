// /* eslint-disable react-native/no-inline-styles */

// import React, {Component} from 'react';
// import {
//   View,
//   Text,
//   SafeAreaView,
//   StyleSheet,
//   Image,
//   ActivityIndicator,
// } from 'react-native';

// export default class AlumnoInfo extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: props.data,
//       image: null,
//     };
//   }

//   componentDidMount() {
//     const {code} = this.props;
//     this.fetchData(code);
//   }

//   fetchData = code => {
//     let _this = this;

//     fetch('http://148.202.152.33/cucei/fotoA.php?codigo=' + code)
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Error en la respuesta de la red');
//         }
//         return response.text(); // Usa text() para obtener el contenido como texto
//       })
//       .then(r => {
//         _this.setState({image: r});
//       })
//       .catch(error => {
//         console.log('Error en la solicitud:', error);
//       });
//   };

//   render() {
//     return (
//       <SafeAreaView style={{flex: 1}}>
//         <View style={{flex: 1}}>
//           <View style={styles.headerView}>
//             {this.state.image === null ? (
//               <View>
//                 <ActivityIndicator size="large" color="#0000ff" />
//               </View>
//             ) : (
//               <Image
//                 source={{
//                   uri: this.state.image,
//                 }}
//                 style={styles.image}
//               />
//             )}

//             <Text style={styles.headerText}>{this.state.data.alumno}</Text>
//             <Text style={styles.headerText}>{this.state.data.campus}</Text>
//             <Text style={styles.headerText}>
//               {this.state.data.carrera} / {this.state.data.ciclo}
//             </Text>
//           </View>
//         </View>
//       </SafeAreaView>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   headerView: {
//     gap: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingTop: 20,
//   },
//   headerText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   image: {
//     width: 300,
//     height: 300,
//   },
// });
