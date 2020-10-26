import nodeIsActive from './nodeIsActive'

export default function actorIsActive(state, type, attrs = {}, from) {
  if (from !== undefined) {
    let node = state.doc.nodeAt(from)
    let ret =  node.hasMarkup(type, {...node.attrs, ...attrs})
    return ret
  } else {
    return nodeIsActive(state, type, attrs)
  }
}