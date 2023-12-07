import React, { FC, useRef, useState } from 'react';
import { Pressable, StyleSheet, View, Animated, TouchableOpacity } from 'react-native';
import { List, IconButton, useTheme } from 'react-native-paper';
import DeleteModal from '../../modals/DeleteModal/DeleteModal';
import store from '../../../src/store';
import { observer } from 'mobx-react-lite';
import { List as ListItemType } from '../../../src/models';
import ChangeListModal from '../../modals/ChangeListModal/ChangeListModal';
import { Link } from 'expo-router';
import Swipeable from 'react-native-gesture-handler/Swipeable'
import { number } from 'yup';

export interface IListItem {
    id: number,
    item: ListItemType,
}

const ListItem: FC<IListItem> = ({
    id, item
}) => {
    const swipeableRef = useRef(null);
    const { colors } = useTheme();
    const [visible, setVisible] = useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => {
        setVisible(false);
        if (swipeableRef && swipeableRef.current) {
            swipeableRef.current.close();
        }
    }
    const [visibleChangeModal, setVisibleChangeModal] = useState(false);
    const showChangeModal = () => setVisibleChangeModal(true);
    const hideChangeModal = () => {
        setVisibleChangeModal(false);
        if (swipeableRef && swipeableRef.current) {
            swipeableRef.current.close();
        }
    }

    const RightActions = () => {
        return (
            <>
                <View style={{ justifyContent: 'center', borderBottomWidth: 1, borderBottomColor: '#6b4faa', backgroundColor: '#f4edf9 '  }}>
                    <Animated.View
                        style={{
                            paddingHorizontal: 10,
                        }}>
                        <IconButton
                            icon="delete"
                            iconColor='#6b4faa'
                            onPress={() => showModal()}
                        />
                    </Animated.View>
                </View>
            </>
        )
    }
    const LeftActions = () => {
        return (
            <>
                <View style={{ justifyContent: 'center', borderBottomWidth: 1, borderBottomColor: '#6b4faa', backgroundColor: '#f4edf9 ' }}>
                    <Animated.View
                        style={{
                            paddingHorizontal: 10,
                        }}>
                        <IconButton
                            icon="circle-edit-outline"
                            iconColor='#6b4faa'
                            onPress={() => showChangeModal()}
                        />
                    </Animated.View>
                </View>
            </>
        )
    }
    return (
        <View style={styles.list} key={item.id}>
            <Swipeable
                renderLeftActions={LeftActions}
                renderRightActions={RightActions}
                leftThreshold={2}
                rightThreshold={2}
                overshootLeft={false}
                overshootRight={false}
                ref={swipeableRef}
            >
                <Link href={`/list/${item.id}`} asChild>
                    <List.Item
                        title={item.listName}
                        description={item.listDetails || ' '}
                        left={props => <List.Icon {...props} icon="format-list-bulleted" />}
                        style={{...styles.listItem, backgroundColor: colors.primary }}
                    />
                </Link>
            </Swipeable>
            <ChangeListModal visible={visibleChangeModal} hideModal={hideChangeModal} item={item} />
            <DeleteModal visible={visible} hideModal={hideModal} modalHandler={() => { store.removeListItem(item) }} />
        </View>
    );
};

export default observer(ListItem);
const styles = StyleSheet.create({
    list: {
        width: '100%',
    },
    listItem: {
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#6b4faa',
        display: 'flex',
        alignItems: 'flex-start'
    },

});