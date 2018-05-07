import React, { Component } from 'react';
import {
    Platform,
    View,
    StyleSheet,
    Image,
    ImageBackground,
    ScrollView,
    Dimensions,
    Alert
    // WebView
} from 'react-native';
import {
    Container,
    Header,
    Footer,
    FooterTab,
    Title,
    List,
    Item,
    Input,
    ListItem,
    Thumbnail,
    Content,
    Button,
    Icon,
    Card,
    CardItem,
    Text,
    Body,
    Left,
    Right,
    IconNB
} from "native-base";
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Actions } from 'react-native-router-flux';
import moment from 'moment';
import axios from 'axios';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import Spinner from 'react-native-loading-spinner-overlay';
// import { Popover, PopoverContainer } from 'react-native-simple-popover';
// import Iframe from 'react-iframe';

let pickup_lat, pickup_long, dest_lat, dest_long;


let clock;

const GOOGLE_MAPS_APIKEY = 'AIzaSyCJN-WC92r1zmojaSiiSq34Zc-7ZYZUY2A';

export default class Continuebooking extends Component {

    constructor(props) {
        super(props);

        this.state = {
            coordinates: [
                {
                    latitude: this.props.pickup_lat,
                    longitude: this.props.pickup_long,
                },
                {
                    latitude: this.props.dest_lat,
                    longitude: this.props.dest_long,
                },
            ],
        };

        this.mapView = null;
    }
    confirmbutton = () => {
        Alert.alert(
            'Booking Confirmed',
            'Reaching you soon.....',
            [
                { text: 'OK', onPress: () => Actions.auth() }
            ],
            { cancelable: false }
        )

    }
    onMapPress = (e) => {
        this.setState({
            coordinates: [
                ...this.state.coordinates,
                e.nativeEvent.coordinate,
            ],
        });
    }

    state = {
        isPopoverVisible: true,
        popoverPlacement: 'bottom',
        latitude: this.props.pickup_lat,
        longitude: this.props.pickup_long,
        error: null
    };

