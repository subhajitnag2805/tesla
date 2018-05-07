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
import { Actions } from 'react-native-router-flux';
// import Iframe from 'react-iframe';


export default class Companyprofile extends Component {
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
                <Image source={require('../../images/carimg.jpg')} style={styles.carprofileimg}/>
                {/* user details card start */}
                

                {/* company details start */}
                <View>
                {/* <Card style={styles.cardUpload}>
                  <CardItem style={{ width:'100%'}}></CardItem> */}
                  {/* <CardItem> */}
                    <Grid style={styles.cardUpload}>
                      <Col style={{ width: '65%' }}>
                        <Row>
                          <View><Text style={styles.bluetext}>MARTEN <Text style={styles.graytext}>TRANSPORT</Text></Text></View>
                        </Row>
                        <Row>
                          <View style={styles.mainView}>
                            <Image source={require('../../images/cprofile/address.png')} style={styles.addressicon}/>
                          </View> 
                          <View style={styles.mainView}>
                            <Text style={styles.addresstext}>Roy Market,Barjora-722208</Text>
                          </View>  
                        </Row>  
                      </Col>
                      <Col style={{ width: '35%' , alignItems:'center'}}>
                      <Row>
                        <Text style={styles.mr5}>
                          <Icon active name='star' style={styles.transportIcon} />
                        </Text>
                        <Text style={styles.mr5}>
                          <Icon active name='star' style={styles.transportIcon} />
                        </Text>
                        <Text style={styles.mr5}>
                          <Icon active name='star' style={styles.transportIcon} />
                        </Text>
                        <Text style={styles.mr5}>  
                          <Icon active name='star' style={styles.transportIcon} />
                        </Text>
                        <Text style={styles.mr5}>  
                          <Icon active name='star' style={styles.transportIconi} />
                        </Text>
                      </Row>  
                      <Row>
                      <View style={styles.mainView}>
                        <Image source={require('../../images/cprofile/msg.png')} style={styles.msgicon}/>
                        </View>
                        <View style={styles.mainView}>
                        <Text style={styles.msgtext}>83</Text>
                        </View>
                      </Row>       
                      </Col>
                      <View style={styles.dividerLine}></View>
                    </Grid>  
                  {/* </CardItem> */}
                  {/* <CardItem style={{ width:'100%'}}></CardItem> */}
                 
                {/* </Card>   */}
                </View>
                {/* company details end */}


                {/* car details start */}
                <View>
                    <Grid style={styles.carDetail}>
                        <Col>
                            <Row>
                            <Grid style={styles.cardDetailsgrid}>
                                <Col style={styles.infologo}>
                                <Image source={require('../../images/cprofile/user.png')} style={styles.carpic}/>
                                </Col>
                                <Col style={{ width: '38%' }}>
                                <View style={styles.customContainer}>
                                <Text style={styles.headingText}>Owners Name</Text>
                                </View>
                                </Col>
                                <Col style={{ width: '45%' }}>
                                <View style={styles.customContainer}>
                                <Text style={styles.valueText}>Arthur P.Robinson</Text>
                                </View>  
                                </Col>
                            </Grid>
                            </Row>
                            <Row>
                            <Grid style={styles.cardDetailsgrid}>
                                <Col style={styles.infologo}>
                                <Image source={require('../../images/cprofile/tcp.png')} style={styles.carpic}/>
                                </Col>
                                <Col style={{ width: '38%' }}>
                                <View style={styles.customContainer}>
                                <Text style={styles.headingText}>TCP No.</Text>
                                </View>  
                                </Col>
                                <Col style={{ width: '45%' }}>
                                <View style={styles.customContainer}>
                                <Text style={styles.valueText}>86467HJ9755</Text>
                                </View>  
                                </Col>
                            </Grid>
                            </Row>
                            <Row>
                            <Grid style={styles.cardDetailsgrid}>
                                <Col style={styles.infologo}>
                                <Image source={require('../../images/cprofile/date.png')} style={styles.carpic}/>
                                </Col>
                                <Col style={{ width: '38%' }}>
                                <View style={styles.customContainer}>
                                <Text style={styles.headingText}>Date of Incorporation</Text> 
                                </View>  
                                </Col>
                                <Col style={{ width: '45%' }}>
                                <View style={styles.customContainer}>
                                <Text style={styles.valueText}>Feb 20 2018</Text>
                                </View>  
                                </Col>
                            </Grid>
                            </Row>
                            <Row>
                            <Grid style={styles.cardDetailsgrid}>
                                <Col style={styles.infologo}>
                                <Image source={require('../../images/cprofile/driver.png')} style={styles.carpic} />
                                </Col>
                                <Col style={{ width: '38%' }}>
                                <View style={styles.customContainer}>
                                <Text style={styles.headingText}>No. of Drivers</Text>
                                </View>
                                </Col>
                                <Col style={{ width: '45%' }}>
                                <View style={styles.customContainer}>
                                <Text style={styles.valueText}>15 Drivers</Text>
                                </View>  
                                </Col>
                            </Grid>
                            </Row>
                            <Row>
                              <View style={{ flex:1,alignItems:'center', width:'100%'}}>
                              {/* view driver list button start */}
                              <Button rounded style={styles.btnView} onPress={Actions.Pickridedriver}>
                                <Text uppercase={false} style={styles.buttonTextview}>View Driver List</Text>
                              </Button>
                              {/* view driver list button end */}
                              </View>
                            </Row>
                        </Col>
                    </Grid>
                </View>
                {/* car details end */}


