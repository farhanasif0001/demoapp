export const BottomBox = () => import('../../components/BottomBox.vue' /* webpackChunkName: "components/bottom-box" */).then(c => wrapFunctional(c.default || c))
export const BottomBoxTwo = () => import('../../components/BottomBoxTwo.vue' /* webpackChunkName: "components/bottom-box-two" */).then(c => wrapFunctional(c.default || c))
export const Header = () => import('../../components/Header.vue' /* webpackChunkName: "components/header" */).then(c => wrapFunctional(c.default || c))
export const Item = () => import('../../components/Item.vue' /* webpackChunkName: "components/item" */).then(c => wrapFunctional(c.default || c))
export const RightBox = () => import('../../components/RightBox.vue' /* webpackChunkName: "components/right-box" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
