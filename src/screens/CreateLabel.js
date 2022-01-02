import React, {useCallback} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Text,
  FlatList,
} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {addLabel, fetchLabelsData} from '../service/LabelService';
import {useDispatch, useSelector} from 'react-redux';
import {setLabelData} from '../redux/actions';
import LabelCard from '../component/LabelCard';
import { keyExtractor } from 'react-native/Libraries/Lists/VirtualizeUtils';

const CreateLabel = ({navigation}) => {
  const [label, setLabel] = React.useState('');
  const [isFocused, setFocused] = React.useState(false);
  //const [labelData, setLabelData] = React.useState([]);

  const labelData = useSelector(state => state.labelData);
  const dispatch = useDispatch();

  // fetch data using redux labelData state
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
    <View style={styles.container1}>
      <View style={styles.header}>
        <View style={styles.headerItem}>
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
            style={styles.textInput}
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
          <View style={styles.container2}>
            <TouchableOpacity
              style={{flexDirection: 'row'}}
              onPress={onPlusButton}>
              <Icons name="plus" size={25} color="blue" />
              <Text style={styles.createtxt}>Create "{label}"</Text>
            </TouchableOpacity>
          </View>
        ) : null}
      </View>
      <View style={{flex: 1, padding: 0}}>
        {!isFocused ? (
          <FlatList
            data={labelData}
            renderItem={({item}) => <LabelCard {...item} />}
            keyExtractor={item => item.labelId}
          />
        ) : null}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container1: {
    flex: 1,
  },
  header: {
    height: 70,
    width: '100%',
  },
  headerItem: {
    flexDirection: 'row',
  },
  container2: {
    height: 60,
    width: '100%',
    flexDirection: 'row',
    padding: 15,
  },
  createtxt: {
    marginLeft: 30,
    fontSize: 18,
    color: 'black',
  },
  textInput: {
    fontSize: 18,
  },
});
export default CreateLabel;
