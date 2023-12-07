import { Stack } from "expo-router";
import { MD3DarkTheme, MD3LightTheme, Provider as PaperProvider } from 'react-native-paper';
import i18n from "../src/translations/index";
import { I18nextProvider } from "react-i18next";
import { DarkScheme } from "../src/theme/darkTheme";
import { LightScheme } from "../src/theme/lightTheme";
import store from "../src/store";
import { observer } from "mobx-react-lite";

const LightTheme = {
    ...MD3LightTheme,
    colors: LightScheme,
};

const DarkTheme = {
    ...MD3DarkTheme,
    colors: DarkScheme,
};
const RootLayout = () => {
    const colorScheme = store.colorScheme;

    const theme = colorScheme === 'dark' ? DarkTheme : LightTheme;
    return (
        <I18nextProvider i18n={i18n}>
            <PaperProvider theme={theme}>
                <Stack>
                    <Stack.Screen
                        name="(tabs)"
                        options={{
                            headerShown: false,
                        }}
                    />
                </Stack>
            </PaperProvider>
        </I18nextProvider>
    );
}

export default observer(RootLayout);