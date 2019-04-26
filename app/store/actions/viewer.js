import { createActions } from 'reduxsauce'

export const { Types: ViewerTypes, Creators: ViewerCreators } = createActions(
  {
    loadViewerRequest: null,
    loadViewerSuccess: ['response'],
    loadViewerFailure: ['response'],
  },
  { prefix: 'Viewer/' },
)
