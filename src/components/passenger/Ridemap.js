import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged } from '../../actions';
import RNGooglePlaces from 'react-native-google-places';
import GooglePlacesAutocomplete from './GooglePlacesInput';
import PlaceAutocomplete2 from './PlaceAutocomplete2';
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
import moment from 'moment';
import { Container, Header, Title, Content, Button, Icon, Card, ListItem, List, CardItem, Body, Thumbnail, Left, Right, Form, Item, Input, Label, IconNB } from "native-base";
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import DatePicker from 'react-native-datepicker';

import DateTimePicker from 'react-native-modal-datetime-picker';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Actions } from 'react-native-router-flux';
import Geocoder from 'react-native-geocoder';
let res1_lat, res1_long, res2_lat, res2_long;
let timed;
var d;
class Ridemap extends Component {

    constructor(props) {
        super(props)
        this.state = {
            date: "2018-05-01",
            isDateTimePickerVisible: false,
            myText: 'Choose Time'
        }
    }

    onButtonPress() {
        Actions.ridelocation({
            //   name: this.props.name,
            //   phone: this.props.phone,
            //   email: this.props.email,
            //   password: this.props.password,
            //   address: this.props.address

            pickup: this.props.location,
            destination: this.props.location2,
            pickup_lat: res1_lat,
            pickup_long: res1_long,
            dest_lat: res2_lat,
            dest_long: res2_long,
            time: d,
            date: this.state.date
        });
    }

    // openSearchModal () {
    //     RNGooglePlaces.openAutocompleteModal ()
    //     .then((place) => {
    //         console.log(place);
    //         // place represents user's selection from the
    // 	// suggestions and it is a simplified Google Place object.
    // })
    // .catch(error => console.log(error.message));  // error is a Javascript Error object

    // }

    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    _hideDateTimePicker = () => this.setState(
        {
            isDateTimePickerVisible: false
        });



    _handleDatePicked = (date) => {
        console.log('A date has been picked: ', date);
        d = moment(date).format('HH:mm');
        console.log(d);
        this.setState({ myText: d })


    };
    state = {
        selectedHours: 0,
        selectedMinutes: 0,
    }
    render() {

        console.log("My love location " + this.props.location);
        console.log("My Location2" + this.props.location2);

        Geocoder.geocodeAddress(this.props.location).then(res1 => {
            // res is an Array of geocoding object (see below)
            console.log(res1);
            res1_lat = res1[0].position.lat;
            res1_long = res1[0].position.lng;
            console.log("latgyugu===" + res1_lat);
            console.log("longgyugu===" + res1_long);
        })
            .catch(err => console.log(err))


        Geocoder.geocodeAddress(this.props.location2).then(res2 => {
            // res is an Array of geocoding object (see below)
            console.log(res2);
            res2_lat = res2[0].position.lat;
            res2_long = res2[0].position.lng;
            console.log("latgyugu===" + res2_lat);
            console.log("longgyugu===" + res2_long);
        })
            .catch(err => console.log(err))

        const { selectedHours, selectedMinutes } = this.state;
        return (
            <View style={{ flex: 1, position: 'relative' }}>
                <Header style={styles.headerTop}>
                    {/* <Left>
                        <Button transparent>
                            <Icon name="arrow-back" />
                        </Button>
                    </Left> */}
                    <Body>
                        <Title>Ridemap </Title>
                    </Body>
                    {/* <Right >
                        <Button transparent style={styles.moreicon}>
                            <Icon name='ios-more' />

                        </Button>

                    </Right> */}
                </Header>

                <ScrollView>
                    <Container>
                        <Content padder>
                            <View style={styles.headerContent}>
                                <Image style={styles.imageCar} source={require('../../images/ridemaploc.png')} />
                                <View style={styles.textCenter}>
                                    <Text style={styles.rideHeader}>
                                        RIDE <Text style={styles.appointmentHeader}>MAP</Text>
                                    </Text>
                                </View>
                                <View style={styles.borderdivider} />
                            </View>
                            <View style={styles.bottomspacea}>
                                <View >
                                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                                        <View style={{ width: '25%' }}>
                                            <Image style={styles.imageMap} source={require('../../images/ridecar.png')} />
                                        </View>
                                        {/* <TouchableOpacity  style={{ width: '40%' }} >
                                            <Text style={styles.rideTime}>Pickup Location</Text>
                                        </TouchableOpacity>
                                        <View style={{ width: '40%', height: 80 }}>
                                            <Form>
                                                <Item style={styles.input} > */}
                                        <GooglePlacesAutocomplete
                                            placeholder='Enter Pickup Location'
                                            minLength={2}
                                            autoFocus={false}
                                            returnKeyType={'default'}
                                            fetchDetails={true}
                                            styles={{
                                                textInputContainer: {
                                                    backgroundColor: 'rgba(0,0,0,0)',
                                                    borderTopWidth: 0,
                                                    borderBottomWidth: 0
                                                },
                                                textInput: {
                                                    marginLeft: 0,
                                                    marginRight: 0,
                                                    height: 38,
                                                    color: '#5d5d5d',
                                                    fontSize: 16
                                                },
                                                //   predefinedPlacesDescription: {
                                                //     color: '#1faadb'
                                                //   },
                                            }}
                                        //currentLocation={false}
                                        />
                                        {/* </Item>
                                            </Form>
                                        </View> */}
                                    </View>
                                </View>
                                <View >
                                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', }}>
                                        <View style={{ width: '25%' }}>
                                            <Image style={styles.imageMap} source={require('../../images/destination.png')} />
                                        </View>

                                        <PlaceAutocomplete2 />

                                        {/* <GooglePlacesAutocomplete

                                            placeholder='Enter Destination'
                                            minLength={2}
                                            autoFocus={false}
                                            returnKeyType={'default'}
                                            fetchDetails={true}
                                            styles={{
                                                textInputContainer: {
                                                    backgroundColor: 'rgba(0,0,0,0)',
                                                    borderTopWidth: 0,
                                                    borderBottomWidth: 0
                                                },
                                                textInput: {
                                                    marginLeft: 0,
                                                    marginRight: 0,
                                                    height: 38,
                                                    color: '#5d5d5d',
                                                    fontSize: 16
                                                }
                                                //   predefinedPlacesDescription: {
                                                //     color: '#1faadb'
                                                //   },
                                                
                                            }}
                                        /> */}

                                    </View>
                                </View>
                                <View >
                                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', }}>
                                        <View style={{ width: '25%' }}>
                                            <Image style={styles.imageMap} source={require('../../images/pickupday.png')} />
                                        </View>
                                        <View style={{ width: '40%' }}>
                                            <Text style={styles.rideTime}>Pickup Date</Text>
                                        </View>
                                        <View style={{ width: '40%', height: 70, paddingLeft: '4%' }}>
                                            <DatePicker style={{ width: 115, }}
                                                date={this.state.date}
                                                mode="date"
                                                placeholder="select date"
                                                format="YYYY-MM-DD"
                                                minDate="2018-05-01"
                                                maxDate="2020-06-01"
                                                confirmBtnText="Confirm"
                                                cancelBtnText="Cancel"
                                                customStyles={{
                                                    dateIcon: {
                                                        display: 'none',
                                                    },
                                                    dateInput: {
                                                        borderBottomWidth: 1,
                                                        borderTopWidth: 0,
                                                        borderRightWidth: 0,
                                                        borderLeftWidth: 0,
                                                        borderBottomColor: 'rgba(0,0,0,.3)',
                                                    },
                                                }}

                                                onDateChange={(date) => { this.setState({ date: date }) }}
                                            />
                                        </View>
                                    </View>
                                </View>
                                <View >
                                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginTop: 20 }}>
                                        <View style={{ width: '25%' }}>
                                            <Image style={styles.imageMap} source={require('../../images/pickup.png')} />
                                        </View>
                                        <View style={{ width: '40%' }}>
                                            <Text style={styles.rideTime}>Pickup Time</Text>
                                        </View>

