import React, { Component } from 'react'
import PT from 'prop-types'

import SplashScreen from 'react-native-splash-screen'

import { setup as setupI18n } from 'i18n'

import reduxPersistConfig from 'config/reduxPersist'

import { themes, ThemeProvider } from 'theme'

import ProgressScreen from 'screens/Progress'

import NavigatorWrapper from './NavigatorWrapper'

import { Container } from './styles'

class StatefulNavigation extends Component {
  componentWillMount() {
    if (!reduxPersistConfig.active) {
      this.props.onStartup()
    }
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.isRehydrated && nextProps.isRehydrated) {
      setupI18n(this.props.locale)
    }

    if (!this.props.isRestored && nextProps.isRestored) {
      SplashScreen.hide()
    }
  }

  get theme() {
    return themes[this.props.theme]
  }

  renderContent = () => {
    const { isRestored } = this.props

    if (!isRestored) {
      return <ProgressScreen />
    }

    return <NavigatorWrapper />
  }

  render() {
    return (
      <ThemeProvider theme={this.theme}>
        <Container>{this.renderContent()}</Container>
      </ThemeProvider>
    )
  }
}

StatefulNavigation.propTypes = {
  isRehydrated: PT.bool.isRequired,
  isRestored: PT.bool.isRequired,
  locale: PT.string.isRequired,
  theme: PT.string.isRequired,
  onStartup: PT.func.isRequired,
}

export default StatefulNavigation
