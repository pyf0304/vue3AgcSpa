<template>
  <div>
    <p>UserId: {{ UserId }}</p>
    <p>UserName: {{ UserName }}</p>
    <span> 刷新缓存！！！！</span>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  export default defineComponent({
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
