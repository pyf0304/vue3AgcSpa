import { defineStore } from 'pinia';
import { Format } from '@/ts/PubFun/clsString';
import { PrjTabFldEx_GetSourceTabName } from '@/ts/L3ForWApiEx/Table_Field/clsPrjTabFldExWApi';

export interface SourceTabNameItem {
  key: string; // 组合键: strPrjId_strTabId_strFldName
  strPrjId: string;
  strTabId: string;
  strFldName: string;
  strSourceTabName: string;
}

export interface SourceTabNameState {
  cacheList: SourceTabNameItem[];
}

// 生成缓存键
function generateCacheKey(strPrjId: string, strTabId: string, strFldName: string): string {
  return `${strPrjId}_${strTabId}_${strFldName}`;
}

export const useSourceTabNameStore = defineStore({
  id: 'SourceTabName',

  state(): SourceTabNameState {
    return {
      cacheList: [],
    };
  },

  actions: {
    /**
     * 根据项目ID、表ID、字段名获取源表名称
     * @param strPrjId 项目ID
     * @param strTabId 表ID
     * @param strFldName 字段名
     * @returns 源表名称
     */
    async getSourceTabName(
      strPrjId: string,
      strTabId: string,
      strFldName: string,
    ): Promise<string> {
      const cacheKey = generateCacheKey(strPrjId, strTabId, strFldName);

      // 检查缓存
      const cacheItem = this.cacheList.find((x) => x.key === cacheKey);
      if (cacheItem != null) {
        return cacheItem.strSourceTabName;
      }

      try {
        // 调用API获取源表名称
        const strSourceTabName = await PrjTabFldEx_GetSourceTabName(strPrjId, strTabId, strFldName);

        // 缓存结果
        const cacheItem: SourceTabNameItem = {
          key: cacheKey,
          strPrjId,
          strTabId,
          strFldName,
          strSourceTabName,
        };
        this.cacheList.push(cacheItem);

        return strSourceTabName;
      } catch (e: any) {
        const strMsg = Format('(errid:SourceTabName001)获取源表名称出错,${e}.');
        console.error(strMsg);
        throw strMsg;
      }
    },

    /**
     * 根据缓存键获取源表名称（不查询API）
     * @param strPrjId 项目ID
     * @param strTabId 表ID
     * @param strFldName 字段名
     * @returns 源表名称，如果缓存中不存在则返回空字符串
     */
    getSourceTabNameFromCache(strPrjId: string, strTabId: string, strFldName: string): string {
      const cacheKey = generateCacheKey(strPrjId, strTabId, strFldName);
      const cacheItem = this.cacheList.find((x) => x.key === cacheKey);
      return cacheItem ? cacheItem.strSourceTabName : '';
    },

    /**
     * 清除指定的缓存项
     * @param strPrjId 项目ID
     * @param strTabId 表ID
     * @param strFldName 字段名
     * @returns 是否成功删除
     */
    delCacheByKey(strPrjId: string, strTabId: string, strFldName: string): boolean {
      const cacheKey = generateCacheKey(strPrjId, strTabId, strFldName);
      const intIndex = this.cacheList.findIndex((x) => x.key === cacheKey);

      if (intIndex > -1) {
        this.cacheList.splice(intIndex, 1);
        console.log(`缓存项:${cacheKey}已移除！`);
        return true;
      } else {
        console.error(`缓存项:${cacheKey}不存在！`);
        return false;
      }
    },

    /**
     * 清除指定项目的所有缓存
     * @param strPrjId 项目ID
     * @returns 是否成功删除
     */
    delCacheByPrjId(strPrjId: string): boolean {
      if (strPrjId == null || strPrjId === '') return true;

      const originalLength = this.cacheList.length;
      this.cacheList = this.cacheList.filter((item) => item.strPrjId !== strPrjId);

      if (this.cacheList.length < originalLength) {
        console.log(`项目ID:${strPrjId}的缓存已全部移除！`);
        return true;
      } else {
        console.error(`项目ID:${strPrjId}在缓存列表中不存在！`);
        return false;
      }
    },

    /**
     * 清除指定表的所有缓存
     * @param strTabId 表ID
     * @returns 是否成功删除
     */
    delCacheByTabId(strTabId: string): boolean {
      if (strTabId == null || strTabId === '') return true;

      const originalLength = this.cacheList.length;
      this.cacheList = this.cacheList.filter((item) => item.strTabId !== strTabId);

      if (this.cacheList.length < originalLength) {
        console.log(`表ID:${strTabId}的缓存已全部移除！`);
        return true;
      } else {
        console.error(`表ID:${strTabId}在缓存列表中不存在！`);
        return false;
      }
    },

    /**
     * 清除所有缓存
     */
    clearAllCache(): void {
      this.cacheList = [];
      console.log('所有缓存已清除！');
    },
  },
});
