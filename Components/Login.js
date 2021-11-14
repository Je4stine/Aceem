import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={{backgroundColor:'21EC5A'}}>
                <Image source={require('../assets/Full.png')} style={styles.logo}/>
                <Text style={styles.loginText}>Login</Text>
                <Text style={styles.loginText}>Email or Username</Text>
                <TextInput 
                style={styles.input}
                onChange={setEmail}/>

                <Text style={styles.loginText}>Password</Text>
                <TextInput 
                style={styles.input}
                onChange={setPassword}/>
                
                <TouchableOpacity>
                <Text style={styles.forgotPassword}>Forgot Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.loginBtn}>
                        <Text style={styles.loginBtnText}>Login</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.loginText}>
                         Don't have an account? Create one
                    </Text>
                </TouchableOpacity>
        </View>
    )
};

export default Login;

const styles = StyleSheet.create({
    logo: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        marginTop: 50,
    },
    loginText: {
        fontSize: 15,
        marginLeft: 20,
        marginTop: 20,
    },
    input: {
        borderWidth: 3,
        borderColor: '#21EC5A',
        borderRadius: 10,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        height: 40,
    },
    forgotPassword: {
        marginTop: 10,
        marginLeft: 20,
        fontStyle: 'italic',
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


});