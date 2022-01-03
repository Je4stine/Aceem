import React from 'react';
import { View, Text, StyleSheet, Image,Dimensions } from 'react-native';
import { KeyboardAvoidingView } from 'react-native-web';
import { ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { useState } from 'react';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <ScrollView>
        <View style={{backgroundColor: '#E4FFEC', width:'auto', height: Dimensions.get('screen').height}}>
            <Image source ={require('../../assets/Full.png')} style={styles.logo}/>

            <Text style={styles.loginText}>Username</Text>
             <TextInput 
            style={styles.input}
            keyboardType='default'/>


            <Text style={styles.loginText}>Email</Text>
             <TextInput 
            style={styles.input}
            keyboardType='default'
            onChange={setEmail}/>

            <Text style={styles.loginText}>Password</Text>
             <TextInput 
            style={styles.input}
            keyboardType='default'
            secureTextEntry={true}
            onChange={setPassword}/>

            <Text style={styles.loginText}>Confirm Password</Text>
             <TextInput 
            style={styles.input}
            keyboardType='default'
            secureTextEntry={true}/>

            <TouchableOpacity >
                <View style={styles.loginBtn}>
                    <Text style={styles.loginBtnText}>Sign Up</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.signUpText}>
                         Already have an account? Sign In
                </Text>
            </TouchableOpacity>
        </View>
        </ScrollView>
    )
};

export default SignUp;

const styles = StyleSheet.create({
    logo: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        marginTop: 50,
    },
    loginText: {
            fontSize: 15,
            marginLeft: 20,
            marginTop: 20,
            fontWeight: 'bold'
    },
    input: {
        borderWidth: 2,
        borderColor: '#21EC5A',
        borderRadius: 15,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        height: 40,
        padding: 10,
    },
    loginBtn: {
        backgroundColor: '#21EC5A',
        borderRadius: 60,
        marginLeft: 80,
        marginRight: 80,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginBtnText: {
        fontSize: 20,
        width: 100,
        height: 40,
        alignSelf: 'center',
        marginTop: 10,
        marginLeft: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    signUpText: {
        fontSize: 15,
        marginLeft: 20,
        marginTop: 20,
        fontStyle: 'italic',
        alignSelf: 'center',
    },
   
});