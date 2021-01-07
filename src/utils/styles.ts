import { Dimensions, PixelRatio, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');
const widthPx = PixelRatio.getPixelSizeForLayoutSize(width);
const heightPx = PixelRatio.getPixelSizeForLayoutSize(height);

const FONT_RESIZE = 2;
// based scale
const scale = width / 320;
// width/height scale
const scaleR = width / height;

export function normalize(size: number) {
  let newSize = null;
  if (scale > 1) {
    newSize = size * scale;
  } else {
    newSize = size * scale * 0.9;
  }
  return Math.round(PixelRatio.roundToNearestPixel(newSize)) - FONT_RESIZE;
}

export const Sizes = {
  FAV_BOX: height * 0.15,
  PREC_2: height * 0.02,
  CONE_BORDER: width * 0.25,
  CONE_GAP: width * 0.2,
  SCORE_POS: (width * 0.25) + (height * 0.1),
  SCORE_ITEM_H: height * 0.15,
  SCORE_ITEM_W: width * 0.8,
  SCROLL_PAD: height * 0.1,
  ARROW: height * 0.08,
  FONT_15: normalize(15),
  FONT_17: normalize(17),
}

export const Colors = {
  BACKGROUND: '#111',
  WHITE: '#fff',
  BLACK: '#000',
  LIGHT: '#eee',
  AMB: '#ddd',
  DARK: '#aaa',
}

export const Styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    flex: 1,
    backgroundColor: Colors.BACKGROUND
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  elevateFive: {
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  elevateFifteen: {
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderWidth: 2
  },
});