import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, TextInput, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SearchResult() {
    const navigation = useNavigation();
    const [searchQuery, setSearchQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const generateSuggestions = (text) => {
      const suggestions = [
          'Happy birthday', 'Birthday', 'Birth day', 'Birthday party', 'Birth anniversary', 'Birth anniversary party',
          'Birthday celebration', 'Birth anniversary celebration', 'Cake cutting', 'Birthday cake cutting',
          'Birthday decoration', 'Birthday planning',
          'Marriage', 'Wedding', 'Marriage ceremony', 'Ring ceremony', 'Jai mala', 'Haldi', 'Mehendi', 'Mehendi ceremony',
          'Marriage ceremony', 'Wedding ceremony', 'Marriage party', 'Marriage function', 'Wedding party', 'Wedding ceremony',
          'Wedding function', 'Marriage feast', 'Wedding feast',
          'Party', 'Celebration', 'Occasion', 'Party celebration', 'Fest', 'Festival', 'Party occasion', 'Feast', 'Partying',
          'Celebrating', 'Birthday party', 'Marriage party',
          'Decoration', 'Tents', 'Decoratives', 'Decoration', 'Sajawat', 'Decorating', 'Designs', 'Beautiful designs',
          'Designer', 'Designer mandap', 'Designer party', 'Designer marriage',
          'Photos', 'Photography', 'Photographer', 'Wedding photography', 'Pre wedding photography', 'Photo shoot', 'Camera',
          'Camera man', 'Videographer', 'Videography', 'Wedding photography and video', 'Wedding videography', 'Wedding videos maker',
          'Wedding album', 'Wedding videos', 'Party video', 'Photoshoot', 'Photo studio',
          'Catering', 'Food', 'Marriage food', 'Food items', 'Marriage catering', 'Food for marriage', 'Marriage feast',
          'Caterer', 'Caterings', 'Catering marriage', 'Caterers for marriage', 'Food for marriage', 'Hotel', 'Food stall',
          'Marriage stall', 'Anniversary food', 'Anniversary catering', 'Services', 'Catering services', 'Caterers for anniversary',
          'Birthday catering', 'Biriyani', 'Dal', 'Thali', 'Starter', 'Dessert', 'Main course', 'Marriage special food'
      ];
      return suggestions.filter(suggestion => suggestion.toLowerCase().includes(text.toLowerCase()));
  };
  

    const handleSearch = () => {
        console.log('Searching for:', searchQuery);
        // You can call your API here to fetch the expected businesses based on the search query
    };

    const handleTextChange = (text) => {
        setSearchQuery(text);
        if (text === '') {
            setSuggestions([]); // Clear suggestions when search text is empty
        } else {
            const newSuggestions = generateSuggestions(text);
            setSuggestions(newSuggestions);
        }
    };

    const renderSuggestionItem = ({ item }) => (
        <TouchableOpacity style={styles.suggestionItem}>
            <Text>{item}</Text>
        </TouchableOpacity>
    );

    return (
        <View>
            <View style={styles.headerContainer}>
                <View style={styles.searchBarContainer}>
                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={() => navigation.goBack()}
                    >
                        <Ionicons name="arrow-back-sharp" size={30} color="black" />
                    </TouchableOpacity>
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search..."
                        value={searchQuery}
                        onChangeText={handleTextChange}
                        onSubmitEditing={handleSearch}
                    />
                </View>
                <FlatList
                    data={suggestions}
                    renderItem={renderSuggestionItem}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        paddingHorizontal: 10,
        marginTop: 10,
    },
    searchBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
    },
    backButton: {
        padding: 10,
    },
    searchInput: {
        flex: 1,
        paddingVertical: 8,
        paddingHorizontal: 12,
    },
    suggestionItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
    },
});
