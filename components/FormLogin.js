import React, {Component} from 'react'
import {Image, View, CheckBox} from 'react-native'
import {
    Container, Header, Title, Content, Left, Right, Icon, Text, Button, Body, Form, Label, Item, Input} from 'native-base'
import { Actions } from 'react-native-router-flux'


export default class FormLogin extends Component{
    constructor(props){
        super(props)
        this.state= {
            checked: false,
        }
    }
    render(){
        return(
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={()=>Actions.history()}>
                            <Icon style={{color: 'black'}} name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>eMembership</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <Image source={require('../assets/images/eMembership.jpg')} style={{height: 200, width: null, flex: 1}}/>
                    <Form style={{width: "85%",paddingLeft: "10%"}}>
                        <View>
                            <Item floatingLabel>
                                <Label>Username</Label>
                                <Input />
                            </Item>
                            <Item floatingLabel last>
                                <Label>Password</Label>
                                <Input />
                            </Item>
                        </View>
                        <View style={{flexDirection: 'row',paddingLeft: "3%", marginTop: 10}}>
                            <View>
                                <CheckBox
                                    value={this.state.checked}
                                    onValueChange={() => this.setState({ checked: !this.state.checked })}
                                />
                            </View>
                            <View>
                                <Text style={{marginTop: 4}}>Remember Password</Text>
                            </View>
                        </View>
                        <View>
                            <Button rounded style={{justifyContent: "center", backgroundColor: "#C99E67", width: "90%", 
                                                    height: 30, marginTop: "10%", marginLeft: "7%"}}>
                                <Text>Login</Text>
                            </Button>
                            <Text/>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                            <View>
                                <Text>Have not account?</Text>
                            </View>
                            <View>
                                <Text style={{color: 'red'}}> Sign up.</Text>
                            </View>
                        </View>
                        <View style={{flexDirection: 'row'}}>
                            <View>
                                <Text>Or countinue with</Text>
                            </View>
                            <View style={{marginLeft: '5%'}}>
                                <Button rounded style={{ backgroundColor: '#3B5998', width: '100%', height: 25}}>
                                    <Icon name="logo-facebook" />
                                </Button>
                            </View>
                            <View style={{marginLeft: '3%'}}>
                                <Button rounded style={{ backgroundColor: '#E44C4A', width: '100%', height: 25}}>
                                    <Icon name="logo-googleplus" />
                                </Button>
                            </View>
                            <View style={{marginLeft: '3%'}}>
                                <Button rounded style={{ backgroundColor: '#1FE028', width: '100%', height: 25}}>
                                    <Icon name="logo-whatsapp" />
                                </Button>
                            </View>
                        </View>
                    </Form>
                </Content>
          </Container>
        )
    }
}