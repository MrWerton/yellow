import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

interface TitleProps {
    title: string
}
export const Title = ({ title }: TitleProps) => {
    return (
        <Text style={styles.title}>{title}</Text>
    )
}


const styles = StyleSheet.create({
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: 'black',
    }
})
