import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Button,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Colors from '../../constants/Colors';
import * as cartActions from '../../store/actions/cart';

const ProductDetailsScreen = (props) => {
  const productId = props.navigation.getParam('productId');
  const dispatch = useDispatch();

  const selectedProduct = useSelector((state) =>
    state.products.availableProducts.find((product) => product.id == productId)
  );
  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: selectedProduct.imageUrl }} />
      <View style={styles.actions}>
        <Button
          color={Colors.primary}
          title="Add to Cart"
          onPress={() => {
            dispatch(cartActions.addToCart(selectedProduct));
          }}
        />
      </View>
      <Text style={styles.price}>${selectedProduct.price.toFixed(2)}</Text>
      <Text style={styles.description}>{selectedProduct.description}</Text>
    </ScrollView>
  );
};

//explictly get title from navigation props
ProductDetailsScreen.navigationOptions = (navData) => {
  return {
    headerTitle: navData.navigation.getParam('productTitle'),
  };
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  actions: {
    marginVertical: 10,
    alignItems: 'center',
  },
  price: {
    fontFamily: 'open-sans-bold',
    fontSize: 20,
    color: '#888',
    textAlign: 'center',
    marginVertical: 20,
  },
  description: {
    fontFamily: 'open-sans',
    fontSize: 14,
    textAlign: 'center',
    marginHorizontal: 20,
  },
});

export default ProductDetailsScreen;
