import { StyleSheet, View, Text } from 'react-native';
import { Stack } from "expo-router";
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import DropDownPicker from 'react-native-dropdown-picker';
import { observer } from 'mobx-react-lite';
import ThemeSwitcher from '../../../components/common/ColorSwitch/ColorSwitcher';
import store from '../../../src/store';

const  SettingsView = () => {
  const { t, i18n  } = useTranslation();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('ua');
  const [items, setItems] = useState([
    { label: 'English', value: 'en'},
    { label: 'Ukrainian', value: 'ua'}
  ]);

  useEffect(()=>{
    i18n.changeLanguage(value);
  }, [value]);

  return (
    <View style={styles.container}>
      <Stack.Screen options={{
        headerShown: true, title: t("Settings")
      }} />
      <View style={styles.switcherBlock}>
        <Text>{store.colorScheme === 'dark' ? t("DarkTheme") : t("LightTheme") }</Text>
        <ThemeSwitcher />
      </View>
      <View style={styles.switcherBlock}>
        <Text>{t("ChangeLang")}</Text>
        <DropDownPicker
          itemKey='value'
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          containerStyle={styles.dropdownContainer}
          style={styles.dropdown}
        />
      </View>
    </View>
  );
}
export default observer(SettingsView);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  switcherBlock: {
    padding: 15,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#d0d0d0',
    borderBottomWidth: 2
  },
  dropdownContainer:{
    width: "55%",
    alignSelf: 'center',
  },
  dropdown: {
    borderColor: '#d0d0d0',
    borderWidth: 2
  }

});
