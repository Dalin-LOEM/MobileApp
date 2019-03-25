import React, {Component} from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native'
import {Container, Icon, Button, CheckBox} from 'native-base'

export default class CreateAcc extends Component{
    constructor(props){
        super(props)
        this.state={
            lastname: '',
            firstname: '',
            email: '',
            password: '',
            passwordAgain: '',
            textBox: '',
        }
    }
    render(){
        return(
            <Container>
                <View style={styles.mainStyle}>
                    <Text style={{fontSize: 26, color: '#34596C'}}>eMembership</Text>
                </View>
                <View style={styles.mainStyle}>
                    <Text style={{fontSize: 16, color: 'black', marginTop: '5%'}}>CREATE AN ACCOUNT</Text>
                </View>
                <View style={styles.mainStyle}>
                    <Text style={{fontSize: 12, color: 'gray', marginTop: '6%'}}>CONTIUNE WITH</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: '2%'}}>
                    <View style={{padding: '2%'}}>
                        <Button rounded style={{ backgroundColor: '#3B5998', width: '100%', height: 25}}>
                            <Icon name="logo-facebook" />
                        </Button>
                    </View>
                    <View style={{padding: '2%'}}>
                        <Button rounded style={{ backgroundColor: '#E44C4A', width: '100%', height: 25}}>
                            <Icon name="logo-googleplus" />
                        </Button>
                    </View>
                    <View style={{padding: '2%'}}>
                        <Button rounded style={{ backgroundColor: '#1FE028', width: '100%', height: 25}}>
                            <Icon name="logo-whatsapp" />
                        </Button>
                    </View>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <Text>__________________  OR  ___________________</Text>
                </View>
                <View>
                    <View style={styles.mainStyle}>
                        <TextInput
                            style={styles.inputtext}
                            value={this.state.lastname}
                            placeholder="Last Name"
                            onChangeText={
                            lastname => this.setState({ lastname })
                        }/>
                    </View>  
                </View>
                <View>
                    <View style={styles.mainStyle}>
                        <TextInput
                            style={styles.inputtext}
                            value={this.state.lastname}
                            placeholder="First Name"
                            onChangeText={
                            lastname => this.setState({ lastname })
                        }/>
                    </View>  
                </View>
                <View>
                    <View style={styles.mainStyle}>
                        <TextInput
                            style={styles.inputtext}
                            value={this.state.email}
                            placeholder="E-mail"
                            onChangeText={
                            email => this.setState({ email })
                        }/>
                    </View>  
                </View>
                <View>
                    <View style={styles.mainStyle}>
                        <TextInput
                            style={styles.inputtext}
                            value={this.state.password}
                            placeholder="Password"
                            onChangeText={
                            password => this.setState({ password })
                        }/>
                    </View>  
                </View>
                <View>
                    <View style={styles.mainStyle}>
                        <TextInput
                            style={styles.inputtext}
                            value={this.state.passwordAgain}
                            placeholder="Password Again"
                            onChangeText={
                                passwordAgain => this.setState({ passwordAgain })
                        }/>
                    </View>  
                </View>
                <View style={styles.mainStyle}>
                    <View style={{width: '10%', marginTop: '5%'}}>
                        <CheckBox color="gray"/>
                    </View>
                    <View style={{width: '61%', marginTop: '5%'}}>
                        <Text>Create a registered customer account using my data, I agree with the Privacy Policy and Terms and Conditions</Text>
                    </View>
                </View>
                <View style={styles.mainStyle}>
                    <Button rounded style={{justifyContent: "center", backgroundColor: "#C99E67", width: "60%", 
                                            height: 30, marginTop: "5%"}}>
                        <Text>CREATE ACCOUNT</Text>
                    </Button>
                </View>
                <View style={styles.mainStyle}>
                    <View>
                        <Text>Already have an account? </Text> 
                    </View>
                    <View>
                        <Text style={{color: '#C99E67'}}>  Sing in </Text> 
                    </View>
                </View>
            </Container>
        )
    }
}
const styles = StyleSheet.create ({
    mainStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    inputtext: {
        borderWidth: 0.4,
        width: '65%',
        height: 30,
        fontSize: 10,
        borderColor: '#9e9e9e',
        borderRadius: 0.4,
        marginTop: '3%'
    },
})