import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Svg, { Circle, Line } from 'react-native-svg'

interface CloseButtonProps {
    onPress: () => void
    color?: string
    size?: number
}
export function CloseButton({ onPress, color = "#222", size = 60 }: CloseButtonProps) {

    const customStyle = {
        color: color,
        width: size,
        height: size,
    }
    return (
        <TouchableOpacity style={customStyle}>
            <Svg height={size} width={size} viewBox={`0 0 ${size} ${size}`}>
                <Circle cx={size / 2} cy={size / 2} r={size / 2} stroke={color} />
                <Line
                    x1={size * 0.25}
                    y1={size * 0.25}
                    x2={size * 0.75}
                    y2={size * 0.75}
                    stroke={color}
                    strokeWidth={size * 0.1}
                />
                <Line
                    x1={size * 0.75}
                    y1={size * 0.25}
                    x2={size * 0.25}
                    y2={size * 0.75}
                    stroke={color}
                    strokeWidth={size * 0.1}
                />
            </Svg>
        </TouchableOpacity>
    )
}

