import React from 'react';
import { View, FlatList, Text, StyleSheet, Animated, SafeAreaView, Image, StatusBar, Dimensions } from 'react-native';
import { Slider } from 'react-native-elements';

import APP_CONSTANTS from '@common/constants'
import AnimatedList from '@components/AnimatedList'


const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

export default class AnimatedHeader extends React.Component {
    state = {
        animatedValue: new Animated.Value(0),
        value: 1
    };

    componentDidMount() {
        StatusBar.setHidden(false);
    }

    render() {
        let translateY = this.state.animatedValue.interpolate({
            inputRange: [0, 200],
            outputRange: [0, -240],
            extrapolate: 'clamp',
        });

        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.container}>
                    <AnimatedList
                        slideerValue={this.state.value}
                        onScroll={Animated.event(
                            [
                                {
                                    nativeEvent: { contentOffset: { y: this.state.animatedValue } },
                                },
                            ],
                            { useNativeDriver: true }
                        )}
                    />
                    <Animated.View
                        style={[styles.headerWrapper, { transform: [{ translateY }] }]}
                    >
                        <Image
                            source={require('@assets/zara.png')}
                            style={{ width: "95%", height: "85%" }}
                        />
                        <View style={styles.sliderView}>
                            <Slider
                                value={this.state.value}
                                onValueChange={(value) => this.setState({ value })}
                                thumbStyle={styles.thumbStyle}
                                minimumValue={1}
                                maximumValue={4}
                                step={1}
                                vertical={false}
                                orientation={'horizontal'}
                            />
                        </View>

                    </Animated.View>
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: "5%",
    },
    headerWrapper: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0)',
        height: "25%",
        left: 0,
        right: 0,
    },
    sliderView: {
        width: '95%', 
        alignItems: 'stretch',
        justifyContent: 'center'
    },
    thumbStyle:{
        width: 18, 
        height: 18, 
        backgroundColor: '#000', 
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 }, 
        shadowRadius: 2, 
        shadowOpacity: 0.35,
    }
});
