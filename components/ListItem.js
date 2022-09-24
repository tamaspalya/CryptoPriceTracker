import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'

const ListItem = () => {
    return (
        <TouchableOpacity>
            <View style={styles.itemWrapper}>

                {/*Left side*/}
                <View style={styles.leftWrapper}>
                    <Image
                        source={require('../assets/eth1.jpg')}
                        style={styles.image}
                    />
                    <View style={styles.titlesWrapper}>
                        <Text style={styles.title}>Ethereum</Text>
                        <Text style={styles.subtitle}>ETH</Text>
                    </View>
                </View>

                {/*Right side*/}
                <View style={styles.rightWrapper}>
                    <Text style={styles.title}>Price</Text>
                    <Text style={[styles.subtitle, { color: 'red' }]}>change</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    itemWrapper: {
        paddingHorizontal: 16,
        marginTop: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    leftWrapper: {
        textAlign: 'left',
        flexDirection: 'row',
        alignItems: 'center',
    },
    rightWrapper: {
        alignItems: 'flex-end',
    },
    titlesWrapper: {
        marginLeft: 8,
    },
    image: {
        height: 48,
        width: 48,
    },
    title: {
        fontSize: 18,
    },
    subtitle: {
        marginTop: 4,
        fontSize: 14,
        color: '#A9ABB1',
    },
})

export default ListItem