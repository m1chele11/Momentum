import { View, Text, StyleSheet } from 'react-native';


const AccountScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Account Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    text:{
        fontSize: 24,
        fontWeight: 'bold',
        color: 'blue',
    },
});

export default AccountScreen;