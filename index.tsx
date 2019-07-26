/**
 * @format
 */

import {AppRegistry} from 'react-native';
import React from 'react';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import App from './App';
import {name as appName} from './app.json';

const cache = new InMemoryCache();

const client = new ApolloClient({
    cache,
    link: new HttpLink({ 
        uri: "https://us1.prisma.sh/public-luckox-377/reservation-graphql-backend/dev"
    })
});

const WrappedApp = () => <ApolloProvider client={client}><App/></ApolloProvider>

AppRegistry.registerComponent(appName, () => WrappedApp);
