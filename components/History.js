import React, {Component} from 'react'
import {View} from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Container, Button, Content, Right, Header, Left, Icon, Body, Title, Text} from 'native-base'
import WelcomeES from './WelcomeES'
import CreateAcc from './CreateAcc'

const goToHome = () => {
   Actions.form()
}
  
class About extends Component{
  
   render(){
      return (
         <Container onPress = {goToHome}>
            <Header style={{backgroundColor: 'white'}}>
                <Left>
                    <Button transparent onPress={()=>Actions.form()}>
                    <Icon style={{color: 'black'}} name='arrow-back' />
                    </Button>
                </Left>
                    <Body>
                        <Title style={{color: 'black', fontSize: 15, fontWeight: 'bold'}}>History</Title>
                    </Body>
                    <Right />       
            </Header>
            <Content>
               {/* Page WelcomeES */}
               {/* <WelcomeES/> */}

               {/* Page History */}
               {/* <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                  <Left>
                     <Text style={{color: '#C99D6E'}}>#02584</Text>
                  </Left>
                  <Right>
                     <Text style={{fontSize: 14, color: '#B5B5B5'}}>25 May 2019</Text>
                  </Right>
               </View>
               <View style={{marginTop: '5%'}}>
                  <Text>Nike Air Sock Racer Ultra Flyknit </Text>
                  <Text>2 x $ 130</Text>
                  <Text>____________________________________________</Text>
               </View> */}

               {/* Page Create Account */}
               <CreateAcc/>
            </Content>
              
        </Container>
     )
   }      
}
export default About