    getInitialState() {
        return {
            region: {
                latitude: this.state.pickup_lat,
                longitude: this.state.pickup_long,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
        };
    }

    onRegionChange(region) {
        this.setState({ region });
    }

    render() {

        const { width, height } = Dimensions.get('window');
        const ASPECT_RATIO = width / height;
        const LATITUDE = this.props.pickup_lat;
        const LONGITUDE = this.props.pickup_long;
        const LATITUDE_DELTA = 0.0922;
        const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;


        const { region } = this.props;
        console.log(region);

        pickup_lat: this.props.pickup_lat;
        pickup_long: this.props.pickup_long;
        dest_lat: this.props.dest_lat;
        dest_long: this.props.dest_long;

        console.log("cont book=== " + this.props.pickup);
        console.log("cont book=== " + this.props.destination);
        console.log("cont book=== " + this.props.pickup_lat);
        console.log("cont book=== " + this.props.pickup_long);
        console.log("cont book=== " + this.props.dest_lat);
        console.log("cont book=== " + this.props.dest_long);
        console.log("cont book=== " + this.props.time);
        console.log("cont book=== " + this.props.date);
        let date;
        date = moment(this.props.date).format('DD/MM/YYYY');
        var dateTime = moment(date + ' ' + this.props.time, 'DD/MM/YYYY HH:mm').format();
        let startTime;
        startTime = moment.utc(dateTime);
        clock = startTime._d;
        console.log(clock);

        let data = {
            user: "5ad07a7c961bcb1cf25d9eb2",
            date: clock,
            pickupLocation: {
                name: this.props.pickup,
                location: [this.props.pickup_long, this.props.pickup_lat]
            },
            destination: {
                name: this.props.destination,
                location: [this.props.dest_long, this.props.dest_lat]
            },
            rideType: "airport",
            passengers: 2,
            bags: 3
        }
        console.log(data);

        // var _base = this;
        // this.setState({
        //     loading: true
        // });
        axios.post('http://ec2-52-27-118-19.us-west-2.compute.amazonaws.com:5555/booking', data)
            .then(function (response) {

                console.log(response);

                // if(JSON.stringify(response.data.error))
                // {
                //      dispatch({ type: CUSTOMER_CREATE });   
                //      alert("Registration Successful");
                //      Actions.auth();
                // }
                // else
                // alert(JSON.stringify(response.data.message));

            })
            .catch(function (error) {
                console.log(error);
                // _base.setState({
                //     loading: false
                // });
                Alert.alert(
                    'Network Error',
                    'Connect to internet',
                    [
                        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                        { text: 'OK', onPress: () => console.log('OK Pressed') },
                    ],
                    { cancelable: false }
                )
            });


        return (

            // <MapView
            //     style={styles.map}
            //     provider={PROVIDER_GOOGLE}
            //         initialRegion={{
            //             latitude: 23.5430518,
            //             longitude: 87.3014578,
            //             latitudeDelta: 0.0922,
            //             longitudeDelta: 0.0421,
            //         }}
            //     />

            <Container style={styles.contentContainer}>
                <Header style={styles.headerTesla} noShadow>
                    {/* <Left>
                        <Button transparent>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left> */}
                    <Body>
                        <Title> Confirm Booking </Title>
                    </Body>
                    {/* <Right>
                        <Button transparent>
                            <Icon name='more' />
                        </Button>



                    </Right> */}


                </Header>
                <Content>
                    {/* <View> */}
                    {/* user details card start */}
                    <Grid style={styles.mapsearchsection}>
                        <Row>
                            <Col>
                                <Item style={styles.teslainput}>
                                    <Image source={require('../../images/map/circle.png')} style={styles.circleimg} />
                                    <Input style={styles.username} placeholder='Pickup Location' value={this.props.pickup} />
                                    <Image source={require('../../images/map/cross.png')} style={styles.crossimg} />
                                </Item>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Item style={styles.teslainput}>
                                    <Image source={require('../../images/map/location.png')} style={styles.locationimg} />
                                    <Input style={styles.username} placeholder='Destination' value={this.props.destination} />
                                    <Image source={require('../../images/map/direction.png')} style={styles.directionimg} />
                                </Item>
                            </Col>
                        </Row>
                        <View style={styles.dottedlilnebwtnicons}></View>
                    </Grid>

                    <MapView

                        initialRegion={{
                            latitude: LATITUDE,
                            longitude: LONGITUDE,
                            latitudeDelta: LATITUDE_DELTA,
                            longitudeDelta: LONGITUDE_DELTA,
                        }}
                        style={styles.map}
                        ref={c => this.mapView = c}
                        onPress={this.onMapPress}
                    >
                        {this.state.coordinates.map((coordinate, index) =>
                            <MapView.Marker key={`coordinate_${index}`} coordinate={coordinate} />
                        )}
                        {(this.state.coordinates.length >= 2) && (
                            <MapViewDirections
                                origin={this.state.coordinates[0]}
                                waypoints={(this.state.coordinates.length > 2) ? this.state.coordinates.slice(1, -1) : null}
                                destination={this.state.coordinates[this.state.coordinates.length - 1]}
                                apikey={GOOGLE_MAPS_APIKEY}
                                strokeWidth={3}
                                strokeColor='red'
                                onStart={(params) => {
                                    console.log(`Started routing between "${params.origin}" and "${params.destination}"`);
                                }}
                                onReady={(result) => {
                                    this.mapView.fitToCoordinates(result.coordinates, {
                                        edgePadding: {
                                            right: (width / 20),
                                            bottom: (height / 20),
                                            left: (width / 20),
                                            top: (height / 20),
                                        }
                                    });
                                }}
                                onError={(errorMessage) => {
                                    // console.log('GOT AN ERROR');
                                }}
                            />
                        )}
                    </MapView>
                    {/* map section end */}

                    {/* footer icon section start */}
                    {/* <View style={styles.footerimgsec}>
                            <Grid>
                                <Row>
                                    <Col style={styles.footercol}>
                                        <Image source={require('../../images/map/meter.png')} style={styles.footerimg} />
                                        <Text class="footercoltext">
                                            30 miles
                              </Text>
                                    </Col>
                                    <Col style={styles.footercol}>
                                        <Image source={require('../../images/map/money.png')} style={styles.footerimg} />
                                        <Text class="footercoltext">
                                            $ 150
                              </Text>
                                    </Col>
                                    <Col style={styles.footercol}>
                                        <Image source={require('../../images/map/clock.png')} style={styles.footerimg} />
                                        <Text class="footercoltext">
                                            1 Hour
                              </Text>
                                    </Col>
                                </Row>
                            </Grid>
                        </View> */}



                    {/* footer icon section end */}

                    {/* </View> */}

                </Content>
                <Footer style={styles.headerTesla}>
                    <FooterTab style={styles.headerTesla}>
                        <Button badge vertical >
                            <Text style={styles.footerbtntextTesla} uppercase={false} onPress={this.confirmbutton.bind(this)} >Confirm Booking</Text>
                        </Button>
                    </FooterTab>
                </Footer>

            </Container>
        )
    }
}

const styles = StyleSheet.create({

    map: {

        height: 400,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },

    contentContainer: {
        backgroundColor: '#fafbfd',
    },
    customContainer: {
        flex: 1,
        justifyContent: 'center',
        // alignItems:'center',
    },
    mainView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    headerTesla: {
        width: '100%',
        backgroundColor: '#40b4e5',
    },
    footerbtntextTesla: {
        color: '#ffffff',
        fontSize: 15,
    },
    username: {
        fontSize: 12,
        color: 'rgba(0,0,0,0.6)',
    },
    circleimg: {
        marginRight: 15,
        width: 15,
        height: 15,
    },
    crossimg: {
        width: 8,
        height: 10,
    },
    locationimg: {
        marginRight: 15,
        width: 12,
        height: 16,
        marginLeft: 1
    },
    directionimg: {
        width: 12,
        height: 15,
    },
    mapimg: {
        width: '100%',
        height: 300,
    },
    mapsearchsection: {
        paddingLeft: 25,
        paddingRight: 25,
        elevation: 2,
        backgroundColor: '#ffffff',
        position: 'relative',
    },
    dottedlilnebwtnicons: {
        position: 'absolute',
        borderWidth: 1,
        borderColor: "#cccccc",
        borderStyle: "dashed",
        left: 33,
        height: '33%',
        top: 33,
    },
    footercol: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    footercoltext: {
        fontFamily: 'Lato-Regular',
    },
    footerimgsec: {
        backgroundColor: '#ffffff',
        padding: 20,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    buttons: {
        position: 'absolute',
        flexDirection: 'row',
        flex: 1,
        top: 0,
        left: 0,
        marginTop: 20,
    },
    popoverContainer: {
        backgroundColor: '#114B5F',
        padding: 8,
        borderRadius: 5,
        marginBottom: 70
    },
    popoverText: {
        color: '#E4FDE1',
    },
    footerimg: {
        width: 45,
        height: 40,
        marginBottom: 10,
    },
    teslainput: {
        borderColor: '#ffffff',
        width: '100%',
    }
});