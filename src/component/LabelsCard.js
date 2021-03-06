import React from 'react';
import {View, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {deleteLabel, updateLabel} from '../service/LabelService';

export const LabelsCard = props => {
  const [label, setLabelData] = React.useState(props.label);
  const [isEdit, setIsEdit] = React.useState(true);

  // function for delete note
  const onDeleteButton = () => {
    setIsEdit(true);
    console.log(props.labelId);
    const labelId = props.labelId;
    deleteLabel(labelId).then(() => {
      props.fetchData();
    });
  };

  //function for edit label
  const labelOperation = () => {
    const labelData = {label};
    const labelId = props.labelId;
    updateLabel(labelData, labelId).then(() => {
      props.fetchData();
    });
  };

  const onCheckButton = async () => {
    setIsEdit(true);
    labelOperation();
  };

  return (
    <View>
      <View>
        <View style={{flexDirection: 'row'}}>
          {isEdit ? (
            <Icons
              style={{padding: 13}}
              name="label-outline"
              size={25}
              color="#525252"
            />
          ) : null}
          <TouchableOpacity onPress={onDeleteButton}>
            {!isEdit ? (
              <Icons
                style={{padding: 13}}
                name="delete-outline"
                size={25}
                color="#525252"
              />
            ) : null}
          </TouchableOpacity>
          <View style={{width: '35%'}}>
            <TextInput
              style={{fontSize: 20, marginLeft: '10%'}}
              value={label}
              onChangeText={value => setLabelData(value)}
            />
          </View>
          <View style={styles.check}>
            <TouchableOpacity onPress={() => setIsEdit(false)}>
              {isEdit ? (
                <Icons name="border-color" size={25} color="#525252" />
              ) : null}
            </TouchableOpacity>
            <TouchableOpacity onPress={onCheckButton}>
              {!isEdit ? <Icons name="check" size={25} color="blue" /> : null}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  check: {
    padding: 10,
    marginLeft: '35%',
  },
  textInput: {
    width: '100%',
    fontSize: 18,
    backgroundColor: 'transparent',
  },
});

export default LabelsCard;
