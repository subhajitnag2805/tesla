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
    ScrollView,
    BackHandler,
    Alert,
    ToastAndroid
} from 'react-native';

import OtpInputs from 'react-native-otp-inputs';

import { CardItem, Card, Container, Header, Content, Form, Item, Icon, Input, Label, Button } from 'native-base';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import Spinner from 'react-native-loading-spinner-overlay';

const _baseUrl = "http://ec2-52-27-118-19.us-west-2.compute.amazonaws.com:5555";

class Otpstep2 extends Component {

    state = {
        otp: "",
        loading: false
    }

    /**Otp change handler */
    otpHandler = (value) => {
        this.setState({
            otp: value
        });
    };

    /**Backbutton handler for closing app or cancel */
    handleBackButton = () => {
        Alert.alert(
            'Exit App',
            'Exiting the application?', [{
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel'
            }, {
                text: 'OK',
                onPress: () => BackHandler.exitApp()
            },], {
                cancelable: false
            }
        )
        return true;
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }

    /**Verify Otp */
    changeevent = (otp) => {
        if (otp.length == 4) {
            var _base = this;
            let phoneNumber = this.props.result.phoneNumber;
            this.setState({
                loading: true
            });

            axios.post(_baseUrl + '/user/verifyOtp', {
                phoneNumber: phoneNumber,
                code: parseInt(otp)
            }).then((result) => {
                console.log("verifyOtp result :", result.data);

                if (result.data.error === false) {
                    _base.setState({
                        loading: false
                    });

                    /**Show toaster for otp successful message */
                    ToastAndroid.showWithGravity(
                        result.data.message,
                        ToastAndroid.SHORT,
                        ToastAndroid.TOP
                    );

                    //redirected to createDriverFirst page
                    Actions.createUserFirst({
                        result: phoneNumber
                    });
                } else if (result.data.error === true) {
                    _base.setState({
                        loading: false
                    });

                    /**Show toaster for otp error message */
                    ToastAndroid.showWithGravity(
                        'User not verified..',
                        ToastAndroid.SHORT,
                        ToastAndroid.TOP
                    );

                }
            }).catch((error) => {
                console.log(error);
                if (error) {
                    _base.setState({
                        loading: false
                    });

                    /**Show toaster for otp error message */
                    ToastAndroid.showWithGravity(
                        'Network error..',
                        ToastAndroid.SHORT,
                        ToastAndroid.TOP
                    );
                }
            });
        }
    }

