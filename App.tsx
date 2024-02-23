import React from 'react';
import {StyleSheet} from 'react-native';
import Home from './screen/Home';
import {PaperProvider} from 'react-native-paper';
import {Provider as StoreProvider} from 'react-redux';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      {/* <StoreProvider store={store}> */}
      <PaperProvider>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </PaperProvider>
      {/* </StoreProvider> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
});

export default App;
