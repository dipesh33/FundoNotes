import {openDatabase} from 'react-native-sqlite-storage';
import {Alert} from 'react-native';

var db = openDatabase(
  {
    name: 'FundoNotes',
    location: 'default',
    createFromLocation: '~FundoNotes.db',
  },
  () => {},
  error => {
    console.log(error);
  },
);

const selectData = 'SELECT * FROM keepData';
const insertData =
  'INSERT INTO keepData (noteId, title, note, isArchive, isPin, isDelete, flag) VALUES (?,?,?,?,?,?,?)';

const ExecuteQuery = (sql, params = []) =>
  new Promise((resolve, reject) => {
    db.transaction(trans => {
      trans.executeSql(
        sql,
        params,
        (trans, results) => {
          resolve(results);
        },
        error => {
          reject(error);
        },
      );
    });
  });

export const createTable = () => {
  db.transaction(tx => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXIST' +
        'keepData' +
        '(noteId TEXT PRIMARY KEY, title TEXT, note TEXT, isArchive INTEGER, isPin INTEGER, isDelete INTEGER, flag TEXT)',
      [],
      (tx, results) => {
        console.log('Table successfully created', results);
      },
      error => {
        console.log('Table creating error' + error.message);
      },
    );
  });
};

export const insertQuery = async(noteId, noteData) => {
  noteData.isArchive = noteData.isArchive ? 1 : 0
  noteData.isPin = noteData.isPin ? 1 : 0
  noteData.isDelete = noteData.isDelete ? 1 : 0
  const params = [noteId, noteData.title, noteData.note, noteData.isArchive, noteData.isPin, noteData.isDelete, null]
  try {
    const result = await ExecuteQuery(insertData, params)
  }
  catch(error) {
    console.log(error.message);
  }
};

export const getSqliteData = async() => {
  try {
    const result = await ExecuteQuery(selectData)
    let rows = result.rows;
    let array = [];
    for (let i = 0; i < rows.length; i++){
      var items = rows.items(i);
      items.noteId = items.noteId,
      items.title = items.title,
      items.note = items.note,
      items.isArchive = Boolean(items.isArchive),
      items.isPin = Boolean(items.isPin),
      items.isDelete = Boolean(items.isDelete),
      array.push(items)
    }
    return array;
  }
  catch (error) {
    console.log(error.message);
  }
};

export const updateQuery = (noteId, noteData) => {

};
