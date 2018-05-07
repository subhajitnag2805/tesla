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
// import Iframe from 'react-iframe';


export default class Confirmbooking extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          progress: 0,
          indeterminate: true,
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

    confirmbutton = () => {
      Alert.alert(
        'Application in Beta version',
        'Updates comming soon.....',
        [
          {text: 'OK', onPress: () => Actions.auth() }
        ],
        { cancelable: false }
      )

    }
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
                            <Col style={{ width: 100 }}>
                            <Thumbnail large source={require('../../images/user.jpeg')} style={styles.userpic}/>
                            <Text style={styles.onlinedot} />
                            </Col>
                            <Col><Text style={styles.username}>Doug M Humphery</Text>
                            <Text style={styles.userage}>Age - 30 Years</Text>
                            <Text>
                                <Icon active name='ios-star' style={styles.transportIcon} />
                                <Icon active name='ios-star' style={styles.transportIcon} />
                                <Icon active name='ios-star' style={styles.transportIcon} />
                                <Icon active name='ios-star' style={styles.transportIcon} />
                                <Icon active name='ios-star' style={styles.transportIconi} />
                            </Text>
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
                            <Col style={styles.listimgsec} >
                            
                              <Image source={require('../../images/license.png')} style={styles.listimg}/>
                          
                            </Col>
                            <Col style={{ width: '38%' }}>
                            <View style={styles.customContainer}>
                              <Text style={styles.headingText}>License no</Text>
                            </View>
                            </Col>
                            <Col style={{ width: '45%' }}>
                            <View style={styles.customContainer}>
                              <Text style={styles.headingText}>WF2066432678</Text>
                              <Text style={styles.headingTextblue}>View License</Text>
                            </View>  
                            </Col>
                           
                        </Grid>
                        </Row>
                        <Row>
                        <Grid style={styles.cardDetailsgrid}>
                            <Col style={styles.listimgsec} >
                            
                              <Image source={require('../../images/admin2/car.png')} style={styles.listimg}/>
                          
                            </Col>
                            <Col style={{ width: '38%' }}>
                            <View style={styles.customContainer}>
                              <Text style={styles.headingText}>Pickup Location</Text>
                            </View>
                            </Col>
                            <Col style={{ width: '45%' }}>
                            <View style={styles.customContainer}>
                              <Text style={styles.headingText}>3793 Kelly Street, North Carolina</Text>
                            </View>  
                            </Col>
                        </Grid>
                        </Row>
                        <Row>
                        <Grid style={styles.cardDetailsgrid}>
                        <Col style={styles.listimgsec} >
                            
                            <Image source={require('../../images/admin2/direction.png')} style={styles.listimg}/>
                        
                          </Col>
                            <Col style={{ width: '38%' }}>
                            <View style={styles.customContainer}>
                              <Text style={styles.headingText}>Destination</Text>
                            </View>  
                            </Col>
                            <Col style={{ width: '45%' }}>
                            <View style={styles.customContainer}>
                              <Text style={styles.headingText}>3793 Kelly Street, North Carolina</Text>
                            </View>  
                            </Col>
                        </Grid>
                        </Row>
                        <Row>
                        <Grid style={styles.cardDetailsgrid}>
                        <Col style={styles.listimgsec} >
                            <Image source={require('../../images/admin2/date.png')} style={styles.listimg}/>
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
                        <Col style={styles.listimgsec} >
                            <Image source={require('../../images/admin2/time.png')} style={styles.listimg}/>
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


               
            </View>    
        </Content>
        <Footer style={styles.headerTesla}>
          <FooterTab style={styles.headerTesla}>
            <Button badge vertical 
            onPress={ this.confirmbutton.bind(this)}>
              <Text style={styles.footerbtntextTesla} uppercase={false}>Confirm Booking</Text>
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
    cardUpload:{
      minHeight:380,
      backgroundColor:'#ffffff',
      width:'100%',
      alignItems:'center', 
      elevation:0,
      borderColor: '#ffffff',
      marginTop:60,
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
      color:'rgba(0,0,0,0.6)',
      fontWeight:'800',
      marginTop:13,
      fontFamily: 'Lato-Regular',
    }, 
    userpic:{
        position:'relative',
        marginRight:'10%'
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
    carImage:{
        width:'10%',
        height:30,
        flex:1,
        justifyContent:'center',
    },
    headingText:{
      color:'rgba(0,0,0,0.8)',
      fontSize:14, 
      fontFamily: 'Lato-Regular',
    },
    headingTextblue:{
        color:'#3ba6d4',
        fontSize:14, 
        fontFamily: 'Lato-Regular',
        marginTop:5,
        textAlign:'left',
     
    },
    userage:{
        color:'rgba(0,0,0,0.4)',
        fontSize:13, 
        fontFamily: 'Lato-Regular',
    },
    listimgsec:{
        width: Dimensions.get("window").height>500 ? '20%' : '23%',
        height:Dimensions.get("window").height>500 ? 40 : 75,
        flex:1,
        justifyContent:'center',
    },
    listimg:{
        height: '60%',
        width: '63%',
    },
    onlinedot:
    {
      position: 'absolute',
      left: 0,
      width: 15,
      zIndex: 0,
      height: 15,
      top: 10,
      right:0,
      borderRadius: 50,
      backgroundColor: '#2cd467'
    },
    transportIcon: {
        color: 'rgb(252, 213, 47)',
        fontSize: 15,
        
    },
    transportIconi: {
        
        color: 'rgb(175, 175, 175)',
        fontSize: 15,
       
    },
   
   
});

