/**
 * 类名:FileResource_EditEx(界面:FileResourceCRUD,00050351)
 * 表名:FileResource(0005)
 * 版本:2026.06.11(服务器:WIN-SRV103-116)
 * 日期:2026/06/11 03:18:15
 * 生成者:
 * 工程名称:AGC(0005)
 * CM工程:AgcSpa前端(000046, 变量首字母小写)-WebApi函数集
 * 相关数据库:109.244.40.104,8433AGC_CS12
 * PrjDataBaseId:0005
 * 模块中文名:ResourceMan
 * 框架-层名:Vue_编辑区后台AiEx_TS(Vue_ViewScript_EditCSAiEx_TS,0270)
 * 编程语言:TypeScript
 **/
//import $ from "jquery";
// import { myMessage } from '@/utils/myMessage';
import { Format } from '@/ts/PubFun/clsString';
import { FileResourceKey } from '@/ts/L0Entity/ResourceMan/clsFileResourceEN';

import { FileResource_EditAi } from '@/viewsBase/ResourceMan/FileResource_EditAi';

/**
 * FileResource_EditEx 的摘要说明。其中Q代表查询,U代表修改
 * (AutoGCLib.Vue_ViewScript_EditCSAiEx_TS4TypeScript:GeneCode)
 *
 * 扩展说明:
 * 1、继承自 FileResource_EditAi 基类
 * 2、可在此类中添加自定义业务逻辑
 * 3、不会被代码生成器覆盖
 */
export default class FileResource_EditAiEx extends FileResource_EditAi {
  /**
   * 构造函数
   * (AutoGCLib.Vue_ViewScript_EditCSAiEx_TS4TypeScript:Gen_Constructor)
   */
  constructor(objShowList: any) {
    super('FileResource_EditAiEx', objShowList);
  }

  /**
   * 按钮单击,用于调用Js函数中btnClick
   * 统一的按钮事件路由入口
   * (AutoGCLib.Vue_ViewScript_EditCSAiEx_TS4TypeScript:Gen_Vue_TS_btnEdit_Click)
   *
   * @param strCommandName 命令名称（Submit/Create/Update/Delete等）
   * @param key 关键字对象（可为null）
   */
  public btnEdit_Click(strCommandName: string, key: FileResourceKey | null): void {
    const strThisFuncName = this.btnEdit_Click.name;
    let strMsg = '';

    switch (strCommandName) {
      case 'Submit': // 提交
        this.btnSubmit_Click();
        break;

      case 'CreateWithMaxId': // 添加记录使用最大关键字
      case 'AddNewRecord': // 添加记录
      case 'Create': // 添加记录
        this.btnAddNewRecord_Click();
        break;

      case 'UpdateRecord': // 修改记录
      case 'Update': // 修改记录
      case 'UpdateRecordInTab': // 修改记录InTab
        // 🔥 单主键：检查单个关键字段
        if (key == null || key.fileResourceId == 0) {
          const strMsg = '请选择需要修改的记录!';
          console.error(strMsg);
          alert(strMsg);
          return;
        }
        if (strCommandName == 'UpdateRecordInTab') {
          this.btnUpdateRecordInTab_Click(key); // ✅ 数字型需要转换
        } else {
          this.btnUpdateRecord_Click(key); // ✅ 字符串型直接使用
        }
        break;

      default:
        strMsg = Format(
          '命令:{0}, 关键字: {1}, 在函数({2}.{3})中没有被处理!',
          strCommandName,
          key ? JSON.stringify(key) : 'null',
          this.constructor.name,
          strThisFuncName,
        );
        console.error(strMsg);
        alert(strMsg);
        break;
    }
  }

  // ============ 自定义扩展方法区域 ============
  // 💡 在此处添加您的自定义方法
  // 💡 这些方法不会被代码生成器覆盖

  /**
   * 示例：自定义验证方法
   * 可以重写基类方法以实现自定义逻辑
   */
  // public async CustomValidation(): Promise<boolean> {
  //   // 自定义验证逻辑
  //   return true;
  // }
}