    render() {
        return (
            <ScrollView>
                <View >
                    <Spinner visible={this.state.loading} textContent={"Loading..."} textStyle={{ color: '#FFF' }} />
                    <View style={styles.logoarea}>
                        <Image style={styles.teslabackimg} source={require('../../images/regwave.png')} />
                        <Image style={styles.placelogo} source={require('../../images/logotesla.png')} />

                    </View>
                    <View style={styles.topspace}>
                        <View style={styles.borderdivider} />
                        <Text style={styles.linestyle}>Type Your <Text style={styles.txtbold}>OTP</Text></Text>
                    </View>
                    <View style={styles.topalign}>
                        <View style={styles.speacearea}>
                            <View style={styles.textCenter}>
                                {/* <View style={styles.otpPut} >
                                    <Input style={styles.input} placeholderTextColor="rgba(0,0,0,.6)" />
                                </View>
                                <View style={styles.otpPut} >
                                    <Input style={styles.input} placeholderTextColor="rgba(0,0,0,.6)" />
                                </View>
                                <View style={styles.otpPut} >
                                    <Input style={styles.input} placeholderTextColor="rgba(0,0,0,.6)" />
                                </View>
                                <View style={styles.otpPut} >
                                    <Input style={styles.input} placeholderTextColor="rgba(0,0,0,.6)" />Color
                                </View> */}
                                <View style={styles.container}>
                                    <OtpInputs style={styles.otpPut}
                                        inputContainerStyles={{ backgroundColor: '#4ea5ca' }}
                                        handleChange={(otp) => this.changeevent(otp)}
                                        numberOfInputs={4}
                                        onChangeText={this.otpHandler}
                                    />
                                </View>
                            </View>
                            {/* <View style={styles.textCenter}>
                                <Button rounded 
                                style={styles.btnlogin}
                               
                                >
                                    <Text uppercase={false} 
                                    style={styles.buttonText}>Submit</Text>
                                </Button>
                            </View> */}
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({

    topalign:
        {
            marginTop: '10%',
        },

    borderdivider:
        {
            alignSelf: 'center',
            borderTopColor: '#40b4e5',
            borderTopWidth: 2,
            height: '8%',
            width: '10%',


            position: 'absolute'
        },

    topspace:
        {
            marginTop: '8%',

        },

    cnfrmtxt:
        {

            textAlign: 'center',
            marginTop: '5%',
            marginBottom: 10,
            fontSize: 16,
            fontFamily: 'Lato-Regular',
            color: 'rgba(0,0,0,.8)',


        },
    linestyle:
        {
            textAlign: 'center',
            marginTop: '5%',
            marginBottom: '5%',
            fontSize: 16,
            fontFamily: 'Lato-Regular',
            color: '#333',
        },
    canvasContainer: {

        alignItems: 'stretch',
        padding: 0,
    },
    itemsalign:
        {
            marginBottom: 20,
        },
    placelogo:
        {
            position: 'absolute',
            flexDirection: 'row',
            alignItems: 'center',
            height: 50,
            width: 130

        },
    textmiddle:
        {
            textAlign: 'center'
        },
    speacearea:

        {
            paddingLeft: '10%',
            paddingRight: '10%',
        },
    textCenter:
        {
            justifyContent: 'center',
            flexDirection: 'row'
        },
    lockplace:
        {
            height: 29,
            width: 30,
            alignSelf: 'center',
            justifyContent: 'center', alignItems: 'center',
            padding: 20,
        },

    linkstyle:
        {
            textAlign: 'center',
            marginTop: '8%',
            marginBottom: '10%',
            fontSize: 16,
            fontFamily: 'Lato-Regular',
            color: 'rgba(0,0,0,.6)',

        },
    otpPut: {
        borderBottomWidth: 1,
        borderBottomColor: 'red',
        marginRight: '4%',
        backgroundColor: 'transparent',
        height: 50,
        width: 50,
        borderColor: "rgba(0,0,0,0.2)",
    },

    backgroundImage: {

        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',

    },
    iconstyle: {
        color: "rgba(0,0,0,0.7)",
        fontSize: 20
    },

    signupLink:
        {
            justifyContent: 'center',
            alignItems: 'center',

        },

    linkFrget:
        {
            textAlign: 'center',
            marginTop: '4%',
            marginBottom: '4%',
            fontSize: 16,
            fontFamily: 'Lato-Regular',
            color: 'rgba(0,0,0,0.6)',
        },
    loginText:
        {
            textAlign: 'center',
            marginTop: 20,
            marginBottom: 25,
            fontSize: 16,
            fontFamily: 'Lato-Regular',
            color: 'rgba(0,0,0,0.6)'
        },
    logoarea: {

        backgroundColor: 'transparent',
    },
    teslabackimg:
        {
            width: responsiveWidth('100%'),
            height: responsiveHeight(50),
        },
    input: {
        color: 'rgba(0,0,0,.7)',
        fontFamily: 'Lato-Regular',
        borderColor: 'red'

    },


    buttonText: {

        color: '#ffffff',
        textAlign: 'center',
        fontSize: 18,
        fontFamily: 'Lato-Regular',
        fontWeight: '300',
        justifyContent: 'center'


    },

    txtbold:
        {
            color: '#40b4e5'
        },
    btnlogin:
        {
            backgroundColor: '#40b4e5',
            borderColor: '#448aff',
            width: 100,
            justifyContent: 'center',
            marginTop: '10%',
            marginBottom: '8%',
            height: 50,
            borderWidth: 0,
        },


    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',

    },


    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },



    logoarea: {

        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    teslabackimg:
        {
            width: responsiveWidth(100),
            height: responsiveHeight(30),
            marginBottom: 20,

        }
});

export default Otpstep2;
