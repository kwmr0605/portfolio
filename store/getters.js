export default {
  types: (state) => {
    return state.types.filter((type) => type !== state.type)
  },
}
