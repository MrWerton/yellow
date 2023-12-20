import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Spinner } from '../Spinner'

interface ButtonProps {
    title: string,
    onPress: () => void
    isOutline?: boolean
    isLoading?: boolean
}
export function Button({ onPress, title, isLoading, isOutline }: ButtonProps) {
    return (
        <TouchableOpacity onPress={onPress} style={isOutline ? [styles.container, styles.outlineStyde] : styles.container}>
            {isLoading ? <Spinner /> : <Text style={isOutline ? [styles.title, styles.outlineTitle] : styles.title}>{title}</Text>
            }
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        borderRadius: 8,
        backgroundColor: '#000'
    },
    outlineStyde: {
        borderColor: '#000',
        borderWidth: 1,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff'
    },
    outlineTitle: {
        color: '#000'
    }
})