import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const data = [
  'https://arma3.com/assets/img/wallpapers/contact/1/thumb.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Animated_Wallpaper_Windows_10_-_Wallpaper_Engine.gif/440px-Animated_Wallpaper_Windows_10_-_Wallpaper_Engine.gif',
  'https://arma3.com/assets/img/wallpapers/contact/1/thumb.jpg',
  'https://images.pexels.com/photos/556416/pexels-photo-556416.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'http://hdwpro.com/wp-content/uploads/2017/11/Awesome-Wallpaper.jpg'
];

export default function App() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount(count => {
        if (count >= data.length - 1) {
          this._scroll.scrollTo({x: 0, animated: true });
          return 0
        }
        this._scroll.scrollTo({x: width + count * width, animated: true });
        return count + 1;
      });
    }, 3000);
  }, []);

  function renderCity(url) {
    return (
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Image source={{ uri: url }} style={styles.image} />
        </View>
      </View>
    );
  }
    return (
      <View style={styles.container}>
        <ScrollView ref={_scroll => this._scroll = _scroll }horizontal>
          {data.map(url => {
            return renderCity(url);
          })}
        </ScrollView>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    marginTop: 30,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    width,
    height: 200,
    borderRadius: 10,
    marginTop: 10,
  },
  cardContainer: {
    justifyContent: 'center',
  },
  card: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    width: width,
  },
});
