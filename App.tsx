import React from 'react';
import {StyleSheet} from 'react-native';
import Home from './screen/Home';
import {PaperProvider} from 'react-native-paper';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Provider as StoreProvider} from 'react-redux';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Profile from './screen/Profile';
const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();
import Icon from 'react-native-vector-icons/AntDesign';
import ProductOverView from './screen/ProductOverView';

function BottomTab() {
  return (
    <BottomTabs.Navigator
      screenOptions={({navigation}) => ({
        headerStyle: {backgroundColor: '#a2d3a4'},
        headerTintColor: 'white',
        tabBarStyle: {backgroundColor: '#a2d3a4', height: 60},
        tabBarActiveTintColor: '#0C0404',
        // headerRight: ({tintColor}) => (
        //   <AddExpenseButton navigation={navigation} tintColor={tintColor} />
        // ),
        //headerRight: addHandler,
      })}>
      <BottomTabs.Screen
        name="RecentExpenses"
        component={Home}
        options={{
          title: 'Order Karo',
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => {
            return <Icon name="home" size={30} color={color} />;
          },
        }}
      />
      <BottomTabs.Screen
        name="AllExpenses"
        component={Profile}
        options={{
          title: 'Profile',
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => {
            return <Icon name="calendar" size={size} color={color} />;
          },
        }}
      />
    </BottomTabs.Navigator>
  );
}

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      {/* <StoreProvider store={store}> */}
      <PaperProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={BottomTab}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="Product" component={ProductOverView} />
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
