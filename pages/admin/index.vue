<template>
  <div>
    <admin></admin>
    <b-container class="main-page">
    </b-container>
  </div>
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
