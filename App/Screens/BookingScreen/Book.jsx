import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native'; // Import useFocusEffect
import GlobalApi from '../../Utils/GlobalApi';
import { useUser } from '@clerk/clerk-expo';
import ShowBookingList from './showBookingList';
import color from '../../Utils/color';

export default function Book() {
  const [bookingList, setBookingList] = useState([]);
  const { user } = useUser();
  const [loading, setLoading] = useState(false);

  const getUserBookings = () => {
    setLoading(true);
    GlobalApi.getUserBooking(user.primaryEmailAddress.emailAddress)
      .then(resp => {
        setBookingList(resp.bookings);
      })
      .finally(() => {
        setLoading(false); // Stop loading regardless of success or failure
      });
  };

  // Use useFocusEffect to reload bookings when the screen comes into focus
  useFocusEffect(
    React.useCallback(() => {
      if (user) {
        getUserBookings();
      }
    }, [user])
  );

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontFamily: 'outfit-medium', fontSize: 26 }}>
        My Bookings
      </Text>
      {bookingList?.length > 0 ? (
        <View>
          <FlatList
            data={bookingList}
            onRefresh={getUserBookings}
            refreshing={loading}
            renderItem={({ item, index }) => (
              <ShowBookingList
                business={item?.businessList}
                status={item.bookingStatus}
                booking={item}
              />
            )}
          />
        </View>
      ) : (
        <Text
          style={{
            fontFamily: 'outfit-medium',
            fontSize: 20,
            textAlign: 'center',
            marginTop: '50%',
            color: color.GRAY,
          }}>
          No Bookings yet
        </Text>
      )}
    </View>
  );
}
