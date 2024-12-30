import { View, Text, StyleSheet } from 'react-native'; 


const ProgressScreen = () => {
    return (
        <View style={Styles.container}>
            <Text style={Styles.text}>Track Your Progress</Text>
        </View>
    );
};

const Styles = StyleSheet.create({
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

export default ProgressScreen;