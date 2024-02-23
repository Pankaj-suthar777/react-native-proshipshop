import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';

const SelectableTextInput = ({qty}) => {
  const [selectedValue, setSelectedValue] = useState('');
  const [textInputValue, setTextInputValue] = useState('');

  // Generate data options from 1 to qty
  const data = Array.from({length: qty}, (_, index) => ({
    label: `Quantity ${index + 1}`,
    value: index + 1,
  }));

  const handlePickerChange = itemValue => {
    setSelectedValue(itemValue);
  };

  return (
    <View>
      <Picker
        style={styles.picker}
        selectedValue={selectedValue}
        onValueChange={handlePickerChange}>
        {data.map((item, index) => (
          <Picker.Item key={index} label={item.label} value={item.value} />
        ))}
      </Picker>
      <TextInput
        style={styles.inputConatiner}
        value={textInputValue}
        onChangeText={setTextInputValue}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  picker: {
    width: 200,
    backgroundColor: '#B6B6B4',
  },

  inputConatiner: {
    display: 'none',
    width: '100%',
  },
});

export default SelectableTextInput;
