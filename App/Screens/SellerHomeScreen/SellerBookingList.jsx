import React, { Component, useState } from 'react'
import { Text, StyleSheet, View, FlatList, TouchableOpacity, Image } from 'react-native'
import color from '../../Utils/color';

export default function SellerBookingList ({sellerList},{loading}) {
console.log(sellerList)
const [activeItem, setActiveItem] = useState('Confirmed'); // State to keep track of active item

  const menuItems = [
    { key: 'confirmed', title: 'Confirmed', component: <ConfirmedComponent />, onPress: () => setActiveItem('Confirmed') },
    { key: 'requested', title: 'Requested', component: <RequestedComponent />, onPress: () => setActiveItem('Requested') },
  ];
  

function ConfirmedComponent() {
    return  <View>
    {sellerList.map((item, index) => (
    <View key={index} style={styles.itemContainer}>
       {item.bookings.map((booking, bookingIndex) => (
    <View style={{display:'flex',flexDirection:'row',gap:5}}>
      {/* <Image source={{uri:booking.userImage}}
      style={{height:40,width:40,borderRadius:100}}
      /> */}
      <Text>{booking.userName}</Text>
      <Text>{booking.date}</Text>
      <Text>{booking.userAddress}</Text>

    </View>
       ))}
    </View>
    ))}
    </View>
}

function RequestedComponent() {
  return <Text>Categories Component</Text>;
}
    return (
      <View>
      <View style={{borderTopLeftRadius:40,borderTopRightRadius:40,backgroundColor:color.WHITE,padding:20,display:'flex',justifyContent:'center',alignItems:'center'}}>
      <FlatList 
      horizontal={true}
      refreshing={loading}
      showsHorizontalScrollIndicator={false}
      data={menuItems} // Use the menuItems array as data
      keyExtractor={(item, index) => index.toString()} // Key extractor function

      renderItem={({ item }) => ( // Render item function
        <TouchableOpacity onPress={item.onPress} style={{ display:'flex', alignItems: 'center' }}>
          <View style={[styles.Container, {borderColor:item.title === activeItem ?color.PRIMARY_LIGHT : color.LIGHT_GRAY }]}>
            <Text style={{ fontFamily: 'outfit', color: item.title === activeItem ? color.PRIMARY : color.BLACK }}>{item.title}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
    </View>
    {menuItems.find(item => item.title === activeItem)?.component}

    </View>
    )
}

const styles = StyleSheet.create({
  Container: {
    padding: 8,
    borderColor: color.PRIMARY_LIGHT,
    borderBottomWidth: 1.5,
    marginRight: 10,
    marginTop: 5
  },
})
