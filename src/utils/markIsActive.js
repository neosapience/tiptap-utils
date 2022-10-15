
function isFirstPositionFromSentence($from, $to) {
  return $from.pos === $to.pos &&  $to.pos < $to.end()
}

export default function markIsActive(state, type, attrs) {
  const {
    from,
    $from,
    to,
    $to,
    empty,
  } = state.selection

  if (empty) {
    let ret = type.isInSet(state.storedMarks || $from.marks())
    if (ret && ret.type.name === 'query') {
      for(const key in attrs) {
        return attrs[key] === ret.attrs[key]
      }
    }
    return !!ret || isFirstPositionFromSentence($from, $to) && !!state.doc.rangeHasQueryMark(from, to + 1, type, attrs)
  }

  return !!state.doc.rangeHasQueryMark(from, to, type, attrs)
}