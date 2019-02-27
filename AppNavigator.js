import React from 'react';
import {creatStackNavigator } from 'react-navigation';
import Category from './screen/Category';
import Categories from './screen/Categories';

const AppNavigator = creatStackNavigator({
    Categories:{
        screen: Categories
    },
    Category:{
        screen:Category
    }

})

export default AppNavigator;
