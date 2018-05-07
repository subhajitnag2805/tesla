import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged } from '../../actions';

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
import { Actions } from 'react-native-router-flux';
export default class Pickridedriver extends Component {
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
                        <Title>Pick Ride Driver </Title>
                    </Body>
                    <Right >
                        <Button transparent style={styles.moreicon}>
                            <Icon name='ios-more' />

                        </Button>

                    </Right>
                </Header>

                <ScrollView>
                    <View >
                        <Container>
                            <Content padder >
                                <View style={styles.headerContent}>
                                    <Image style={styles.rideimageCar} source={require('../../images/driverlisticon.png')} />
                                    <View style={styles.textCenter}>
                                        <Text style={styles.rideHeader}>
                                            PICK RIDE &nbsp;&nbsp;<Text style={styles.appointmentHeader}>DRIVER</Text>
                                        </Text>
                                    </View>
                                    <View style={styles.borderdivider} />
                                </View>
                                <View style={styles.bottomspace}>
                                    <Card style={styles.cardShadow}>
                                        <CardItem bordered >
                                            <Content style={styles.cardContent}>
                                                <Grid>
                                                    <Col style={{ width: 60 }}>
                                                        <View style={styles.posrelative}>
                                                            <Thumbnail source={require('../../images/driver1.png')} />
                                                            <Text style={styles.onlinedot} />
                                                        </View>

                                                    </Col>
                                                    <Col style={{ width: 160, paddingLeft: '2%' }}>
                                                        <Text style={styles.username}>
                                                            Doug m. Humphrey
                                                        </Text>
                                                        <Text>
                                                            <Icon active name='ios-star' style={styles.transportIcon} />
                                                            <Icon active name='ios-star' style={styles.transportIcon} />
                                                            <Icon active name='ios-star' style={styles.transportIcon} />
                                                            <Icon active name='ios-star' style={styles.transportIcon} />
                                                            <Icon active name='ios-star' style={styles.transportIcon} />
                                                        </Text>
                                                    </Col>
                                                    <Col style={{ width: 60 }}>
                                                        <View style={styles.viewSpace}>
                                                            <Button rounded style={styles.btnView} onPress={Actions.Confirmbooking}>
                                                                <Text uppercase={false} style={styles.buttonTextview}>View</Text>
                                                            </Button>
                                                        </View>
                                                    </Col>
                                                </Grid>
                                            </Content>
                                        </CardItem>
                                    </Card>
                                </View>
                                <View style={styles.bottomspace}>
                                    <Card style={styles.cardShadow}>
                                        <CardItem bordered >
                                            <Content style={styles.cardContent}>
                                                <Grid>
                                                    <Col style={{ width: 60 }}>
                                                        <View style={styles.posrelative}>
                                                            <Thumbnail source={require('../../images/driver2.png')} />
                                                            <Text style={styles.onlinedot} />
                                                        </View>

                                                    </Col>
                                                    <Col style={{ width: 160, paddingLeft: '2%' }}>
                                                        <Text style={styles.username}>
                                                            Gilberto M. Day
                                                        </Text>
                                                        <Text>
                                                            <Icon active name='ios-star' style={styles.transportIcon} />
                                                            <Icon active name='ios-star' style={styles.transportIcon} />
                                                            <Icon active name='ios-star' style={styles.transportIcon} />
                                                            <Icon active name='ios-star' style={styles.transportIconi} />
                                                            <Icon active name='ios-star' style={styles.transportIconi} />
                                                        </Text>
                                                    </Col>
                                                    <Col style={{ width: 60 }}>
                                                        <View style={styles.viewSpace}>
                                                            <Button rounded style={styles.btnView}>
                                                                <Text uppercase={false} style={styles.buttonTextview}>View</Text>
                                                            </Button>
                                                        </View>
                                                    </Col>
                                                </Grid>
                                            </Content>
                                        </CardItem>
                                    </Card>
                                </View>
                                <View style={styles.bottomspace}>
                                    <Card style={styles.cardShadow}>
                                        <CardItem bordered >
                                            <Content style={styles.cardContent}>
                                                <Grid>
                                                    <Col style={{ width: 60 }}>
                                                        <View style={styles.posrelative}>
                                                            <Thumbnail source={require('../../images/driver3.png')} />
                                                        </View>

