import styled, { css } from 'styled-components/native'

import { getColor } from 'theme'

import { Text as TextUI } from '../Text'

export const Container = styled.TouchableOpacity``

export const Text = styled(TextUI).attrs(props => ({
  color: props.isPressed ? props.colorPressed : props.color,
}))`
  text-align: center;

  ${props =>
    props.isPressed &&
    css`
      text-decoration-line: underline;
      text-decoration-color: ${getColor(props.color)(props)};
    `}
`
