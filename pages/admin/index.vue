<template>
  <b-container class="main-page">
    <admin>

    </admin>
  </b-container>
</template>

<script>
import admin from '../../components/layouts/admin.vue'
export default {
  middleware: 'authenticated',
  components:{
    admin,
  },
}
</script>
