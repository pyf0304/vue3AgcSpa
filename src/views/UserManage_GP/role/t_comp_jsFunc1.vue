<template>
  <h6
    ><span class="text-primary">从调用者传递的信息(msg):</span
    ><span class="text-secondary">{{ msg }}</span></h6
  >
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  // defineProps<{ msg: string }>()
  import 'jquery/dist/jquery.min.js';
  import 'bootstrap/dist/js/bootstrap.min.js';
  import 'bootstrap/dist/css/bootstrap.css';

  export default defineComponent({
    name: 'Lsn0102',
    props: { msg: String },
    setup() {
      // const msg = ref(props);
      // const { msg } = toRefs(props);
      const btnClick = (strCommandName: string, strKeyId: string): void => {
        alert(`"命令:${strCommandName}, 关键字:${strKeyId}.`);
      };
      return {
        btnClick,
        // msg,
      };
    },
    methods: {},
  });
</script>

<style scoped>
  .read-the-docs {
    color: #888;
  }
</style>
