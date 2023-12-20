import React from 'react'
import { View, StyleSheet } from 'react-native/types'
import { Title } from '../Title'

interface HeaderProps {
    title: string
}
export const Header = ({ title }: HeaderProps) => {
    return (
        <View style={styles.container}>
            <Title title={title} />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16
    }
})