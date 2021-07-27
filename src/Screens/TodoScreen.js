import React, {useState} from "react";
import {View, StyleSheet, Button, Text} from "react-native";
import {THEME} from "../theme";
import {AppCard} from "../components/ui/AppCard";
import {EditModal} from "../components/EditModal";


export const TodoScreen = ({goBack, todo, removeTodo}) => {
    const [modal, setModal] = useState(false);

    return (
        <View style={styles.todoScreenWrapper}>
            <EditModal visible={modal} onCancel={() => setModal(false)}/>
            <AppCard style={styles.card}>
                <Text style={styles.title}>{todo.title}</Text>
                <Button
                    title='change'
                    onPress={() => setModal(true)}
                />
            </AppCard>
            <View style={styles.buttonsArea}>
                <View style={styles.button}>
                    <Button
                        title='back'
                        color={THEME.GREY_COLOR}
                        onPress={goBack}
                    />
                </View>
                <View style={styles.button}>
                    <Button
                        title='delete'
                        color={THEME.DANGER_COLOR}
                        onPress={() => {
                            removeTodo(todo.id);
                            goBack()
                        }}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    todoScreenWrapper: {},
    buttonsArea: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    button: {
        width: '40%'
    },
    title: {
        fontSize: 20
    },
    card: {
        marginBottom: 20,
        padding: 15
    }
})
