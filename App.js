import React, { Component } from 'react'
import { View, Image, Dimensions, Text, Button } from 'react-native'
import Swiper from 'react-native-swiper'
import { createStackNavigator } from 'react-navigation';
import CountdownCircle from 'react-native-countdown-circle';
import CountDown from 'react-native-countdown-component';

const { width, height } = Dimensions.get('window');
const min = 60;
const duration = 10000;
const pattern = [1000, 2000, 3000, 4000];


export default class extends Component {
  state = {
    minutes: 4,
    count: 4 * min,
    isWorkTimer: false,
    isPause: true,
    isHidden: true
  }



  // state = {
  //   isHidden: true
  // }
  // showTimer = () => {
  //   this.setState({
  //     isHidden: false
  //   })
  // }


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
            {/* <CountdownCircle
              style={styles.countdown}
              seconds={5}
              radius={70} 
              borderWidth={3}
              color="#E8F8F5"
              bgColor="white"
              shadowColor="white"
              textStyle={{fontSize:20}}
              onTimeElapsed={()=>console.log('HERRO')}
            />   */}
            {/* <CountDown
              until={10}
              onFinish={() => alert('')}
              onPress={() => alert('hello')}
              size={20}
              timeToShow={['M','S']}
              digitBgColor={'#F9E79F'}
              digitTxtColor={'white'} //time
              timeTxtColor={'white'} //min sec
              size={25}
            /> */}
            <View style={styles.timeContainer}>
              <Text style={styles.title}>{this.state.count}</Text>
            </View>

            <Text style={styles.text}>soft boil</Text> 
            <Button 
              title="^"
              onPress={()=>this.showTimer()}/>
              {/* style={styles.text}
              title="soft"
              onPress={() => console.log('hi')}>soft */}
            
          </View>
          <View style={styles.slide}>
            <Text style={styles.text}>medium</Text> 
            {/* <Image
              style={styles.image}
              source={require('./img/2.jpg')}
              resizeMode='cover'
            /> */}
            <Button 
              title=">"
              onPress={()=>console.log('hi')}/>
          </View>
          <View>
            <Text style={styles.text}>hard</Text>
            <Button 
              title=">"
              onPress={()=>console.log('hi')}/>
          </View>
        

         

        </Swiper>
        {/* {this.state.isHidden ?  "" : <Countdown />}       */}
      
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
  },
  countdown: {
    
  }
}

