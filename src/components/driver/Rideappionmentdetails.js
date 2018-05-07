import React, { Component } from 'react';
import {
  Platform,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
  Dimensions
  // WebView
} from 'react-native';
import { 
    Container,
    Header,
    Footer,
    FooterTab,
    Title, 
    List, 
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
// import Iframe from 'react-iframe';


export default class Rideappionmentdetails extends Component {
    render() {
    return (
        <Container style={styles.contentContainer}>
        <Header style={styles.headerTesla} noShadow>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Right>
            <Button transparent>
              <Icon name='more' />
            </Button>
          </Right>
        </Header>
        <Content>
            <View>
                {/* user details card start */}
                <Card style={styles.userinfocard}>
                    <CardItem header>
                        <Grid>
                            <Col style={{ width: 80 }}>
                              <View style={styles.profileimg}>
                                <Thumbnail source={require('../../images/user.jpeg')}/>
                                <Text style={styles.online} />
                              </View>
                            </Col>
                            <Col><Text style={styles.username}>Priscilla T.Duncan</Text></Col>
                        </Grid>
                    </CardItem>
                    <CardItem>
                    <Grid>
                        <Col></Col>
                        <Col style={{ width: '40%' }}>
                            <Grid>
                                <Col>
                                <Grid>
                                    <Col><Image source={require('../../images/admin2/envelop.png')} style={styles.envelopimg}/></Col>
                                    <Col><Text style={styles.notitext}>1</Text></Col>
                                </Grid>
                                </Col>
                                {/* <Col style={{ width: '10%' }}><Text style={styles.divider}>|</Text></Col> */}
                                <Col>
                                <View style={styles.divider}>
                                  <Text style={styles.chatText}>Chat</Text>
                                  <Text style={styles.dividerLine} />
                                </View>
                                </Col>
                            </Grid>
                        </Col>
                    </Grid>
                    </CardItem>
                </Card>
                {/* user details card start */}

                {/* car details start */}
                <Grid style={styles.carDetail}>
                    <Col>
                        <Row>
                        <Grid style={styles.cardDetailsgrid}>
                            <Col style={styles.infologo}>
                              <Image source={require('../../images/admin2/car.png')} style={styles.carpic}/>
                            </Col>
                            <Col style={{ width: '38%' }}>
                            <View style={styles.customContainer}>
                              <Text style={styles.headingText}>Pickup Location</Text>
                            </View>
                            </Col>
                            <Col style={{ width: '45%' }}>
                            <View style={styles.customContainer}>
                              <Text style={styles.headingText}>3793 Kelly Street,North Carolina</Text>
                            </View>  
                            </Col>
                        </Grid>
                        </Row>
                        <Row>
                        <Grid style={styles.cardDetailsgrid}>
                            <Col style={styles.infologo}>
                              <Image source={require('../../images/admin2/direction.png')} style={styles.carpic}/>
                            </Col>
                            <Col style={{ width: '38%' }}>
                            <View style={styles.customContainer}>
                              <Text style={styles.headingText}>Destination</Text>
                            </View>  
                            </Col>
                            <Col style={{ width: '45%' }}>
                            <View style={styles.customContainer}>
                              <Text style={styles.headingText}>3793 Kelly Street,North Carolina</Text>
                            </View>  
                            </Col>
                        </Grid>
                        </Row>
                        <Row>
                        <Grid style={styles.cardDetailsgrid}>
                            <Col style={styles.infologo}>
                              <Image source={require('../../images/admin2/date.png')} style={styles.carpic}/>
                            </Col>
                            <Col style={{ width: '38%' }}>
                            <View style={styles.customContainer}>
                              <Text style={styles.headingText}>Pickup Date</Text> 
                            </View>  
                            </Col>
                            <Col style={{ width: '45%' }}>
                            <View style={styles.customContainer}>
                              <Text style={styles.headingText}>Feb 20 2018</Text>
                            </View>  
                            </Col>
                        </Grid>
                        </Row>
                        <Row>
                        <Grid style={styles.cardDetailsgrid}>
                            <Col style={styles.infologo}>
                              <Image source={require('../../images/admin2/time.png')} style={styles.carpic} />
                            </Col>
                            <Col style={{ width: '38%' }}>
                            <View style={styles.customContainer}>
                              <Text style={styles.headingText}>Pickup Time</Text>
                            </View>
                            </Col>
                            <Col style={{ width: '45%' }}>
                            <View style={styles.customContainer}>
                              <Text style={styles.headingText}>5.33 pm</Text>
                            </View>  
                            </Col>
                        </Grid>
                        </Row>
                    </Col>
                </Grid>
                {/* car details end */}


                {/* map iframe start */}
                  {/* <WebView
                      source={{uri: 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14642.897519640233!2d87.27711375!3d23.43432155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1524035608361'}}
                      style={{marginTop: 20}}
                  /> */}
                  <View>
                    <Image source={require('../../images/admin2/maps-att.png')} style={styles.mapimg}/>
                  </View>  
                {/* map iframe start */}
            </View>    
        </Content>
        <Footer style={styles.headerTesla}>
          <FooterTab style={styles.headerTesla}>
            <Button badge vertical >
              <Text style={styles.footerbtntextTesla} uppercase={false}>Pick Up Start</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}


const styles = StyleSheet.create({
    contentContainer:{
        backgroundColor:'#fafbfd',
    },
    customContainer:{
        flex:1,
        justifyContent:'center',
        // alignItems:'center',
    },
    mainView:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#ffffff',
    },
    headerTesla:{
       width:'100%',
       backgroundColor:'#40b4e5',
    },
    footerbtntextTesla:{
       color:'#ffffff',
       fontSize:15,
    },
    userinfocard:{
        paddingTop:5,
        paddingLeft:15,
        paddingBottom:5,
        marginBottom:15,
        marginLeft:15,
        marginRight:15,
        marginTop:15,
    },
    carDetail:{
      marginBottom:15,
      marginLeft:15,
      marginRight:15,
      marginTop:15,
    },
    username:{
      fontSize:19,
      color:'#9d9d9d',
      fontWeight:'800',
      marginTop:13,
      fontFamily: 'Lato-Regular',
    }, 
    profileimg:{
      position:'relative',
    },
    online:{
      position: 'absolute',
      left: -3,
      width: 14,
      zIndex: 0,
      height: 14,
      top: 10,
      borderRadius: 50,
      backgroundColor: '#2cd467'
    },
    envelopimg:{
      width:20,
      height:14,
      marginTop:2,
      marginRight:5,
    },
    notitext:{
      fontSize:16,
      color:'#9d9d9d',
      fontFamily: 'Lato-Regular',
    },
    divider:{
      position:'relative',
    },
    dividerLine:{
      position: 'absolute',
      top:-5,
      width: 1,
      zIndex: 0,
      height:30,
      right:'115%',
      borderRadius: 50,
      backgroundColor: '#cccccc',
    },
    chatText:{
      fontSize:16,
      color:'#40b4e5',
      fontFamily: 'Lato-Regular',
    },
    divider:{
        marginBottom:5,
    },
    carinfo:{
        backgroundColor:'transparent',
    },
    cardDetailsgrid:{
        paddingTop:15,
        paddingBottom:15,
        paddingLeft:15,
        paddingRight:0,
    },
    infologo:{
      width: Dimensions.get("window").height>500 ? '20%' : '23%',
      height:Dimensions.get("window").height>500 ? 40 : 75,
      flex:1,
      justifyContent:'center',
    },
    carpic:{
      height: '60%',
      width: '63%',
    },
    headingText:{
      color:'rgba(0,0,0,0.8)',
      fontSize:14, 
      fontFamily: 'Lato-Regular',
    },
    mapimg:{
      width:'100%',
    }
    
  
   
   
});

