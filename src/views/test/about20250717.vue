<template>
  <div>
    <p>Received Parameter: {{ $route.query.param1 }}</p>
    <p>UserId: {{ UserId }}</p>
    <p>UserName: {{ UserName }}</p>
    <p>UserName: {{ UserName }}20250717</p>
    <p>UserName: {{ UserName }}20250718-pyf-thinkpad</p>

    <span> this a about page!</span>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  export default defineComponent({
    name: 'AboutPyf',
    setup() {
      const UserId = ref('0001');
      const UserName = ref('pyf');
      async function getUser(): Promise<void> {
        console.log(UserName);
      }
      return {
        getUser,
        UserId,
        UserName,
      };
    },
  });
</script>
