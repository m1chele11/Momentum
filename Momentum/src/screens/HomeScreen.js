
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus, faChartBar } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../context/themeContext';
import { darkTheme, lightTheme } from '../themes/themes';

const dailyQuote = "A habit missed once is a mistake, a habit missed twice is the start of a new habit.";


const HomeScreen = ({navigation}) => {

  const { isDarkMode } = useTheme();
  const theme = isDarkMode ? darkTheme : lightTheme;


  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
        {/*set goals*/}
        <TouchableOpacity
            style={[styles.card, { backgorundColor: theme.cardBackground }]}
            onPress={() => navigation.navigate('Set New Goal')} //placeHolder 
        >
        <FontAwesomeIcon icon={faPlus} size={30} color='#fff'/>
        <Text style={[styles.cardText, { color: theme.cardTextColor }]}>Set New Goals</Text>
        </TouchableOpacity>

        {/*Tracking Progress*/}
        <TouchableOpacity
            style={[styles.card, { color: theme.cardBackground }]}
            onPress={() => navigation.navigate('Progress Tracker')} //place holder
        >
            <FontAwesomeIcon icon={faChartBar} size={30} color='#fff'/>
            <Text style={[styles.cardText, { color: theme.cardTextColor }]}>Track Progress</Text>

        </TouchableOpacity>

        {/*Daily quote*/}
        <View style={[styles.quoteContainer, { backgroundColor: theme.quoteBackground }]}>
          <Text style={[styles.quoteText, { color: theme.text }]}>
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
      color: '#007bff', 
      fontSize: 28, 
      marginHorizontal: 5, 
    },
  });

export default HomeScreen;
