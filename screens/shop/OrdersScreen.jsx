import React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import OrderItem from '../../components/shop/OrderItem';
import Colors from '../../constants/Colors';

const OrdersScreen = (props) => {
  const orders = useSelector((state) => state.orders.orders);

  return orders.length == 0 ? (
    <View style={styles.summary}>
      <Text style={styles.orderText}>No Orders</Text>
    </View>
  ) : (
    <FlatList
      data={orders}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => (
        <OrderItem
          amount={itemData.item.totalAmount}
          date={itemData.item.readableDate}
          items={itemData.item.items}
        />
      )}
    />
  );
};

OrdersScreen.navigationOptions = (navData) => {
  return {
    // headerLeft: () => (
    //   <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
    //     <Item
    //       title="Menu"
    //       iconName={Platform.OS == 'android' ? 'md-menu' : 'ios-menu'}
    //       onPress={() => {
    //         navData.navigation.toggleDrawer();
    //       }}
    //     />
    //   </HeaderButtons>
    // ),
    headerTitle: 'Your Orders',
  };
};

const styles = StyleSheet.create({
  summary: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  orderText: {
    color: Colors.primary,
    fontFamily: 'open-sans-bold',
    fontSize: 16,
    margin: 20,
  },
});

export default OrdersScreen;
