import { action, makeObservable, observable, } from "mobx";
import { makePersistable } from 'mobx-persist-store';
import AsyncStorage from '@react-native-async-storage/async-storage';



import { Item, List } from '../models';

const defaultState: {
  lists: List[],
  allItems: Item[],
  colorScheme: string,
} = {
  lists: [],
  allItems: [],
  colorScheme: 'dark'
}

const store = makeObservable({
  ...defaultState,
  setNewItem(value: Item) {
    if (!this.allItems.includes(value)) {
      this.allItems = [...this.allItems, value];
    } else {
      console.log('This element already exists')
    }
  },
  setNewList(value: List) {
    this.lists = [...this.lists, value];
  },
  removeItem(value: Item) {
    this.allItems = this.allItems.filter(item => item.key !== value.key);
  },
  changeItem(newItemValue: string, key: string){
    this.allItems.map((item)=> item.key === key ? item.value = newItemValue : item);
  },
  removeListItem(value: List) {
    this.lists = this.lists.filter(item => item.id !== value.id);
  },
  changeList(newValue: any) {
    this.lists = this.lists.map(item => item.id === newValue.id ? newValue: item);
  },
  addItemsToList(itemsArr: Item[], id: string | undefined) {
    const thisList = this.lists.find(item => item.id === id);
    if (thisList) {
      thisList.items = itemsArr;
    }
  },
  changeColorScheme(newColorScheme: string){
    this.colorScheme = newColorScheme;
  }
},
  {
    lists: observable,
    allItems: observable,
    colorScheme: observable,
    setNewItem: action,
    removeItem: action,
    setNewList: action,
    removeListItem: action,
    changeList: action,
    addItemsToList: action,
    changeColorScheme: action,
    changeItem: action,
  },
  { autoBind: true }
);

makePersistable(
  store,
  {
    storage: AsyncStorage,
    name: 'ListStore',
    properties: ['lists', 'allItems', 'colorScheme']
  }
)

export default store;