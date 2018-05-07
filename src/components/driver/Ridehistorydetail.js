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
    IconNB
} from "native-base";
import {responsiveHeight, responsiveWidth, responsiveFontSize} from 'react-native-responsive-dimensions';
import {Col, Row, Grid} from 'react-native-easy-grid';

export default class Ridehistorydetail extends Component {
    onEmailChange(text) {
        this
            .props
            .emailChanged(text);
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
                            <Icon name='ios-more' style={styles.moreicon}/>

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
                                    source={require('../../images/historydetailimg.png')}/>
                                <View style={styles.textCenter}>
                                    <Text style={styles.rideHeader}>
                                        RIDE&nbsp;<Text style={styles.appointmentHeader}>
                                            HISTORY</Text>
                                    </Text>
                                </View>
                                <View style={styles.borderdivider}/>
                            </View>

                            {/* header part end */}

                            <Grid  style={{
                                    paddingLeft: '3%'
                                }}>
                                <Col
                                    style={{
                                    width: '20%'
                                }}>
                                    <View style={styles.posrelative}>
                                        <Thumbnail source={require('../../images/teslauser2.png')}/>
                                    </View>
                                </Col>
                                <Col
                                    style={{
                                    width: '70%',
                                    paddingLeft: '8%'
                                }}>
                                    <Text style={styles.username}>
                                        Priscilla T.Duncan
                                    </Text>
                                </Col>
                            </Grid>
                            <Grid style={styles.listgrid}>
                            <Col style={styles.listimgsec}>
                                    <View >
                                        <Thumbnail source={require('../../images/pickloc.png')} style={styles.listimg}/>
                                    </View>
                                </Col>
                                <Col
                                    style={{
                                        width: '47%',
                                    paddingLeft: '8%'
                                }}>
                                    <Text style={styles.listtext}>Pickup Location</Text>

                                </Col>
                                <Col
                                    style={{
                                        width: '35%'
                                    // paddingLeft: '5%'
                                }}>
                                    <Text style={styles.listtext}>
                                        3793 kelly street, North Carolina
                                    </Text>

                                </Col>
                            </Grid>

                             <Grid style={styles.listgrid}>
                               <Col style={styles.listimgsec}>
                                    <View >
                                        <Thumbnail source={require('../../images/destination.png')} style={styles.listimg}/>
                                    </View>
                                </Col>
                                <Col
                                    style={{
                                        width: '47%',
                                    paddingLeft: '8%'
                                }}>
                                    <Text style={styles.listtext}>Destination</Text>

                                </Col>
                                <Col
                                    style={{
                                        width: '35%'
                                    // paddingLeft: '5%'
                                }}>
                                    <Text style={styles.listtext}>
                                        3793 kelly street, North Carolina
                                    </Text>

                                </Col>
                            </Grid>
                            <Grid style={styles.listgrid}>
                                <Col style={styles.listimgsec}>
                                    <View >
                                        <Thumbnail source={require('../../images/pickdate.png')} style={styles.listimg}/>
                                    </View>
                                </Col>
                                <Col
                                    style={{
                                        width: '47%',
                                    paddingLeft: '8%'
                                }}>
                                    <Text style={styles.listtext}>Pickup Date</Text>

                                </Col>
                                <Col
                                    style={{
                                        width: '35%'
                                    // paddingLeft: '5%'
                                }}>
                                    <Text style={styles.listtext}>
                                        Feb 20 2018
                                    </Text>

                                </Col>
                            </Grid>
                            <Grid style={styles.listgrid}>
                               <Col style={styles.listimgsec}>
                                    <View >
                                        <Thumbnail source={require('../../images/picktime.png')} style={styles.listimg}/>
                                    </View>
                                </Col>
                                <Col
                                    style={{
                                        width: '47%',
                                    paddingLeft: '8%'
                                }}>
                                    <Text style={styles.listtext}>Pickup Time</Text>

                                </Col>
                                <Col
                                    style={{
                                        width: '35%'
                                    // paddingLeft: '5%'
                                }}>
                                    <Text style={styles.listtext}>
                                       5:33pm
                                    </Text>
                                </Col>
                            </Grid>
                            <Grid style={styles.listgrid}>
                               <Col style={styles.listimgsec}>
                                    <View >
                                        <Thumbnail source={require('../../images/passenger.png')} style={styles.listimg}/>
                                    </View>
                                </Col>
                                <Col
                                    style={{
                                        width: '47%',
                                    paddingLeft: '8%'
                                }}>
                                    <Text style={styles.listtext}>Passenger</Text>
                                </Col>
                                <Col
                                    style={{
                                        width: '35%'
                                    // paddingLeft: '5%'
                                }}>
                                    <Text style={styles.listtext}>
                                       3
                                    </Text>
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
                                        width: '47%',
                                    paddingLeft: '8%'
                                }}>
                                    <Text style={styles.listtext}>Bags</Text>

                                </Col>
                                <Col
                                    style={{
                                        width: '35%'
                                    // paddingLeft: '5%'
                                }}>
                                    <Text style={styles.listtext}>
                                      2
                                    </Text>
                                </Col>
                            </Grid>

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
    username: {
        fontSize: 15,
        fontWeight: '700',
        color: 'rgba(0,0,0,.5)',
        fontFamily: 'Montserrat-Regular',
        marginTop: '10%'
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
        fontSize: 15,
        fontFamily: 'Lato-Regular',
        fontWeight: 'bold',
        marginTop: '2%'
    },
    appointmentHeader: {
        color: 'rgba(0,0,0,.7)',
        fontSize: 15,
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
        height: '30%',
        width: '20%'
    },
    listimg:{
        height: '80%',
        width: '80%',
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
        width: Dimensions.get("window").height>500 ? '18%' : '23%',
        height:Dimensions.get("window").height>500 ? 50 : 75,
        flex:1,
        marginTop:'2%',
        justifyContent:'center'
    }

});
