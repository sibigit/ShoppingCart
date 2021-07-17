import React from 'react';
import { View, FlatList, Text, StyleSheet, Animated, SafeAreaView, Image, StatusBar, Dimensions } from 'react-native';
import { Slider } from 'react-native-elements';
import APP_CONSTANTS from '@common/constants'

const DEVICE_WIDTH = Dimensions.get('window').width / 1.05;
const DEVICE_HEIGHT = Dimensions.get('window').width / 1.1;
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

export default class AnimatedList extends React.Component {
    state = {
        isLoading: false,
        animatedValue: new Animated.Value(0)
    };


    onRefresh = () => {
        this.setState({ isLoading: true })
        setTimeout(() => this.setState({ isLoading: false }), 1500)
    }

    _renderItem = ({ item }) => {
        return (
            <View>
                <View style={styles.singleColumnItem}>
                    <Image
                        style={{ width: DEVICE_WIDTH, height: DEVICE_HEIGHT, backgroundColor: 'white' }}
                        source={{ uri: "https://www.incimages.com/uploaded_files/image/1920x1080/getty_507716250_226806.jpg" }}
                    />

                    <Text style={styles.itemText}>{this.props.slideerValue}</Text>
                    <Text style={styles.itemText}>{item.arrival}</Text>
                    <Text style={styles.itemText}>{item.price}</Text>
                    <Text style={styles.itemText}>{this.props.slideerValue}</Text>
                </View>

            </View>
        );
    };

    render() {
        return (
            <AnimatedFlatList
                refreshing={this.state.isLoading}
                onRefresh={this.onRefresh}
                contentContainerStyle={{ paddingTop: 200 }}
                scrollEventThrottle={16}
                onScroll={this.props.onScroll}
                data={APP_CONSTANTS}
                renderItem={this._renderItem}
                keyExtractor={(item, i) => i}
                numColumns={4}
            />
        );
    }
}

const styles = StyleSheet.create({
    singleColumnItem: {
        flex: 1,
        justifyContent: 'center',
        height: "90%",
        width: '95%',
        margin: '2.5%',
    },
    itemText: {
        fontSize: 20,
        marginLeft: "5%",
        marginTop: "1%",
        textAlign: 'left',
        color: '#000'
    },
});