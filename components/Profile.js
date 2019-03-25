import React, {Component} from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native'
import {Container, Icon, Button, CheckBox} from 'native-base'

export default class CreateAcc extends Component{
    constructor(props){
        super(props)
        this.state={
            address: '',
            zipCode: '',
            city: '',
            country: '',
            mobilePhone: '',
            fixedPhone: '',
            wechatId: '',
        }
    }
    render(){
        return(
            <Container>
                <View style={styles.mainStyle}>
                    <Text style={{fontSize: 26, color: '#34596C'}}>eMembership</Text>
                </View>
                <View style={styles.mainStyle}>
                    <Text style={{fontSize: 16, color: 'black', marginTop: '5%'}}>Perfect your profile</Text>
                </View>    
                <View>
                    <View style={styles.mainStyle}>
                        <TextInput
                            style={styles.inputtext}
                            value={this.state.address}
                            placeholder="Address"
                            onChangeText={
                            address => this.setState({ address })
                        }/>
                    </View>  
                </View>
                <View>
                    <View style={styles.mainStyle}>
                        <TextInput
                            style={styles.inputtext}
                            value={this.state.zipCode}
                            placeholder="Zip Code"
                            onChangeText={
                            zipCode => this.setState({ zipCode })
                        }/>
                    </View>  
                </View>
                <View>
                    <View style={styles.mainStyle}>
                        <TextInput
                            style={styles.inputtext}
                            value={this.state.city}
                            placeholder="City"
                            onChangeText={
                            city => this.setState({ city })
                        }/>
                    </View>  
                </View>
                <View>
                    <View style={styles.mainStyle}>
                        <TextInput
                            style={styles.inputtext}
                            value={this.state.country}
                            placeholder="Country"
                            onChangeText={
                            country => this.setState({ country })
                        }/>
                    </View>  
                </View>
                <View>
                    <View style={styles.mainStyle}>
                        <TextInput
                            style={styles.inputtext}
                            value={this.state.mobilePhone}
                            placeholder="Mobile Phone"
                            onChangeText={
                                mobilePhone => this.setState({ mobilePhone })
                        }/>
                    </View>  
                </View>
                <View>
                    <View style={styles.mainStyle}>
                        <TextInput
                            style={styles.inputtext}
                            value={this.state.fixedPhone}
                            placeholder="Fixed Phone"
                            onChangeText={
                                fixedPhone => this.setState({ fixedPhone })
                        }/>
                    </View>  
                </View>
                <View>
                    <View style={styles.mainStyle}>
                        <TextInput
                            style={styles.inputtext}
                            value={this.state.wechatId}
                            placeholder="Wechat ID"
                            onChangeText={
                                wechatId => this.setState({ wechatId })
                        }/>
                    </View>  
                </View>
                <View style={styles.mainStyle}>
                    <Button rounded style={{justifyContent: "center", backgroundColor: "#C99E67", width: "60%", 
                                            height: 30, marginTop: "5%"}}>
                        <Text>CONFIRM</Text>
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