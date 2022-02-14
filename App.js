import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';

import productsReducer from './store/reducers/product';

const rootReducer = combineReducers({
  products: productsReducer,
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <View>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    </Provider>
  );
}
