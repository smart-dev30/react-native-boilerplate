import { Dimensions } from 'react-native'

import { createDrawerNavigator } from 'react-navigation'

import { navigators } from 'constants/routeNames'

import { screen as home } from './home'

const { width } = Dimensions.get('window')

const SCREENS = {
  ...home,
}

const CONFIG = {
  initialRouteName: navigators.home,

  drawerType: 'slide',
  drawerWidth: width * 0.9,
}

const MainNavigator = createDrawerNavigator(SCREENS, CONFIG)

export const screen = {
  [navigators.main]: {
    screen: MainNavigator,

    navigationOptions: {
      header: null,
    },
  },
}

export default MainNavigator
