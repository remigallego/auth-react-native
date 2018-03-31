import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native'
import { Button, Card, CardSection, Input, Spinner } from './common'
import Firebase from 'firebase'

class LoginForm extends Component {
    state = {
        email: '', password: '', error: '', loading: false
    }

    onButtonPress() {
        const { email, password } = this.state;

        this.setState({error: '', loading: true})

        Firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => this.onLoginSuccess())
            .catch(() => {
                Firebase.auth().createUserWithEmailAndPassword(email, password)
                .catch(() => {
                    this.onLoginFail(); 
                })
            })
    } 

    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            loading: false,
            error: ''
        })
    }

    onLoginFail() {
        this.setState({error: 'Authentication Failed.', loading: false})
    }

    render() {
        return(
        <Card>
            <CardSection>
              <Input 
                value={this.state.email}
                onChangeText={email => this.setState({ email })} 
                label="Email"
                placeholder="user@mail.com" />
            </CardSection>

            <CardSection>
            <Input 
                secureTextEntry
                value={this.state.password}
                onChangeText={password => this.setState({ password })} 
                label="Password" 
                placeholder="*********" />
            </CardSection>  
            <Text style={styles.errorTextStyle}>
                {this.state.error}
            </Text>
            <CardSection>
                { this.state.loading ? 
                <Spinner />
                :
                <Button onPress={this.onButtonPress.bind(this)}>Log In </Button>
                }
            </CardSection>
        </Card>
        )
    }
}   
const styles = StyleSheet.create({
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: '#F00'
    }
})

export default LoginForm;   