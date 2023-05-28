import {StyleSheet} from 'react-native';
import {padding} from '../../utils/padding';
import {percentage} from '../../utils/percentage';
import {Dimensions} from 'react-native';

const ww = Dimensions.get('window').width;
const wh = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  scroller: {
    backgroundColor: '#E5E5E5',
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: percentage(60, ww),
    aspectRatio: 3 / 2,
    color: '#3D6670',
  },
  clusterText: {
    color: '#3D6670',
    fontWeight: '600',
    fontSize: 50,
    fontFamily: 'Futura BoldItalic',
    paddingRight: 10,
  },
  progressBarContainer: {
    width: ww,
    ...padding(0, percentage(20, ww)),
    position: 'absolute',
    bottom: percentage(40, ww),
  },
  creditsText: {
    position: 'absolute',
    color: '#3D6670',
    textAlign: 'center',
    fontSize: 13,
    bottom: percentage(20, ww),
  },
  button: {
    backgroundColor: '#3D6670',
    ...padding(10, 40),
    borderRadius: 15,
  },
  textButton: {
    fontSize: 16,
  },
});
