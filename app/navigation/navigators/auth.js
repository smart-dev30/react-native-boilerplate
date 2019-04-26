import React from 'react'

import { createStackNavigator } from 'react-navigation'
import { fromRight } from 'react-navigation-transitions'

import PickingService from 'services/picking'

import { navigators, auth } from 'constants/routeNames'

import { Simple as Header } from 'components/headers'

import forgotPassword from 'navigation/screens/auth/forgotPassword'
import signIn from 'navigation/screens/auth/signIn'
import signUp from 'navigation/screens/auth/signUp'

const SCREENS = {
  ...signIn,
  ...signUp,
  ...forgotPassword,
}

const CONFIG = {
  initialRouteName: auth.signIn,

  headerMode: 'screen',
  cardShadowEnabled: false,

  transitionConfig: () =>
    PickingService.platformLazy({
      android: () => fromRight(),
    }),

  defaultNavigationOptions: {
    header: props => (
      <Header {...props} barStyle="dark-content" bg="whiteLilac" />
    ),
  },
}

const AuthNavigator = createStackNavigator(SCREENS, CONFIG)

export const screen = {
  [navigators.auth]: {
    screen: AuthNavigator,
  },
}

export default AuthNavigator
