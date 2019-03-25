import React, {Component} from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native'
import {Container, Icon, Button} from 'native-base'

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
        marginTop: '5%'
    },
})