import { useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView } from 'react-native'
// import Highlight from './components/Highlight'
import Task from './components/Task'

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.tasksWrapper}>
                <Text style={styles.sectionTitle}>Today's tasks,</Text>
                {/* <View>
                    <Highlight />
                </View> */}
                <View style={styles.items}>
                    <TouchableOpacity>
                        <Task text='Workout at 6:00 PM' />
                    </TouchableOpacity>
                </View>
            </View>

            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.writeTaskWrapper}>
                <TextInput style={styles.input} placeholder={'Write a task'} />
                <TouchableOpacity>
                    <View style={styles.addWrapper}>
                        <Text style={styles.addText}>+</Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#141518',
    },
    tasksWrapper: {
        paddingTop: 70,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#d2d3d8',
    },
    items: {
        marginTop: 30,
    },
    writeTaskWrapper: {
        position: 'absolute',
        bottom: 30,
        paddingHorizontal: 20,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        color: '#d7d7df',
    },
    input: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: '#282c2e',
        borderRadius: 12,
        borderColor: '#282c2e',
        borderWidth: 1,
        width: 250,
        color: '#d7d7df',
    },
    addWrapper: {
        width: 50,
        height: 50,
        backgroundColor: '#282c2e',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#282c2e',
        borderWidth: 1,
    },
    addText: {
        color: '#78abf8',
    },
})
