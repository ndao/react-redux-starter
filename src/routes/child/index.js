import Child from './components/child'

export default {
  path: 'child',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, Child)
    })
  }
}
