<template>
  <!-- 编辑层 -->

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
    <div id="divEditLayout" ref="refDivEdit" class="tab_layout">
      <table
        id="tabEdit"
        style="width: 600px"
        class="table table-bordered table-hover table td table-sm"
      >
        <tbody>
          <tr id="trFileName">
            <td class="text-right">
              <label
                id="lblFileDirName"
                name="lblFileDirName"
                class="col-form-label text-right"
                style="width: 90px"
                >文件目录名
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtFileDirName"
                v-model="fileDirName"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblFileName"
                name="lblFileName"
                class="col-form-label text-right"
                style="width: 90px"
                >文件名
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtFileName"
                v-model="fileName"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
          <tr id="trTabId">
            <td class="text-right">
              <label
                id="lblExtension"
                name="lblExtension"
                class="col-form-label text-right"
                style="width: 90px"
                >扩展名
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtExtension"
                v-model="extension"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblTabId"
                name="lblTabId"
                class="col-form-label text-right"
                style="width: 90px"
                >表ID
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlTabId"
                v-model="tabId"
                class="form-control form-control-sm"
                style="width: 150px"
              >
                <option v-for="(item, index) in arrvPrjTab_Sim" :key="index" :value="item.tabId">
                  {{ item.tabName }}
                </option></select
              >
            </td>
          </tr>
          <tr id="trIsGeneCode">
            <td class="text-left" ColSpan="2">
              <span class="form-control form-control-sm" style="width: 150px">
                <input
                  id="chkIsBelongsCurrCMPrj"
                  v-model="isBelongsCurrCMPrj"
                  type="checkbox"
                  Text="是否属于当前项目"
                /><label for="chkIsBelongsCurrCMPrj">是否属于当前项目</label></span
              >
            </td>
            <td class="text-left" ColSpan="2">
              <span class="form-control form-control-sm" style="width: 150px">
                <input
                  id="chkIsGeneCode"
                  v-model="isGeneCode"
                  type="checkbox"
                  Text="是否生成代码"
                /><label for="chkIsGeneCode">是否生成代码</label></span
              >
            </td>
          </tr>
          <tr id="trFileLength">
            <td class="text-left" ColSpan="2">
              <span class="form-control form-control-sm" style="width: 150px">
                <input
                  id="chkIsCanDel"
                  v-model="isCanDel"
                  type="checkbox"
                  Text="是否可删除"
                /><label for="chkIsCanDel">是否可删除</label></span
              >
            </td>
            <td class="text-right">
              <label
                id="lblFileLength"
                name="lblFileLength"
                class="col-form-label text-right"
                style="width: 90px"
                >文件长度
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtFileLength"
                v-model.number="fileLength"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
          <tr id="trCreationTime">
            <td class="text-right">
              <label
                id="lblFileType"
                name="lblFileType"
                class="col-form-label text-right"
                style="width: 90px"
                >文件类型
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtFileType"
                v-model="fileType"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblCreationTime"
                name="lblCreationTime"
                class="col-form-label text-right"
                style="width: 90px"
                >建立时间
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtCreationTime"
                v-model="creationTime"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
          <tr id="trCheckDateTime">
            <td class="text-right">
              <label
                id="lblLastWriteTime"
                name="lblLastWriteTime"
                class="col-form-label text-right"
                style="width: 90px"
                >修改日期
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtLastWriteTime"
                v-model="lastWriteTime"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblCheckDateTime"
                name="lblCheckDateTime"
                class="col-form-label text-right"
                style="width: 90px"
                >CheckDateTime
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtCheckDateTime"
                v-model="checkDateTime"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
          <tr id="trIsExistFile">
            <td class="text-left" ColSpan="2">
              <span class="form-control form-control-sm" style="width: 150px">
                <input id="chkInUse" v-model="inUse" type="checkbox" Text="是否在用" /><label
                  for="chkInUse"
                  >是否在用</label
                ></span
              >
            </td>
            <td class="text-left" ColSpan="2">
              <span class="form-control form-control-sm" style="width: 150px">
                <input
                  id="chkIsExistFile"
                  v-model="isExistFile"
                  type="checkbox"
                  Text="是否存在文件"
                /><label for="chkIsExistFile">是否存在文件</label></span
              >
            </td>
          </tr>
          <tr id="trIpAddress">
            <td class="text-right">
              <label
                id="lblPrjId"
                name="lblPrjId"
                class="col-form-label text-right"
                style="width: 90px"
                >工程Id
              </label>
            </td>
            <td class="text-left">
              <select
                id="ddlPrjId"
                v-model="prjId"
                class="form-control form-control-sm"
                style="width: 150px"
              >
                <option v-for="(item, index) in arrProjects" :key="index" :value="item.prjId">
                  {{ item.prjName }}
                </option></select
              >
            </td>
            <td class="text-right">
              <label
                id="lblIpAddress"
                name="lblIpAddress"
                class="col-form-label text-right"
                style="width: 90px"
                >服务器
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtIpAddress"
                v-model="ipAddress"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
          <tr id="trMemo">
            <td class="text-right">
              <label
                id="lblIdFtpResource"
                name="lblIdFtpResource"
                class="col-form-label text-right"
                style="width: 90px"
                >FTP资源流水号
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtIdFtpResource"
                v-model="idFtpResource"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
            <td class="text-right">
              <label
                id="lblMemo"
                name="lblMemo"
                class="col-form-label text-right"
                style="width: 90px"
                >说明
              </label>
            </td>
            <td class="text-left">
              <input
                id="txtMemo"
                v-model="memo"
                class="form-control form-control-sm"
                style="width: 150px"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <template #footer>
      <a-button id="btnCancelFileResource" @click="dialogVisible = false">{{
        strCancelButtonText
      }}</a-button>
      <a-button
        id="btnSubmitFileResource"
        type="primary"
        @click="btnFileResource_Edit_Click('Submit', null)"
        >{{ strSubmitButtonText }}</a-button
      >
    </template>
  </a-modal>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { clsDateTime } from '@/ts/PubFun/clsDateTime';
  import FileResource_EditAiEx from '@/views/ResourceMan/FileResource_EditAiEx';
  import { clsFileResourceEN, FileResourceKey } from '@/ts/L0Entity/ResourceMan/clsFileResourceEN';
  import { Is0EqEmpty, IsNullOrEmptyEq0, Format } from '@/ts/PubFun/clsString';
  import { clsvPrjTab_SimEN } from '@/ts/L0Entity/Table_Field/clsvPrjTab_SimEN';
  import { clsProjectsEN } from '@/ts/L0Entity/PrjManage/clsProjectsEN';
  import { Projects_GetArrProjects } from '@/ts/L3ForWApi/PrjManage/clsProjectsWApi';
  import { vPrjTab_Sim_GetArrvPrjTab_SimByCmPrjId } from '@/ts/L3ForWApi/Table_Field/clsvPrjTab_SimWApi';
  import {
    refDivEdit,
    CmPrjId_Local,
    PrjId_Session,
  } from '@/views/ResourceMan/FileResourceVueShare';
  import { useUserStore } from '@/store/modulesShare/user';

  import { FileResource_EditAi } from '@/viewsBase/ResourceMan/FileResource_EditAi';
  import { enumPageDispMode } from '@/ts/PubFun/enumPageDispMode';
  export default defineComponent({
    name: 'FileResourceEditAi',

    components: {
      // 组件注册
    },

    setup() {
      const userStore = useUserStore();
      const strTitle = ref('文件资源编辑');
      const strSubmitButtonText = ref('添加');
      const strCancelButtonText = ref('取消');
      const keyId = ref('');
      const objPage_Edit = ref<FileResource_EditAiEx>();
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度

      const fileDirName = ref('');
      const fileName = ref('');
      const extension = ref('');
      const tabId = ref('');
      const isBelongsCurrCMPrj = ref(true);
      const isGeneCode = ref(true);
      const isCanDel = ref(true);
      const fileLength = ref(0);
      const fileType = ref('');
      const creationTime = ref('');
      const lastWriteTime = ref('');
      const checkDateTime = ref('');
      const inUse = ref(true);
      const isExistFile = ref(true);
      const prjId = ref('');
      const cmPrjId = ref('');
      const ipAddress = ref('');
      const idFtpResource = ref('');
      const updDate = ref('');
      const updUser = ref('');
      const memo = ref('');

      const arrvPrjTab_Sim = ref<clsvPrjTab_SimEN[] | null>([]);
      const arrProjects = ref<clsProjectsEN[] | null>([]);

      /** 函数功能:为编辑区绑定下拉框
       * (AutoGCLib.Vue_ViewScript_EditAi4Html:Gen_Edit_Setup_BindDdl4EditRegionInDiv)
       **/
      async function BindDdl4EditRegionInDiv() {
        arrProjects.value = await Projects_GetArrProjects();
        prjId.value = '0';
        arrvPrjTab_Sim.value = await vPrjTab_Sim_GetArrvPrjTab_SimByCmPrjId(
          CmPrjId_Local.value,
          PrjId_Session.value,
        );
        tabId.value = '0';
      }

      /** 函数功能:把界面上的属性数据传到类对象中
       * (AutoGCLib.Vue_ViewScript_EditAi4Html:Gen_Edit_Setup_GetEditDataObj)
       * @param pobjFileResourceEN">数据传输的目的类对象</param>
       **/
      async function GetEditDataFileResourceObj() {
        const pobjFileResourceEN = new clsFileResourceEN();
        pobjFileResourceEN.SetFileDirName(fileDirName.value); // 文件目录名
        pobjFileResourceEN.SetFileName(fileName.value); // 文件名
        pobjFileResourceEN.SetExtension(extension.value); // 扩展名
        pobjFileResourceEN.SetTabId(Is0EqEmpty(tabId.value)); // 表ID
        pobjFileResourceEN.SetIsBelongsCurrCMPrj(isBelongsCurrCMPrj.value); // 是否属于当前项目
        pobjFileResourceEN.SetIsGeneCode(isGeneCode.value); // 是否生成代码
        pobjFileResourceEN.SetIsCanDel(isCanDel.value); // 是否可删除
        pobjFileResourceEN.SetFileLength(Number(fileLength.value)); // 文件长度
        pobjFileResourceEN.SetFileType(fileType.value); // 文件类型
        pobjFileResourceEN.SetCreationTime(creationTime.value); // 建立时间
        pobjFileResourceEN.SetLastWriteTime(lastWriteTime.value); // 修改日期
        pobjFileResourceEN.SetCheckDateTime(checkDateTime.value); // CheckDateTime
        pobjFileResourceEN.SetInUse(inUse.value); // 是否在用
        pobjFileResourceEN.SetIsExistFile(isExistFile.value); // 是否存在文件
        pobjFileResourceEN.SetPrjId(Is0EqEmpty(prjId.value)); // 工程Id
        pobjFileResourceEN.SetCmPrjId(CmPrjId_Local.value); // Cm工程Id
        pobjFileResourceEN.SetIpAddress(ipAddress.value); // 服务器
        pobjFileResourceEN.SetIdFtpResource(idFtpResource.value); // FTP资源流水号
        pobjFileResourceEN.SetUpdDate(clsDateTime.getTodayDateTimeStr(1)); // 修改日期
        pobjFileResourceEN.SetUpdUser(userStore.getUserId); // 修改者
        pobjFileResourceEN.SetMemo(memo.value); // 说明
        return pobjFileResourceEN;
      }

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_EditAi4Html:Gen_Edit_Setup_ShowDataFromObj)
       * @param pobjFileResourceEN">表实体类对象</param>
       **/
      async function ShowDataFromFileResourceObj(pobjFileResourceEN: clsFileResourceEN) {
        fileDirName.value = pobjFileResourceEN.fileDirName; // 文件目录名
        fileName.value = pobjFileResourceEN.fileName; // 文件名
        extension.value = pobjFileResourceEN.extension; // 扩展名
        tabId.value = IsNullOrEmptyEq0(pobjFileResourceEN.tabId); // 表ID
        isBelongsCurrCMPrj.value = pobjFileResourceEN.isBelongsCurrCMPrj; // 是否属于当前项目
        isGeneCode.value = pobjFileResourceEN.isGeneCode; // 是否生成代码
        isCanDel.value = pobjFileResourceEN.isCanDel; // 是否可删除
        fileLength.value = pobjFileResourceEN.fileLength; // 文件长度
        fileType.value = pobjFileResourceEN.fileType; // 文件类型
        creationTime.value = pobjFileResourceEN.creationTime; // 建立时间
        lastWriteTime.value = pobjFileResourceEN.lastWriteTime; // 修改日期
        checkDateTime.value = pobjFileResourceEN.checkDateTime; // CheckDateTime
        inUse.value = pobjFileResourceEN.inUse; // 是否在用
        isExistFile.value = pobjFileResourceEN.isExistFile; // 是否存在文件
        prjId.value = IsNullOrEmptyEq0(pobjFileResourceEN.prjId); // 工程Id
        ipAddress.value = pobjFileResourceEN.ipAddress; // 服务器
        idFtpResource.value = pobjFileResourceEN.idFtpResource; // FTP资源流水号
        memo.value = pobjFileResourceEN.memo; // 说明
      }

      /**
       * 清除用户自定义控件中,所有控件的值
       * (AutoGCLib.Vue_ViewScript_EditAi4Html:Gen_Edit_Setup_Clear)
       **/
      function Clear() {
        fileDirName.value = '';
        fileName.value = '';
        extension.value = '';
        tabId.value = '0';
        isBelongsCurrCMPrj.value = false;
        isGeneCode.value = false;
        isCanDel.value = false;
        fileLength.value = 0;
        fileType.value = '';
        creationTime.value = '';
        lastWriteTime.value = '';
        checkDateTime.value = '';
        inUse.value = false;
        isExistFile.value = false;
        prjId.value = '0';
        ipAddress.value = '';
        idFtpResource.value = '';
        memo.value = '';
      }

      /** 函数功能:事件函数,当单击<确定修改>时发生的事件函数,
       * 具体功能为把界面内容同步数据库中,把界面内容保存到数据库中
       * (AutoGCLib.Vue_ViewScript_EditAi4Html:Gen_Edit_Setup_btnSubmit_Click)
       **/
      const btnSubmit_Click = async () => {
        const strThisFuncName = btnSubmit_Click.name;
        if (objPage_Edit.value == null) {
          alert('编辑页面初始化不成功,请联系管理员!(in btnSubmit_Click)');
          return;
        }
        const strCommandText: string = strSubmitButtonText.value;
        try {
          let returnBool = false;
          let strInfo = '';
          let strMsg = '';
          switch (strCommandText) {
            case '添加':
              strSubmitButtonText.value = '确认添加';
              strCancelButtonText.value = '取消添加';
              await objPage_Edit.value.AddNewRecord();
              break;
            case '确认添加':
              //这是一个单表的插入的代码,由于逻辑层太简单,
              //就把逻辑层合并到控制层,
              if (['02', '03', '06'].indexOf(clsFileResourceEN._PrimaryTypeId) > -1) {
                const returnKeyId = await objPage_Edit.value.AddNewRecordWithReturnKeySave();
                if (returnKeyId != 0) {
                  hideDialog();
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGvCache(clsFileResourceEN._CurrTabName, '');
                }
              } else {
                returnBool = await objPage_Edit.value.AddNewRecordSave();
                if (returnBool == true) {
                  if (FileResource_EditAi.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                    hideDialog();
                  }
                  if (objPage_Edit.value.iShowList != null)
                    objPage_Edit.value.iShowList.BindGv(
                      clsFileResourceEN._CurrTabName,
                      keyId.value.toString(),
                    );
                }
              }
              break;
            case '确认修改':
              //这是一个单表的修改的代码,由于逻辑层太简单,
              returnBool = await objPage_Edit.value.UpdateRecordSave();
              strInfo = returnBool ? '修改成功!' : '修改不成功!';
              strInfo += '(In FileResource_EditAi.btnSubmit_Click)';
              //显示信息框
              //console.log(strInfo);
              alert(strInfo);
              if (returnBool == true) {
                if (FileResource_EditAi.strPageDispModeId == enumPageDispMode.PopupBox_01) {
                  hideDialog();
                }
                if (objPage_Edit.value.iShowList != null)
                  objPage_Edit.value.iShowList.BindGv(
                    clsFileResourceEN._CurrTabName,
                    keyId.value.toString(),
                  );
              }
              break;
            default:
              strMsg = Format(
                'strCommandText:{0}在switch中没有处理!(In btnSubmit_Click())',
                strCommandText,
              );
              console.error(strMsg);
              alert(strMsg);
              break;
          }
        } catch (e) {
          const strMsg = Format(
            '(errid: WiTsCs0033)在保存记录时({3})时出错!请联系管理员!{0}.(in {1}.{2})',
            e,
            objPage_Edit.value.className,
            strThisFuncName,
            strCommandText,
          );
          console.error(strMsg);
          alert(strMsg);
        }
      };

      /**
       * 显示对话框
       * (AutoGCLib.Vue_ViewScript_EditAi4Html:Gen_Edit_Setup_ShowDialog)
       **/
      const showDialog = async (pobjPage_Edit: FileResource_EditAiEx) => {
        objPage_Edit.value = pobjPage_Edit;
        // 执行打开对话框的操作
        dialogVisible.value = true;
        await BindDdl4EditRegionInDiv();
      };

      /**
       * 处理保存逻辑
       * (AutoGCLib.Vue_ViewScript_EditAi4Html:Gen_Edit_Setup_HandleSave)
       **/
      const handleSave = () => {
        // 在这里处理保存逻辑
        dialogVisible.value = false;
      };

      /**
       * 隐藏对话框
       * (AutoGCLib.Vue_ViewScript_EditAi4Html:Gen_Edit_Setup_HideDialog)
       **/
      const hideDialog = () => {
        dialogVisible.value = false;
      };

      return {
        refDivEdit,
        objPage_Edit,
        strTitle,
        dialogVisible,
        dialogWidth,
        showDialog,
        handleSave,
        hideDialog,
        strSubmitButtonText,
        strCancelButtonText,
        GetEditDataFileResourceObj,
        ShowDataFromFileResourceObj,
        Clear,
        btnSubmit_Click,
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
        updDate,
        updUser,
        memo,
        arrvPrjTab_Sim,
        arrProjects,
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
       *(AutoGCLib.Vue_ViewScript_EditAi4Html:Gen_Edit_Methods_btnEdit_Click)
       **/
      btnFileResource_Edit_Click(strCommandName: string, key: FileResourceKey | null) {
        const objPageEdit = this.objPage_Edit as FileResource_EditAiEx | undefined;
        if (objPageEdit == null) {
          const strMsg = '编辑页面初始化不成功,请联系管理员!(in btnFileResource_Edit_Click)';
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        if (key == null || key.fileResourceID == 0) {
          objPageEdit.btnEdit_Click(strCommandName, null);
        } else {
          objPageEdit.btnEdit_Click(strCommandName, key);
        }
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
