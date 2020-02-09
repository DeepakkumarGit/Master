import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class app extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View>
                <Text style={{ fontSize: 20, color: green }}>Hello world</Text>
                <Text style={{ fontSize: 20, color: green }}>Student</Text>
            </View>
        )
    }
}
