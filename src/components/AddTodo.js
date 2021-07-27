import React, {useState} from "react";
import {View, StyleSheet, TextInput, Button, Alert} from 'react-native';
import {THEME} from "../theme";

export const AddTodo = props => {

    const [inputValue, setInputValue] = useState('');



    const pressHandler = () => {
        if (inputValue.trim()) {
            props.onSubmit(inputValue);
            setInputValue('');
        } else {
            Alert.alert('todo is empty')
        }
    }

    return (
        <View style={styles.block}>
            <TextInput
                onChangeText={setInputValue}
                value={inputValue}
                autoCorrect={false}
                autoCapitalize='none'
                placeholder='enter todo name'
                style={styles.input}
            />
            <Button
                onPress={pressHandler}
                title='Add'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15
    },
    input: {
        width: '70%',
        padding: 10,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: THEME.MAIN_COLOR
    },

})
