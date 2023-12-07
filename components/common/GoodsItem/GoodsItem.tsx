import React, { FC, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import DeleteModal from '../../modals/DeleteModal/DeleteModal';
import { Chip, IconButton } from 'react-native-paper';
import store from '../../../src/store/index'
import { Item } from '../../../src/models';
import { observer } from 'mobx-react-lite';
import ChangeGoodsModal from '../../modals/ChangeGoodsModal/ChangeGoodsModal';
export interface IGoodsItem {
    item: Item,
}

const GoodsItem: FC<IGoodsItem> = ({
    item,
}) => {

    const [visible, setVisible] = useState(false);
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);


    const [visibleChangeModal, setVisibleChangeModal] = useState(false);
    const showChangeGoodsModal = () => setVisibleChangeModal(true);
    const hideChangeGoodsModal = () => setVisibleChangeModal(false);

    const removeItem = (item: Item): void => {
        store.removeItem(item);
    }

    return (
        <View key={item.key} style={styles.chipStyles}>
            <Text>{item.value}</Text>
            <View style={styles.iconBlock}>
                <IconButton
                    icon="circle-edit-outline"
                    iconColor='#6b4faa'
                    size={15}
                    onPress={() => showChangeGoodsModal()}
                    style={styles.icon}
                />
                <IconButton
                    icon="close"
                    iconColor='#6b4faa'
                    size={15}
                    onPress={() => showModal()}
                    style={styles.icon}
                />
            </View>
            <DeleteModal visible={visible} hideModal={hideModal} modalHandler={() => removeItem(item)} />
            <ChangeGoodsModal visible={visibleChangeModal} hideModal={hideChangeGoodsModal} good={item} />
        </View>

    );
};

export default observer(GoodsItem);
const styles = StyleSheet.create({
    iconBlock: {
        display: 'flex',
        flexDirection: 'row',
    },
    icon: {
        padding: 0,
        margin: 0,
        width: 20,
        height: 20
    },
    chipStyles: {
        padding: 5,
        height: 35,
        margin: 5,
        display: 'flex',
        flexDirection: 'row',
        borderRadius: 7,
        borderWidth: 1,
        borderColor: '#6b4faa',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    // chipStyles: {
    //     margin: 5
    // }
});