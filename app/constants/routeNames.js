import { createNames } from 'utils/navigation'

export const navigators = createNames(['app', 'auth', 'main', 'home'], {
  prefix: 'navigators/',
})

export const app = createNames(['redirector', 'progress'], {
  prefix: 'app/',
})

export const auth = createNames(['signIn', 'signUp', 'forgotPassword'], {
  prefix: 'auth/',
})

export const home = createNames(['dashboard'], {
  prefix: 'home/',
})
