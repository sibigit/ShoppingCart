import React from 'react';
import { View, FlatList, Text, StyleSheet, Animated, Image, Dimensions } from 'react-native';
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
        setTimeout(() => this.setState({ isLoading: false }), 1000)
    }

    _renderItem = ({ item }) => {
        return (
            <View>
                {this.props.slideerValue == 1 && (
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
                )}

                {this.props.slideerValue == 2 && (
                    <View style={styles.twoColumnItem}>
                        <Image
                            style={{ width: DEVICE_WIDTH / 2.10, height: DEVICE_HEIGHT / 1.1, backgroundColor: 'white' }}
                            source={{ uri: "https://www.incimages.com/uploaded_files/image/1920x1080/getty_507716250_226806.jpg" }}
                        />
                        <Text style={styles.itemText}>{this.props.slideerValue}</Text>
                        <Text style={styles.itemText}>{item.arrival}</Text>
                        <Text style={styles.itemText}>{item.price}</Text>
                    </View>
                )}

                {this.props.slideerValue == 3 && (
                    <View style={styles.ThreeColumnItem}>
                        <Image
                            style={{ width: DEVICE_WIDTH / 3.25, height: DEVICE_HEIGHT / 1.1, backgroundColor: 'white' }}
                            source={{ uri: "https://www.incimages.com/uploaded_files/image/1920x1080/getty_507716250_226806.jpg" }}
                        />
                        <Text style={styles.itemText}>{this.props.slideerValue}</Text>
                        <Text style={styles.itemText}>{item.arrival}</Text>
                        <Text style={styles.itemText}>{item.price}</Text>
                    </View>
                )}

                {this.props.slideerValue == 4 && (
                    <View style={styles.FourColumnItem}>
                        <Image
                            style={{ width: DEVICE_WIDTH / 4.55, height: DEVICE_HEIGHT / 2.1, backgroundColor: 'white' }}
                            source={{ uri: "https://www.incimages.com/uploaded_files/image/1920x1080/getty_507716250_226806.jpg" }}
                        />
                    </View>
                )}
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
                key={this.props.slideerValue}
                numColumns={this.props.slideerValue}
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
    twoColumnItem: {
        flex: 1,
        height: "70%",
        width: '95%',
        margin: '2.5%',
    },
    ThreeColumnItem: {
        flex: 1,
        height: "50%",
        width: '95%',
        margin: '2.5%',
    },
    FourColumnItem: {
        flex: 1,
        height: "30%",
        width: '95%',
        margin: '2.5%',
    },
    itemText: {
        fontSize: 20,
        marginLeft: "2%",
        marginTop: "1%",
        textAlign: 'left',
        color: '#000'
    },
});