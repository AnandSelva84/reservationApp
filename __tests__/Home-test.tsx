/**
 * @format
 */

import 'react-native';
import React from 'react';
import { shallow, mount } from 'enzyme';
import { View, FlatList } from 'react-native';
import { MockedProvider } from 'react-apollo/test-utils';
const wait = require('waait');
import  Home, { query } from '../screens/Home';

const createTestProps = (props: Object) => ({
  ...props
});

const mockFn = () => null

const mocks = [
  {
    request: {
      query: query(10),
    },
    result: {
      data: {
          reservations: [
              {
                "name": "Dcxdc",
                "arrivalDate": "Efderderd",
                "hotelName": "Dcfdcx",
                "id": "cjyg3hfrz4mkb0b0639yq65r6",
                "departureDate": "Dfcfdfcd"
              },
              {
                "name": "Dsfddc",
                "arrivalDate": "Fvc vfcvcx",
                "hotelName": "Fvc fvc",
                "id": "cjyg3cxlf4m3w0b06qm1ovmyw",
                "departureDate": "Vc fvcfvc"
              },
              {
                "name": "Dxcdcx",
                "arrivalDate": "Vc dc",
                "hotelName": "Dfcx",
                "id": "cjyg3bu7ahfgt0b190cqshxt9",
                "departureDate": "Sdfcx"
              },
              {
                "name": "Dgvdcx ",
                "arrivalDate": "09/22/2019",
                "hotelName": "Fvc cdc",
                "id": "cjyg3aexjhfcp0b1961es5t4u",
                "departureDate": "09/20/2019"
              },
              {
                "name": "New",
                "arrivalDate": "06/20/2020",
                "hotelName": "New hotel",
                "id": "cjyfxyeoah1oh0b19bxgj5rx4",
                "departureDate": "04/20/2020"
              },
              {
                "name": "Debbie Dooley",
                "arrivalDate": "07/23/2019",
                "hotelName": "Hilton3",
                "id": "7kohig32hnv",
                "departureDate": "07/26/2019"
              },
              {
                "name": "Debbie Gooding",
                "arrivalDate": "07/24/2019",
                "hotelName": "Hampton Inn Chicago Downtown/N Loop/Michigan Ave",
                "id": "nn04slw6leb",
                "departureDate": "07/27/2019"
              },
              {
                "name": "Dsfasdf",
                "arrivalDate": "07/30/2019",
                "hotelName": "Bahamas Hilton Head",
                "id": "k88ykbheu8",
                "departureDate": "08/01/2019"
              },
              {
                "name": "Jose Pino",
                "arrivalDate": "07/29/2019",
                "hotelName": "Embassy Suites by Hilton Chicago Downtown Magnificent Mile",
                "id": "l971zaosx5q",
                "departureDate": "07/31/2019"
              },
              {
                "name": "Jamal Hooka",
                "arrivalDate": "07/29/2019",
                "hotelName": "Bahamas Hilton Head",
                "id": "lgmsh38uzio",
                "departureDate": "07/31/2019"
              }
            ]
          },
      },
    },
];


describe("rendering", () => {
  let wrapper: any;
  let props: Object;
  props = createTestProps({ navigation: {navigate:  mockFn, addListener: mockFn}});
  wrapper = shallow(<Home {...props} />);

  it("should render a <View />", () => {
    expect(wrapper.find(View)).toHaveLength(3);
  });
  wrapper = mount(<MockedProvider mocks={mocks} addTypename={false}><Home {...props} /></MockedProvider>)

  it("should render a list of reservations", async () => {  
    await wait(0); 
    expect(wrapper.find(FlatList)).toHaveLength(1);
  })
});
