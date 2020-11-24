/* eslint-disable prettier/prettier */
export default {
  updateType(state, type) {
    state.type = type
    const levels = ['primary', 'secondary']

    // CSS変数に入っているCSS変数を変更する
    // eslint-disable-next-line no-sequences
    levels.forEach(level => {
      document.documentElement.style.setProperty(
        `--color-${level}`,
        `var(--color-${type}-${level})`
      );
    })
  },
}
