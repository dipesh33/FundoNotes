import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

console.log('height: ', height);
console.log('width: ', width);


export const Color = {
    TEXT_COLOR: 'rgba(0,0,0,0.8)',
    HEADING: 'black',
    PRIMARY: '#fff',//white
    SECONDARY: '#F7CD2E',//yellow
    EMPTY_FIELD_ICON: 'gold',
    AUTH_COLOR: '#cd853f',
    ACTIVE_COLOR: 'blue',
    PLACE_HOLDER_COLOR: '#f2f2f2',//grey
    TRANSPARENT: 'rgba(0,0,0,0)',
    ERROR_TEXT: 'red',
    NOTE_CARD: 'aliceblue',
    SHADOW: 'skyblue',
};

export const Font = {
    PRIMARY: 20,
    SECONDARY: 15,
};

export const Size = {
    FLEX: 1,
    ICON_SMALL: 20,
    ICON_MEDIUM: 25,
    ICON_LARGE: 30,
    TOPBAR_ICON: 30,
    EMPTY_ICON: 100,
    SMALL_TEXT: 14,
    MEDIUM_TEXT: 18,
    LARGE_TEXT: 22,
    TITLE: 20,
    NOTE: 16,
};

export const Padding = {
    FIRST_PADDING: 5,
    INITIAL_PADDING: 15,
    PRIMARY_PADDING: 20,
    SECONADARY_PADDING: 10,
    NEGATIVE_PADDING: -15,
    BUTTON_PADDING: 50,
    BOTTOM_PADDING: 50,
    VERTICAL_PADDING: 30,
};

// export const Margin = {
//     PRIMARY_MARGIN: 8,
//     SECONDARY_MARGIN: 30,
//     BUTTON_MARGIN:
//       width === 411.42857142857144
//         ? Dimensions.get('window').width * 0.27
//         : Dimensions.get('window').width * 0.2,
//     BOTTOM_MARGIN: '5%',
// };

export const Border = {
    THICK_BORDER: 8,
    LIGHT_BORDER: 0.8,
    MEDIUM_BORDER: 1,
    BORDER_RADIUS: 50,
    BORDER : 30,
    ROUND_CORNER: 20,
    CORNER: 10,
    BUTTON_BORDER: 10,
};

export const Width = {
    FULL_WIDTH: '100%',
    HALF_WIDTH: '50%',
    SECONDARY_WIDTH: '80%',
    BUTTON_WIDTH: 100,
    LOGO_WIDTH: '20%',
    DATE: '70%',
};

export const Height = {
    WINDOW_HEIGHT: '100%',
    SECTION_HEIGHT: '10%',
    BAR_HEIGHT: '7%',
    LOGO_HEIGHT: '20%',
    BUTTON_HEIGHT: 100,
    SIGNBTN: 50,
};
