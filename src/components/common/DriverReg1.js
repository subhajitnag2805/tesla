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
  Alert
} from 'react-native';

import { CardItem, Card, Container, Header, Content, Form, Item, Icon, Input, Label, Button } from 'native-base';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

import { Actions } from 'react-native-router-flux';

class DriverReg1 extends Component {

  state = {
    name: "",
    email: "",
    password: "",
    address: "",
    nameValidate: true,
    passwordValidate: true,
    emailValidate: true,
    addressValidate: true,
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


  /**validation Check */
  validate(value, type) {
    alph = /^[a-zA-Z ]{2,30}$/
    em = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
    add = /^[a-zA-Z0-9]+$/
    pas = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/

    if (type == 'name') {
      if (alph.test(value)) {
        this.setState({
          nameValidate: true
        });
      }
      else {
        this.setState({
          nameValidate: false
        });
      }
    }
    else if (type == 'email') {
      if (em.test(value)) {
        this.setState({
          emailValidate: true
        });
      }
      else {
        this.setState({
          emailValidate: false
        });
      }
    }
    else if (type == 'password') {
      if (pas.test(value)) {
        this.setState({
          passwordValidate: true
        });
      }
      else {
        this.setState({
          passwordValidate: false
        });
      }
    }
    else if (type == 'address') {
      if (add.test(value)) {
        this.setState({
          addressValidate: true
        });
      }
      else {
        this.setState({
          addressValidate: false
        });
      }
    }
  }

  /**name change Handler */
  nameHandler = (value) => {
    this.setState({
      name: value
    });
    this.validate(value, "name");
  };

  /**email change Handler */
  emailHandler = (value) => {
    this.setState({
      email: value
    });
  };

  /**password change Handler */
  passwordHandler = (value) => {
    this.setState({
      password: value
    });
  };

  /**address change Handler */
  addressHandler = (value) => {
    this.setState({
      address: value
    });
  };

  /**routing to createDriverSecond page */
  initialRegistration() {
    console.log("this.state.name :", this.state.name);
    Actions.createDriverSecond({
      Name: this.state.name,
      Phone: this.props.result,
      Email: this.state.email,
      Password: this.state.password,
      Address: this.state.address
    });
  }

  render() {
    console.log("phoneNumber :", this.props.result);
    return (

      <ScrollView>
        <View >
          <View style={styles.logoarea}>
            <Image style={styles.teslabackimg} source={require('../../images/regwave.png')} />
            <Image style={styles.placelogo} source={require('../../images/logotesla.png')} />

          </View>
          <View>
            <View style={styles.speacearea}>

              <Item style={styles.itemsalign}>

                <Icon active name='ios-person-outline' style={styles.iconstyle} />

                <Input placeholder='Name'
                  style={[styles.input, !this.state.nameValidate ? styles.error : null]}
                  placeholderTextColor="rgba(0,0,0,.6)"
                  value={this.state.name}
                  required={true}
                  onChangeText={this.nameHandler}

                />
              </Item>
              <Item style={styles.itemsalign}>
                <Icon active name='ios-call-outline' style={styles.iconstyle} />
                <Input keyboardType='numeric'
                  style={[styles.input]}
                  placeholderTextColor="rgba(0,0,0,.6)"
                  value={this.props.result}
                  editable={false}
                />
              </Item>
              <Item style={styles.itemsalign}>

                <Icon active name='ios-mail-outline' style={styles.iconstyle} />
                <Input placeholder='Email'
                  style={[styles.input, !this.state.emailValidate ? styles.error : null]}
                  placeholderTextColor="rgba(0,0,0,.6)"
                  value={this.state.email}
                  onChangeText={this.emailHandler}
                />
              </Item>
              <Item style={styles.itemsalign}>
                <Icon active name='ios-lock-outline' style={styles.iconstyle} />
                <Input placeholder='Passowrd'
                  style={[styles.input, !this.state.passwordValidate ? styles.error : null]}
                  secureTextEntry={true}
                  placeholderTextColor="rgba(0,0,0,.6)"
                  value={this.state.password}
                  onChangeText={this.passwordHandler}
                />
              </Item>
              <Item style={styles.itemsalign}>
                <Icon active name='ios-pin-outline' style={styles.iconstyle} />
                <Input placeholder='Address'
                  style={[styles.input, !this.state.addressValidate ? styles.error : null]}
                  placeholderTextColor="rgba(0,0,0,.6)"
                  value={this.props.address}
                  onChangeText={this.addressHandler}
                />
              </Item>
              <View style={styles.textCenter}>
                <Button rounded
                  style={styles.btnlogin}
                  onPress={this.initialRegistration.bind(this)}>
                  <Text
                    uppercase={false}
                    style={styles.buttonText}
                  >
                    Next
                   </Text>
                </Button>
              </View>
            </View>
          </View>
        </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  error: {
    borderWidth: 3,
    borderColor: 'red'
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


  btnlogin:
    {
      backgroundColor: '#40b4e5',
      borderColor: '#448aff',
      width: 100,
      justifyContent: 'center',
      marginTop: '8%',
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

    },



});

const mapStateToProps = (state) => {
  const { name, phone, email, password, address } = state.driverDetailsForm;

  return { name, phone, email, password, address };
};

export default DriverReg1;

