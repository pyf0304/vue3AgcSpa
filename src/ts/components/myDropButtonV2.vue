<template>
  <a-dropdown-button :disabled="visible" @click="handleButtonClick">
    {{ title }}
    <template #overlay>
      <a-menu v-model:visible="visible">
        <a-menu-item
          v-for="button in buttons"
          :key="button.keyId"
          @click="handleButtonClick(button.keyId, inputValue)"
        >
          <hr v-if="button.type === 'hr'" />
          <template v-else-if="button.type === 'btntext'">
            <!-- Check if it's the specific button with the text input -->
            <a-input
              id="txtInput"
              ref="textInputRef"
              v-model="inputValue"
              style="width: 50px"
              @click.stop
            />
            {{ button.text }}
          </template>
          <template v-else>
            {{ button.text }}
          </template>
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown-button>
</template>
<script lang="ts">
  import { ref } from 'vue';
  import { clsBtnItem } from '@/ts/PubFun/clsBtnItem';

  // import { ADropdownButton, AMenu, AMenuItem } from 'ant-design-vue';
  export default {
    name: 'MyDropButtonV2',
    // components: {
    //   ADropdownButton, // Use the correct component name here
    //   AMenu,
    //   AMenuItem,
    // },
    props: {
      title: {
        type: String,
        required: true,
        default: '按钮列表',
      },
      buttons: {
        type: Array<clsBtnItem>,
        required: true,
      },
      isVisible: {
        type: Boolean,
        required: true,
        default: true,
      },
    },
    emits: ['on-button-click'],

    setup(props, { emit }) {
      // const buttons = ref([
      //   { key: 'button1', label: '按钮1' },
      //   { key: 'button2', label: '按钮2' },
      //   { key: 'button3', label: '按钮3' },
      // ]);
      const inputValue = ref('');
      const visible = ref(props.isVisible);
      const textInputRef = ref<HTMLInputElement | null>(null);
      // const textInputRef = ref([] as HTMLInputElement[]);
      const handleButtonClick = (key: string, inputText0: string) => {
        // console.error(key, inputText0, 'inputValue:', inputValue);
        // Access the input element using ref and its ID
        const inputElements = textInputRef.value;
        console.log('inputElements:', inputElements);
        if (inputElements) {
          // Get the value of the input element

          // inputElements.forEach((inputElement) => {
          //   const inputText = inputElement.input.value;
          //   console.log('Input text:', inputText);
          // });
          // // console.log('intLen:', intLen);
          const inputText = inputElements[0].input.value; //.input.value;
          inputText0 = inputText;
          console.log('Input text:', inputText);
        }
        emit('on-button-click', {
          keyId: key,
          inputText: inputText0,
          content: '按钮单击事件',
        });
        // // 根据点击的按钮选项执行相应的操作
        // if (key === 'button1') {
        //   // 处理按钮1的点击操作
        //   // ...
        //   alert('button1');
        // } else if (key === 'button2') {
        //   // 处理按钮2的点击操作
        //   // ...
        //   alert('button2');
        // } else if (key === 'button3') {
        //   // 处理按钮3的点击操作
        //   // ...
        //   alert('button3');
        // }

        // 切换按钮的显示和隐藏
        // visible.value = !visible.value;
      };
      // onMounted(() => {
      //   console.log('props.buttons:', props.buttons);
      // });
      return {
        visible,
        inputValue,
        handleButtonClick,
        textInputRef,
      };
    },
  };
</script>
<style>
  .dropdown-btn {
    display: none; /* 初始状态隐藏按钮 */
  }

  a-dropdown[aria-expanded='true'] .dropdown-btn {
    display: inline-block; /* 下拉展开后显示按钮 */
  }
</style>
