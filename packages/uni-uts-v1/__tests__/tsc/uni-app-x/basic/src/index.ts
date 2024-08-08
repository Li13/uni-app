import { computed, defineComponent, ref, watch, SlotsType } from 'vue'
const __sfc__ = defineComponent({
  slots: Object as SlotsType<{
    default: {}
  }>,
  props: {
    str: {
      type: String,
    },
    num: {
      type: Number,
    },
    bool: {
      type: Boolean,
    },
    arr: {
      type: Array<string>,
    },
    obj: {
      type: Object,
    },
    date: {
      type: Date,
    },
  },
  data() {
    return {
      dNum: 1,
    }
  },
})
function render(this: InstanceType<typeof __sfc__>): any | null {
  const _ctx = this
  _ctx.str
  _ctx.dNum
}