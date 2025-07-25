import type { App } from 'vue';

import { SvgIcon } from '@/components/basic/svg-icon';
import { IconFont } from '@/components/basic/iconfont';

/**
 * 全局注册自定义组件
 * @param app
 */
export function setupCustomComponents(app: App) {
  if (SvgIcon.name) {
    app.component(SvgIcon.name, SvgIcon);
  }
  if (IconFont.name) {
    app.component(IconFont.name, IconFont);
  }
}
