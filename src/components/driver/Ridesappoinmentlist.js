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
  ScrollView
} from 'react-native';

import { Container, Header, Title, Content, Button, Icon, Card, ListItem, List, CardItem, Body, Thumbnail, Left, Right, IconNB } from "native-base";
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Dialog, ConfirmDialog } from 'react-native-simple-dialogs';
export default class Ridesappoinmentlist extends Component {

  // state = {
  //   showDialog: false
  // }

  // openDialog() {
  //   var _base = this;
  //   _base.setState({
  //     showDialog: true
  //   });
  // };
  state = {}

  openDialog(show) {
    this.setState({ showDialog: show })
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header style={styles.headerTop}>
          <Left>
            <Button transparent>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title> AppoinmentLists </Title>
          </Body>
          <Right >
            <Button transparent style={styles.moreicon}>
              <Icon name='ios-more' />
            </Button>
          </Right>
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
          <View >
            <Content padder >




              <TouchableOpacity onPress={() => this.openDialog(true)} >

                <View  >

                  <Dialog
                    visible={this.state.showDialog}
                    onTouchOutside={() => this.openDialog(false)}
                    contentStyle={{ justifyContent: 'center', alignItems: 'center', }}
                    animationType="fade">
                    {/* <Image
                      source={require('../../images/lock.png')}
                      style={styles.btm10} /> */}
                    {/* <Text style={styles.successmsz}>Congrats ! &nbsp;Your Password has changed successfully</Text> */}

                    <View style={{ flex: 1, flexDirection: 'row',justifyContent:'space-between',marginBottom:'20%' }}>
                      <View  >
                        <Button rounded style={styles.btnView}>
                          <Text uppercase={false} style={styles.buttonTextview}>Accept</Text>
                        </Button>
                      </View>
                      <View  >
                        <Button rounded style={styles.btnViewcancel}>
                          <Text uppercase={false} style={styles.buttonTextview}>Cancel</Text>
                        </Button>
                      </View>
                    </View>
                  </Dialog>

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
                              Priscilla T.Duncan
                        </Text>
                            <Text style={styles.marketFrom}>
                              From - <Text style={styles.market}>Roy Market,Borjora
                        </Text>
                            </Text>
                            <Text style={styles.marketFrom}>
                              To - <Text style={styles.market}>Durgapur, Station Bazar
                        </Text>
                            </Text>
                            <Text style={styles.marketFrom}>
                              Date - <Text style={styles.market}>Feb 20 2018
                        </Text>
                            </Text>
                            <Text style={styles.marketFrom}>
                              Time - <Text style={styles.market}>5:33 pm
                        </Text>
                            </Text>
                          </Col>
                          {/* <Col style={{ width: 60 }}>
                          <Button rounded style={styles.btnView}>
                            <Text uppercase={false} style={styles.buttonTextview}>View</Text>
                          </Button>
                          <View style={styles.textCenter}>
                            <View style={{ width: 50 }}>
                              <Icon active name='ios-mail-outline' style={styles.iconstyle} />
                            </View>
                            <View style={{ width: 50 }}>
                              <Text style={styles.iconstylenumber}>2</Text>
                            </View>
                          </View>

                        </Col> */}
                        </Grid>
                      </Content>

                      {/* </Text>
                </Body> */}
                    </CardItem>
                  </Card>
                </View>
              </TouchableOpacity>


              {/* <Dialog
                visible={this.state.showDialog}
                onTouchOutside={() => this.openDialog(false)}
                contentStyle={{ justifyContent: 'center', alignItems: 'center', }}
                animationType="fade">
                <Image
                  source={require('../../images/lock.png')}
                  style={styles.btm10} />
                <Text style={styles.successmsz}>Congrats ! &nbsp;Your Password has changed successfully</Text>
              </Dialog> */}






              <View style={styles.bottomspace} >
                <Card style={styles.cardShadow}>
                  <CardItem bordered>
                    <Content>
                      <Grid>
                        <Col style={{ width: 60 }}>
                          <Thumbnail source={require('../../images/user.jpeg')} />
                        </Col>
                        <Col style={{ width: 160, paddingLeft: '2%' }}>
                          <Text style={styles.username}>
                            Priscilla T.Duncan
                        </Text>
                          <Text style={styles.marketFrom}>
                            From - <Text style={styles.market}>Roy Market,Borjora
                        </Text>
                          </Text>
                          <Text style={styles.marketFrom}>
                            To - <Text style={styles.market}>Durgapur, Station Bazar
                        </Text>
                          </Text>
                          <Text style={styles.marketFrom}>
                            Date - <Text style={styles.market}>Feb 20 2018
                        </Text>
                          </Text>
                          <Text style={styles.marketFrom}>
                            Time - <Text style={styles.market}>5:33 pm
                        </Text>
                          </Text>
                        </Col>
                        <Col style={{ width: 60 }}>
                          <Button rounded style={styles.btnView}>
                            <Text uppercase={false} style={styles.buttonTextview}>View</Text>
                          </Button>
                          <View style={styles.textCenter}>
                            <View style={{ width: 50 }}>
                              <Icon active name='ios-mail-outline' style={styles.iconstyle} />
                            </View>
                            <View style={{ width: 50 }}>
                              <Text style={styles.iconstylenumber}>2</Text>
                            </View>
                          </View>

                        </Col>
                      </Grid>
                    </Content>

                    {/* </Text>
                </Body> */}
                  </CardItem>
                </Card>




              </View>
              <View style={styles.bottomspace}>
                <Card style={styles.cardShadow}>
                  <CardItem bordered>
                    <Content>
                      <Grid>
                        <Col style={{ width: 60 }}>
                          <Thumbnail source={require('../../images/user2.jpg')} />
                        </Col>
                        <Col style={{ width: 160, paddingLeft: '2%' }}>
                          <Text style={styles.username}>
                            Priscilla T.Duncan
                        </Text>
                          <Text style={styles.marketFrom}>
                            From - <Text style={styles.market}>Roy Market,Borjora
                        </Text>
                          </Text>
                          <Text style={styles.marketFrom}>
                            To - <Text style={styles.market}>Durgapur, Station Bazar
                        </Text>
                          </Text>
                          <Text style={styles.marketFrom}>
                            Date - <Text style={styles.market}>Feb 20 2018
                        </Text>
                          </Text>
                          <Text style={styles.marketFrom}>
                            Time - <Text style={styles.market}>5:33 pm
                        </Text>
                          </Text>
                        </Col>
                        <Col style={{ width: 60 }}>
                          <Button rounded style={styles.btnView}>
                            <Text uppercase={false} style={styles.buttonTextview}>View</Text>
                          </Button>
                          <View style={styles.textCenter}>
                            <View style={{ width: 50 }}>
                              <Icon active name='ios-mail-outline' style={styles.iconstyle} />
                            </View>
                            <View style={{ width: 50 }}>
                              <Text style={styles.iconstylenumber}>2</Text>
                            </View>
                          </View>

                        </Col>
                      </Grid>
                    </Content>

                    {/* </Text>
                </Body> */}
                  </CardItem>
                </Card>
              </View>
              <View></View>
            </Content>
            {/* </Container> */}
          </View>
        </ScrollView>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  btm10:
  {
     marginBottom:'4%',
     marginTop:'5%',
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
      marginTop:'4%',
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

