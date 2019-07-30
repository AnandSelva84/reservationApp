import React, { useState, ReactNode } from 'react';
import { Query, QueryResult, OperationVariables } from 'react-apollo';
import gql from 'graphql-tag';
import {
    View,
    Text,
    FlatList,
    Image,
    TouchableHighlight
  } from 'react-native';  
import styles from './styles';
import { ListItem } from '../../../models/reservation';

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
                renderItem={({ item }: ListItem) =>
                <View style={styles.cardContainer}>
                  <Image
                    style={styles.image}
                    source={require('../../../assets/hilton.jpeg')}
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

export default Home;
