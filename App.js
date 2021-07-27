import React, {useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {Navbar} from "./src/components/Navbar";
import {MainScreen} from "./src/Screens/MainScreen";
import {TodoScreen} from "./src/Screens/TodoScreen";

export default function App() {
    const [todoId, setTodoId] = useState(null)
    const [todos, setTodos] = useState([]);

    const addTodo = title => {
        setTodos(prevState => [...prevState, {
            id: Date.now().toString(),
            title
        }])
    }

    const removeTodo = id => {
        const todo = todos.find(t => t.id === id)
        Alert.alert(
            'Delete element',
            `Want delete "${todo.title}"?`,
            [
                {
                    text: 'cancel',
                    style: 'cancel'
                },
                {
                    text: 'delete',
                    onPress: () => {
                        setTodos(prevState => prevState.filter(todo => todo.id !== id));
                    }
                }
            ],
            {cancelable: false},
        );
    }

    const onOpen = id => setTodoId(id)

    const goBack = () => setTodoId(null);

    let content =
        <MainScreen
            todos={todos}
            addTodo={addTodo}
            removeTodo={removeTodo}
            onOpen={onOpen}
        />

    if (todoId) {
        const selectedTodo = todos.find(todo => todo.id === todoId)
        content =
            <TodoScreen
                goBack={goBack}
                todo={selectedTodo}
                removeTodo={removeTodo}
            />
    }

    return (
        <View>
            <Navbar title='Todo App'/>
            <View style={styles.container}>
                {content}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 20
    },
});
