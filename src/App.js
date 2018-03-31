import React, { Component } from 'react';
import { 
    View, 
    Text,
    StyleSheet
} from 'react-native';
import {
    Header,
    Button,
    Card,
    CardSection,
    Spinner
} from './components/common'
import LoginForm from './components/LoginForm'
import Firebase from "firebase"

class App extends Component {
    
    state = { loggedIn : null }

    componentWillMount() {
        Firebase.initializeApp({
            /* Put your own Firebase config here */
          });
        Firebase.auth().onAuthStateChanged((user) => {
            if(user) {
                this.setState({loggedIn: true })
            }
            else
            {
                this.setState({loggedIn: false})
            }
        });
    }

    renderContent() {
        switch(this.state.loggedIn)
        {
            case true:
             return (<Card><CardSection>
                        <Button onPress={() => Firebase.auth().signOut()}>
                        Log Out </Button>   
                    </CardSection></Card>)
            case false:
             return (<LoginForm />)
            default: 
             return (<Spinner size='large' />)
        }
    }

    render() {
       return(
           <View style={styles.containerStyle} > 
               <Header>Authentication</Header>
              {this.renderContent()}
            </View>
       )
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1
    }
  })

export default App;