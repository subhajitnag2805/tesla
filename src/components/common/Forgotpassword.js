import React, { Component } from 'react';
import {
  Platform,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  ScrollView,
  BackHandler,
  Alert,
  ToastAndroid
} from 'react-native';

import { CardItem, Card, Container, Header, Content, Form, Item, Icon, Input, Label, Text, Button } from 'native-base';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { Dialog, ConfirmDialog } from 'react-native-simple-dialogs';

import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import Spinner from 'react-native-loading-spinner-overlay';

const _baseUrl = "http://ec2-52-27-118-19.us-west-2.compute.amazonaws.com:5555";

class Forgotpassword extends Component {

  state = {
    phoneNumber: "",
    newPassword: "",
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

  /**phone change handler */
  phoneHandler = (value) => {
    this.setState({
      phoneNumber: value
    });
  };

  /**New password change handler */
  newPasswordHandler = (value) => {
    this.setState({
      newPassword: value
    });
  };

  /**password reset */
  passwordReset() {
    if (this.state.phoneNumber.trim() === "" || this.state.newPassword.trim() === "") {
      return;
    } else {
      var _base = this;
      this.setState({
        loading: true
      });

      axios.put(_baseUrl + '/user/changePassword', {
        phoneNumber: this.state.phoneNumber,
        newPassword: this.state.newPassword
      }).then((result) => {
        console.log("result :", result.data);

        if (result.data.error == false) {
          if (result.data.error === false) {
            _base.setState({
              loading: false
            });

            /**Show toaster for successful message */
            ToastAndroid.showWithGravity(
              result.data.message,
              ToastAndroid.SHORT,
              ToastAndroid.TOP
            );

            //redirected to login page
            Actions.auth();

          } else if (result.data.error == true) {
            _base.setState({
              loading: false
            });

            /**Show toaster for error message */
            ToastAndroid.showWithGravity(
              'Password did not reset..',
              ToastAndroid.SHORT,
              ToastAndroid.TOP
            );

            //redirected to login page
            Actions.auth();
          }
        }
      }).catch((error) => {
        console.log("error :", error);

        if (error) {
          _base.setState({
            loading: false
          });

          /**Show toaster for error message */
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
        <View>
          <View style={styles.canvasContainer}>
            <Image source={require('../../images/blueview.png')} style={styles.teslabackimg} />
          </View>
          <Form>
            <View>
              <View style={styles.speacearea}>
                <Item style={styles.itemsalign}>
                  <Icon active name='ios-lock-outline' style={styles.iconstyle} />
                  <Input placeholder='Phonenumber'
                    secureTextEntry={true}
                    style={styles.input}
                    placeholderTextColor="rgba(0,0,0,.6)"
                    required={true}
                    value={this.state.phoneNumber}
                    onChangeText={this.phoneHandler}
                  />
                </Item>
                <Item style={styles.itemsalign}>
                  <Icon active name='ios-lock-outline' style={styles.iconstyle} />
                  <Input placeholder='New Password'
                    style={styles.input}
                    secureTextEntry={true}
                    placeholderTextColor="rgba(0,0,0,.6)"
                    required={true}
                    value={this.state.newPassword}
                    onChangeText={this.newPasswordHandler}
                    onSubmitEditing={this.passwordReset.bind(this)}

                  />
                </Item>
                <View style={styles.textCenter}>
                  <Button rounded style={styles.btnlogin} onPress={this.passwordReset.bind(this)}>
                    <Text uppercase={false} style={styles.buttonText}>Submit</Text>
                  </Button>
                </View>
                {/* <Dialog
                    visible={this.state.showDialog}
           
                    onTouchOutside={() => this.openDialog(false)}
                    contentStyle={{ justifyContent: 'center', alignItems: 'center', }}
                    animationType="fade">
                    <Image
                        source={require('../../images/lock.png')} 
                        
                      
                        style={styles.btm10} />
                     <Text style={styles.successmsz}>Congrats ! &nbsp;Your Password has changed successfully</Text>
                         
                </Dialog>  */}
              </View>
            </View>
          </Form>

        </View>
      </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
  successmsz:
    {
      marginBottom: 10,
      marginTop: 10,
      textAlign: 'center',
      fontFamily: 'Lato-Regular',
      fontSize: 16,
      color: 'rgba(0,0,0,.8)'
    },
  btm10:
    {
      marginBottom: 10,
    },
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
      marginTop: '8%',
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
      marginTop: '8%',
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
      height: responsiveHeight(50),
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
      marginTop: '8%',
      marginBottom: '8%',
      height: 50,
      borderWidth: 0,
    }
});

export default Forgotpassword;