                                                    </Col>
                                                    <Col style={{ width: 160, paddingLeft: '2%' }}>
                                                        <Text style={styles.username}>
                                                            Alexander Batchelder
                                                        </Text>
                                                        <Text>
                                                            <Icon active name='ios-star' style={styles.transportIcon} />
                                                            <Icon active name='ios-star' style={styles.transportIcon} />
                                                            <Icon active name='ios-star' style={styles.transportIcon} />
                                                            <Icon active name='ios-star' style={styles.transportIconi} />
                                                            <Icon active name='ios-star' style={styles.transportIconi} />
                                                        </Text>
                                                    </Col>
                                                    <Col style={{ width: 60 }}>
                                                        <View style={styles.viewSpace}>
                                                            <Button rounded style={styles.btnView}>
                                                                <Text uppercase={false} style={styles.buttonTextview}>View</Text>
                                                            </Button>
                                                        </View>
                                                    </Col>
                                                </Grid>
                                            </Content>
                                        </CardItem>
                                    </Card>
                                </View>
                                <View style={styles.bottomspace}>
                                    <Card style={styles.cardShadow}>
                                        <CardItem bordered >
                                            <Content style={styles.cardContent}>
                                                <Grid>
                                                    <Col style={{ width: 60 }}>
                                                        <View style={styles.posrelative}>
                                                            <Thumbnail source={require('../../images/driver4.png')} />
                                                        </View>

                                                    </Col>
                                                    <Col style={{ width: 160, paddingLeft: '2%' }}>
                                                        <Text style={styles.username}>
                                                         Arthur P Robinson
                                                        </Text>
                                                        <Text>
                                                            <Icon active name='ios-star' style={styles.transportIcon} />
                                                            <Icon active name='ios-star' style={styles.transportIcon} />
                                                            <Icon active name='ios-star' style={styles.transportIcon} />
                                                            <Icon active name='ios-star' style={styles.transportIconi} />
                                                            <Icon active name='ios-star' style={styles.transportIconi} />
                                                        </Text>
                                                    </Col>
                                                    <Col style={{ width: 60 }}>
                                                        <View style={styles.viewSpace}>
                                                            <Button rounded style={styles.btnView}>
                                                                <Text uppercase={false} style={styles.buttonTextview}>View</Text>
                                                            </Button>
                                                        </View>
                                                    </Col>
                                                </Grid>
                                            </Content>
                                        </CardItem>
                                    </Card>
                                </View>
                            </Content>
                        </Container>
                    </View>
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
    username: {
        marginTop: '0%',
        paddingTop:'4%',
        fontSize: 15,
        fontWeight: '700',
        color: 'rgba(0,0,0,.7)',
        fontFamily: 'Montserrat-Regular',
        marginBottom: '4%',

    },
    cardContent: {
        marginTop: '1%',
        marginBottom: '1%',
    },
    headerContent: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    transportIcon: {
        marginBottom: '4%',
        color: 'rgb(252, 213, 47)',
        fontSize: 15,
    },
    transportIconi: {
        marginBottom: '4%',
        color: 'rgb(175, 175, 175)',
        fontSize: 15,
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
        marginBottom: '3%',
    },
    textCenter: {
        flex: 1,
        flexDirection: 'row',
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
    rideimageCar: {
        marginTop: '8%',
        marginBottom: '4%',
        height: responsiveHeight(8),
        width: responsiveWidth(15),
    },
    cardShadow: {
        elevation: 0,
    },
    viewSpace: {
        marginLeft: '8%',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnView:
        {
            paddingTop: '5%',
            backgroundColor: '#40b4e5',
            borderColor: '#448aff',
            width: 75,
            justifyContent: 'center',
            marginBottom: '0%',
            height: 35,
            borderWidth: 0,
        },


});

