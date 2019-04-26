import React from 'react'
import { createStackNavigator } from 'react-navigation'

import { navigators, home } from 'constants/routeNames'

import { Main as Header } from 'components/headers'

import dashboard from 'navigation/screens/home/dashboard'

const SCREENS = {
  ...dashboard,
}

const CONFIG = {
  initialRouteName: home.dashboard,

  defaultNavigationOptions: {
    header: props => <Header {...props} />,
  },
}

const MainNavigator = createStackNavigator(SCREENS, CONFIG)

export const screen = {
  [navigators.home]: {
    screen: MainNavigator,
  },
}

export default MainNavigator
