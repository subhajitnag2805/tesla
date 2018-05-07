import React, { Component } from 'react';
import {
  Platform,
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  ImageBackground,
  ScrollView,
  BackHandler,
  Alert,
  ToastAndroid
} from 'react-native';
import { CardItem, Card, Container, Picker, ListItem, Header, Body, Content, Form, Item, Icon, Input, Label, Button } from 'native-base';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import CheckBox from 'react-native-check-box';

import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import Spinner from 'react-native-loading-spinner-overlay';

const _baseUrl = "http://ec2-52-27-118-19.us-west-2.compute.amazonaws.com:5555";

class Regstep2 extends Component {

  state = {
    city: "",
    state: "",
    zipcode: "",
    country: "",
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
    Actions.auth();
  }

  /**city change handler */
  cityChangehandler = (value) => {
    if (value) {
      this.setState({
        city: value
      });
    } else {
      this.setState({
        city: City
      });
    }
  };

  /**state change handler */
  stateChangehandler = (value) => {
    if (value) {
      this.setState({
        state: value
      });
    } else {
      this.setState({
        state: State
      });
    }
  };

  /**zipcode change handler */
  zipcodeChangehandler = (value) => {
    this.setState({
      zipcode: value
    });
  };

  /**country change handler */
  countryChangehandler = (value) => {
    if (value) {
      this.setState({
        country: value
      });
    } else {
      this.setState({
        country: Country
      });
    }
  };

