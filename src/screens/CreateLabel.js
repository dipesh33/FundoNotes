import React, {useCallback} from 'react';
import {
  View,
  TouchableOpacity,
  TextInput,
  Text,
  FlatList,
} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {addLabel, fetchLabelsData} from '../service/LabelService';
import {useDispatch, useSelector} from 'react-redux';
import {setLabelData} from '../redux/actions';
import LabelCard from '../component/LabelCard';
import { styles } from '../utility/GlobalStyle';

const CreateLabel = ({navigation}) => {
  const [label, setLabel] = React.useState('');
  const [isFocused, setFocused] = React.useState(false);

  const labelData = useSelector(state => state.labelData);
  const dispatch = useDispatch();

  const fetchData = useCallback(async () => {
    let data = await fetchLabelsData();
    dispatch(setLabelData(data));
  }, [dispatch]);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fetchData();
    });
    return unsubscribe;
  }, [navigation, fetchData]);

  const noteOperation = (changeData = {}) => {
    const noteData = {label};
    addLabel(noteData).then(() => {
      setLabel('');
      fetchData();
    });
  };
  
  const onPlusButton = () => {
    setFocused(!isFocused);
    noteOperation();
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerLabels}>
        <View style={styles.headerItems}>
          <TouchableOpacity>
            <Icons
              name="arrow-left"
              size={25}
              color="black"
              style={{padding: 10}}
            />
          </TouchableOpacity>
          <TextInput
            placeholder="Enter label name"
            style={styles.textInputs}
            value={label}
            onChangeText={text => setLabel(text)}
            onFocus={() => {
              setFocused(!isFocused);
            }}
          />
        </View>
      </View>
      <View>
        {isFocused ? (
          <View style={styles.containers}>
            <TouchableOpacity
              style={{flexDirection: 'row'}}
              onPress={onPlusButton}>
              <Icons name="plus" size={25} color="blue" />
              <Text style={styles.createtext}>Create "{label}"</Text>
            </TouchableOpacity>
          </View>
        ) : null}
      </View>
      <View style={{flex: 1, padding: 0}}>
        {!isFocused ? (
          <FlatList
            data={labelData}
            renderItem={({item}) => <LabelCard {...item} />}
          />
        ) : null}
      </View>
    </View>
  );
};

export default CreateLabel;
