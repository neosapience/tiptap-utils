export default function markIsActive(state, type, attrs) {
  const {
    from,
    $from,
    to,
    empty,
  } = state.selection

  if (empty) {
    let ret = type.isInSet(state.storedMarks || $from.marks())
    if (ret && ret.type.name === 'query') {
      for(const key in attrs) {
        return attrs[key] === ret.attrs[key]
      }
    }

    return !!ret
  }

  return !!state.doc.rangeHasQueryMark(from, to, type, attrs)
}
