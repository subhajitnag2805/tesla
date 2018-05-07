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

export default class Ridehistory extends Component {
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
                                <Image style={styles.imageCar} source={require('../../images/ridehistory.png')}/>
                                <View style={styles.textCenter}>
                                    <Text style={styles.rideHeader}>
                                        RIDES &nbsp;&nbsp;<Text style={styles.appointmentHeader}>MONTHLY HISTORY</Text>
                                    </Text>
                                </View>
                                <View style={styles.borderdivider}/>
                            </View>
                             {/* header part end */}

                             {/* 1st card start */}
                            <View style={styles.bottomspace}>
                                {/* time and date section start */}
                                <View style={styles.ridetime}>
                                    <Text style={styles.ridetimetext}>
                                        Time - <Text style={styles.subtext}> 5:33pm  |  </Text>
                                         Date - <Text style={styles.subtext}> Feb 20 2018</Text>
                                    </Text>
                                </View>
                                {/* time and date section end */}

                                <Card style={styles.cardShadow}>
                                    <CardItem bordered>
                                        <Content>
                                            <Grid>
                                                <Col
                                                    style={{
                                                    width:'20%'
                                                }}>
                                                    <View style={styles.posrelative}>
                                                        <Thumbnail source={require('../../images/teslauser2.png')}/>

                                                    </View>

                                                </Col>
                                                <Col
                                                    style={{
                                                    width: '50%',
                                                    paddingLeft: '2%'
                                                }}>
                                                    <Text style={styles.username}>
                                                        Priscilla T.Duncan
                                                    </Text>
                                                    <Text style={styles.marketFrom}>
                                                        From -
                                                        <Text style={styles.market}>Roy Market,Borjora
                                                        </Text>
                                                    </Text>
                                                    <Text style={styles.marketFrom}>
                                                        To -
                                                        <Text style={styles.market}>Durgapur, Station Bazar
                                                        </Text>
                                                    </Text>
                                                </Col>

                                                <Col style={styles.viewbtnsec}>
                                                    <Button rounded style={styles.btnView}>
                                                        <Text uppercase={false} style={styles.buttonTextview}>View</Text>
                                                    </Button>
                                                </Col>
                                            </Grid>
                                        </Content>
                                    </CardItem>
                                </Card>
                            </View>
                            {/* 1st card end */}

                            {/* 2nd card start */}
                            <View style={styles.bottomspace}>

                                {/* time and date section start */}
                                <View style={styles.ridetime}>
                                    <Text style={styles.ridetimetext}>
                                        Time -
                                        <Text style={styles.subtext}> 7:20pm  |  </Text>  
                                         Date -
                                        <Text style={styles.subtext}> jan 10 2018</Text>
                                    </Text>
                                </View>
                                {/* time and date section start */}

                                <Card style={styles.cardShadow}>
                                    <CardItem bordered>
                                        <Content>
                                            <Grid>
                                                <Col
                                                    style={{
                                                    width: '20%'
                                                }}>
                                                    <Thumbnail source={require('../../images/teslauser1.png')}/>
                                                </Col>
                                                <Col
                                                    style={{
                                                    width: '50%',
                                                    paddingLeft: '2%'
                                                }}>
                                                    <Text style={styles.username}>
                                                        Priscilla T.Duncan
                                                    </Text>
                                                    <Text style={styles.marketFrom}>
                                                        From -
                                                        <Text style={styles.market}>Roy Market,Borjora
                                                        </Text>
                                                    </Text>
                                                    <Text style={styles.marketFrom}>
                                                        To -
                                                        <Text style={styles.market}>Durgapur, Station Bazar
                                                        </Text>
                                                    </Text>
                                                </Col>
                                                <Col style={styles.viewbtnsec}>
                                                    <Button rounded style={styles.btnView}>
                                                        <Text uppercase={false} style={styles.buttonTextview}>View</Text>
                                                    </Button>
                                                </Col>
                                            </Grid>
                                        </Content>                                        
                                    </CardItem>
                                </Card>
                            </View>
                            {/* 2nd card end */}

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
        color: 'rgba(0,0,0,.7)',
        fontFamily: 'Montserrat-Regular',
        marginBottom: '4%'
    },
    headerContent: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },

    cardShadow: {
        elevation: 1,
        marginTop: 0,
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
        marginTop: '4%'
    },
    appointmentHeader: {
        color: 'rgba(0,0,0,.7)',
        fontSize: 15,
        fontFamily: 'Lato-Regular',
        fontWeight: 'bold'
    },
    bottomspace: {
        marginBottom: '5%',
        elevation: 3,
     
    },
    buttonTextview: {

        color: '#ffffff',
        textAlign: 'center',
        fontSize: 12,
        fontFamily: 'Lato-Regular',
        fontWeight: '300',
        justifyContent: 'center'
    },
    headerTop: {
        backgroundColor: '#40b4e5'
    },
    market: {
        fontSize: 12,
        fontFamily: 'Lato-Regular',
        fontWeight: '300'
    },
    marketFrom: {
        fontSize: 12,
        fontFamily: 'Lato-Regular',
        fontWeight: '500',
        marginBottom: '2%'
    },
    textCenter: {
        flex: 1,
        flexDirection: 'row'
    },
    iconstylenumber: {
        paddingTop: '8%',
        lineHeight: 20
    },
    iconstyle: {
        color: '#2cd369',
        textAlign: 'center'
    },
    imageCar: {
        marginTop: '8%',
        marginBottom: '4%',
        height: responsiveHeight(9),
        width: responsiveWidth(20)
    },
  
    btnView: {
        paddingTop: '8%',
        backgroundColor: '#40b4e5',
        borderColor: '#448aff',
        width: 75,
        justifyContent: 'center',
        marginTop: '10%',
        marginBottom: '8%',
        // marginLeft: '10%',
        flex:1,
        alignSelf:'flex-end',
        height: 35,
        borderWidth: 0,

    },
    ridetime: {
        backgroundColor: '#ecf5fd',
        padding: 10
    },
    ridetimetext: {
        textAlign: 'right',
        color: '#555',
        fontSize: 14,
    },
    subtext: {
        color: '#6a7175',
        paddingRight: 10,
        borderRightColor: '#6a7175',
        borderRightWidth: 2,
    },
    viewbtnsec:{
    flex:1,
    width:'30%',
    justifyContent:'center'
    }

});
