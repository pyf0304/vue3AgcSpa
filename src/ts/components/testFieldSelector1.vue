<template>
  <div>
    <FieldSelector :available-fields="fields" />
  </div>
</template>

<script lang="ts">
  import FieldSelector from '@/ts/components/FieldSelector.vue';

  export default {
    components: {
      FieldSelector,
    },
    data() {
      return {
        fields: ['Field 1', 'Field 2', 'Field 3', 'Field 4'],
      };
    },
  };
</script>
