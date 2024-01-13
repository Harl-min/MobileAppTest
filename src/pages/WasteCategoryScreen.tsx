/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Input} from '../components/Input/index';
import Toolbar from '../components/toolbar';
import {Button} from '../components/Button/Index';
import {Searchbar} from 'react-native-paper';
import {List} from 'react-native-paper';
import {Chip} from 'react-native-paper';

export default function WasteCategory({navigation}) {
  const viewCategory = () => {
    // Handle waste category
    navigation.navigate('ScheduleDetails');
  };

  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <>
      <Toolbar
        title="SchedulePickup"
        onBackPress={navigation.goBack}
        rightIconName="home-sharp"
      />
      <View style={styles.container}>
        {/* <Chip icon="information" onPress={() => console.log('Pressed')}>
          Example Chip
        </Chip> */}
<Text>Select each waste you’ll like for Pick-up from the waste category.</Text>
        <Searchbar
          style={styles.Searchbar}
          placeholder="Search"
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
        <List.AccordionGroup>
          <List.Accordion title="Pet Bottles" id="1">
            <List.Item title="Item 1" />
          </List.Accordion>
          <List.Accordion title="Nylon" id="2">
            <List.Item title="Item 2" />
          </List.Accordion>
          <List.Accordion title="Paper" id="3">
            <List.Item title="Item 3" />
          </List.Accordion>
        </List.AccordionGroup>
        <Button title={'Done'} handleSubmit={viewCategory} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 23,
    marginVertical: 24,
  },
  Searchbar: {
    borderRadius: 6,
    marginVertical: 32
  }
})