                                        <View style={styles.chooseTime}>
                                            <TouchableOpacity onPress={this._showDateTimePicker}>
                                                <Text style={styles.marginCo}> {this.state.myText} </Text>

                                            </TouchableOpacity>
                                            <Item>
                                                <DateTimePicker
                                                    isVisible={this.state.isDateTimePickerVisible}
                                                    onConfirm={this._handleDatePicked}
                                                    onCancel={this._hideDateTimePicker}
                                                    mode={'time'}
                                                />

                                            </Item>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', }}>
                                    <Button rounded style={styles.continueBooking} onPress={this.onButtonPress.bind(this)}>
                                        <Text uppercase={false} style={styles.buttonTextview}>Continue Booking</Text>
                                    </Button>
                                </View>
                            </View>
                        </Content>
                    </Container>
                </ScrollView>

            </View >
        );
    }
}

const styles = StyleSheet.create({
    moreicon:
        {
            transform: [{ rotate: '90deg' }]
        },
    headerContent: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '8%',
    },
    inputfont: {
        textAlign: 'left',
        fontSize: 14,
        fontFamily: 'Lato-Regular',
    },
    marginCo: {
        marginBottom: '10%',
        color: 'rgba(0,0,0,0.7)'
    },
    chooseTime: {
        marginLeft: '2%',
        width: 300,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,.3)',
    },
    imageCar: {
        // marginTop: '8%',
        // marginBottom: '4%',
        height: responsiveHeight(6),
        width: responsiveWidth(14),
    },
    appointmentHeader: {
        color: 'rgba(0,0,0,.7)',
        fontSize: 15,
        fontFamily: 'Lato-Regular',
        fontWeight: 'bold',
    },
    borderdivider:
        {
            alignSelf: 'center',
            borderTopColor: 'rgba(0,0,0,.4)',
            borderTopWidth: 2,
            height: '8%',
            width: '10%',
            marginTop: '4%',
            marginBottom: '4%',

        },

    rideHeader: {
        color: 'rgb(62, 180, 226)',
        fontSize: 15,
        fontFamily: 'Lato-Regular',
        fontWeight: 'bold',
        marginTop: '4%',
    },
    bottomspacea: {
        // marginBottom: '1%',
        // marginTop: '2%',
        paddingLeft: '6%',
        paddingRight: '6%',
    },
    buttonTextview: {

        color: '#ffffff',
        textAlign: 'center',
        fontSize: 15,
        fontFamily: 'Lato-Regular',
        fontWeight: '300',
        justifyContent: 'center',

    },
    input: {
        borderBottomColor: 'rgba(0,0,0,.3)',
    },
    headerTop: {
        backgroundColor: '#40b4e5',
    },
    textCenter: {
        flex: 1,
        flexDirection: 'row',
    },
    rideTime: {
        marginTop: '5%',
        marginBottom: '8%',
        color: 'rgba(0,0,0,.7)',
        fontSize: 15,
        fontFamily: 'Lato-Regular',
    },
    imageMap: {
        height: responsiveHeight(5),
        width: responsiveWidth(14),
    },
    continueBooking:
        {
            backgroundColor: '#40b4e5',
            borderColor: '#448aff',
            width: 165,
            justifyContent: 'center',
            marginTop: '15%',
            marginBottom: '8%',
            height: 45,
            borderWidth: 0,
        }
});

export default Ridemap;

