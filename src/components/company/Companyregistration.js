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
import { CardItem, Card, Container, Picker, ListItem, CheckBox, Header, Body, Content, Form, Item, Title, Right, Left, Icon, Input, Label, Button } from 'native-base';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import * as Progress from 'react-native-progress';
export default class Companyregistration extends Component {

  constructor(props) {
    super(props);

    this.state = {
      progress: 0,
      indeterminate: true,
      color:'green'
    };
}

componentDidMount() {
this.animate();
}

animate() {
let progress = 0;
this.setState({ progress });
setTimeout(() => {
    this.setState({ indeterminate: false });
    setInterval(() => {
    progress += Math.random() / 5;
    if (progress > 1) {
        progress = 1;
    }
    this.setState({ progress });
    }, 900);
}, 1500);
}

  render() {
    return (
      <ScrollView>
        <View >
          <Header style={styles.headerTop}>
            <Left>
              <Button transparent>
                <Icon name="arrow-back" />
              </Button>
            </Left>
            <Body>
              <Title>Company Registration </Title>
            </Body>
            <Right >
              <Button transparent style={styles.moreicon}>
                <Icon name='ios-more' />

              </Button>

            </Right>
          </Header>
          <View style={styles.headerContent}>
            <Image style={styles.imageCar} source={require('../../images/companyreg.png')} />
            <View style={styles.textCenter}>
              <Text style={styles.rideHeader}>
                COMPANY <Text style={styles.appointmentHeader}>REGISTRATION</Text>
              </Text>
            </View>
            <View style={styles.borderdivider} />
          </View>

          <View>

            <Form>
              <View style={styles.speacearea}>
                <View>
                  <Item style={styles.itemsalign}>

                    <Input placeholder='Company Name'
                      style={styles.input}
                      placeholderTextColor="rgba(0,0,0,.6)"
                      value={this.props.zipcode}

                    />
                    <Icon active name='ios-car-outline' style={styles.iconstyle} />
                  </Item>
                </View>
                <View>
                  <Item style={styles.itemsalign}>

                    <Input placeholder='Owners Name'
                      style={styles.input}
                      placeholderTextColor="rgba(0,0,0,.6)"
                      value={this.props.zipcode}

                    />
                    <Icon active name='ios-person-outline' style={styles.iconstyle} />
                  </Item>
                </View>
                <View>
                  <Item style={styles.itemsalign}>

                    <Input placeholder='Company Address'
                      style={styles.input}
                      placeholderTextColor="rgba(0,0,0,.6)"
                      value={this.props.zipcode}

                    />
                    <Icon active name='ios-pin-outline' style={styles.iconstyle} />
                  </Item>
                </View>
                <View>
                  <Item style={styles.itemsalign}>

                    <Input placeholder='TCP No.'
                      style={styles.input}
                      placeholderTextColor="rgba(0,0,0,.6)"
                      value={this.props.zipcode}

                    />
                    <Icon active name='ios-color-filter-outline' style={styles.iconstyle} />
                  </Item>
                </View>
                <View style={styles.pickerstyle}>
                  <Picker
                    mode="dropdown"
                    style={styles.pickerfont}
                    iosHeader="Select your SIM"
                    iosIcon={<Icon name="" />}

                    selectedValue={this.props.city}

                  >
                    <Picker.Item label="Date of Incorporation" value="Date of Incorporation" />
                    <Picker.Item label="23-06-12" value="23-06-12" />
                    <Picker.Item label="23-06-12" value="23-06-12" />
                  </Picker>
                </View>

                <View style={styles.pickerstyle}>
                  <Picker
                    mode="dropdown"
                    style={styles.pickerfont}
                    iosHeader="Select your SIM"
                    iosIcon={<Icon name="" />}

                    selectedValue={this.props.states}

                  >
                    <Picker.Item label="No of Drivers" value="No of Drivers" />
                    <Picker.Item label="1" value="abcj" />
                    <Picker.Item label="1" value="abcj" />
                  </Picker>
                </View>

                <View style={{ flex: 1, flexDirection: 'row', marginLeft: '1%' }}>
                  <View style={{ width: 200, height: 50, }} >
                    <Text style={styles.upldpic}>Upload Cover Pic</Text>
                  </View>
                  <View style={styles.upldarea} >
                    <Image style={styles.imageupload} source={require('../../images/upldimg.png')} />
                    {/* <View style={styles.lineStyle}></View> */}
                    {/* <Progress.Bar progress={0.5} width={100} style={styles.widthprgrss} /> */}
                    <Progress.Bar progress={0.5} width={100}
                      style={styles.progressbar}
                      progress={this.state.progress}
                      indeterminate={this.state.indeterminate}
                      color={"#075876"}
                    />
                    <Text style={styles.upld}>Upload</Text>
                  </View>
                </View>
              </View>
              <View style={styles.textCenter} >
                <Button style={styles.btnlogin} >
                  <Text uppercase={false} style={styles.buttonText}>Register</Text>
                </Button>
              </View>
            </Form>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  progressbar:{
    borderWidth:0,
    backgroundColor:'rgba(0,0,0,0.2)',
    borderRadius:20,
    marginTop:'8%',
    marginBottom:'8%',
    height:4
  },
  widthprgrss:
    {
      backgroundColor: 'red',
    },
  upld:
    {
      color: '#075876',
      fontSize: 15,
      fontFamily: 'Lato-Regular',
    },
  lineStyle: {
    borderWidth: 1,
    borderColor: '#075876',
    margin: 10,
    width: 80,
    height: 1,
    borderRadius: 20
  },
  upldarea:
    {
      width: 80,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
  imageupload:
    {
      width: 40,
      height: 30,
      justifyContent: 'center',
      flexDirection: 'row'

    },
  upldpic:
    {
      marginTop: '8%',
      paddingLeft: '10%',
      fontSize: 16,
      fontFamily: 'Lato-Regular',

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

  itemsalign:
    {
      width: 260,
      marginBottom: 20,
      borderBottomWidth: 0,
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
  iconstyle: {
    color: "rgba(0,0,0,0.7)",
    fontSize: 20,
    position: 'absolute',
    right: 0
  },
  logoarea: {

    backgroundColor: 'transparent',
  },
  moreicon:
    {
      transform: [{ rotate: '90deg' }]
    },
  input: {
    color: 'rgba(0,0,0,.7)',
    fontFamily: 'Lato-Regular',
    borderBottomWidth: 1,
    position: 'relative',
    borderColor: 'rgba(0,0,0,.2)'



  },

  imageCar: {
    marginTop: '8%',
    marginBottom: '4%',
    height: responsiveHeight(8),
    width: responsiveWidth(15),
  },
  buttonText: {

    color: '#ffffff',
    textAlign: 'center',
    fontSize: 18,
    paddingBottom: 20,
    fontFamily: 'Lato-Regular',
    fontWeight: '300',
    justifyContent: 'center',


  },

  btnlogin:
    {
      backgroundColor: '#40b4e5',
      borderColor: '#448aff',
      width: '100%',
      justifyContent: 'center',
      marginTop: '8%',
      height: 60,
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

  moreicon:
    {
      transform: [{ rotate: '90deg' }]
    },
  headerContent: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  borderdivider:
    {
      alignSelf: 'center',
      borderTopColor: 'rgba(0,0,0,.4)',
      borderTopWidth: 2,
      height: '8%',
      width: '10%',
      marginTop: '4%',
      marginBottom: '6%',

    },
  headerTop: {
    backgroundColor: '#40b4e5',
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


});


