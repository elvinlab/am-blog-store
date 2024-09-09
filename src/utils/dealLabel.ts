import _ from 'lodash'

type Label = string | string[] | null | undefined

export const dealLabel = (label: Label): string[] => {
  if (_.isEmpty(label)) {
    return []
  }
  if (_.isString(label)) {
    return label.split(',')
  }
  if (_.isArray(label)) {
    return [...label]
  }
  return []
}
