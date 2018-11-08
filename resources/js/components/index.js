import Vue from 'vue'
import Card from './Card'
import Child from './Child'
import Button from './Button'
import Checkbox from './Checkbox'
import BLoading from './BLoading'
import Select2 from './Select'
import { HasError, AlertError, AlertSuccess } from 'vform'
import Datepicker from 'vuejs-datepicker'
import { id } from 'vuejs-datepicker/dist/locale'

// Components that are registered globaly.

[
  Card,
  Child,
  Button,
  Select2,
  BLoading,
  Checkbox,
  HasError,
  AlertError,
  AlertSuccess
].forEach(Component => {
  Vue.component(Component.name, Component)
})

Vue.component('b-datepicker', {
  extends: Datepicker,
  props: {
    bootstrapStyling: {
      type: Boolean,
      default: true
    },
    language: {
      type: Object,
      default: () => id
    }
  }
})
