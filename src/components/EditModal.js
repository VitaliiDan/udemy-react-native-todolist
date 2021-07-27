import React from "react";
import {View, StyleSheet, TextInput, Modal, Button} from "react-native";
import {THEME} from "../theme";

export const EditModal = ({visible, onCancel, todo}) => {
    return (
        <Modal
            visible={visible}
            animationType='slide'
            transparent={false} //<-- FULLSCREEN
        >
            <View style={styles.wrap}>
                <TextInput
                    style={styles.input}
                    placeholder='enter name of todo'
                    autoCapitalize='none'
                    autoCorrect={false}
                    maxLength={64}
                />
                <View style={styles.buttonsArea}>
                    <View style={styles.button}>
                        <Button
                            title='cancel'
                            color={THEME.DANGER_COLOR}
                            onPress={onCancel}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title='save'
                            // onPress={}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        padding: 10,
        borderBottomColor: THEME.MAIN_COLOR,
        borderBottomWidth: 2,
        width: '80%'
    },
    buttonsArea: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20
    },
    button: {
        width: '40%'
    }
})

