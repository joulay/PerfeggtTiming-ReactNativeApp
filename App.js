import React, { Component } from 'react'
import { View, Image, Dimensions, Text, Button } from 'react-native'
import Swiper from 'react-native-swiper'
import { createStackNavigator } from 'react-navigation';
import CountdownCircle from 'react-native-countdown-circle';

const { width, height } = Dimensions.get('window');

export default class extends Component {
  render () {
    return (
      <View style={styles.container}>
        
        <Swiper 
          style={styles.wrapper}
          dot={<View style={{
            backgroundColor: '#FEF9E7', 
            width: 13, 
            height: 13, 
            borderRadius: 7, 
            marginLeft: 7, 
            marginRight: 7}} 
          />}
          activeDot={<View style={{
            backgroundColor: '#F9E79F', 
            width: 13, 
            height: 13, 
            borderRadius: 7, 
            marginLeft: 7, 
            marginRight: 7}} 
          />}
          paginationStyle={{
            bottom: 100
          }}
          loop={false}>
          <View style={styles.slide}>
            <CountdownCircle
              seconds={4}
              radius={65} 
              borderWidth={3}
              color="#E8F8F5"
              bgColor="white"
              shadowColor="white"
              textStyle={{fontSize:20}}
              onTimeElapsed={()=>console.log('HERRO')}

            />
            <Text style={styles.text}>soft boil</Text> 
            <Button 
              title="^"
              onPress={()=>console.log('hi')}/>
              {/* style={styles.text}
              title="soft"
              onPress={() => console.log('hi')}>soft */}
            
          </View>
          <View style={styles.slide}>
            <Text style={styles.text}>medium</Text> 
            <Button 
              title=">"
              onPress={()=>console.log('hi')}/>
            {/* <MediumEgg 
              style={styles.text}
              onPress={() => ('MediumEgg')}>
              <Text style={styles.text}>medium</Text> 
            </MediumEgg> */}
          </View>
          <View>
            <Text style={styles.text}>hard</Text>
            <Button 
              title=">"
              onPress={()=>console.log('hi')}/>
          </View>
          
            {/* <Text style={styles.text}>hard</Text>  */}
            
            {/* <Image
              style={styles.image}
              source={require('./img/2.jpg')}
              resizeMode='cover'
            /> */}
         

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
    marginTop: 200,
  },
  image: {
    width,
    height,
  }
}

