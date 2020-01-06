export default function actorIsActive(state, type, attrs = {}, from) {
  let node = state.doc.nodeAt(from)
  let ret =  node.hasMarkup(type, attrs)

  return ret
}