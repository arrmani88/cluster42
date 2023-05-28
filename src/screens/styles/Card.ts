import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

const ww = Dimensions.get('window').width;
const wh = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  card: {
    position: 'absolute',
    opacity: 0.5,
    flex: 1,
    backgroundColor: 'yellow'
  }
});
