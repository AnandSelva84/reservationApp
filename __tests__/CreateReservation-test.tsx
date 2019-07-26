/**
 * @format
 */

import  { ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { MockedProvider } from 'react-apollo/test-utils';
import CreateReservation, { CREATE_RESERVATION } from '../screens/CreateReservation';
import { mount } from 'enzyme';
import { TextField } from 'react-native-material-textfield-reborn';
const createTestProps = (props: Object) => ({
  ...props
});

const mockFn = () => null

const reservation = {
    "name": "Dsfasdf",
    "arrivalDate": "07/30/2019",
    "hotelName": "Bahamas Hilton Head",
    "id": "k88ykbheu8",
    "departureDate": "08/01/2019"
  }
const mocks = [
  {
    request: {
      query: CREATE_RESERVATION,
      variables: { data: reservation },
    },
    result: { data: { reservation } },
  },
];

describe("rendering", () => {
  let wrapper: any;
  let props: Object;
  props = createTestProps({ navigation: {navigate:  mockFn, addListener: mockFn}});
  wrapper = mount(
    <MockedProvider mocks={mocks} addTypename={false}>
      <CreateReservation {...props} />
    </MockedProvider>,
  );

  it("should render a <View />", () => {
    expect(wrapper.find(ScrollView)).toHaveLength(1);
  });

  it('should render loading state initially', () => {
    const component = mount(
      <MockedProvider mocks={mocks} addTypename={false}>
        <CreateReservation {...props} />
      </MockedProvider>,
    );
    expect(component.find(TextField)).toHaveLength(4);
  
    // find the button and simulate a click
    const button = component.find(TouchableOpacity);
    expect(button).toHaveLength(1);
  });
});
