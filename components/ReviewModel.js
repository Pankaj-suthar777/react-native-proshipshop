import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import {Modal, Portal, Text, Button, PaperProvider} from 'react-native-paper';

const ReviewModel = ({visible, setVisible}) => {
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};
  const [text, setText] = React.useState('');
  return (
    <Portal>
      <Modal
        style={styles.modal}
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={containerStyle}>
        <Text style={styles.text}>Create a review</Text>
        <View>
          <TextInput
            multiline
            numberOfLines={4}
            label="Write a review"
            value={text}
            style={styles.input}
            onChangeText={text => setText(text)}
          />
        </View>
        <View style={styles.btnContainer}>
          <Button
            icon="pen"
            mode="elevated"
            onPress={() => console.log('Pressed')}>
            Submit
          </Button>
        </View>
      </Modal>
    </Portal>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
  },
  modal: {
    marginHorizontal: 12,
  },
  text: {
    marginBottom: 18,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    textAlign: 'center',
  },
  btnContainer: {
    marginBottom: 16,
    marginTop: 24,
  },
});

export default ReviewModel;
