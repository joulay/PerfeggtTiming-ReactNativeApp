import React, { Component } from 'react'
import { View, Image, Dimensions, Text } from 'react-native'
import Swiper from 'react-native-swiper'
const { width, height } = Dimensions.get('window');

export default class extends Component {
  render () {
    return (
      <View style={styles.container}>
        
        <Swiper style={styles.wrapper}
          dot={<View style={{backgroundColor: '#FEF9E7', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
          activeDot={<View style={{backgroundColor: '#F9E79F', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
          paginationStyle={{
            bottom: 70
          }}
          loop={false}>
          <View style={styles.slide}>
            <Text style={styles.text}>soft</Text> 
          </View>
          <View style={styles.slide}>
            <Text style={styles.text}>medium</Text> 
          </View>
          <View style={styles.slide}>
            <Text style={styles.text}>hard</Text> 
          </View>

        </Swiper>
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1
  },
  wrapper: {
  },
  slide: {
    flex: 1,
    backgroundColor: 'transparent'
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 300
  }

}

