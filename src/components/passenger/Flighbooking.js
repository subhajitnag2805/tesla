import React, {Component} from 'react';
import {connect} from 'react-redux';
import {emailChanged} from '../../actions';

import {
    Platform,
    View,
    Text,
    TextInput,
    Image,
    TouchableOpacity,
    ImageBackground,
    StyleSheet,
    Dimensions,
    ScrollView
} from 'react-native';
import {
    Container,
    Header,
    Title,
    Content,
    Button,
    Icon,
    Card,
    ListItem,
    List,
    CardItem,
    Body,
    Thumbnail,
    Left,
    Right,
    IconNB,
    Form,
    Picker,
    Input,
    Item
} from "native-base";

import {responsiveHeight, responsiveWidth, responsiveFontSize} from 'react-native-responsive-dimensions';
import {Col, Row, Grid} from 'react-native-easy-grid';
import DatePicker from 'react-native-datepicker'
import { Actions } from 'react-native-router-flux';


export default class Flightbooking extends Component {
    onEmailChange(text) {
        this
            .props
            .emailChanged(text);
    }
    constructor(props) {
        super(props);
        // this.state = {
        //   selected: "key1"
        // };
        this.state = {date:"2018-04-15"}
      }
      onValueChange(value) {
        this.setState({
          selected: value
        });
      }
    render() {
        return (
            <View style={{
                flex: 1
            }}>
                <Header style={styles.headerTop}>
                    <Left>
                        <Button transparent>
                            <Icon name="arrow-back"/>
                        </Button>
                    </Left>
                    <Body></Body>
                    <Right >
                        <Button transparent>
                            <Icon name='more' />

                        </Button>

                    </Right>
                </Header>

                <ScrollView>
                    <View >
                        <Content padder>
                            {/* header part start */}
                            <View style={styles.headerContent}>
                                <Image
                                    style={styles.imageCar}
                                    source={require('../../images/airport.png')}/>
                                <View style={styles.textCenter}>
                                    <Text style={styles.rideHeader}>
                                        AIR<Text style={styles.appointmentHeader}>
                                            PORT</Text>
                                    </Text>
                                </View>
                                <View style={styles.borderdivider}/>
                            </View>

                            {/* header part end */}

                            <Grid style={styles.listgrid}>
                               <Col style={styles.listimgsec}>
                                    <View >
                                        <Thumbnail source={require('../../images/passenger.png')} style={styles.listimg}/>
                                    </View>
                                </Col>
                                <Col
                                    style={{
                                        width: '60%',
                                        paddingLeft: '2%'
                                }}>
                                    <Text style={styles.listtext}>Number of Passenger</Text>
                                </Col>
                                <Col
                                    style={{
                                        width: '30%'
                                    // paddingLeft: '5%'
                                }}>
                                    <Form>
                                        <View style={styles.pickerstyle}>
                                        <Picker
                                            mode="dropdown"
                                            iosHeader="Select your SIM"
                                            iosIcon={<Icon name="ios-arrow-down" />}
                                            style={styles.pickerfont}
                                            selectedValue={this.state.selected}
                                            onValueChange={this.onValueChange.bind(this)}
                                            >
                                            <Picker.Item label="1" value="key0" />
                                            <Picker.Item label="2" value="key1" />
                                            <Picker.Item label="3" value="key2" />
                                            <Picker.Item label="4" value="key3" />
                                            <Picker.Item label="5" value="key4" />
                                        </Picker>
                                        </View>
                                   </Form>
                                </Col>
                            </Grid>
                            <Grid style={styles.listgrid}>
                               <Col style={styles.listimgsec}>
                                    <View >
                                        <Thumbnail source={require('../../images/bags.png')} style={styles.listimg}/>
                                    </View>
                                </Col>
                                <Col
                                    style={{
                                        width: '60%',
                                        paddingLeft: '2%'
                                }}>
                                    <Text style={styles.listtext}>Bags</Text>

                                </Col>
                                <Col
                                    style={{
                                        width: '30%'
                                    // paddingLeft: '5%'
                                }}>
                                    <Form>
                                        <View style={styles.pickerstyle}>
                                        <Picker
                                            mode="dropdown"
                                            iosHeader="Select your SIM"
                                            iosIcon={<Icon name="ios-arrow-down" />}
                                            style={styles.pickerfont}
                                            selectedValue={this.state.selected}
                                            onValueChange={this.onValueChange.bind(this)}
                                            >
                                            <Picker.Item label="1" value="key5" />
                                            <Picker.Item label="2" value="key9" />
                                            <Picker.Item label="3" value="key6" />
                                            <Picker.Item label="4" value="key7" />
                                            <Picker.Item label="5" value="key8" />
                                        </Picker>
                                        </View>
                                   </Form>
                                </Col>
                            </Grid>


                           
                            <Grid style={styles.listgrid}>
                                <Col style={styles.listimgsec}>
                                    <View >
                                        <Thumbnail source={require('../../images/flightdate.png')} style={styles.listimg}/>
                                    </View>
                                </Col>
                                <Col
                                    style={{
                                        width: '60%',
                                        paddingLeft: '2%'
                                }}>
                                    <Text style={styles.listtext}>Flight Date</Text>

                                </Col>
                                <Col
                                    style={{
                                        width: '30%'
                                    // paddingLeft: '5%'
                                }}>
                                <View style={styles.flightdate}>
                                     
                                <DatePicker
                                   style={{width: '95%'}}
                                    date={this.state.date}
                                    mode="date"
                                    placeholder="select date"
                                    format="YYYY-MM-DD"
                                    confirmBtnText="Confirm"
                                    cancelBtnText="Cancel"
                                    customStyles={{
                                        dateIcon: {
                                            width:0,
                                          },
                                    dateInput: {
                                        marginLeft: 0,
                                        borderWidth:0,
                                        borderBottomWidth:1
                                    }
                                    }}
                                    onDateChange={(date) => {this.setState({date: date})}}
                                />
                                </View>

                                </Col>
                            </Grid>
                            <Grid style={styles.listgrid}>
                               <Col style={styles.listimgsec}>
                                    <View >
                                        <Thumbnail source={require('../../images/flighttime.png')} style={styles.listimg}/>
                                    </View>
                                </Col>
                                <Col
                                    style={{
                                        width: '60%',
                                        paddingLeft: '2%'
                                }}>
                                    <Text style={styles.listtext}>Flight Time</Text>

                                </Col>
                                <Col
                                    style={{
                                        width: '30%'
                                    // paddingLeft: '5%'
                                }}>
                                <View style={styles.listtime}>
                                <Text style={styles.listtimetext}>
                                      5:33pm
                                    </Text>
                                    </View>
                                     
                                </Col>
                            </Grid>
                            <Grid style={styles.listgrid}>
                               <Col style={styles.listimgsec}>
                                    <View >
                                        <Thumbnail source={require('../../images/flightno.png')} style={styles.listimg}/>
                                    </View>
                                </Col>
                                <Col
                                    style={{
                                        width: '60%',
                                        paddingLeft: '2%'
                                }}>
                                    <Text style={styles.listtext}>Flight Number</Text>

                                </Col>
                                <Col
                                    style={{
                                        width: '30%'
                                    // paddingLeft: '5%'
                                }}>
                                    <Form>
                                        <Item fixedLabel>
                                        <Input />
                                        </Item>
                                    </Form>

                                </Col>
                            </Grid>
                            <View style={styles.viewbtnsec}>
                           
                                <Button rounded style={styles.btnView} onPress={Actions.continuebooking}>
                                    <Text uppercase={false} style={styles.buttonTextview}>Book a Ride</Text>
                                </Button>
                                               
                            </View>
                           
                           
                        </Content>
                        {/* </Container> */}
                    </View>
                </ScrollView>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    moreicon: {
        // transform: [   transform([{ rotateX: '45deg' }, { rotateZ: '0.785398rad' }])
        // ]
    },
    posrelative: {
        position: 'relative'
    },

    headerContent: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:20,
        marginBottom:20,
    },

    borderdivider: {
        alignSelf: 'center',
        borderTopColor: 'rgba(0,0,0,.4)',
        borderTopWidth: 2,
        height: '8%',
        width: '10%',
        marginTop: '4%',
        marginBottom: '8%'
    },

    rideHeader: {
        color: 'rgb(62, 180, 226)',
        fontSize: 17,
        fontFamily: 'Lato-Regular',
        fontWeight: 'bold',
        marginTop: '2%'
    },
    appointmentHeader: {
        color: 'rgba(0,0,0,.7)',
        fontSize: 17,
        fontFamily: 'Lato-Regular',
        fontWeight: 'bold'
    },

    headerTop: {
        backgroundColor: '#40b4e5'
    },
    textCenter: {
        flex: 1,
        flexDirection: 'row'
    },
    imageCar: {
        marginTop: '8%',
        marginBottom: '4%',
        height: '40%',
        width: '18%'
    },
    listimg:{
        height: '68%',
        width: '85%',
    },

    listgrid:{
     paddingLeft:10,
     marginTop:'5%',
     flex:1,
     alignItems:'center',
     justifyContent:'center'

    },
    listtext:{
     fontSize:15,
     color: 'rgba(0,0,0,.7)',
     fontFamily: 'Montserrat-Regular',
    },
    listimgsec:{
        width: Dimensions.get("window").height>500 ? '10%' : '23%',
        height:Dimensions.get("window").height>500 ? 50 : 75,
        flex:1,
        marginTop:'2%',
        justifyContent:'center'
    },
    pickerstyle:
    {
      borderBottomWidth: 1,
      borderColor: 'rgba(0,0,0,.2)',
      marginBottom: '8%',
      marginLeft: '10%',
      marginRight: '4%'
    },
    pickerfont:
    {
      color: 'rgba(0,0,0,.6)',
      paddingLeft: '10%',

    },
    btnView: {
        backgroundColor: '#40b4e5',
        borderColor: '#448aff',
        width: 130,
        paddingLeft:10,
        justifyContent:'center',
        paddingRight:10,
        marginTop: '10%',
        marginBottom: '8%',
        alignSelf:'center',
        height: 45,
        borderWidth: 0,

    },
    // viewbtnsec:{
    //     flex:1,
    //     width:'100%',
    //     justifyContent:'center',
    //     alignItems:'center'
    // },
    buttonTextview:{
        color:'white',
        fontWeight:'600',
        fontSize:15
    },
    flightdate:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        paddingLeft:'7%'
    },
    listtime:{
        flex:1,
        justifyContent:'center',
        // paddingLeft:'15%'
    },
    listtimetext:{
        // width:'90%',
        fontSize:15,
        color: 'rgba(0,0,0,.7)',
        fontFamily: 'Montserrat-Regular',
        borderBottomWidth:1,
        borderColor:'rgba(0,0,0,.4)',
        alignSelf:'center'
    
    }
  
 

});
