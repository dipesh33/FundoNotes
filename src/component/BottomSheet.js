import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Color, Size } from '../utility/Theme';
import {styles } from '../utility/GlobalStyle';

export const BottomTabSheet = () => {
    return (
        <View style={{ flex: Size.FLEX}}>
            <View>
                <TouchableOpacity>
                    <View style={styles.itemStyle}>
                        <Icons name="camera" size={Size.ICON_SMALL} color= {Color.HEADING} />
                        <Text style={styles.text}>Take photo</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.itemStyle}>
                        <Icons name="image-outline" size={Size.ICON_SMALL} color= {Color.HEADING} />
                        <Text style={styles.text}>Add image</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.itemStyle}>
                        <Icons name="brush" size={Size.ICON_SMALL} color= {Color.HEADING} />
                        <Text style={styles.text}>Drawing</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.itemStyle}>
                        <Icons name="microphone-outline" size={Size.ICON_MEDIUM} color= {Color.HEADING} />
                        <Text style={styles.text}>Recording</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
};
