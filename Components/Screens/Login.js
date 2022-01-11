import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { useState } from 'react';
import { KeyboardAvoidingView } from 'react-native-web';
// import { useNavigation} from '@react-navigation/native';



const Login = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const navigation = useNavigation();

    return (
        <>
        <View style={{backgroundColor: '#E4FFEC', width:'auto', height: Dimensions.get('screen').height}}> 
        <View>
                <Image source={require('../../assets/Full.png')} style={styles.logo}/>
                {/* <Text style={styles.loginText}>Login</Text> */}
                <Text style={styles.loginText}>Email or Username</Text>
                
                <KeyboardAvoidingView behavior="padding">
                <TextInput 
                style={styles.input}
                onChange={setEmail}/>

                <Text style={styles.loginText}>Password</Text>
                <TextInput 
                style={styles.input}
                onChange={setPassword}
                keyboardType='default'
                secureTextEntry={true}/>

                </KeyboardAvoidingView>
                <TouchableOpacity>
                <Text style={styles.forgotPassword}>Forgot Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={navigation.navigate('HomePage')}>
                    <View style={styles.loginBtn}>
                        <Text style={styles.loginBtnText}>Login</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('SignUp')}>
                    <Text style={styles.loginText}>
                         Don't have an account? Create one
                    </Text>
                </TouchableOpacity>
        </View>
        </View>
        </>
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
        fontWeight: 'bold',
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