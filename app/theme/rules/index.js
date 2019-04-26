import {
  style,
  mapProps,
  getPx,
  compose,
  fontFamily,
  lineHeight,
  themeGet,
} from 'styled-system'

import assign from 'lodash/assign'
import pick from 'lodash/pick'

export const getColor = color => themeGet(`colors.${color}`)
export const getMetrics = metrics => themeGet(`metrics.${metrics}`)
export const getShadows = metrics => themeGet(`shadows.${metrics}`)
export const getSpace = space => themeGet(`space.${space}`)
export const getTypography = typography => themeGet(`typography.${typography}`)
export const getFontSize = fontSize => themeGet(`fontSizes.${fontSize}`)

export const fontFamilyComplex = mapProps(props => {
  const fGroup = getTypography(props.fontFamilyGroup)(props)
  const fStyle = getTypography(props.fontFamilyStyle)(props)

  if (!fGroup || !fStyle) {
    return props
  }

  return assign({}, { fontFamily: `${fGroup}-${fStyle}` }, props)
})(fontFamily)

export const lineHeightComplex = mapProps(props =>
  assign({}, { lineHeight: props.fontSize }, props),
)(lineHeight)

export const tintColor = style({
  prop: 'tintColor',
  key: 'colors',
})

export const shadowColor = style({
  prop: 'shadowColor',
  key: 'colors',
})

export const shadowOffset = style({
  prop: 'shadowOffset',
})

export const shadowRadius = style({
  prop: 'shadowRadius',
})

export const shadowOpacity = style({
  prop: 'shadowOpacity',
})

export const elevation = style({
  prop: 'elevation',
})

export const shadow = mapProps(props => {
  const preset = getShadows(props.shadow)(props)

  return assign(
    {},
    pick(preset, [
      'shadowColor',
      'shadowOffset',
      'shadowOpacity',
      'shadowRadius',
      'elevation',
    ]),
    props,
  )
})(
  compose(
    shadowColor,
    shadowOffset,
    shadowRadius,
    shadowOpacity,
    elevation,
  ),
)

export const borderTopLeftRadius = style({
  prop: 'borderTopLeftRadius',
  key: 'radii',
  transformValue: getPx,
})

export const borderTopRightRadius = style({
  prop: 'borderTopRightRadius',
  key: 'radii',
  transformValue: getPx,
})

export const borderBottomRightRadius = style({
  prop: 'borderBottomRightRadius',
  key: 'radii',
  transformValue: getPx,
})

export const borderBottomLeftRadius = style({
  prop: 'borderBottomLeftRadius',
  key: 'radii',
  transformValue: getPx,
})

export const borderCornerRadius = compose(
  borderTopLeftRadius,
  borderTopRightRadius,
  borderBottomRightRadius,
  borderBottomLeftRadius,
)
