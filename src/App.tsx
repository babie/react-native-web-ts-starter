import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native'

class App extends React.Component {
  public render() {
    return (
      <View style={styles.box}>
        <Text style={styles.text}>Hello, world!</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  box: { padding: 10 },
  text: { fontWeight: 'bold' }
})

export default App
