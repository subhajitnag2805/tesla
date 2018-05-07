import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged } from '../../actions';
import GooglePlacesAutocomplete from './GooglePlacesInput';
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
import ElevatedView from 'react-native-elevated-view'
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Actions } from 'react-native-router-flux';
export default class Ridelocation extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }
    render() {

        console.log("my location inside ridelocation==========" + location);

        // const shadowStyle = {
        //     elevation: 1,
        //     shadowStyle: 1,
        //     shadowRadius: 15,
        //     shadowColor: 'red',
        //     // shadowOffset: { width: 100, height: 100}
        // }
        return (
            <View style={{ flex: 1, position: 'relative' }}>
                <Header style={styles.headerTop}>
                    <Left>
                        <Button transparent>
                            <Icon name="arrow-back" />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Ridelocation </Title>
                    </Body>
                    <Right >
                        <Button transparent style={styles.moreicon}>
                            <Icon name='ios-more' />

                        </Button>

                    </Right>
                </Header>

                <ScrollView>
                    <Container>
                        <Content>
                            <View style={styles.headerContent}>
                                <Image style={styles.imageCar} source={require('../../images/rideloc.png')} />
                                <View style={styles.textCenter}>
                                    <Text style={styles.rideHeader}>
                                        RIDE <Text style={styles.appointmentHeader}>LOCATION</Text>
                                    </Text>
                                </View>
                                <View style={styles.borderdivider} />
                            </View>

                            <View style={styles.bottomspace}>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', }}>
                                    <View style={{ width: '47%' }}>
                                        <ElevatedView elevation={1}>
                                            <TouchableOpacity style={styles.oneWay} onPress={Actions.flightbooking}>
                                                <Image style={styles.imageplane} source={require('../../images/airport.png')} />
                                                <Text style={styles.rideTimea}>Airport</Text>
                                            </TouchableOpacity>
                                        </ElevatedView>
                                    </View>
                                    <View style={{ width: '47%' }}>
                                        <ElevatedView elevation={1}>
                                            <View style={styles.oneWay}>
                                                <Image style={styles.imageCar} source={require('../../images/family.png')} />
                                                <Text style={styles.rideTime}>Wedding</Text>
                                            </View>
                                        </ElevatedView>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.bottomspace}>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', }}>
                                    <View style={{ width: '47%' }}>
                                        <ElevatedView elevation={1}>
                                            <View style={styles.oneWay}>
                                                <Image style={styles.imageCar} source={require('../../images/businesscard.png')} />
                                                <Text style={styles.rideTime}>Business</Text>
                                            </View>
                                        </ElevatedView>
                                    </View>
                                    <View style={{ width: '47%' }}>
                                        <ElevatedView elevation={1}>
                                            <View style={styles.oneWay}>
                                                <Image style={styles.imageCar} source={require('../../images/winetour.png')} />
                                                <Text style={styles.rideTime}>Wine Tour</Text>
                                            </View>
                                        </ElevatedView>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.bottomspace}>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', }}>
                                    <View style={{ width: '47%' }}>
                                        <ElevatedView elevation={1}>
                                            <View style={styles.oneWay}>
                                                <Image style={styles.imageCar} source={require('../../images/event.png')} />
                                                <Text style={styles.rideTime}>Special Event</Text>
                                            </View>
                                        </ElevatedView>
                                    </View>
                                    <View style={{ width: '47%' }}>
                                        <ElevatedView elevation={1}>
                                            <View style={styles.oneWay}>
                                                <Image style={styles.imageCar} source={require('../../images/other.png')} />
                                                <Text style={styles.rideTime}>Other</Text>
                                            </View>
                                        </ElevatedView>
                                    </View>
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
    posrelative:
        {
            position: 'relative',
        },
    ridebottom: {
        height: responsiveHeight(30),
        width: responsiveWidth(100),
        // position: 'absolute',
        bottom: 0,
    },
    rideTime: {
        marginTop: '5%',
        marginBottom: '8%',
        color: 'rgba(0,0,0,.7)',
        fontSize: 15,
        fontFamily: 'Lato-Regular',
    },
    rideTimea: {
        marginTop: '7%',
        marginBottom: '9%',
        color: 'rgba(0,0,0,.7)',
        fontSize: 15,
        fontFamily: 'Lato-Regular',
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
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '4%',
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
            marginTop: '4%',
            marginBottom: '8%',

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
        marginBottom: '1%',
        marginTop: '4%',
        paddingLeft: '6%',
        paddingRight: '6%',
    },
    buttonTextview: {

        color: '#ffffff',
        textAlign: 'center',
        fontSize: 12,
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
        height: responsiveHeight(6),
        width: responsiveWidth(11),
    },
    imageplane: {
        marginTop: '8%',
        marginBottom: '4%',
        height: responsiveHeight(5),
        width: responsiveWidth(11),
    },
    btnView:
        {
            paddingTop: '8%',
            backgroundColor: '#40b4e5',
            borderColor: '#448aff',
            width: 75,
            justifyContent: 'center',
            marginTop: '8%',
            marginBottom: '8%',
            height: 35,
            borderWidth: 0,
        },
    oneWay:
        {
            paddingTop: '5%',
            paddingBottom: '8%',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column'
        }


});

