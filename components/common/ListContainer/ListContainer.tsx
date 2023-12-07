import React, { FC, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ListItem from '../ListItem/Listitem';
import store from '../../../src/store/index';
import { useTranslation } from 'react-i18next';
import { observer } from 'mobx-react-lite';

export interface IListContainer { }

const ListContainer: FC<IListContainer> = ({

}) => {
  const { t } = useTranslation();
  return (
    <View style={styles.listBlock}>
      {store.lists.length ?
        <View style={styles.listContainer}>
          {
            store.lists.map((item, id) => <ListItem id={id} item={item} key={item.id} />)
          }
        </View> :
        <View style={styles.emptyTextStyles}>
          <Text>{t('EmptyProductsList')}</Text>
        </View>}
    </View>
  );
};

export default observer(ListContainer);
const styles = StyleSheet.create({
  listBlock:{
    width: '100%',
  },
  listContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    borderTopWidth: 1,
    height: '100%',
    width: '100%',

  },

  emptyTextStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});