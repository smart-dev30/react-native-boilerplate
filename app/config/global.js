import { YellowBox } from 'react-native'

import debugConfig from './debug'

if (__DEV__) {
  // NOTE: If ReactNative's yellow box warnings are too much, it is possible
  //       to turn it off, but the healthier approach is to fix the warnings. =)
  console.disableYellowBox = !debugConfig.yellowBox // eslint-disable-line
  YellowBox.ignoreWarnings(debugConfig.yellowBoxIgnoreWarnings)

  if (debugConfig.proxyXHRRequests) {
    global.FormData = global.originalFormData || global.FormData

    global.XMLHttpRequest =
      global.originalXMLHttpRequest || global.XMLHttpRequest
  }
}
