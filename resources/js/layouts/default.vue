<template>
  <div class="main-layout">
    <navbar v-if="$route.name === 'login'" />

    <div :class="[$route.name === 'login' ? 'container mt-4' : '']">
      <child />
    </div>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'

export default {
  name: 'MainLayout',

  components: {
    Navbar
  }
}
</script>
