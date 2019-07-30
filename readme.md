# Reservation App using React-Native and GraphQL

## Starting the application
- this project was created using `react-native init reservationApp --template typescript`
- clone the repository
- set up dev environment for android and/ Ios
- run `npm install`
- also install `react-native-cli` globally
- run `react-native run-ios` for ios and `react-native run-android` for android

##Test
- run `npm test`

## Code organization

- fastlane              - contains deployment and release related tasks
- src/api               - contains logic related to external api's
- src/assets            - contains static files such as images
- src/components        - shared components across features
- src/features          - consists of module for each application feature
    - components, styles, __tests__ - feature related components and its styles 
    - screens           - presentational components
- src/models            - model/schema for the application
- src/navigation        - contains navigation logic






