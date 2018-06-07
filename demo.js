import React, { Component } from 'react'
import {
  View,
  Image,
  StatusBar,
  Dimensions
} from 'react-native'
import Swiper from 'react-native-swiper'
const { width, height } = Dimensions.get('window');

export default class extends Component {
  render () {
    return (
      <View style={styles.container}>
        <StatusBar barStyle='light-content' />
        <Image
          source={require('./img/bg.jpg')}
          style={styles.imgBackground}
        />
        <Swiper style={styles.wrapper}
          dot={<View style={{backgroundColor: 'rgba(255,255,255,.3)', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
          activeDot={<View style={{backgroundColor: '#fff', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7}} />}
          paginationStyle={{
            bottom: 70
          }}
          loop={false}>
          <View style={styles.slide}>
            {/* <Image
              style={styles.image}
              source={require('./img/1.jpg')}
              resizeMode='cover'
            /> */}
          </View>
          <View style={styles.slide}>
            {/* <Image
              style={styles.image}
              source={require('./img/2.jpg')}
              resizeMode='cover'
            /> */}
          </View>
          <View style={styles.slide}>
            {/* <Image 
              style={styles.image} 
              source={require('./img/3.jpg')} 
              resizeMode='cover'
            /> */}
          </View>
        </Swiper>
      </View>
    )
  }
}

const styles = {
  wrapper: {
  },

  slide: {
    flex: 1,
    backgroundColor: 'transparent'
  },
  container: {
    flex: 1,
  },

  imgBackground: {
    width,
    height,
    backgroundColor: 'transparent',
    position: 'absolute'
  },

  image: {
    width,
    height,
  }
}



import React, { Component } from 'react'
import { View, Image, Dimensions, Text, Button, Vibration, TouchableOpacity } from 'react-native'
import Swiper from 'react-native-swiper'
import { createStackNavigator } from 'react-navigation';
import CountdownCircle from 'react-native-countdown-circle';
import CountDown from 'react-native-countdown-component';
import { vibrate } from './utils/vibrate'

const { width, height } = Dimensions.get('window');
const min = 60;
const duration = 10000;


export default class extends Component {
  constructor() {
    super()
    this.state = {
      softCount: 1,
      mediumCount: 1,
      hardCount: 1,
      softMinute: 1,
      mediumMinute: 1,
      hardMinute: 1,
      isWorkTimer: true,
      restart: true,
      isHidden: true,
      isVibrating: false
    }
  }

  clock = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    const ourMinutes = minutes > 9 ? minutes : `0${minutes}`;
    const ourSeconds = seconds > 9 ? seconds : `0${seconds}`;

    return `${ourMinutes} ${ourSeconds}`;

  }

  startVibrating = () => {
    this.setState(prevState => ({
      isVibrating: true
    }))
    vibrate(duration);
  }

  stopVibration =() => {
    if(this.state.isVibrating) {
      Vibration.cancel()
      this.setState(prevState => ({
        isVibrating: false
      }))
    } else {
      return;
    }
  }

  countDown = () => {
    if(!this.state.softCount) {
      this.startVibrating();
      alert("");
    }
    console.log(this.state.softCount);
    this.setState(prevState => ({
      softCount: prevState.softCount - 1,
    }))
  }

  reset = () => {
    this.setState(prevState => ({
      count: this.state.minutes * min
    }))
  }

  setTimer = () => {
    console.log(this.setTimer.eggType)
    if(this.setTimer.eggType === 'soft') {
      clearInterval(this.intervalId);
      if(!this.state.restart) {
        const softCount = this.state.softCount;
        const countDown = this.countDown;
        this.intervalId = setInterval(function(){countDown(softCount)}, 1000);
      }
    } 
    if (this.setTimer.eggType === 'medium') {
      clearInterval(this.intervalId);
      if(!this.state.restart) {
        const mediumCount = this.state.mediumCount;
        const countDown= this.countDown;
        this.intervalId = setInterval(function(){countDown(mediumCount)}, 1000);
      }
    }
    
    return;
  }

  softEgg = () => {
    this.setState(prevState => ({
      isWorkTimer: !prevState.isWorkTimer,
      isHidden: false,
      restart: !prevState.restart,
      softMinutes: .1,
      softCount: .1 * min
    }))
    this.setTimer.eggType = 'soft';
    setTimeout(this.setTimer,1500)

  }

  mediumEgg = () => {
    this.setState(prevState => ({
      isWorkTimer: !prevState.isWorkTimer,
      isHidden: false,
      restart: !prevState.restart,
      mediumMinutes: 7,
      mediumCount: 7 * min
    }))
    this.setTimer.eggType='medium';
  }

  hardEgg = () => {
    this.setState(prevState => ({
      isWorkTimer: !prevState.isWorkTimer,
      isHidden: false,
      hardMinutes: 11,
      hardCount: 11 * min
    }))
    clearInterval(this.intervalId);
    if(this.state.restart) {
      this.intervalId = setInterval(function(){this.countDown(this.state.hardCount)}, 1000);
    }
  }

  render () {
    return (
      <TouchableOpacity 
        onPress={this.stopVibration} 
        disabled={!this.state.isVibrating} 
        style={styles.container}>

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
              />  
              <CountDown
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

              <Text style={styles.text}>soft boiled</Text> 
              <Button
                onPress={this.softEgg}
                title={this.state.restart ? 'start' : 'restart'} 
              />
                {/* style={styles.text}
                title="soft"
                onPress={() => console.log('hi')}>soft */}
              <View style={styles.timeContainer}>
                <Text style={styles.title}>{this.clock(this.state.softCount)}</Text>
              </View>
            </View>
            <View style={styles.slide}>
              <Text style={styles.text}>medium</Text> 
              {/* <Image
                style={styles.image}
                source={require('./img/2.jpg')}
                resizeMode='cover'
              /> */}
              <Button 
                title={this.state.restart ? 'start' : 'restart'} 
                onPress={this.mediumEgg}
                
              />
              <View style={styles.timeContainer}>
                <Text style={styles.title}>{this.clock(this.state.mediumCount)}</Text>
              </View>
            </View>
            <View style={styles.slide}>
              <Text style={styles.text}>hard boiled</Text> 
              <Button
                onPress={this.hardEgg}
                title={this.state.restart ? 'start' : 'restart'} 
              />
                {/* style={styles.text}
                title="soft"
                onPress={() => console.log('hi')}>soft */}
              <View style={styles.timeContainer}>
                <Text style={styles.title}>{this.clock(this.state.hardCount)}</Text>
              </View>
            </View>
          
                
          

          </Swiper>
          {/* {this.state.isHidden ?  "" : }       */}
        
        </View>
      </TouchableOpacity>
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
  timeContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    // height: 39,
    // width: 34
  }
}

