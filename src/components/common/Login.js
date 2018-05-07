import React, { Component } from 'react';
import {
  Platform,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  ScrollView,
  TextInputMask,
  Dimensions,
  BackHandler,
  Alert,
  ToastAndroid
} from 'react-native';

import { CardItem, Card, Container, Header, Content, Form, Item, Icon, Input, Label, Text, Button } from 'native-base';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import Spinner from 'react-native-loading-spinner-overlay';
import { Dialog, ConfirmDialog } from 'react-native-simple-dialogs';
const _baseUrl = "http://ec2-52-27-118-19.us-west-2.compute.amazonaws.com:5555";

class Login extends Component {
  
  
  
  state = {
    phoneNumber: "",
    password: "",
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


  /**phone number change handler */
  phoneNumberHandLer = (value) => {
    this.setState({
      phoneNumber: value
    });
  };

  /**password change handler */
  passwordHandler = (value) => {
    this.setState({
      password: value
    });
  };

  /**Login */
  login() {
    if (this.state.phoneNumber.trim() === "" || this.state.password.trim() === "") {
      return;
    } else {
      var _base = this;
      this.setState({
        loading: true
      });

      axios.get(_baseUrl + '/user/login?phoneNumber=' + this.state.phoneNumber + '&password=' + this.state.password)
        .then((result) => {
          console.log("login result :", result.data);
          if (result.data) {
            _base.setState({
              loading: false
            });

            /**Driver module */
            if (result.data.role == "driver") {

              /**Show toaster for successful message */
              ToastAndroid.showWithGravity(
                'Driver login successfully..',
                ToastAndroid.SHORT,
                ToastAndroid.TOP
              );

              /**route to driverAppointmentPage */
              Actions.driverBook();
            }
            /**User module */
            else if (result.data.role == "user") {
              /**Show toaster for successful message */
              ToastAndroid.showWithGravity(
                'User login successfully..',
                ToastAndroid.SHORT,
                ToastAndroid.TOP
              );

              /**route to user booking page */
              Actions.book();
            }
          } else if (result.data.error == true) {
            _base.setState({
              loading: false
            });

            /**Show toaster for otp error message */
            ToastAndroid.showWithGravity(
              'Login failed..',
              ToastAndroid.SHORT,
              ToastAndroid.TOP
            );
          }
        }).catch((error) => {
          if (error) {
            _base.setState({
              loading: false
            });

            /**Show toaster for otp error message */
            ToastAndroid.showWithGravity(
              'Network error..',
              ToToastAndroidast.SHORT,
              ToastAndroid.TOP
            );
          }
        });
    }
  }

  render() {
    return (
      <ScrollView>
        <View>
          <Spinner visible={this.state.loading} textContent={"Loading..."} textStyle={{ color: '#FFF' }} />
          <View style={styles.canvasContainer}>
            <Image source={require('../../images/blueview2.png')} style={styles.teslabackimg} />

          </View>

          <Form>
            <View>
              <View style={styles.speacearea}>

                <Item style={styles.itemsalign}>
                  <Icon active name='ios-call-outline' style={styles.iconstyle} />
                  <Input placeholder='Phone No' style={styles.input} data-mask="(00) 0000-0000" data-mask-selectonfocus="true" placeholderTextColor="rgba(0,0,0,.6)"
                    value={this.props.phoneNumber}
                    onChangeText={this.phoneNumberHandLer}
                    keyboardType='numeric'
                  />

                </Item>
                <Item style={styles.itemsalign}>
                  <Icon active name='ios-lock-outline' style={styles.iconstyle} />
                  <Input placeholder='Password' style={styles.input} placeholderTextColor="rgba(0,0,0,.6)"
                    secureTextEntry={true}
                    value={this.state.password}
                    onChangeText={this.passwordHandler}
                  />

                </Item>
                <Text style={styles.errorTextStyle}>
                  {this.props.error}
                </Text>
                <View style={styles.textCenter}>
                  <View>
                    <Button rounded style={styles.btnlogin}
                      onPress={this.login.bind(this)}
                    >
                      <Text uppercase={false} style={styles.buttonText}>Login</Text>
                    </Button>
                  </View>
                </View>

                <Text style={styles.linkFrget} onPress={Actions.forgotPassword}>
                  <Image source={require('../../images/lock.png')} style={styles.lockplace} />  Forgot Password ?</Text>

                <Text style={styles.linkstyle}>
                  <Text onPress={Actions.registerUser} style={styles.linkstyle}>  New Passenger &nbsp;&nbsp;&nbsp;&nbsp; |</Text>
                  <Text
                    style={{
                      height: 100,
                      width: 3,
                      backgroundColor: 'rgba(0,0,0,.6)'
                    }}
                  />
                  <Text style={styles.linkstyle}>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Text onPress={Actions.registerDriver}>New Driver</Text>

                  </Text>
                </Text>

              </View>
            </View>
          </Form>

        </View>
      </ScrollView>

    );
  }
}

// const styles = StyleSheet.create({
//   canvasContainer: {

//     alignItems: 'stretch',
//     padding: 0,
//   },
//   errorTextStyle: {
//     fontSize: 20,
//     alignSelf: 'center',
//     color: 'red'
//   },
//   itemsalign:
//     {
//       marginBottom: 20,
//     },
//   textmiddle:
//     {
//       textAlign: 'center'
//     },
//   speacearea:

//     {
//       paddingLeft: '8%',
//       paddingRight: '8%',
//     },
//   textCenter:
//     {
//       justifyContent: 'center',
//       flexDirection: 'row'
//     },
//   lockplace:
//     {
//       height: 29,
//       width: 30,
//       alignSelf: 'center',
//       justifyContent: 'center', alignItems: 'center',
//       padding: 20,
//     },

//   linkstyle:
//     {
//       textAlign: 'center',
//       marginTop: '8%',
//       marginBottom: '10%',
//       fontSize: 16,
//       fontFamily: 'Lato-Regular',
//       color: 'rgba(0,0,0,.6)',

//     },
//   loginarea:
//     {
//       paddingTop: 20,
//       position: 'relative'
//     },
//   backgroundImage: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#ffffff',

//   },
//   iconstyle: {
//     color: "rgba(0,0,0,0.7)",
//     fontSize: 20
//   },

//   container: {
//     justifyContent: 'center',
//     alignItems: 'center',

//   },
//   signupLink:
//     {
//       justifyContent: 'center',
//       alignItems: 'center',

//     },

//   linkFrget:
//     {

//       textAlign: 'center',
//       marginTop: '4%',
//       marginBottom: '4%',
//       fontSize: 16,
//       fontFamily: 'Lato-Regular',
//       color: 'rgba(0,0,0,0.6)',


//     },
//   loginText:
//     {
//       textAlign: 'center',
//       marginTop: 20,
//       marginBottom: 25,
//       fontSize: 16,
//       fontFamily: 'Lato-Regular',
//       color: 'rgba(0,0,0,0.6)'
//     },
//   logoarea: {

//     backgroundColor: 'transparent',
//   },
//   teslabackimg:
//     {
//       width: responsiveWidth('100%'),
//       height: responsiveHeight(50),
//     },
//   input: {
//     color: 'rgba(0,0,0,.7)',
//     fontFamily: 'Lato-Regular',
//   },
//   loginhdng:
//     {
//       textAlign: 'center',
//       color: '#b0bec5',
//       fontSize: 15,
//       marginTop: 30,
//       marginBottom: 30,
//       fontFamily: 'Lato-Regular'

//     },

//   buttonText: {

//     color: '#ffffff',
//     textAlign: 'center',
//     fontSize: 18,
//     fontFamily: 'Lato-Regular',
//     fontWeight: '300',


//   },


//   btnlogin:
//     {
//       backgroundColor: '#40b4e5',
//       borderColor: '#448aff',
//       justifyContent: 'center',
//       width: 100,
//       marginTop: '8%',
//       marginBottom: '8%',
//       height: 50,
//       borderWidth: 0,
//     },


// });
const styles = StyleSheet.create({
  canvasContainer: {

    alignItems: 'stretch',
    padding: 0,
  },
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },
  itemsalign:
    {
      marginBottom: 20,
    },
  textmiddle:
    {
      textAlign: 'center'
    },
  speacearea:

    {
      paddingLeft: '8%',
      paddingRight: '8%',
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
      marginTop: '2%',
      marginBottom: '10%',
      fontSize: 16,
      fontFamily: 'Lato-Regular',
      color: 'rgba(0,0,0,.6)',

    },
  loginarea:
    {
      paddingTop: 20,
      position: 'relative'
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

  container: {
    justifyContent: 'center',
    alignItems: 'center',

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
      height: responsiveHeight(40),
    },
  input: {
    color: 'rgba(0,0,0,.7)',
    fontFamily: 'Lato-Regular',
  },
  loginhdng:
    {
      textAlign: 'center',
      color: '#b0bec5',
      fontSize: 15,
      marginTop: 30,
      marginBottom: 30,
      fontFamily: 'Lato-Regular'

    },

  buttonText: {

    color: '#ffffff',
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'Lato-Regular',
    fontWeight: '300',


  },


  btnlogin:
    {
      backgroundColor: '#40b4e5',
      borderColor: '#448aff',
      justifyContent: 'center',
      width: 100,
      marginTop: '1%',
      marginBottom: '4%',
      height: 50,
      borderWidth: 0,
    },


});

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;

  return { email, password, error, loading };
};

export default Login;