            </View>    
        </Content>
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
    },
    mainView:{
      justifyContent:'center',
    },
    mr5:{
      marginRight:5,
    },
    carprofileimg:{
        width:'100%',
        maxHeight:250,
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
      // minHeight:380,
      backgroundColor:'#f4f8fb',
      width:'100%',
      alignItems:'center', 
      elevation:1,
      borderColor: '#ffffff',
      position:'relative',
      paddingBottom:20,
      paddingLeft:15,
      paddingRight:15,
      paddingTop:20,
    },
    dividerLine:{
      position: 'absolute',
      top:20,
      width: 1,
      zIndex: 0,
      height:'100%',
      right:'42%',
      borderRadius: 50,
      backgroundColor: '#cccccc',
    },
    carDetail:{
      marginBottom:15,
      marginLeft:15,
      marginRight:15,
      marginTop:15,
    },
    carinfo:{
        backgroundColor:'transparent',
    },
    cardDetailsgrid:{
        paddingTop:15,
        paddingBottom:15,
        paddingLeft:15,
        paddingRight:15,
    },
    infologo:{
      width: Dimensions.get("window").height>500 ? '20%' : '23%',
      height:Dimensions.get("window").height>500 ? 40 : 75,
      flex:1,
      justifyContent:'center',
    },
    carpic:{
      height: '65%',
      width: '55%',
    },
    headingText:{
      color:'rgba(0,0,0,0.6)',
      fontSize:14, 
      fontFamily: 'Lato-Regular',
    },
    valueText:{
        color:'rgba(0,0,0,0.9)',
        fontSize:14, 
        fontFamily: 'Lato-Regular',
        textAlign:'right',
    },
    transportIcon: {
      color: 'rgb(252, 213, 47)',
      fontSize: 20,
      marginBottom:10,
    },
    transportIconi: {
        color: 'rgb(175, 175, 175)',
        fontSize: 20,
        marginBottom:10,
    },
    bluetext:{
      color:'#40b4e5',
      fontSize:17, 
      marginBottom:10,
      fontFamily: 'Lato-Regular',
    },
    graytext:{
        color:'rgba(0,0,0,0.8)',
        fontSize:17, 
        marginBottom:10,
        fontFamily: 'Lato-Regular',
    },
    addresstext:{
      color:'rgba(0,0,0,0.8)',
      fontSize:13, 
      fontFamily: 'Lato-Regular',
      marginLeft:10,
    },
    addressicon:{
      width:20,
      height:20,
    },
    msgicon:{
      width:25,
      height:20,
      marginRight:10,
    },
    msgtext:{
      color:'#40b4e5',
      fontSize:16, 
      fontFamily: 'Lato-Regular',
    },
    btnView: {
      backgroundColor: '#40b4e5',
      borderColor: '#448aff',
      width: 170,
      justifyContent:'center',
      marginTop: '10%',
      alignSelf:'center',
      height: 42,
      borderWidth: 0,
      elevation:0,
    },
    buttonTextview:{
      color:'white',
      fontWeight:'600',
      fontSize:15
    },
  
   
   
});

