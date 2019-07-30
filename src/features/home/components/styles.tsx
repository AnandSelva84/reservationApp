import { StyleSheet, Dimensions, Platform } from "react-native";

const { height, width } = Dimensions.get('window')

const styles = StyleSheet.create({
    cardContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      width: width * 0.9, 
      marginBottom: 20,
      backgroundColor: '#435873'
    },
    image: { 
      width: "100%", 
      height: 200 
    },
    textContainer: { 
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center', 
      marginTop: 30 
    },
    text: {
      fontSize: 15,
      fontWeight: '800',
      color: "#fff",
      fontFamily: Platform.select({
        ios: 'Chalkboard SE',
        android: 'sans-serif-condensed'
      })
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    button: {
      height: 60,
      width: '80%',
      color: 'white',
      textAlign: 'center',
      marginTop: 20,
      fontSize: 15,
      fontWeight: '800'
    },
    btnContainer: {
      backgroundColor: "black",
      width: "100%",
      justifyContent: 'center',
      alignItems: 'center'
    }
  });

  export default styles;