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

import { CardItem, Card, Container, Header, Content, Form, Item, Icon, Input, Label, Button } from 'native-base';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import Spinner from 'react-native-loading-spinner-overlay';

const _baseUrl = "http://ec2-52-27-118-19.us-west-2.compute.amazonaws.com:5555";

class FgpOtp1 extends Component {

    state = {
        phoneNumber: "",
        loading: false
    }

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

    /**phoneNumber change handler */
    phoneNumberHandLer = (value) => {
        this.setState({
            phoneNumber: value
        });
    };

    /** forgot password */
    submitPhoneForReset() {
        if (this.state.phoneNumber.trim() === "") {
            return;
        } else {
            var _base = this;
            this.setState({
                loading: true
            });

            axios.put(_baseUrl + '/user/forgotPassword', {
                phoneNumber: this.state.phoneNumber
            }).then((result) => {
                console.log("result in stepOne :", result.data);

                if (result.data.error == false) {
                    _base.setState({
                        loading: false
                    });

                    /**Show toaster for otp successful message */
                    ToastAndroid.showWithGravity(
                        result.data.message,
                        ToastAndroid.SHORT,
                        ToastAndroid.TOP
                    );

                    //redirected to OtpStep2 page
                    Actions.fpOtpStep2({
                        result: result.data.result
                    });
                } else if (result.data.error == true) {
                    _base.setState({
                        loading: false
                    });

                    /**Show toaster for otp error message */
                    ToastAndroid.showWithGravity(
                        'Otp not send..',
                        ToastAndroid.SHORT,
                        ToastAndroid.TOP
                    );
                }
            }).catch((error) => {
                console.log("error :", error);
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
                        <Text style={styles.cnfrmtxt}>Confirm Your Mobile Number </Text>
                        <Text style={styles.linestyle}>Send <Text style={styles.txtbold}>OTP</Text></Text>

                    </View>

                    <View style={styles.topalign}>
                        <View style={styles.speacearea}>
                            <Form>
                                <Item style={styles.itemsalign}>

                                    <Icon active name='ios-call-outline' style={styles.iconstyle} />

                                    <Input placeholder='Mobile No' keyboardType='numeric'
                                        style={styles.input}
                                        placeholderTextColor="rgba(0,0,0,.6)"
                                        required={true}
                                        value={this.state.phoneNumber}
                                        onChangeText={this.phoneNumberHandLer}
                                        onSubmitEditing={this.submitPhoneForReset.bind(this)}
                                    />
                                </Item>

                                <View style={styles.textCenter}>
                                    <Button rounded style={styles.btnlogin} onPress={this.submitPhoneForReset.bind(this)} >
                                        <Text uppercase={false} style={styles.buttonText}>Send</Text>
                                    </Button>
                                </View>
                            </Form>
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
            marginBottom: 10,

            position: 'absolute'
        },

    topspace:
        {
            marginTop: '8%'
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

export default FgpOtp1;
