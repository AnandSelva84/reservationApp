import React, { Component, Fragment } from 'react';
import {
    ScrollView,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import gql from "graphql-tag";
import { Mutation, MutationFn, OperationVariables, MutationResult } from "react-apollo";
import { TextField } from 'react-native-material-textfield-reborn';
import { query } from '../../home/components'
import styles from './styles';

export const CREATE_RESERVATION = gql`
  mutation CreateReservation($data: ReservationCreateInput!) {
    createReservation(data: $data) {
      id
      name
      hotelName
      arrivalDate
      departureDate
    }
  }
`;

class CreateReservation extends Component {
    public state: any;
    public props: any;
    public setState: any;
    public name: any;
    public departureDate: any;
    public arrivalDate: any;

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            hotelName: '',
            arrivalDate: '',
            departureDate: ''
        }
    }

    handleSubmit = (createReservation) => {
        const fields = [
            { key: "name", value: "Name" },
            { key: "hotelName", value: "Hotel Name" },
            { key: "arrivalDate", value: "Arrival Date" },
            { key: "departureDate", value: "Departure Date" }
        ]
        for (let i = 0; i < fields.length; i++) {
            if (!this.state[fields[i].key]) {
                alert(`${fields[i].value} cannot be empty`)
            }
        }
        createReservation({
            variables: { data: this.state }
        })

    }

    render() {
        return (
            <Mutation mutation={CREATE_RESERVATION}
                refetchQueries={[{ query: query(10) }]}
            >
                {(createReservation: MutationFn<any, OperationVariables>, { data }:  MutationResult<any>) => (
                    <Fragment>
                        {data && this.props.navigation.navigate("Home")}
                        <ScrollView style={styles.parentView}>
                            <View style={styles.messageView}>
                                <Text style={styles.header}>New Reservation</Text>
                            </View>
                            <View style={styles.centerView}>
                                <TextField
                                    fontSize={20}
                                    tintColor={'#a3c6ff'}
                                    baseColor={'#435873'}
                                    textColor={'#515151'}
                                    lineWidth={1.5}
                                    inputContainerPadding={2}
                                    label='Name'
                                    returnKeyType="go"
                                    onChangeText={(name) => this.setState({ name })}
                                    value={this.state.name}
                                    autoCorrect={false}
                                    ref={(input) => this.name = input}
                                />
                                <TextField
                                    fontSize={20}
                                    tintColor={'#a3c6ff'}
                                    baseColor={'#435873'}
                                    textColor={'#515151'}
                                    lineWidth={1.5}
                                    inputContainerPadding={2}
                                    label='Hotel Name'
                                    onChangeText={(hotelName) => this.setState({ hotelName })}
                                    value={this.state.hotelName}
                                    autoCorrect={false}
                                    returnKeyType="next"
                                    onSubmitEditing={() => this.name.focus()}
                                />
                                <TextField
                                    fontSize={20}
                                    tintColor={'#a3c6ff'}
                                    baseColor={'#435873'}
                                    textColor={'#515151'}
                                    lineWidth={1.5}
                                    inputContainerPadding={2}
                                    label='Departure mm/dd/yyyy'
                                    returnKeyType="go"
                                    onChangeText={(departureDate) => this.setState({ departureDate })}
                                    value={this.state.departureDate}
                                    autoCorrect={false}
                                    ref={(input) => this.departureDate = input}
                                />
                                <TextField
                                    fontSize={20}
                                    tintColor={'#a3c6ff'}
                                    baseColor={'#435873'}
                                    textColor={'#515151'}
                                    lineWidth={1.5}
                                    inputContainerPadding={2}
                                    label='Arrived mm/dd/yyyy'
                                    returnKeyType="go"
                                    onChangeText={(arrivalDate) => this.setState({ arrivalDate })}
                                    value={this.state.arrivalDate}
                                    autoCorrect={false}
                                    ref={(input) => this.arrivalDate = input}
                                />
                                <View style={styles.padding}>
                                    <TouchableOpacity
                                        onPress={() => this.handleSubmit(createReservation)}
                                        style={styles.buttonContainer}>
                                        <Text style={styles.buttonText}>Submit</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>

                        </ScrollView>
                    </Fragment>
                )}
            </Mutation>
        );
    }
}

export default CreateReservation;
