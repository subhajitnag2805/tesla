import React, { Component } from 'react';
import {
  Platform,
  View,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView
} from 'react-native';
import { Container, Header, Title, Content, Button, Icon, Card, CardItem, Text, Body, Left, Right, IconNB } from "native-base";

import * as Progress from 'react-native-progress';

export default class Uploadlicence extends Component {
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
    render() {
    return (
        <View>
            {/* Header start */}
            <Header noShadow style={styles.headerTesla}>
                    <Left>
                        <Button transparent>
                        <Icon name="arrow-back" />
                        </Button>
                    </Left>
                    <Right />
            </Header>
            {/* Header end */}

            {/* content start */}
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <ImageBackground
                    source={require('../../images/regwave.png')}
                    style={styles.backImage}>
                    <View style={styles.logocontainer}>
                        <Image  
                            style={styles.logo}
                            source={require('../../images/logotesla.png')}
                        />
                    </View>  
                </ImageBackground> 
                <Container>
                    <Content>
                        <Card style={styles.cardUpload}>
                            
                            <Body>
                            {/* upload icon start */}
                            <Image  
                                style={styles.licenceicon}
                                source={require('../../images/uploadlicence.png')}
                            />
                            {/* upload icon end */}

                            {/* upload licence placeholder start */}
                            {/* <Image  
                                style={styles.uploadplaceholder}
                                source={require('../../images/uploadplacehoder.jpg')}
                            /> */}
                            {/* upload licence placeholder end */}
                             
                            {/* upload text start */}
                            <Text style={styles.uploadtext}>Upload Your <Text style={styles.licencetext}>Driver Licence</Text></Text>
                            <View style={styles.lineStyle}></View>
                            {/* upload text end */}

                            {/* progress bar start */}
                                {/* <Progress.Bar
                                style={styles.progressbar}
                                progress={this.state.progress}
                                indeterminate={this.state.indeterminate}
                                /> */}
                            {/* progress bar end */}

                            {/* loading text start */}
                            {/* <Text style={styles.loadingtext}>Loading</Text> */}
                            {/* loading text end */}

                            {/* choose file btn start */}
                            <View style={styles.customContainer}>
                                <Button rounded style={styles.choosefilebtn}>
                                    <Text style={styles.choosefilebtntext} uppercase={false}>Choose File</Text>
                                </Button>
                            </View>
                            {/* choose file btn end */}

                            {/* choose file btn start */}
                            {/* <View style={styles.customContainer}>
                                <Button rounded transparent style={styles.canclebtn}>
                                    <Text style={styles.canclebtntext} uppercase={false}>Cancle</Text>
                                </Button>
                            </View> */}
                            {/* choose file btn end */}
                            </Body>
                           
                        </Card>
                    </Content>
                </Container> 
            </ScrollView>
        </View> 
    );
  }
}


const styles = StyleSheet.create({
    contentContainer:{
        backgroundColor:'#ffffff',
    },
    customContainer:{
        justifyContent:'center',
        alignItems:'center',
    },
    mainView:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#ffffff',
    },
    backImage:{
        width:'100%',
        height:180,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff', 
    },
    logocontainer:{ 
        flex:1,
        alignItems:'center',
        width:'100%',
        marginTop:'20%',
        marginLeft:10,
    },
    logo:{    
        width:110,
        height:43,
    },
    headerTesla:{
       width:'100%',
       backgroundColor:'#3b8ede', 
       height:45,
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
    progressbar:{
      borderWidth:0,
      backgroundColor:'rgba(0,0,0,0.2)',
      borderRadius:20,
    },
    uploadtext:{
        color:'rgba(0,0,0,0.8)',
        fontSize:16, 
        marginBottom:0,
        marginTop:40,
        fontFamily: 'Lato-Regular',
    },
    loadingtext:{
        color:'rgba(0,0,0,0.8)',
        fontSize:16, 
        marginBottom:10,
        marginTop:10,
        fontFamily: 'Lato-Regular',
    },
    licencetext:{
        color:'#40b4e5',
        fontSize:16,
        fontFamily: 'Lato-Regular',
    },
    lineStyle:{
        borderWidth: 1,
        borderColor:'#40b4e5',
        margin:10,
        width:40, 
        height:1,
    },
    choosefilebtn:{
        backgroundColor:'#40b4e5',
        marginTop:40,
        padding:20,
        width:'100%',
        
    },
    choosefilebtntext:{
        color:'#ffffff',
        fontSize:15,
        fontWeight:'500',
        fontFamily: 'Lato-Regular',
    },
    canclebtn:{
        paddingVertical:12,
        paddingHorizontal:20,
        marginTop:10,
    },
    canclebtntext:{
        color:'rgba(0,0,0,0.8)',
        fontSize:15,
        fontWeight:'500',
        fontFamily: 'Lato-Regular', 
    },
    licenceicon:{
       width:105,
       height:120,
    },
    uploadplaceholder:{
       width:120,
       height:80,
       marginBottom:40,
    },
});

