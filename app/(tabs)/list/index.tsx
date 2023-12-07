import { StyleSheet, View, Text } from 'react-native';
import { List, IconButton } from 'react-native-paper';
import { Stack } from "expo-router";
import React, { useState } from 'react';
import AddListItemModel from '../../../components/modals/AddListItemModal/AddListItemModal';
import { useTranslation } from 'react-i18next';
import ListContainer from '../../../components/common/ListContainer/ListContainer';


export default function ListView() {
  const { t } = useTranslation();

  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  return (
    <View style={styles.container}>
      <Stack.Screen options={{
        headerShown: true, title: t("List"), headerRight: () => (
          <IconButton
            icon="plus"
            size={20}
            onPress={() => showModal()}
          />
        ),
      }} />
      <ListContainer/>
      <AddListItemModel visible={visible}
        hideModal={hideModal}></AddListItemModel>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
