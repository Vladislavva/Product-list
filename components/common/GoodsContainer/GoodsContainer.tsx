import React, { FC } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import store from '../../../src/store/index';
import { useTranslation } from 'react-i18next';
import GoodsItem from '../GoodsItem/GoodsItem';
import { observer } from 'mobx-react-lite';

export interface IGoodsContainer {}

const GoodsContainer: FC<IGoodsContainer> = ({

}) => {
  const { t } = useTranslation();

  return (
    <View style={styles.goodsContainer}>
      {store.allItems.length ?
        <View style={styles.chipsStyles}>
          {store.allItems.map((item) => (<GoodsItem item={item} key={item.key}  />))}
        </View> :
        <View style={styles.emptyTextStyles}>
          <Text>{t('EmptyGoodsList')}</Text>
        </View>}
    </View>
  );
};

export default observer(GoodsContainer);
const styles = StyleSheet.create({
  goodsContainer:{
    height:'100%',
    width: '100%',
  },
  chipsStyles: {
    flex: 1,
    padding: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    width: '100%',
  },
  emptyTextStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }

});