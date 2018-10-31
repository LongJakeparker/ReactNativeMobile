import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    ImageBackground,
    StyleSheet
} from 'react-native';

import defaultAvatar from '../../../../media/avatar_user_default.png';
import defaultBackground from '../../../../media/backgound_default.jpg';
import icHeart from '../../../../media/heart.png';

export default class Home extends Component {
    render() {
        return (
            <ImageBackground
                source={defaultBackground}
                imageStyle={{ resizeMode: 'cover' }}
                blurRadius={1}
                style={styles.container}
            >
                <View style={styles.userInfoContainer}>
                    <View style={styles.userContainer}>
                        <TouchableOpacity>
                            <Image source={defaultAvatar} style={styles.avatarStyle} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.textStyle}>User 1</Text>
                        </TouchableOpacity>
                    </View>
                    <Image source={icHeart} style={styles.iconHeartStyle} />
                    <View style={styles.userContainer}>
                        <TouchableOpacity>
                            <Image source={defaultAvatar} style={styles.avatarStyle} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.textStyle}>User 2</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.timeInfoContainer}>
                    <Text style={styles.textStyle}>Been Together</Text>
                    <Text style={styles.timeTextStyle}>1 years</Text>
                    <Text style={styles.textStyle}>Today</Text>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    userInfoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 50,
        alignItems: 'center'
    },
    userContainer: {
        alignItems: 'center'
    },
    timeInfoContainer: {
        alignItems: 'center',
        marginTop: 50
    },
    iconHeartStyle: {
        width: 70,
        height: 70
    },
    avatarStyle: {
        width: 80,
        height: 80,
        marginBottom: 7
    },
    textStyle: {

    },
    timeTextStyle: {
        marginVertical: 10,
        fontSize: 20,
        fontStyle: 'italic'
    }
});