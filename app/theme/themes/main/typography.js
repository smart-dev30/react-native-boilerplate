const GROUPS = {
  montserrat: 'Montserrat',
}

const STYLES = {
  bold: 'Bold',
  light: 'Light',
  medium: 'Medium',
  semiBold: 'SemiBold',
}

export default {
  styles: STYLES,
  groups: GROUPS,

  variants: {
    primary: {
      group: GROUPS.montserrat,
      style: STYLES.medium,
    },

    secondary: {
      group: GROUPS.montserrat,
      style: STYLES.medium,
    },
  },
}
