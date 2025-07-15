<template>
  <!-- 编辑层 -->

  <el-dialog v-model="dialogVisible" :width="dialogWidth" :show-close="false">
    <!--使用头部插槽来自定义对话框的标题-->
    <template #header>
      <div class="custom-header">
        <h3>{{ strTitle }}</h3>
        <el-button type="primary" @click="dialogVisible = false"
          ><font-awesome-icon icon="times"
        /></el-button>
      </div>
    </template>
    <div id="divEditLayout" ref="refDivEdit" class="tab_layout">
      <table
        id="tabEdit"
        style="width: 600px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tr id="trname">
          <td class="text-right">
            <label
              id="lblDepartmentIdInt"
              name="lblDepartmentIdInt"
              class="col-form-label text-right"
              style="width: 90px"
              >部门Id
            </label>
          </td>
          <td class="text-left">
            <select
              id="ddlDepartmentIdInt"
              v-model="departmentIdInt"
              class="form-control form-control-sm"
              style="width: 150px"
            >
              <option
                v-for="(item, index) in arrQxDepartmentInfoV2"
                :key="index"
                :value="item.departmentIdInt"
              >
                {{ item.departmentName }}
              </option></select
            >
          </td>
          <td class="text-right">
            <label id="lblname" name="lblname" class="col-form-label text-right" style="width: 90px"
              >姓名
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtname"
              v-model="name"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
        </tr>
        <tr id="trPassword">
          <td class="text-right">
            <label
              id="lblUserName"
              name="lblUserName"
              class="col-form-label text-right"
              style="width: 90px"
              >用户名
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtUserName"
              v-model="userName"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblPassword"
              name="lblPassword"
              class="col-form-label text-right"
              style="width: 90px"
              >口令
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtPassword"
              v-model="password"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
        </tr>
        <tr id="trnickName">
          <td class="text-right">
            <label
              id="lblpsalt"
              name="lblpsalt"
              class="col-form-label text-right"
              style="width: 90px"
              >密码盐值
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtpsalt"
              v-model="psalt"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblnickName"
              name="lblnickName"
              class="col-form-label text-right"
              style="width: 90px"
              >呢称
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtnickName"
              v-model="nickName"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
        </tr>
        <tr id="trEmail">
          <td class="text-right">
            <label
              id="lblheadImg"
              name="lblheadImg"
              class="col-form-label text-right"
              style="width: 90px"
              >头像
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtheadImg"
              v-model="headImg"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblEmail"
              name="lblEmail"
              class="col-form-label text-right"
              style="width: 90px"
              >邮箱
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtEmail"
              v-model="email"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
        </tr>
        <tr id="trstatus">
          <td class="text-right">
            <label
              id="lblphone"
              name="lblphone"
              class="col-form-label text-right"
              style="width: 90px"
              >电话号码
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtphone"
              v-model="phone"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
          <td class="text-right">
            <label
              id="lblstatus"
              name="lblstatus"
              class="col-form-label text-right"
              style="width: 90px"
              >用户状态Id
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtstatus"
              v-model="status"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
        </tr>
        <tr id="trremark">
          <td class="text-right">
            <label
              id="lblremark"
              name="lblremark"
              class="col-form-label text-right"
              style="width: 90px"
              >备注
            </label>
          </td>
          <td class="text-left">
            <input
              id="txtremark"
              v-model="remark"
              class="form-control form-control-sm"
              style="width: 150px"
            />
          </td>
        </tr>
      </table>
    </div>
    <template #footer>
      <el-button id="btnCancelQxUsersV2" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</el-button>
      <el-button
        id="btnSubmitQxUsersV2"
        type="primary"
        @click="btnQxUsersV2_Edit_Click('Submit', '')"
        >{{ strSubmitButtonText }}</el-button
      >
    </template>
  </el-dialog>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import QxUsersV2_EditEx from '@/views/UserManage_GP/QxUsersV2_EditEx';
  import { clsQxUsersV2EN } from '@/ts/L0Entity/UserManage_GP/clsQxUsersV2EN';
  import { clsQxDepartmentInfoV2EN } from '@/ts/L0Entity/UserManage_GP/clsQxDepartmentInfoV2EN';
  import { QxDepartmentInfoV2_GetObjLstCache } from '@/ts/L3ForWApi/UserManage_GP/clsQxDepartmentInfoV2WApi';
  import { refDivEdit } from '@/views/UserManage_GP/QxUsersV2VueShare';
  import { useUserStore } from '@/store/modulesShare/user';
  export default defineComponent({
    name: 'QxUsersV2Edit',
    components: {
      // 组件注册
    },
    setup() {
      const userStore = useUserStore();
      const departmentIdInt = ref(0);
      const name = ref('');
      const userName = ref('');
      const password = ref('');
      const psalt = ref('');
      const nickName = ref('');
      const headImg = ref('');
      const email = ref('');
      const phone = ref('');
      const status = ref(0);
      const remark = ref('');
      const updateTime = ref('');
      const updUser = ref('');

      const arrQxDepartmentInfoV2 = ref<clsQxDepartmentInfoV2EN[]>([]);
      /**
   * 获取绑定下拉框的数据
   * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_GetDdlData)-pyf
   * @param objDDL:需要绑定当前表的下拉框
  
  */
      async function getArrQxDepartmentInfoV2() {
        const arrObjLstSel = await QxDepartmentInfoV2_GetObjLstCache();
        if (arrObjLstSel == null) return;
        arrQxDepartmentInfoV2.value.length = 0;
        const obj0 = new clsQxDepartmentInfoV2EN();
        obj0.departmentIdInt = 0;
        obj0.departmentName = '请选择部门V2...';
        arrQxDepartmentInfoV2.value.push(obj0);
        arrObjLstSel.forEach((x) => arrQxDepartmentInfoV2.value.push(x));
        departmentIdInt.value = 0;
      }

      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {
        await getArrQxDepartmentInfoV2(); //编辑区域
      }

      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_GetEditDataObj)
       * @param pobjQxUsersV2EN">数据传输的目的类对象</param>
       **/
      async function GetEditDataQxUsersV2Obj() {
        const pobjQxUsersV2EN = new clsQxUsersV2EN();
        pobjQxUsersV2EN.SetDepartmentIdInt(departmentIdInt.value); // 部门Id
        pobjQxUsersV2EN.Setname(name.value); // 姓名
        pobjQxUsersV2EN.SetUserName(userName.value); // 用户名
        pobjQxUsersV2EN.SetPassword(password.value); // 口令
        pobjQxUsersV2EN.Setpsalt(psalt.value); // 密码盐值
        pobjQxUsersV2EN.SetnickName(nickName.value); // 呢称
        pobjQxUsersV2EN.SetheadImg(headImg.value); // 头像
        pobjQxUsersV2EN.SetEmail(email.value); // 邮箱
        pobjQxUsersV2EN.Setphone(phone.value); // 电话号码
        pobjQxUsersV2EN.Setstatus(status.value); // 用户状态Id
        pobjQxUsersV2EN.Setremark(remark.value); // 备注
        pobjQxUsersV2EN.SetupdateTime(clsDateTime.getTodayDateTimeStr(1)); // 修改时间
        pobjQxUsersV2EN.SetUpdUser(userStore.getUserId); // 修改用户
        return pobjQxUsersV2EN;
      }

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjQxUsersV2EN">表实体类对象</param>
       **/
      async function ShowDataFromQxUsersV2Obj(pobjQxUsersV2EN: clsQxUsersV2EN) {
        departmentIdInt.value = pobjQxUsersV2EN.departmentIdInt; // 部门Id
        name.value = pobjQxUsersV2EN.name; // 姓名
        userName.value = pobjQxUsersV2EN.userName; // 用户名
        password.value = pobjQxUsersV2EN.password; // 口令
        psalt.value = pobjQxUsersV2EN.psalt; // 密码盐值
        nickName.value = pobjQxUsersV2EN.nickName; // 呢称
        headImg.value = pobjQxUsersV2EN.headImg; // 头像
        email.value = pobjQxUsersV2EN.email; // 邮箱
        phone.value = pobjQxUsersV2EN.phone; // 电话号码
        status.value = pobjQxUsersV2EN.status; // 用户状态Id
        remark.value = pobjQxUsersV2EN.remark; // 备注
      }
      const strTitle = ref('用户V2编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      const showDialog = async () => {
        // 执行打开对话框的操作
        dialogVisible.value = true;
        await BindDdl4EditRegionInDiv();
      };
      const handleSave = () => {
        // 在这里处理保存逻辑
        dialogVisible.value = false;
      };
      const hideDialog = () => {
        dialogVisible.value = false;
      };
      return {
        refDivEdit,
        strTitle,
        dialogVisible,
        dialogWidth,
        showDialog,
        handleSave,
        hideDialog,
        strSubmitButtonText,
        strCancelButtonText,
        GetEditDataQxUsersV2Obj,
        ShowDataFromQxUsersV2Obj,
        departmentIdInt,
        name,
        userName,
        password,
        psalt,
        nickName,
        headImg,
        email,
        phone,
        status,
        remark,
        updateTime,
        updUser,
        arrQxDepartmentInfoV2,
      };
    },
    watch: {
      // 数据监听
    },
    mounted() {
      // el 被新创建的 vm.$el 替换,并挂载到实例上去之后调用该钩子。
    },
    methods: {
      // 方法定义

      /**
       *按钮单击,用于调用Js函数中btnEdit_Click
       *(AutoGCLib.Vue_ViewScript_Edit_TS4Html:Gen_Vue_JS_btnEdit_Click)
       **/
      btnQxUsersV2_Edit_Click(strCommandName: string, strKeyId: string) {
        QxUsersV2_EditEx.btnEdit_Click(strCommandName, strKeyId);
      },
    },
  });
</script>
<style scoped>
  .custom-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
