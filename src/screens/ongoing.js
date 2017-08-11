import React, { Component } from 'react';
import { Animated, Text, TouchableOpacity, View } from 'react-native';

import Animation from 'lottie-react-native';
import { BlurView } from 'react-native-blur';

import loader from '../animation/loader.json';

import { FluidCard, FluidHeader, FluidButton } from '../components';
import { GetItem, SetItem } from '../persistence/db-helper';

import Icon from '../resources/icon';
import NewTrip from './new-trip';

import { height, width } from '../global';

class Ongoing extends Component {
  state = {
    onStartFade: new Animated.Value(0),
    newTripFade: new Animated.Value(0),
    displayNewTripView: false,
    displayLoadingBar: true,
    blur: false,
    id: '',
    results: {},
    disabled: true,
    visible: true,
  };

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.fadeInit();
    this.setFlip();
  }

  componentDidMount() {
    GetItem('ID').then(id => this.setState({ id: id }));
  }

  fadeInit() {
    Animated.timing(this.state.onStartFade, {
      toValue: 1,
      duration: 2000,
    }).start(animation => {
      if (animation.finished) {
        this.setState({ disabled: false });
      }
    });
  }

  setFlip() {
    this.flipValue = new Animated.Value(0);
    this.flipValueListener = 0;

    this.flipValue.addListener(({ value }) => {
      this.flipValueListener = value;
    });

    this.frontInterpolate = this.flipValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['0deg', '180deg'],
    });
    this.backInterpolate = this.flipValue.interpolate({
      inputRange: [0, 180],
      outputRange: ['180deg', '360deg'],
    });
  }

  flipCard() {
    if (this.flipValueListener >= 90) {
      Animated.spring(this.flipValue, {
        toValue: 0,
        friction: 8,
        tension: 10,
      }).start();
    } else {
      Animated.spring(this.flipValue, {
        toValue: 180,
        friction: 8,
        tension: 10,
      }).start();
    }
    // Need to make a state var holding isFlipped and Remove the reverse animation
  }

  fetchResults = async () => {
    let response = await fetch(
      'http://localhost:8000/v1/results?id=' + this.state.id,
    );

    return await response.json();
  };

  flipAndLoad = () => {
    this.fetchResults()
      .then(results => SetItem('RESULTS', JSON.stringify(results)))
      .catch(reason => console.log(reason.message));

    this.flipCard();

    pause = () => {
      setTimeout(() => {
        this.loading.play();
      }, 750);
    };

    this.state.displayLoadingBar ? pause() : null;

    GetItem('RESULTS').then(results => {
      this.setState({ results: JSON.parse(results) });
      this.state.displayLoadingBar ? pause() : null;
    });
  };

  newTrip() {
    const frontAnimatedStyle = {
      transform: [{ rotateY: this.frontInterpolate }],
      backfaceVisibility: 'hidden',
    };
    const backAnimatedStyle = {
      transform: [{ rotateY: this.backInterpolate }],
      backfaceVisibility: 'hidden',
    };

    fadeInNewTrip = () => {
      Animated.timing(this.state.newTripFade, {
        toValue: 1,
        duration: 250,
      }).start();
    };

    fadeOutNewTrip = () => {
      Animated.timing(this.state.newTripFade, {
        toValue: 0,
        duration: 250,
      }).start(() => {
        this.setState({
          displayNewTripView: false,
          blur: false,
          newTripFade: new Animated.Value(0),
          visible: true,
        });
      });
    };

    loadingBar = () =>
      <Animation
        ref={animation => {
          this.loading = animation;
        }}
        style={{
          width: width * 0.8,
          height: width * 0.8,
        }}
        loop={true}
        source={loader}
      />;

    fadeInNewTrip();

    return (
      <Animated.View
        style={[styles.centerView, { opacity: this.state.newTripFade }]}>
        <FluidCard
          height={height * 0.7}
          style={[
            backAnimatedStyle,
            { borderWidth: 0, justifyContent: 'center' },
          ]}>
          <View style={{ flex: 0, borderWidth: 0 }}>
            {this.state.displayLoadingBar ? loadingBar() : null}
          </View>
        </FluidCard>
        <FluidCard
          height={height * 0.7}
          style={[
            { borderWidth: 0, position: 'absolute', justifyContent: 'center' },
            frontAnimatedStyle,
          ]}>
          <View style={{ borderWidth: 0 }}>
            <NewTrip />
            <View style={{ flex: 0, justifyContent: 'center', borderWidth: 0 }}>
              <FluidButton
                alignSelf="center"
                style={{ marginTop: height * 0.7 * 0.06 }}
                onPress={() => this.flipAndLoad()}>
                Next
              </FluidButton>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              fadeOutNewTrip();
            }}
            style={{
              position: 'absolute',
              top: 0,
              borderWidth: 0,
            }}>
            <Icon
              name="X"
              size={15}
              color="#2B2B2B"
              style={{
                borderWidth: 0,
                marginLeft: height * 0.7 * 0.04,
                marginTop: height * 0.7 * 0.04,
                marginBottom: height * 0.7 * 0.04,
              }}
            />
          </TouchableOpacity>
        </FluidCard>
      </Animated.View>
    );
  }

  editTrip() {
    return;
  }

  itinerary() {
    return;
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <FluidHeader>Ongoing</FluidHeader>
        <Animated.View
          style={{
            alignItems: 'center',
            opacity: this.state.onStartFade,
          }}>
          {this.state.visible &&
            <TouchableOpacity
              disabled={this.state.disabled}
              onPress={() => {
                this.setState({ displayNewTripView: true, blur: true });
                this.setState({ visible: false });
              }}>
              <FluidCard
                height={height * 0.52}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={styles.textStyle}>Tap to add a new trip.</Text>
              </FluidCard>
            </TouchableOpacity>}
        </Animated.View>
        {this.state.blur
          ? <BlurView blurType="light" style={styles.absolute} />
          : null}
        {this.state.displayNewTripView ? this.newTrip() : null}
      </View>
    );
  }
}

const styles = {
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },

  initCard: {
    alignItems: 'center',
  },

  centerView: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },

  textStyle: {
    fontFamily: 'Rubik',
    fontSize: 18,
    fontWeight: '200',
    textAlign: 'center',
  },
};

export default Ongoing;
