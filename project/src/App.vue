<template>
  <div id="app">
    <CategoryComp/>
  </div>
</template>

<script>
import CategoryComp from '@/components/CategoryComp.vue';
import '../src/css/common.css';

export default {
  name: 'App',
  components: {
    CategoryComp
  }
}
</script>
