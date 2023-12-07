import React, { FC } from 'react';
import { StyleSheet, View, Modal, TouchableWithoutFeedback, Text } from 'react-native';
import { TextInput, IconButton, Button } from 'react-native-paper';
import { useFormik } from 'formik';
import uuid from 'react-native-uuid';

import { listFormSchema } from '../schemas/index';
import store from '../../../src/store/index';
import { List } from '../../../src/models';
import { observer } from 'mobx-react-lite';

export interface IChangeListModal {
  visible: boolean,
  hideModal: any,
  item: List,
}

export interface IChangeListModalModel {
  listName: string,
  listDetails: string,
  id: string
}

const ChangeListModal: FC<IChangeListModal> = ({
  visible, hideModal, item
}) => {

    
    
  const changeList = (value: IChangeListModalModel): void => {
    store.changeList({
      ...value,
      id: item.id
    })
    hideModal();
  }
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik<IChangeListModalModel>({
    initialValues: {
      listName: item.listName,
      listDetails: item.listDetails,
      id: item.id
    },
    validationSchema: listFormSchema,
    onSubmit: (values: IChangeListModalModel) => {
      changeList(values);
    },

  });
  return (
    <Modal visible={visible} onDismiss={hideModal} transparent={true} >
      <TouchableWithoutFeedback onPress={() => hideModal()}>
        <View style={styles.modalStyle}>
          <TouchableWithoutFeedback>
            <View style={styles.modalInner}>
              <View style={styles.modalHeaderStyles}>
                <Text>Change this list: </Text>
                <IconButton
                  icon="close"
                  size={20}
                  mode='contained'
                  onPress={() => hideModal()}
                />
              </View>
              <TextInput
                mode="outlined"
                label="Add List Name"
                style={styles.fullWidth}
                value={values.listName}
                onChangeText={handleChange('listName')}
                onBlur={handleBlur('listName')}
              />
              {
                errors.listName && touched.listName ?
                  <View>
                    <Text style={styles.error}>{errors.listName}</Text>
                  </View> : null
              }
              <TextInput
                mode="outlined"
                label="Add List Details"
                style={styles.fullWidth}
                value={values.listDetails}
                onChangeText={handleChange('listDetails')}
                onBlur={handleBlur('listDetails')}
              />
              {
                errors.listDetails && touched.listDetails ?
                  <View>
                    <Text style={styles.error}>{errors.listDetails}</Text>
                  </View> : null
              }
              <Button
                style={styles.fullWidth}
                mode="contained"
                onPress={handleSubmit}
              >
                <Text>Change</Text>
              </Button>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default observer(ChangeListModal);
const styles = StyleSheet.create({
  modalStyle: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalInner: {
    height: 300,
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  closeRightStyles: {
    alignSelf: 'flex-end'
  },
  modalHeaderStyles: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%'
  },
  error: {
    color: 'red',
    paddingTop: 10,
    paddingBottom: 5
  },
  fullWidth: {
    width: '100%'
  }
});