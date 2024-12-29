
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus, faChartBar } from '@fortawesome/free-solid-svg-icons';


const dailyQuote = "The only way to do great work is to love what you do.";


const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
        {/*set goals*/}
        <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Set New Goal')} //placeHolder 
        >
        <FontAwesomeIcon icon={faPlus} size={30} color='#fff'/>
        <Text style={styles.cardText}>
            Set New Goals
        </Text>
        </TouchableOpacity>

        {/*Tracking Bar*/}
        <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('TrackProgress')} //place holder
        >
            <FontAwesomeIcon icon={faChartBar} size={30} color='#fff'/>
            <Text style={styles.cardText}>Track Progress</Text>

        </TouchableOpacity>

        {/*Daily quote*/}
        <View style={styles.quotecontainer}>
            <Text style={styles.quoteText}>
                <Text style={styles.quoteMark}>"</Text>
                {dailyQuote}
                <Text style={styles.quoteMark}>"</Text>
            </Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f8f9fa',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    card: {
      width: '90%',
      backgroundColor: '#007bff',
      borderRadius: 10,
      padding: 20,
      marginVertical: 10,
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 5,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 5,
    },
    cardText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 10,
    },
    quoteContainer: {
      marginTop: 30,
      paddingHorizontal: 20,
      backgroundColor: '#f1f1f1',
      borderRadius: 10,
      padding: 15,
      width: '90%',
      alignItems: 'center',
    },
    quoteText: {
      fontSize: 16,
      color: '#555',
      fontStyle: 'italic',
      textAlign: 'center',
    },
    quoteMark: {
      color: '#007bff', // Blue color for the quotation marks
      fontSize: 28, // Makes the quotes larger
      marginHorizontal: 5, // Adds space around the quote marks
    },
  });

export default HomeScreen;