  /**Driver registration */
  finalRegistration() {
    var _base = this;
    this.setState({
      loading: true
    });

    axios.post(_baseUrl + '/user', {
      role: 'user',
      name: this.props.Name,
      phoneNumber: this.props.Phone,
      email: this.props.Email,
      password: this.props.Password,
      address: this.props.Address,
      city: this.state.city,
      state: this.state.state,
      zipcode: this.state.zipcode,
      country: this.state.country
    }).then((result) => {
      console.log("user registration result :", result.data);

      if (result.data.error === false) {
        _base.setState({
          loading: false
        });

        /**Show toaster for otp successful message */
        ToastAndroid.showWithGravity(
          'User registration successfully..',
          ToastAndroid.SHORT,
          ToastAndroid.TOP
        );

        //redirected to login page
        Actions.auth();
      } else if (result.data.error === true) {
        _base.setState({
          loading: false
        });

        /**Show toaster for error message */
        ToastAndroid.showWithGravity(
          'Phone number already exist..',
          ToastAndroid.SHORT,
          ToastAndroid.TOP
        );

        //redirected to login page
        Actions.auth();

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

  render() {
    /**user registration page one params */
    console.log("Name :", this.props.Name);
    console.log("phone :", this.props.Phone);
    console.log("email :", this.props.Email);
    console.log("password :", this.props.Password);
    console.log("address :", this.props.Address);

    return (
      <ScrollView>
        <View >
          <Spinner visible={this.state.loading} textContent={"Loading..."} textStyle={{ color: '#FFF' }} />
          <View style={styles.logoarea}>
            <Image style={styles.teslabackimg} source={require('../../images/regwave.png')} />
            <Image style={styles.placelogo} source={require('../../images/logotesla.png')} />

          </View>

          <View>
            <View style={styles.speacearea}>
              <Form>
                <View style={styles.pickerstyle}>
                  <Picker
                    mode="dropdown"
                    style={styles.pickerfont}
                    iosHeader="Select your SIM"
                    iosIcon={<Icon name="" />}

                    selectedValue={this.state.city}
                    onValueChange={(value) => this.cityChangehandler(value)}
                  >
                    <Picker.Item label="City" value="City" />
                    <Picker.Item label="New York" value="New York" />
                    <Picker.Item label="New Jersy" value="New Jersy" />
                    <Picker.Item label="Washington" value="Washington" />
                    <Picker.Item label="Texas" value="Texas" />
                  </Picker>
                </View>

                <View style={styles.pickerstyle}>
                  <Picker
                    mode="dropdown"
                    style={styles.pickerfont}
                    iosHeader="Select your SIM"
                    iosIcon={<Icon name="" />}

                    selectedValue={this.state.state}
                    onValueChange={(value) => this.stateChangehandler(value)}
                  >
                    <Picker.Item label="State" value="State" />
                    <Picker.Item label="Massechusets" value="Massechusets" />
                    <Picker.Item label="Alabama" value="Alabama" />
                    <Picker.Item label="Florida" value="Florida" />
                    <Picker.Item label="Alaska" value="Alaska" />
                  </Picker>
                </View>
                <View>
                  <Item style={styles.itemsalign}>

                    <Input placeholder='Zip code'
                      style={styles.input}
                      placeholderTextColor="rgba(0,0,0,.6)"
                      value={this.state.zipcode}
                      onChangeText={(value) => this.zipcodeChangehandler(value)}
                      keyboardType='numeric'
                    />
                    <Icon active name='ios-pin-outline' style={styles.iconstyle} />
                  </Item>
                </View>
                <View style={styles.pickerstyle}>
                  <Picker
                    mode="dropdown"
                    style={styles.pickerfont}
                    iosHeader="Select your SIM"
                    iosIcon={<Icon name="" />}

                    selectedValue={this.state.country}
                    onValueChange={(value) => this.countryChangehandler(value)}
                    onSubmitEditing={this.finalRegistration.bind(this)}
                  >
                    <Picker.Item label="Country" value="Country" />
                    <Picker.Item label="Uk" value="Uk" />
                    <Picker.Item label="USA" value="USA" />
                    <Picker.Item label="Australia" value="Australia" />
                    <Picker.Item label="India" value="India" />
                  </Picker>
                </View>
                {/* <View style={styles.checkBoxTeslak}>
                  <ListItem style={styles.checkBoxTesla}>
                    <CheckBox checked={true}/>
                    <Body>
                      <Text style={styles.termsCheckbox}>I agree to Terms</Text>
                    </Body>
                  </ListItem>
                </View> */}



                {/* <View style={{ flex: 1, flexDirection: 'row', marginTop: 10, }}>
                  <View style={styles.leftspace}>
                    <CheckBox 
                      checkedColor={{ backgroundColor: '#40b4e5', }}
                      //onClick={() => this.onClick()}
                      checkedColor='#000' />

                  </View>
                  <View  >

                    <Text style={styles.agreetxt}>I agree to Terms</Text>
                  </View> 

                </View>

              */}
                <View style={styles.textCenter}>
                  <Button rounded style={styles.btnlogin} onPress={this.finalRegistration.bind(this)} >
                    <Text uppercase={false} style={styles.buttonText}>Register</Text>
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

  leftspace:
    {
      paddingLeft: '4%',
    },

  pickerfont:
    {
      color: 'rgba(0,0,0,.6)',

    },
  pickerstyle:
    {

      borderBottomWidth: 1,
      borderColor: 'rgba(0,0,0,.2)',
      marginBottom: '8%',
      marginLeft: '4%',
      marginRight: '4%'



    },
  canvasContainer: {

    alignItems: 'stretch',
    padding: 0,
  },
  itemsalign:
    {
      width: 260,
      marginBottom: 20,
      borderBottomWidth: 0,
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
    fontSize: 20,
    position: 'absolute',
    right: 0
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
    borderBottomWidth: 1,
    position: 'relative',
    borderColor: 'rgba(0,0,0,.2)'



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
      width: 120,
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
  termsCheckbox: {
    color: 'rgba(0,0,0,.6)',
    textAlign: 'left',
    marginLeft: '5%',
    fontSize: 16,
    fontFamily: 'Lato-Regular',
  },
  checkBoxTesla: {
    borderWidth: 0,
    borderBottomWidth: 0,
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

  agreetxt:
    {

      textAlign: 'center',
      marginTop: '3%',
      paddingLeft: 9,
      fontSize: 16,
      fontFamily: 'Lato-Regular',
      color: 'rgba(0,0,0,.7)',


    },

});

export default Regstep2;
