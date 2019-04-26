import React from 'react'
import PT from 'prop-types'

import { Container, StatusBar } from './styles'

const Main = ({ bg, ...props }) => (
  <Container bg={bg}>
    <StatusBar barStyle="dark-content" bg={bg} {...props} />
  </Container>
)

Main.propTypes = {
  bg: PT.string,
}

Main.defaultProps = {
  bg: 'white',
}

export { Main }
