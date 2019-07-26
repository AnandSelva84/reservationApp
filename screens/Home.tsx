import React, { useState, ReactNode } from 'react';
import { Query, QueryResult, OperationVariables } from 'react-apollo';
import gql from 'graphql-tag';
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    Platform,
    Image,
    TouchableHighlight,
    Dimensions
  } from 'react-native'; 

const { height, width } = Dimensions.get('window')

export const query = (first=10) => gql`
        query{
          reservations(first: ${first}, orderBy: createdAt_DESC ){
            id
            name
            hotelName
            arrivalDate
            departureDate
          } 
        }
`;

const Home = (props) => {
    const [first, setFirst] = useState(10);
    props.navigation.addListener(
      'didFocus',
      () => {
        setFirst(10)
      }
    );
    return (
      <View style={styles.container}>
        <Query query={query(first)}>
          {(result: QueryResult<any, OperationVariables>): ReactNode => {
            //If the result is done, then will return the FlatList
            if (result) {
              return (
                <FlatList
                  data={result.data.reservations}
                  onEndReached={() => setFirst(first + 10)}
                  renderItem={({ item }: any) =>
                  <View style={styles.cardContainer}>
                    <Image
                      style={styles.image}
                      source={{ uri: 'https://www.dike.lib.ia.us/images/sample-1.jpg/image' }}
                    />
                    <View style={styles.textContainer}>
                      <Text style={styles.text}>Name: {item.name}</Text>
                      <Text style={styles.text}>Arrival Date: {item.arrivalDate}</Text>
                      <Text style={styles.text}>Departure Date: {item.departureDate}</Text>
                      <Text style={styles.text}>{item.hotelName}</Text>
                    </View>
                  </View>
                  }
                />);
            }
          }}
        </Query>
        <TouchableHighlight style={styles.btnContainer} onPress={()=> props.navigation.navigate("CreateReservation")}><Text style={styles.button}>Add New Reservation</Text></TouchableHighlight>
      </View>
    );
  };


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
  
  export default Home;