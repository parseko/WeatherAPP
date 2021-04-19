import React from 'react'
import {View, Platform, StyleSheet } from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import {colors} from '../utils/index'

export default function ReloadIcon({load}) {
    const reloadIconName = Platform.OS == 'ios' ? 'ios-refresh' : 'nd-refresh'  
    return (
        <View style={styles.reloadIcon} >
            <Ionicons onPress={load} name={reloadIconName} size={24} color={colors.SECONDARY_COLOR}/>
        </View>
    )
}

const styles = StyleSheet.create ({
    reloadIcon: {
        position: 'absolute',
        top: 60,
        right: 20
    }
})
