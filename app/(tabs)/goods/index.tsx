import { StyleSheet, View } from 'react-native';
import { Stack } from "expo-router";
import {  IconButton } from 'react-native-paper';
import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import AddGoodsModal from '../../../components/modals/AddGoodsModal/AddGoodsModal';
import { useTranslation } from 'react-i18next';
import GoodsContainer from '../../../components/common/GoodsContainer/GoodsContainer';

const GoodsView = observer(() => {
  const { t } = useTranslation();

  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);


  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerShown: true, title: t("Goods"), headerRight: () => (
            <IconButton
              icon="plus"
              size={20}
              onPress={() => showModal()}
            />
          ),
        }}
      />
      <AddGoodsModal
        visible={visible}
        hideModal={hideModal}
      />
      <GoodsContainer/>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  inputContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    margin: 10
  },
 
});
export default GoodsView;