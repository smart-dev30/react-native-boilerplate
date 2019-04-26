import styled from 'styled-components/native'

import { Text as TextUI } from 'components/ui'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const Text = styled(TextUI).attrs({
  fontFamilyStyle: 'styles.semiBold',
})``
