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
export default class Transportcompany extends Component {
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
                        <Title> Transport Company </Title>
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
                                    <Image style={styles.transportimageCar} source={require('../../images/transportcar.png')} />
                                    <View style={styles.textCenter}>
                                        <Text style={styles.rideHeader}>
                                            TRANSPORT &nbsp;&nbsp;<Text style={styles.appointmentHeader}>COMPANYS</Text>
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
                                                            <Thumbnail source={require('../../images/transport1.png')} />
                                                        </View>

                                                    </Col>
                                                    <Col style={{ width: 160, paddingLeft: '2%' }}>
                                                        <Text style={styles.username}>
                                                            Marten Transport
                                                        </Text>
                                                        <Text style={styles.market}>Roy Market,Borjora</Text>
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
                                                            <Button rounded style={styles.btnView} onPress={Actions.companyprofile}>
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
                                                            <Thumbnail source={require('../../images/transport2.png')} />
                                                        </View>

                                                    </Col>
                                                    <Col style={{ width: 160, paddingLeft: '2%' }}>
                                                        <Text style={styles.username}>
                                                            TFX-International
                                                        </Text>
                                                        <Text style={styles.market}>Petrol Pump, Borjora</Text>
                                                        <Text>
                                                            <Icon active name='ios-star' style={styles.transportIcon} />
                                                            <Icon active name='ios-star' style={styles.transportIcon} />
                                                            <Icon active name='ios-star' style={styles.transportIcon} />
                                                            <Icon active name='ios-star' style={styles.transportIcon} />
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
                                                            <Thumbnail source={require('../../images/transport4.png')} />
                                                        </View>

                                                    </Col>
                                                    <Col style={{ width: 160, paddingLeft: '2%' }}>
                                                        <Text style={styles.username}>
                                                           Truthful Transport
                                                        </Text>
                                                        <Text style={styles.market}>Forest Office, Borjora</Text>
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
                                                            <Thumbnail source={require('../../images/transport3.png')} />
                                                        </View>

                                                    </Col>
                                                    <Col style={{ width: 160, paddingLeft: '2%' }}>
                                                        <Text style={styles.username}>
                                                           Parker Auto Transport
                                                        </Text>
                                                        <Text style={styles.market}>Sen Market, Borjora</Text>
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
        marginTop:'0%',
        fontSize: 15,
        fontWeight: '700',
        color: 'rgba(0,0,0,.7)',
        fontFamily: 'Montserrat-Regular',
        marginBottom: '4%',

    },
    cardContent:{
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
        marginBottom:'4%',
        color: 'rgb(252, 213, 47)',
        fontSize: 15,
    },
    transportIconi: {
        marginBottom:'4%',
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
    transportimageCar: {
        marginTop: '8%',
        marginBottom: '4%',
        height: responsiveHeight(9),
        width: responsiveWidth(35),
    },
    cardShadow:{
        elevation:0,
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

