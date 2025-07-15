// import { ElMessage } from 'element-plus';
import { message } from 'ant-design-vue';
export class myMessage {
  public static warning(strMsg: string) {
    message.warning({
      content: strMsg,
      duration: 1000, // 设置持续显示时间（以毫秒为单位）
    });
  }
  public static info(strMsg: string) {
    message.info({
      content: strMsg,
      duration: 1000, // 设置持续显示时间（以毫秒为单位）
    });
  }
  public static success(strMsg: string) {
    message.success({
      content: strMsg,
      duration: 1000, // 设置持续显示时间（以毫秒为单位）
    });
  }
}
