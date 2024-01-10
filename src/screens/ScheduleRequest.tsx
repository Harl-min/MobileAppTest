/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Toolbar from '../components/toolbar';
import {List} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

const handleBackPress = () => {
  // Handle back button press
  console.log('Back button pressed');
};

const handleRightIconPress = () => {
  // Handle right icon press
  console.log('Right icon pressed');
};
const ScheduleRequest = () => {
    const [expanded, setExpanded] = React.useState(true);

    const handlePress = () => setExpanded(!expanded);
  return (
    <View>
         <Toolbar
        title="SchedulePickp"
        onBackPress={handleBackPress}
        rightIconName="home-sharp"
      />
 <List.Accordion
        title="Uncontrolled Accordion"
        left={props => <List.Icon {...props} icon="folder" />}>
        <List.Item title="First item" />
        <List.Item title="Second item" />
        <Icon
          size={30}
          name="volume-high
  "
          color="red"
        />
      </List.Accordion>

      <List.Accordion
        title="Controlled Accordion"
        left={props => <List.Icon {...props} icon="folder" />}
        expanded={expanded}
        onPress={handlePress}>
        <List.Item title="First item" />
        <List.Item title="Second item" />
      </List.Accordion>
    </View>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const styles = StyleSheet.create({});

export default ScheduleRequest;
