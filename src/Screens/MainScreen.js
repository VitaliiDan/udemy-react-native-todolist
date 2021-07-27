import React from "react";
import {View, StyleSheet, FlatList} from "react-native";
import {AddTodo} from "../components/AddTodo";
import {Todo} from "../components/Todo";


export const MainScreen = ({todos, addTodo, removeTodo, onOpen}) => {
    return (
        <View style={styles.mainScreenWrapper}>
            <AddTodo onSubmit={addTodo}/>
            <FlatList
                keyExtractor={item => item.id.toString()}
                data={todos}
                renderItem={({item}) => (<Todo todo={item} onRemove={removeTodo} onOpen={onOpen}/>)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    mainScreenWrapper: {
    }
})
