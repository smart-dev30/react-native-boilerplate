import auth from './auth'
import uploader from './uploader'
import viewer from './viewer'

export default apiCall => ({
  auth: auth(apiCall),
  uploader: uploader(apiCall),
  viewer: viewer(apiCall),
})
