import React, { Component } from 'react';
import {
  Platform,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
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


export default class Customerreceipt extends Component {
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
              {/* receipt icon start */}
               <View style={styles.receiptHeading}>
                  <Image source={require('../../images/admin2/receipt.png')} style={styles.receiptimg}/>
                  <View style={{ flex:1,alignItems:'center',width:'100%',}}>
                     <Text style={styles.customer}>CUSTOMER <Text style={styles.receiptText}>RIDES RECEIPT</Text></Text>
                  </View>
                  <View style={styles.lineStyle}></View>
               </View>
              {/* receipt icon end */}
              



                {/* receipt details card start */}
                <Card style={styles.userinfocard}>
                    <CardItem>
                        <Grid>
                            <Col style={{ width: 80, marginLeft:15 }}>
                              <View style={styles.profileimg}>
                                <Thumbnail source={require('../../images/user.jpeg')}/>
                                <Text style={styles.online} />
                              </View>
                            </Col>
                            <Col>
                            <View style={styles.travelDetails}>
                              <Text style={styles.username}>Priscilla T.Duncan</Text>
                              <View style={styles.mb5}>
                                <Text style={styles.question}>From - <Text style={styles.answer}>Roy Market,Barjora</Text></Text>
                              </View>
                              <View style={styles.mb5}>
                                <Text style={styles.question}>To - <Text style={styles.answer}>Durgapur, Station Bajar</Text></Text>
                              </View>
                              <View style={styles.mb5}>
                                <Text style={styles.question}>Date - <Text style={styles.answer}>Feb 20 2018</Text></Text>
                              </View>
                              <View>
                                <Text style={styles.question}>Time - <Text style={styles.answer}>5.33 pm</Text></Text>
                              </View>
                            </View>
                            </Col>
                        </Grid>
                      </CardItem>  
                      <CardItem>
                      <View style={{ flex:1,alignItems:'center', justifyContent:'center',}}>
                         <Text style={styles.divider}></Text>
                      </View>
                      </CardItem>
                      <CardItem>
                        <Grid>
                            <Col style={{ width: 80, marginLeft:15 }}></Col>
                            <Col>
                            <View style={styles.travelDetails}>
                              <View style={styles.mb5}>
                                <Text style={styles.question}>Total Miles - <Text style={styles.answer}>20miles</Text></Text>
                              </View>
                              <View style={styles.mb5}>
                                <Text style={styles.question}>Total Amount Charge - <Text style={styles.answer}>$30</Text></Text>
                              </View>
                            </View>
                            </Col>
                        </Grid>
                    </CardItem>
                </Card>
                {/* receipt details card start */}

            </View>    
        </Content>
        <Footer style={styles.headerTesla}>
          <FooterTab style={styles.headerTesla}>
            <Button badge vertical >
              <Text style={styles.footerbtntextTesla} uppercase={false}>Email To Customer email</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}


const styles = StyleSheet.create({
    headerTesla:{
      width:'100%',
      backgroundColor:'#40b4e5',
    },
    footerbtntextTesla:{
        color:'#ffffff',
        fontSize:15,
    },
    mb5:{
      marginBottom:10,
    },
    contentContainer:{
        backgroundColor:'#fafbfd',
    },
    receiptHeading:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginTop:'10%',
        marginBottom:'5%',
    },
    receiptimg:{
      width:60,
      height:60,
      marginBottom:15,
    },
    lineStyle:{
      borderWidth: 1,
      borderColor:'#cccccc',
      margin:10,
      width:40, 
      height:1,
    },
    customer:{
      color:'#40b4e5',
      fontSize:16,
      fontFamily: 'Lato-Regular',
      fontWeight:'600',
    },
    receiptText:{
      color:'rgba(0,0,0,0.5)',
      fontSize:16, 
      fontWeight:'600',
      fontFamily: 'Lato-Regular',
    },
    
    userinfocard:{
        paddingTop:10,
        // paddingLeft:15,
        paddingBottom:5,
        marginBottom:15,
        marginLeft:15,
        marginRight:15,
        flex:1,
        justifyContent:'center',
        // alignItems:'center',
    },
    profileimg:{
      position:'relative',
    },
    online:{
      position: 'absolute',
      top:'90%',
      width: 12,
      zIndex: 0,
      height: 12,
      left:'27%',
      borderRadius: 50,
      backgroundColor: '#2cd467'
    },
    username:{
      fontSize:19,
      color:'rgba(0,0,0,0.6)',
      fontWeight:'800',
      marginTop:13,
      marginBottom:15,
      fontFamily: 'Lato-Regular',
    }, 
    question:{
      color:'rgba(0,0,0,0.8)',
      fontSize:14, 
      fontWeight:'600',
      fontFamily: 'Lato-Regular',
      fontFamily: 'Lato-Regular',
    },
    answer:{
      color:'rgba(0,0,0,0.5)',
      fontSize:14, 
      fontWeight:'600',
      fontFamily: 'Lato-Regular',
      marginLeft:5,
      fontFamily: 'Lato-Regular',
    },
    divider:{
      margin:10,
      width:'90%', 
      height:1,
      backgroundColor:'#cccccc',
    },
});

