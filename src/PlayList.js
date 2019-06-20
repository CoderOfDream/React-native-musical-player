import React from 'react'
import { StyleSheet, Text, View, FlatList, Button } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Router, Scene } from 'react-native-router-flux'

class PlaylistItem {
    constructor(name, uri, image, id) {
        this.name = name;
        this.uri = uri;
        this.image = image;
        this.id = id;
    }

}

export const TRACKS = [
    new PlaylistItem(
        'Comfort Fit - “Sorry”',
        'https://s3.amazonaws.com/exp-us-standard/audio/playlist-example/Comfort_Fit_-_03_-_Sorry.mp3',
        'https://facebook.github.io/react/img/logo_og.png',
        0
    ),
    new PlaylistItem(
        'Mildred Bailey – “All Of Me”',
        'https://ia800304.us.archive.org/34/items/PaulWhitemanwithMildredBailey/PaulWhitemanwithMildredBailey-AllofMe.mp3',
        'https://facebook.github.io/react/img/logo_og.png',
        1
    ),
    new PlaylistItem(
        'Podington Bear - “Rubber Robot”',
        'https://s3.amazonaws.com/exp-us-standard/audio/playlist-example/Podington_Bear_-_Rubber_Robot.mp3',
        'https://facebook.github.io/react/img/logo_og.png',
        2
    )
];

const pushNamesToArr = () => {
    const arr = [];
    TRACKS.forEach((item, index) => arr.push({ name: item.name, uri: item.uri, image: item.image, id: index }));
    return arr;
}

export let id = null;

const PlayList = () => {
    return (
        <View style={styles.container}>
            <View>
                
                <FlatList
                    data={pushNamesToArr()}
                    renderItem={({ item }) => <Text
                        onPress={() => {
                         
                            id = item.id
                            return Actions.player();
                        }}
                        style={styles.trackItem}
                    >{item.name}</Text>}
                    keyExtractor={(item) => item.name}
                />
            </View>
            <View style={{flexDirection: 'row'}}>
                <Text style={styles.btn} title="1">1</Text>
                <Text style={styles.btn} title="2">2</Text>
                <Text style={styles.btn} title="3">3</Text>
                <Text style={styles.btn} title="4">4</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    trackItem: {
        padding: 15,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
    },
    btn: {
        flex: 1,
        backgroundColor: '#f3f3f3',
        padding: 20,
        textAlign: 'center',
        borderLeftWidth: 1,
        borderTopWidth: 1,
        borderColor: 'grey',
        fontSize: 17,
    }
})
export default PlayList;

