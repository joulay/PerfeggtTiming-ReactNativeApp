import React, { Component } from 'react'
import { View, Image, Dimensions, Text, Button } from 'react-native'
import Swiper from 'react-native-swiper'
import { createStackNavigator } from 'react-navigation';
import CountdownCircle from 'react-native-countdown-circle';
import CountDown from 'react-native-countdown-component';

const { width, height } = Dimensions.get('window');
const min = 60;
const duration = 10000;


export default class extends Component {
  constructor() {
    super()
    this.state = {
      minutes: null,
      count: null,
      isWorkTimer: true,
      restart: true,
      isHidden: true
    }
  }

  clock = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    const ourMinutes = minutes > 9 ? minutes : `0${minutes}`;
    const ourSeconds = seconds > 9 ? seconds : `0${seconds}`;

    return `${ourMinutes} ${ourSeconds}`;

  }

  countDown = () => {
    this.setState(prevState => ({
      count: prevState.count - 1,
    }))
  }

  reset = () => {
    this.setState(prevState => ({
      count: this.state.minutes * min
    }))
  }

  softEgg = () => {
    this.setState(prevState => ({
      isWorkTimer: !prevState.isWorkTimer,
      isHidden: false,
      restart: !prevState.restart,
      minutes: 4,
      count: 4 * min
    }))
    clearInterval(this.intervalId);
    if(this.state.restart) {
      this.intervalId = setInterval(this.countDown, 1000);
    }
  }

  mediumEgg = () => {
    this.setState(prevState => ({
      isWorkTimer: !prevState.isWorkTimer,
      isHidden: false,
      minutes: 7,
      count: 7 * min
    }))
    clearInterval(this.intervalId);
    if(this.state.restart) {
      this.intervalId = setInterval(this.countDown, 1000);
    }
  }

  hardEgg = () => {
    this.setState(prevState => ({
      isWorkTimer: !prevState.isWorkTimer,
      isHidden: false,
      minutes: 11,
      count: 11 * min
    }))
    clearInterval(this.intervalId);
    if(this.state.restart) {
      this.intervalId = setInterval(this.countDown, 1000);
    }
  }

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

            <Text style={styles.text}>soft boil</Text> 
            <Button
              onPress={this.softEgg}
              title={this.state.restart ? 'start' : 'restart'} 
            />
              {/* style={styles.text}
              title="soft"
              onPress={() => console.log('hi')}>soft */}
            <View style={styles.timeContainer}>
              <Text style={styles.title}>{this.clock(this.state.count)}</Text>
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
              disabled={!this.state.isWorkTimer} 
            />
            <View style={styles.timeContainer}>
              <Text style={styles.title}>{this.clock(this.state.count)}</Text>
            </View>
          </View>
          <View>
            <Text style={styles.text}>hard boiled</Text>
            <Button 
              title={this.state.restart ? 'start' : 'restart'} 
              onPress={this.hardEgg}
              disabled={!this.state.isWorkTimer} 
            />
            <View style={styles.timeContainer}>
              <Text style={styles.title}>{this.clock(this.state.count)}</Text>
            </View>
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
  timeContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    // height: 39,
    // width: 34
  }
}

