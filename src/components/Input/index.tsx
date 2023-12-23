import { StyleSheet, Text, View, TextInputProps, TextInput } from 'react-native'
import React, { forwardRef } from 'react'
import { Icon } from 'phosphor-react-native'
import { useSharedValue } from 'react-native-reanimated'
interface InputProps extends TextInputProps {
    Icon?: Icon,
    label?: string
}

export const Input = forwardRef<TextInput, InputProps>(({ Icon, label, ...rest }, ref) => {

    const positionY = useSharedValue(0)

    const labelAnimationStyle = {
        transform: [{ translateY: positionY.value }]
    }

    const handleFocus = () => {
        positionY.value = -20
    }
    const handleBlur = () => {
        positionY.value = 0
    }
    return (


        <View>
            <Text style={styles.label}>{label}</Text>
            {Icon && <Icon size={14} />}
            <TextInput onBlur={handleBlur} onFocus={handleFocus} {...rest} ref={ref} />
        </View>
    )
}
)


const styles = StyleSheet.create({
    container: {
        width: "100%",
        padding: 16,
        backgroundColor: "red",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#ccc",
        position: "relative"
    },
    label: {
        position: "absolute",

        backgroundColor: "#111",
        paddingHorizontal: 4

    }
})