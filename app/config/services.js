import Secrets from 'react-native-config'

const webProtocol = __DEV__ ? 'http' : 'https'
const webSocketsProtocol = __DEV__ ? 'ws' : 'wss'

const api = {
  webUrl: `${webProtocol}://${Secrets.API_URL}`,
  webSocketsUrl: `${webSocketsProtocol}://${Secrets.API_URL}`,
}

export default {
  api,
}
