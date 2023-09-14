import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Avatar, Badge, Icon, withBadge, CheckBox } from '@rneui/themed';

const BadgedIcon = withBadge(15)(Icon);

export default function Home({navigation}) {
    return (
        <View style={styles.container}>

            <Text>React Native Elements</Text>
            <Text>Component Showcase</Text>

            <StatusBar style="auto" />

            <View style={styles.rneComponents}>
                <Button style={styles.button} title="Solid" disabled />
                <Button style={styles.button} title="Outline" type="outline" />
                <Button style={styles.button} title="Solid" type="solid" loading />
                <Avatar
                    size={48}
                    rounded
                    icon={{ name: "pencil", type: "font-awesome" }}
                    containerStyle={{ backgroundColor: "#9700b9" }}
                />

                <Text style={styles.subHeader}>Badge as Indicator</Text>
                <View
                    style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 20,
                    marginBottom: 40,
                    gap: 20,
                    }}
                >
                    <View>
                    <Avatar
                        rounded
                        source={{ uri: 'https://randomuser.me/api/portraits/men/41.jpg' }}
                        size="medium"
                    />
                    <Badge
                        status="success"
                        containerStyle={{ position: 'absolute', top: 5, left: 0 }}
                    />
                    </View>
                    <BadgedIcon type="ionicon" name="ios-chatbubbles" />
                    <View>
                    <Avatar
                        rounded
                        source={{
                        uri: 'https://randomuser.me/api/portraits/women/40.jpg',
                        }}
                        size="medium"
                    />
                    <Badge
                        status="primary"
                        value={10}
                        containerStyle={{ position: 'absolute', top: 0, left: 40 }}
                    />
                    </View>
                </View>

                <CheckBox checked title="Checked" />
                <CheckBox unchecked disabled title="Unchecked & Disabled" />
                

            </View>
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
    rneComponents: {
        width: '90%',
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        marginTop: 20,
    },
    button: {
        width: 200,
    }
});
