import React, { FC } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {  List } from '../../../src/models';
export interface IItemBlock {
    item: List | undefined,
}

const ItemBlock: FC<IItemBlock> = ({
    item,
}) => {


    return (
        <View style={styles.itemBlock}>
            <View style={styles.item}>
                <Text >Name</Text>
                <Text>{item?.listName}</Text>
            </View>
            <View style={styles.item}>
                <Text >List details</Text>
                <Text> {item?.listDetails}</Text>
            </View>
        </View>
    );
};

export default ItemBlock;
const styles = StyleSheet.create({
    itemBlock: {
        display: 'flex',
        justifyContent: 'space-around',
        width: '100%'
    },
    item: {
        padding: 15,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: '#d0d0d0',
        borderBottomWidth: 2
    },
});