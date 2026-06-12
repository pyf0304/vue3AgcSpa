<template>
  <a-modal v-model:visible="dialogVisible" :width="dialogWidth" :title="strTitle">
    <!--使用头部插槽来自定义对话框的标题-->
    <template #header>
      <div class="custom-header">
        <h3>{{ strTitle }}</h3>
        <a-button type="primary" @click="dialogVisible = false"
          ><font-awesome-icon icon="times"
        /></a-button>
      </div>
    </template>
    <div id="divDetailLayout" ref="refDivDetail" class="tab_layout">
      <!-- 详细信息层 -->

      <table
        id="tabEdit"
        style="width: 600px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tbody>
          <tr>
            <td class="text-right">
              <span
                id="spnFileDirName_d"
                name="spnFileDirName_d"
                CssClass="col-form-label text-right"
                >文件目录名</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblFileDirName_d"
                name="lblFileDirName_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ fileDirName }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnFileName_d" name="spnFileName_d" CssClass="col-form-label text-right"
                >文件名</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblFileName_d"
                name="lblFileName_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ fileName }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnExtension_d" name="spnExtension_d" CssClass="col-form-label text-right"
                >扩展名</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblExtension_d"
                name="lblExtension_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ extension }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnTabId_d" name="spnTabId_d" CssClass="col-form-label text-right"
                >表ID</span
              >
            </td>
            <td class="text-left">
              <label id="lblTabId_d" name="lblTabId_d" class="text-primary" style="width: 150px">
                {{ tabId }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnIsBelongsCurrCMPrj_d"
                name="spnIsBelongsCurrCMPrj_d"
                CssClass="col-form-label text-right"
                >是否属于当前项目</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblIsBelongsCurrCMPrj_d"
                name="lblIsBelongsCurrCMPrj_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ isBelongsCurrCMPrj }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnIsGeneCode_d" name="spnIsGeneCode_d" CssClass="col-form-label text-right"
                >是否生成代码</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblIsGeneCode_d"
                name="lblIsGeneCode_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ isGeneCode }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnIsCanDel_d" name="spnIsCanDel_d" CssClass="col-form-label text-right"
                >是否可删除</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblIsCanDel_d"
                name="lblIsCanDel_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ isCanDel }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnFileLength_d" name="spnFileLength_d" CssClass="col-form-label text-right"
                >文件长度</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblFileLength_d"
                name="lblFileLength_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ fileLength }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnFileType_d" name="spnFileType_d" CssClass="col-form-label text-right"
                >文件类型</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblFileType_d"
                name="lblFileType_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ fileType }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnCreationTime_d"
                name="spnCreationTime_d"
                CssClass="col-form-label text-right"
                >建立时间</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblCreationTime_d"
                name="lblCreationTime_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ creationTime }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnLastWriteTime_d"
                name="spnLastWriteTime_d"
                CssClass="col-form-label text-right"
                >修改日期</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblLastWriteTime_d"
                name="lblLastWriteTime_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ lastWriteTime }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnCheckDateTime_d"
                name="spnCheckDateTime_d"
                CssClass="col-form-label text-right"
                >CheckDateTime</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblCheckDateTime_d"
                name="lblCheckDateTime_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ checkDateTime }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnInUse_d" name="spnInUse_d" CssClass="col-form-label text-right"
                >是否在用</span
              >
            </td>
            <td class="text-left">
              <label id="lblInUse_d" name="lblInUse_d" class="text-primary" style="width: 150px">
                {{ inUse }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnIsExistFile_d"
                name="spnIsExistFile_d"
                CssClass="col-form-label text-right"
                >是否存在文件</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblIsExistFile_d"
                name="lblIsExistFile_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ isExistFile }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnPrjId_d" name="spnPrjId_d" CssClass="col-form-label text-right"
                >工程Id</span
              >
            </td>
            <td class="text-left">
              <label id="lblPrjId_d" name="lblPrjId_d" class="text-primary" style="width: 150px">
                {{ prjId }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnCmPrjId_d" name="spnCmPrjId_d" CssClass="col-form-label text-right"
                >Cm工程Id</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblCmPrjId_d"
                name="lblCmPrjId_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ cmPrjId }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnIpAddress_d" name="spnIpAddress_d" CssClass="col-form-label text-right"
                >服务器</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblIpAddress_d"
                name="lblIpAddress_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ ipAddress }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span
                id="spnIdFtpResource_d"
                name="spnIdFtpResource_d"
                CssClass="col-form-label text-right"
                >FTP资源流水号</span
              >
            </td>
            <td class="text-left">
              <label
                id="lblIdFtpResource_d"
                name="lblIdFtpResource_d"
                class="text-primary"
                style="width: 150px"
              >
                {{ idFtpResource }}
              </label>
            </td>
          </tr>
          <tr>
            <td class="text-right">
              <span id="spnMemo_d" name="spnMemo_d" CssClass="col-form-label text-right">说明</span>
            </td>
            <td class="text-left">
              <label id="lblMemo_d" name="lblMemo_d" class="text-primary" style="width: 150px">
                {{ memo }}
              </label>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <template #footer>
      <a-button id="btnCancelFileResource" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</a-button>
    </template>
  </a-modal>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import { clsFileResourceENEx } from '@/ts/L0Entity/ResourceMan/clsFileResourceENEx';
  export default defineComponent({
    name: 'FileResourceDetailAi',

    components: {
      // 组件注册
    },

    setup() {
      const strTitle = ref('文件资源详细信息');
      const refDivDetail = ref();
      const strCancelButtonText = ref('取消');
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
      const fileDirName = ref('');
      const fileName = ref('');
      const extension = ref('');
      const tabId = ref('');
      const isBelongsCurrCMPrj = ref('0');
      const isGeneCode = ref('0');
      const isCanDel = ref('0');
      const fileLength = ref(0);
      const fileType = ref('');
      const creationTime = ref('');
      const lastWriteTime = ref('');
      const checkDateTime = ref('');
      const inUse = ref('0');
      const isExistFile = ref('0');
      const prjId = ref('');
      const cmPrjId = ref('');
      const ipAddress = ref('');
      const idFtpResource = ref('');
      const memo = ref('');

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_DetailAi4Html:Gen_Detail_setup_ShowDataFromObj)
       * @param pobjFileResourceEN">表实体类对象</param>
       **/
      async function ShowDataFromFileResourceObj(pobjFileResourceENEx: clsFileResourceENEx) {
        fileDirName.value = pobjFileResourceENEx.fileDirName; // 文件目录名
        fileName.value = pobjFileResourceENEx.fileName; // 文件名
        extension.value = pobjFileResourceENEx.extension; // 扩展名
        tabId.value = pobjFileResourceENEx.tabId; // 表ID
        isBelongsCurrCMPrj.value =
          pobjFileResourceENEx.isBelongsCurrCMPrj !== null
            ? pobjFileResourceENEx.isBelongsCurrCMPrj.toString()
            : ''; // 是否属于当前项目
        isGeneCode.value =
          pobjFileResourceENEx.isGeneCode !== null
            ? pobjFileResourceENEx.isGeneCode.toString()
            : ''; // 是否生成代码
        isCanDel.value =
          pobjFileResourceENEx.isCanDel !== null ? pobjFileResourceENEx.isCanDel.toString() : ''; // 是否可删除
        fileLength.value = pobjFileResourceENEx.fileLength; // 文件长度
        fileType.value = pobjFileResourceENEx.fileType; // 文件类型
        creationTime.value = pobjFileResourceENEx.creationTime; // 建立时间
        lastWriteTime.value = pobjFileResourceENEx.lastWriteTime; // 修改日期
        checkDateTime.value = pobjFileResourceENEx.checkDateTime; // CheckDateTime
        inUse.value =
          pobjFileResourceENEx.inUse !== null ? pobjFileResourceENEx.inUse.toString() : ''; // 是否在用
        isExistFile.value =
          pobjFileResourceENEx.isExistFile !== null
            ? pobjFileResourceENEx.isExistFile.toString()
            : ''; // 是否存在文件
        prjId.value = pobjFileResourceENEx.prjId; // 工程Id
        cmPrjId.value = pobjFileResourceENEx.cmPrjId; // Cm工程Id
        ipAddress.value = pobjFileResourceENEx.ipAddress; // 服务器
        idFtpResource.value = pobjFileResourceENEx.idFtpResource; // FTP资源流水号
        memo.value = pobjFileResourceENEx.memo; // 说明
      }

      /**
       * 显示对话框
       * (AutoGCLib.Vue_ViewScript_DetailAi4Html:Gen_Detail_Setup_ShowDialog)
       **/
      const showDialog = () => {
        return new Promise((resolve) => {
          // 执行打开对话框的操作
          dialogVisible.value = true;
          resolve('对话框打开成功');
          setTimeout(() => {
            console.log('对话框已经显示!');
          }, 1000);
        });
      };

      /**
       * 隐藏对话框
       * (AutoGCLib.Vue_ViewScript_DetailAi4Html:Gen_Detail_Setup_HideDialog)
       **/
      const hideDialog = () => {
        dialogVisible.value = false;
      };

      return {
        strTitle,
        refDivDetail,
        dialogVisible,
        dialogWidth,
        showDialog,
        hideDialog,
        strCancelButtonText,
        ShowDataFromFileResourceObj,
        fileDirName,
        fileName,
        extension,
        tabId,
        isBelongsCurrCMPrj,
        isGeneCode,
        isCanDel,
        fileLength,
        fileType,
        creationTime,
        lastWriteTime,
        checkDateTime,
        inUse,
        isExistFile,
        prjId,
        cmPrjId,
        ipAddress,
        idFtpResource,
        memo,
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
      btnClick(strCommandName: string, strKeyId: string) {
        alert(Format('{0}-{1}', strCommandName, strKeyId));
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
