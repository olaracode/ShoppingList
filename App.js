import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, Alert} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';
const App = () => {
  const [items, setItems] = useState([
    {id: '10', text: 'Milk'},
    {id: '15', text: 'Eggs'},
    {id: '11', text: 'Bread'},
    {id: '33', text: 'Juice'},
  ]);
  const randomId = () => {
    return Math.random() + 1000 * 100 - 100;
  };
  const deleteItem = (id) => {
    setItems((prevItem) => {
      return prevItem.filter((item) => item.id != id);
    });
  };
  const addItem = (text) => {
    if (!text) {
      Alert.alert('Error', 'Please enter an item', {text: 'Ok'});
    } else {
      setItems((prevItems) => {
        return [{id: randomId().toString(), text}, ...prevItems];
      });
    }
  };
  return (
    <View style={styles.container}>
      <Header />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
