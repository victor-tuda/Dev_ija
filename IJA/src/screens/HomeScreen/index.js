import React from 'react';
import {View, Text} from 'react-native';

import { Auth, Amplify } from 'aws-amplify';

const HomeScreen = () => {
  return (
    <View>
      <Text style={{fontSize: 24, alignSelf: 'center'}}>Home, sweet home</Text>
    </View>
  );
};

export default HomeScreen;
