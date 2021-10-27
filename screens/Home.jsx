import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Home screen</Text>

            <Button
                title='Go to project'
                onPress={() => navigation.navigate('Project', { id: 1, name: "Mon premier projet" })}
            />

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
});
  
export default Home;