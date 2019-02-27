import React from 'react';
import { Text, View, Dimensions, ScrollView, FlatList } from 'react-native';
const { width, height } = Dimensions.get('window');
import CategoryListItems from './component/CategoryListItems';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      categories:[
        {id:1, name:'Do choi'},
        {id:2, name:'Do choi 1'},
        {id:3, name:'Do choi 2'},
        {id:4, name:'Do choi 3'},
        {id:5, name:'Do choi 4'},

      ]
    };
  }

  render() {
    const {categories} = this.state;
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* <ScrollView>
          {categories.map(category => <CategoryListItems key={category.id} category={category} />)}
        </ScrollView> */}
        <FlatList
          data={categories}
          renderItem={({item})=> <CategoryListItems category={item}/>}
          keyExtractor={item => `${item.id}`}
        />
      </View>
    );
  }
}

