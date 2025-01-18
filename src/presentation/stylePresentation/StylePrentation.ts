import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    listContainer: {
      paddingBottom: 150, // Espacio extra en la parte inferior
    },
    scrollView: {
      flex: 1,
      marginTop: 100,
      backgroundColor: '#f9f9f9',
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f9f9f9',
      padding: 20,
    },
    image: {
      height: 70,
      width: '100%',
      marginBottom: 20,
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    input: {
      marginVertical: 10,
      width: '100%',
    },
    button: {
      width: '50%',
      alignSelf: 'center',
      marginTop: 20,
      borderRadius: 30,
    },
    loadingContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    },
    description: {
      marginTop: 20,
      fontSize: 16,
      textAlign: 'center',
    },
    
    backdrop: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    text: {
      textAlign: 'center',
    },
  });

  export default styles;