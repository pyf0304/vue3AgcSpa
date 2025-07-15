<template>
  <div id="divDetailLayout_Sub" ref="refDivDetail" class="tab_layout">
    <!-- 详细信息层 -->
    <ul id="ulDetail" name="ulDetail" class="nav">
      <li class="nav-item">
        <div class="btn-group" role="group" aria-label="Basic example">
          <span id="spnPageDispModeName_d" name="spnPageDispModeName_d" cssClass="col-form-label"
            >显示:</span
          >
          <label id="lblPageDispModeName_d" name="lblPageDispModeName_d" class="text-primary ml-1">
          </label>
        </div>
      </li>
      <li class="nav-item ml-1">
        <div class="btn-group" role="group" aria-label="Basic example">
          <span id="spnContainerTypeName_d" name="spnContainerTypeName_d" cssClass="col-form-label"
            >容器:</span
          >
          <label id="lblContainerTypeName_d" name="lblContainerTypeName_d" class="text-primary ml-1"
            >{{ containerTypeName }}
          </label>
        </div>
      </li>
      <li class="nav-item ml-1">
        <div class="btn-group" role="group" aria-label="Basic example">
          <span id="spnClsName_d" name="spnClsName_d" cssClass="col-form-label">类名:</span>

          <label id="lblClsName_d" name="lblClsName_d" class="text-primary ml-1"
            >{{ clsName }}
          </label>
        </div>
      </li>

      <li class="nav-item ml-1">
        <div class="btn-group" role="group" aria-label="Basic example">
          <span id="spnWidth_d" name="spnWidth_d" cssClass="col-form-label">宽:</span>
          <label id="lblWidth_d" name="lblWidth_d" class="text-primary ml-1">{{ width }} </label>
        </div>
      </li>
      <li class="nav-item ml-1">
        <div class="btn-group" role="group" aria-label="Basic example">
          <span id="spnColNum_d" name="spnColNum_d" cssClass="col-form-label">列数:</span>

          <label id="lblColNum_d" name="lblColNum_d" class="text-primary ml-1">
            {{ colNum }}
          </label>
        </div>
      </li>
      <li class="nav-item ml-1">
        <div class="btn-group" role="group" aria-label="Basic example">
          <span id="spnFldCount_d" name="spnFldCount_d" cssClass="col-form-label">字段数:</span>

          <label id="lblFldCountInUse_d" name="lblFldCountInUse_d" class="text-primary ml-1">
          </label>
        </div>
      </li>
      <li class="nav-item ml-1">
        <div class="btn-group" role="group" aria-label="Basic example">
          <span id="spnInOutTypeName_d" name="spnInOutTypeName_d" cssClass="col-form-label"
            >IN/OUT类型:</span
          >

          <label id="lblInOutTypeName_d" name="lblInOutTypeName_d" class="text-primary ml-1"
            >{{ inOutTypeName }}
          </label>
        </div>
      </li>
      <li class="nav-item ml-1">
        <div class="btn-group" role="group" aria-label="Basic example">
          <span id="spnTabName_d" name="spnTabName_d" cssClass="col-form-label">表名:</span>

          <label id="lblTabName_d" name="lblTabName_d" class="text-primary ml-1"
            >{{ tabName }}
          </label>
        </div>
      </li>
      <li class="nav-item ml-1">
        <div class="btn-group" role="group" aria-label="Basic example">
          <span id="spnCmPrjName_d" name="spnCmPrjName_d" cssClass="col-form-label">CM工程名:</span>
          <label id="lblCmPrjName_d" name="lblCmPrjName_d" class="text-primary ml-1"> </label>
        </div>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Format } from '@/ts/PubFun/clsString';
  import ViewRegion_Detail_SimEx from '@/views/RegionManage/ViewRegion_Detail_SimEx';
  import { clsViewRegionENEx } from '@/ts/L0Entity/RegionManage/clsViewRegionENEx';
  export default defineComponent({
    name: 'ViewRegionDetailSim',
    components: {
      // 组件注册
    },
    setup() {
      const pageDispModeName = ref('');
      const containerTypeName = ref('');
      const clsName = ref('');
      const width = ref(0);
      const colNum = ref(0);
      const inOutTypeName = ref('');
      const tabName = ref('');

      /** 函数功能:把类对象的属性内容显示到界面上
       * 注意:如果有两个下拉框,并且是一级、二级连带关系的,请先为一级下拉框赋值,然后再为二级下拉框赋值
       * 如果在设置数据库时,就应该一级字段在前,二级字段在后
       * (AutoGCLib.Vue_ViewScript_Detail_TS4Html:Gen_Vue_Ts_ShowDataFromObj)
       * @param pobjViewRegionEN">表实体类对象</param>
       **/
      async function ShowDataFromViewRegionObj(pobjViewRegionENEx: clsViewRegionENEx) {
        pageDispModeName.value = pobjViewRegionENEx.pageDispModeName; // 页面显示模式名称
        containerTypeName.value = pobjViewRegionENEx.containerTypeName; // 容器类型名
        clsName.value = pobjViewRegionENEx.clsName; // 类名
        width.value = pobjViewRegionENEx.width; // 宽
        colNum.value = pobjViewRegionENEx.colNum; // 列数
        inOutTypeName.value = pobjViewRegionENEx.inOutTypeName; // INOUT类型名称
        tabName.value = pobjViewRegionENEx.tabName; // 表名
      }
      const strTitle = ref('界面区域详细信息');
      const refDivDetail = ref();
      const strCancelButtonText = ref('取消');
      const SetButtonText = (strButtonId: string, strNewValue: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelViewRegion':
            strCancelButtonText.value = strNewValue;
            break;
          default:
            strMsg = `按钮Id:${strButtonId} 在函数中没有被处理!`;
            console.error(strMsg);
            alert(strMsg);
            break;
        }
      };
      const GetButtonText = (strButtonId: string) => {
        let strMsg;
        switch (strButtonId) {
          case 'btnCancelViewRegion':
            return strCancelButtonText.value;
          default:
            strMsg = `按钮Id:${strButtonId} 在函数中没有被处理!`;
            console.error(strMsg);
            alert(strMsg);
            break;
        }
      };
      const dialogVisible = ref(false);
      const dialogWidth = ref('800px'); // 设置对话框的宽度
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
        SetButtonText,
        GetButtonText,
        ShowDataFromViewRegionObj,
        pageDispModeName,
        containerTypeName,
        clsName,
        width,
        colNum,
        inOutTypeName,
        tabName,
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

      /**
       *按钮单击,用于调用Js函数中btnDetail_Click
       *(AutoGCLib.Vue_ViewScript_Detail_TS4Html:Gen_Vue_JS_btnDetail_Click)
       **/
      btnViewRegion_Detail_Click(strCommandName: string, strKeyId: string) {
        ViewRegion_Detail_SimEx.btnDetail_Click(strCommandName, strKeyId);
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
