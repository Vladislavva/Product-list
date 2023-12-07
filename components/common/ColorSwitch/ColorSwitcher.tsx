import * as React from 'react';
import { Switch } from 'react-native-paper';
import store from '../../../src/store';
import { observer } from 'mobx-react-lite';

const ThemeSwitcher = () => {
    const [isSwitchOn, setIsSwitchOn] = React.useState(store.colorScheme === 'dark');

    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

    React.useEffect(() => {
        if (isSwitchOn) {
            store.changeColorScheme('dark');
        } else {
            store.changeColorScheme('light');
        }
    }, [isSwitchOn]);

    return <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />;
};

export default observer(ThemeSwitcher);