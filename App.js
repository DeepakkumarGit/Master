import React, { Component } from 'react'
import { View, Text,StyleSheet} from 'react-native'


export default class app extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name : "Abcjjjdjojoi"
        }
    }

    componentDidMount() {

    }

render() {
return(
    <View style = {styles.container}>
    <Text style = {{fontSize : 20,color : violet}}>Hello world</Text>
    <Text style = {{fontSize : 20,color : violet}}>Student</Text>
    </View>
) 
}
}

const styles = StyleSheet.create({
    container : {
        flex : 1
    }
})
