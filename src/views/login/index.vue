<template>
  <div class="login-box">
    <div class="login-logo">
      <!-- <svg-icon name="logo" :size="45" /> -->
      <img src="~@/assets/images/logo.png" width="45" />
      <h1 class="mb-0 ml-2 text-3xl font-bold">Antd Admin</h1>
    </div>
    <a-form layout="horizontal" :model="state.formInline" @submit.prevent="handleSubmit">
      <a-form-item>
        <a-input v-model:value="state.formInline.username" size="large" placeholder="admin">
          <template #prefix><user-outlined style="font-size: 24px" /></template>
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          v-model:value="state.formInline.password"
          size="large"
          type="password"
          placeholder="admin"
          autocomplete="new-password"
        >
          <template #prefix><lock-outlined style="font-size: 24px" /></template>
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input
          v-model:value="state.formInline.verifyCode"
          placeholder="验证码"
          :maxlength="4"
          size="large"
        >
          <template #prefix>
            <SafetyOutlined />
          </template>
          <template #suffix>
            <img
              :src="state.captcha"
              class="absolute right-0 h-full cursor-pointer"
              @click="setCaptcha"
            />
          </template>
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" html-type="submit" size="large" :loading="state.loading" block>
          登录
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script lang="ts">
  import { defineComponent, reactive, ref } from 'vue';
  import { UserOutlined, LockOutlined, SafetyOutlined } from '@ant-design/icons-vue';
  import { useRoute, useRouter } from 'vue-router';
  import { message, Modal } from 'ant-design-vue';
  import { useUserStore } from '@/store/modulesShare/user';
  import { getImageCaptcha } from '@/api/login';
  import { to } from '@/utils/awaitTo';
  import { UserEx_GetUserDefaValue } from '@/ts/L3ForWApiEx/UserManage/clsUsersExWApi';
  import { clsPubLocalStorage } from '@/ts/PubFun/clsPubLocalStorage';

  export default defineComponent({
    name: 'LoginIndex',
    components: {
      UserOutlined,
      LockOutlined,
      SafetyOutlined,
    },
    setup() {
      const state = reactive({
        loading: false,
        captcha: '',
        formInline: {
          username: '',
          password: '',
          verifyCode: '',
          captchaId: '',
        },
      });

      const route = useRoute();
      const router = useRouter();

      const userStore = useUserStore();
      const user = ref('user');
      const setCaptcha = async () => {
        const { id, img } = await getImageCaptcha({ width: 100, height: 50 });
        state.captcha = img;
        state.formInline.captchaId = id;
      };
      setCaptcha();

      const handleSubmit = async () => {
        const { username, password, verifyCode } = state.formInline;
        // const { username, password } = state.formInline;

        if (username.trim() == '' || password.trim() == '') {
          return message.warning('用户名或密码不能为空！');
        }
        //暂时不用校验码
        if (!verifyCode) {
          return message.warning('请输入验证码！');
        }
        message.loading('登录中...', 0);
        state.loading = true;
        console.log(state.formInline);
        // params.password = md5(password)

        const [err] = await to(userStore.login(state.formInline));
        if (err) {
          Modal.error({
            title: () => '提示',
            content: () => err.message,
          });
          setCaptcha();
        } else {
          clsPubLocalStorage.userId = username;
          await UserEx_GetUserDefaValue();
          message.success('登录成功！');
          setTimeout(() => router.replace((route.query.redirect as string) ?? '/'));
        }
        state.loading = false;
        message.destroy();
      };
      return {
        state,
        handleSubmit,
        setCaptcha,
        user,
      };
    },
  });
</script>

<style lang="less" scoped>
  .login-box {
    display: flex;
    width: 100vw;
    height: 100vh;
    padding-top: 240px;
    background: url('@/assets/login.svg');
    background-size: 100%;
    flex-direction: column;
    align-items: center;

    .login-logo {
      display: flex;
      margin-bottom: 30px;
      align-items: center;

      .svg-icon {
        font-size: 48px;
      }
    }

    :deep(.ant-form) {
      width: 400px;

      .ant-col {
        width: 100%;
      }

      .ant-form-item-label {
        padding-right: 6px;
      }
    }
  }
</style>
