import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import ImageOverlay from 'react-native-image-overlay';
let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

const data = [
  {
    time: '10:30pm',
    date: '5/23/2022',
    url: require('../assets/Selfies.jpg'),
  },
  {
    time: '9:45pm',
    date: '5/23/2022',
    url: require('../assets/Selfies.jpg'),
  },
  {
    time: '7:30pm',
    date: '5/23/2022',
    url: require('../assets/Selfies.jpg'),
  },
  {
    time: '6:00pm',
    date: '5/23/2022',
    url: require('../assets/Selfies.jpg'),
  },
  {
    time: '4:32pm',
    date: '5/23/2022',
    url: require('../assets/Selfies.jpg'),
  },
  {
    time: '3:38pm',
    date: '5/23/2022',
    url: require('../assets/Selfies.jpg'),
  },
];

const Home = props => {
  const mappedDate = data.map((date, index) => {
    return (
      <View style={{}}>
        <TouchableOpacity
          key={index}
          onPress={() => props.navigation.navigate('showImage', {date: date})}>
          <Image
            source={date.url}
            overlayColor="orange"
            overlayAlpha={0.4}
            rounded={25}
            style={{
              opacity: 0.7,
              height: deviceHeight / 3.5 - 12,
              width: deviceWidth / 2.2 - 6,
              borderRadius: 20,
              margin: 9,
            }}
          />
          <Text
            style={{
              position: 'relative',
              textAlign: 'center',
              color: 'white',
              bottom: 150,
              fontSize: 13,
            }}>
            {date.date}
          </Text>
          <Text
            style={{
              position: 'relative',
              textAlign: 'center',
              color: 'white',
              bottom: 150,
              fontSize: 13,
            }}>
            {date.time}
          </Text>
        </TouchableOpacity>
      </View>
    );
  });
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <View
        style={{
          display: 'flex',
          position: 'absolute',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          marginTop: 35,
          backgroundColor: 'white',
        }}>
        {mappedDate}
      </View>
    </ScrollView>
  );
};

export default Home;
