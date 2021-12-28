import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

// console.log('height: ', height);
// console.log('width: ', width);

//height = 820
//width = 412
//gutter space = 5 + 5 =10

export const getNewHeight = (currentSize) => {
    // console.log('Size: ', currentSize);
    // console.log('Height: ', height);
    let newSize = currentSize * height / 820;
    // console.log('New Size: ', Math.round(newSize));
    return Math.round(newSize);
};

export const getNewWidth = (currentWidth) => {
    // console.log("width: ", currentWidth);
    // console.log('width2: ', width);
    let newSize = currentWidth * width / 412;
    // console.log("new width: ", Math.round(newSize));
    return Math.round(newSize);
};

