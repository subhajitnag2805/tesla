import React, { Component } from 'react';
import {
    Platform,
    Text,
    View,
    StyleSheet,
    TextInput,
    Image,
    TouchableOpacity,
    ImageBackground,
    ScrollView


} from 'react-native';
import { Container, Header, Content, Spinner } from 'native-base';

export default class SpinnerOverlay extends Component {
    render() {
        return (
            <View style={styles.spinnerplace}>

                <Spinner color='#ffffff' style={styles.spinnerpos} />

            </View>
        );
    }
}


const styles = StyleSheet.create({
    spinnerplace:
        {
            flex: 1,
            justifyContent: 'center',
            backgroundColor: '#53bce9'
        },
    spinnerpos:
        {
           
            flexDirection: 'row',
            padding: 10,
            


        },
  
})