import React, { Component } from 'react'
import { View, Image, Dimensions, Text, Button, Vibration, TouchableOpacity } from 'react-native'
import Swiper from 'react-native-swiper'
const min = 60;
const DURATION = 10000;
const PATTERN = [1000, 2000, 3000];


export default class extends Component {
  constructor() {
    super()
    this.state = {
      softCount: null,
      mediumCount: null,
      hardCount: null,
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
    Vibration.vibrate(DURATION);
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
    if(this.state.softCount === 0) {
      this.startVibrating();
      clearInterval(this.softIntervalId); 
      alert("");
      this.setState({
        softCount:null,
      })
      return false;  
    }
    // console.log('countdown',this.state)
    if(this.setTimer.eggType === 'soft') {
      this.setState(prevState => ({
        softCount: prevState.softCount - 1,
      }))
    }
    
    if(this.state.mediumCount === 0) {
      this.startVibrating();
      clearInterval(this.mediumIntervalId);
      alert("");
      this.setState({
        mediumCount:null,
      })
      return false;  
    }
    if(this.setTimer.eggType === 'medium') {
      this.setState(prevState => ({
        mediumCount: prevState.mediumCount - 1,
     }))
    }

    if(this.state.hardCount === 0) {
      this.startVibrating();
      clearInterval(this.hardIntervalId);
      alert("");
      this.setState({
        hardCount:null,
      }) 
      return false; 
    }
    if(this.setTimer.eggType === 'hard') {
      this.setState(prevState => ({
        hardCount: prevState.hardCount - 1,
      }))
    }
  }

  reset = () => {
    this.setState(prevState => ({
      count: this.state.minutes * min
    }))
  }

  setTimer = () => {
    if(this.setTimer.eggType === 'soft') {
      clearInterval(this.softIntervalId);
      if(!this.state.restart) {
        // console.log('soft-------', this.state)
        const softCount = this.state.softCount;
        const countDown = this.countDown;
        this.softIntervalId = setInterval(function(){countDown(softCount)}, 1000);
      }
    } 
    if (this.setTimer.eggType === 'medium') {
      clearInterval(this.mediumIntervalId);
      if(!this.state.restart) {
        // console.log('medium-----', this.state)
        const mediumCount = this.state.mediumCount;
        const countDown= this.countDown;
        this.mediumIntervalId = setInterval(function(){countDown(mediumCount)}, 1000);
      }
    }
    if (this.setTimer.eggType === 'hard') {
      clearInterval(this.hardIntervalId);
      if(!this.state.restart) {
        const hardCount = this.state.hardCount;
        const countDown= this.countDown;
        this.hardIntervalId = setInterval(function(){countDown(hardCount)}, 1000);
      }
    }
    return;
  }

  softEgg = () => {
    this.setState(prevState => ({
      isWorkTimer: !prevState.isWorkTimer,
      isHidden: false,
      restart: !prevState.restart,
      softMinutes: 4,
      softCount: 4 * min,
    }))
    this.setTimer.eggType = 'soft';
    setTimeout(this.setTimer, 100)
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
    setTimeout(this.setTimer, 100)
  }

  hardEgg = () => {
    this.setState(prevState => ({
      isWorkTimer: !prevState.isWorkTimer,
      isHidden: false,
      restart: !prevState.restart,
      hardMinutes: 11,
      hardCount: 11 * min
    }))
    this.setTimer.eggType='hard';
    setTimeout(this.setTimer, 100)
    // setTimeout(() => {
    //   console.log('start h----',this.state)
    // }, 2000)
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
            <Image
               style={styles.image}
               source={require('./img/final03.png')}
               resizeMode='center'
             />
              <Text style={styles.text}>hard boiled</Text> 
              <Button
                onPress={this.hardEgg}
                title={this.state.restart ? 'start' : 'restart'} 
                accessibilityLabel="hard boiled timer"
              />
              <View style={styles.timeContainer}>
                {this.state.hardCount && <Text style={styles.title}>{this.clock(this.state.hardCount)}</Text>}
              </View>
            </View>
            <View style={styles.slide}>
              <Image
                style={styles.image}
                source={require('./img/final02.png')}
                resizeMode='center'
              />
               <Text style={styles.text}>medium boiled</Text> 
              <Button 
                title={this.state.restart ? 'start' : 'restart'} 
                onPress={this.mediumEgg}
                accessibilityLabel="medium boiled timer"
              />
              <View style={styles.timeContainer}>
                {this.state.mediumCount && <Text style={styles.title}>{this.clock(this.state.mediumCount)}</Text>}
              </View>
            </View>
            <View style={styles.slide}>
              <Image
                style={styles.image}
                source={require('./img/final01.png')}
                resizeMode='center'
              />
              <Text style={styles.text}>soft boiled</Text> 
              <Button style={styles.button}
                onPress={this.softEgg}
                title={this.state.restart ? 'start' : 'restart'} 
                accessibilityLabel="soft boiled timer"
              />
              <View style={styles.timeContainer}>
                {this.state.softCount && <Text style={styles.title}>{this.clock(this.state.softCount)}</Text>}
              </View>
            </View>
          </Swiper>
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
    backgroundColor: 'transparent',
    justifyContent: 'center'
  },
  text: {
    textAlign: 'center',
    fontSize: 14,
    color: '#D5DBDB',
  },
  image: {
    flexGrow:1,
    height: null,
    width: null,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 90,
    paddingBottom: 75,
    marginRight: 22
  },
  timeContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 75,
    color: '#AED6F1',  
    zIndex: 2,
    textAlign: 'center'
  }
}

