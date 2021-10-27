import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Task = ({ route }) => {

    const { id, name } = route.params;

    return (
        <View style={styles.container}>
            <Text>{name}</Text>
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
  
export default Task;