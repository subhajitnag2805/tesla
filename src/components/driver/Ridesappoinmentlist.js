import React, { Component } from 'react';
import {
  Platform,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  ScrollView,
  ToastAndroid,
  BackHandler,
  Alert
} from 'react-native';

import { Container, Header, Title, Content, Button, Icon, Card, ListItem, List, CardItem, Body, Thumbnail, Left, Right, IconNB } from "native-base";
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Dialog, ConfirmDialog } from 'react-native-simple-dialogs';

import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import Spinner from 'react-native-loading-spinner-overlay';

const _baseUrl = "http://ec2-52-27-118-19.us-west-2.compute.amazonaws.com:5555";

var finalDate;
var finalTime;

export default class Ridesappoinmentlist extends Component {

  state = {
    loading: false,
    result: []
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

  /**getting passengers */
  componentDidMount() {
    var date = new Date();
    console.log("date :", date);

    var _base = this;
    this.setState({
      loading: true
    });

    axios.get(_baseUrl + '/booking/getBookingList?date=' + date)
      .then((result) => {
        console.log("result :", result.data);

        if (result.data.error == false) {
          _base.setState({
            loading: false,
            result: result.data.result
          });

          /**save passenger booking details */
          // result = result.data.result;
          // console.log("result :", result);
          console.log("this.state :", this.state);

          /**Show toaster for successful message */
          ToastAndroid.showWithGravity(
            'Driver booking list..',
            ToastAndroid.SHORT,
            ToastAndroid.TOP
          );

          //redirected to ride appointment details page
          // Actions.rideappionmentdetails({
          //   result: result.data.result
          // });
        } else if (result.data.error == true) {
          _base.setState({
            loading: false
          });

          /**Show toaster for error message */
          ToastAndroid.showWithGravity(
            'Driver booking list not show..',
            ToastAndroid.SHORT,
            ToastAndroid.TOP
          );

          //redirected to ride list details page
          // Actions.driverBook();
        }
      }).catch((error) => {
        console.log("error :", error);

        console.log(error);
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

  /**Open alert */
  // alertOpen = () => {
  //   Alert.alert(
  //     'Passengers ride details..',
  //     'Accept or Cancel ride..',
  //     [{
  //       text: 'Cancel',
  //       onPress: () => console.log('Cancel Pressed'),
  //       style: 'cancel'
  //     }, {
  //       text: 'Confirm',
  //       onPress: () => console.log("confirm")
  //     }]
  //   )
  // }

  /**show passenger list */
  showPassengerList = () => {
    return this.state.result.map((result) => {

      /**getting date and time */
      var resultDate = new Date(result.date);
      console.log("resultDate :", resultDate);

      var year = resultDate.getFullYear();
      var month = resultDate.getMonth();
      var day = resultDate.getDay();

      finalDate = day + ' /' + month + ' /' + year;
      console.log("finalDate :", finalDate);

      var hour = resultDate.getHours();
      var minute = resultDate.getMinutes();

      finalTime = hour + ' :' + minute;
      console.log("finalTime :", finalTime);

      return (
        <View key={result._id}>
          <Content padder >

            <TouchableOpacity>
              <View>
                <Card style={styles.cardShadow}>
                  <CardItem bordered >
                    <Content>
                      <Grid>
                        <Col style={{ width: 60 }}>
                          <View style={styles.posrelative}>
                            <Thumbnail source={require('../../images/user1.jpg')} />
                            <Text style={styles.onlinedot} />
                          </View>

                        </Col>
                        <Col style={{ width: 200, paddingLeft: '10%' }}>
                          <Text style={styles.username}>
                            {result.user.name}
                          </Text>
                          <Text style={styles.marketFrom}>
                            From - <Text style={styles.market}>{result.pickupLocation.name}
                            </Text>
                          </Text>
                          <Text style={styles.marketFrom}>
                            To - <Text style={styles.market}>{result.destination.name}
                            </Text>
                          </Text>
                          <Text style={styles.marketFrom}>
                            Date - <Text style={styles.market}>{finalDate}
                            </Text>
                          </Text>
                          <Text style={styles.marketFrom}>
                            Time - <Text style={styles.market}>{finalTime}
                            </Text>
                          </Text>
                        </Col>

                      </Grid>
                    </Content>

                    {/* </Text>
          </Body> */}
                  </CardItem>
                </Card>
              </View>
            </TouchableOpacity>


          </Content>
          {/* </Container> */}
        </View>
      );
    });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Spinner visible={this.state.loading} textContent={"Loading..."} textStyle={{ color: '#FFF' }} />
        <Header style={styles.headerTop}>
          {
            /**
             *  <Left>
              <Button transparent>
                <Icon name="arrow-back" />
              </Button>
            </Left>
  
  
             * <Right >
              <Button transparent style={styles.moreicon}>
                <Icon name='ios-more' />
              </Button>
            </Right>
             */
          }

          <Body>
            <Title> AppoinmentLists </Title>
          </Body>
        </Header>


        <View style={styles.headerContent}>
          <Image style={styles.imageCar} source={require('../../images/car.png')} />
          <View style={styles.textCenter}>
            <Text style={styles.rideHeader}>
              RIDES &nbsp;&nbsp;<Text style={styles.appointmentHeader}>APPOINTMENTS</Text>
            </Text>
          </View>
          <View style={styles.borderdivider} />
        </View>
        <ScrollView>

          {
            this.showPassengerList()
          }

        </ScrollView>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  btm10:
    {
      marginBottom: '4%',
      marginTop: '5%',
    },
  moreicon:
    {
      transform: [{ rotate: '90deg' }]
    },
  posrelative:
    {
      position: 'relative',
    },
  onlinedot:
    {
      position: 'absolute',
      left: 0,
      width: 12,
      zIndex: 0,
      height: 12,
      top: 10,
      borderRadius: 50,
      backgroundColor: '#2cd467'
    },
  username: {
    fontSize: 15,
    fontWeight: '700',
    color: 'rgba(0,0,0,.7)',
    fontFamily: 'Montserrat-Regular',
    marginBottom: '4%',

  },
  headerContent: {
    // flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  cardShadow: {
    elevation: 0,
  },
  borderdivider:
    {
      alignSelf: 'center',
      borderTopColor: 'rgba(0,0,0,.4)',
      borderTopWidth: 2,
      height: '8%',
      width: '10%',
      marginTop: '9%',
      marginBottom: '6%',

    },

  rideHeader: {
    color: 'rgb(62, 180, 226)',
    fontSize: 15,
    fontFamily: 'Lato-Regular',
    fontWeight: 'bold',
    marginTop: '4%',
  },
  appointmentHeader: {
    color: 'rgba(0,0,0,.7)',
    fontSize: 15,
    fontFamily: 'Lato-Regular',
    fontWeight: 'bold',
  },
  bottomspace: {
    marginBottom: '0%',
  },
  buttonTextview: {

    color: '#ffffff',
    textAlign: 'center',
    fontSize: 14,
    fontFamily: 'Lato-Regular',
    fontWeight: '300',
    justifyContent: 'center',

  },
  headerTop: {
    backgroundColor: '#40b4e5',
  },
  market: {
    fontSize: 12,
    fontFamily: 'Lato-Regular',
    fontWeight: '300',
  },
  marketFrom: {
    fontSize: 12,
    fontFamily: 'Lato-Regular',
    fontWeight: '500',
    marginBottom: '2%',
  },
  textCenter: {
    flex: 1,
    flexDirection: 'row',
  },
  iconstylenumber: {
    paddingTop: '8%',
    lineHeight: 20,
  },
  iconstyle: {
    color: '#2cd369',
    textAlign: 'center',
  },
  imageCar: {
    marginTop: '8%',
    marginBottom: '4%',
    height: responsiveHeight(9),
    width: responsiveWidth(20),
  },
  btnView:
    {
      marginTop: '4%',
      paddingTop: '4%',
      backgroundColor: '#40b4e5',
      borderColor: '#448aff',
      width: 100,
      justifyContent: 'center',
      marginTop: '8%',
      marginBottom: '20%',
      height: 38,
      borderWidth: 0,
    },
  btnViewcancel:
    {
      paddingTop: '4%',
      backgroundColor: '#757575',

      width: 100,
      justifyContent: 'center',
      marginTop: '8%',
      marginLeft: '4%',
      marginBottom: '20%',
      height: 38,
      borderWidth: 0,
    },
});

