import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class app extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {

    }
    
render() {
return(
    <View>
    <Text style = {{fontSize : 20,color : violet}}>Hello world</Text>
    <Text style = {{fontSize : 20,color : violet}}>Student</Text>
    </View>
) 
}
}
