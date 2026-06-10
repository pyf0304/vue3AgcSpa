import { defineStore } from 'pinia';
import {
  UserCodePrjMainPath_MachineNameEx_GetUserGCRootPathWithBackup,
  UserCodePrjMainPath_MachineNameEx_SetUserGCRootPathWithBackup,
} from '@/ts/L3ForWApiEx/SystemSet/clsUserCodePrjMainPath_MachineNameExWApi';
import {
  UserCodePathEx_GetUserGCCodePathWithBackup,
  UserCodePathEx_SetUserGCCodePathWithBackup,
  type SetUserGCCodePathRequest,
} from '@/ts/L3ForWApiEx/SystemSet/clsUserCodePathExWApi';
import { IsNullOrEmpty } from '@/ts/PubFun/clsString';

export interface UserCodeRootPathItem {
  codePath: string;
  codePathBackup: string;
}

/** 缓存 key 格式: `${strCmPrjId}_${intApplicationTypeId}` */
function buildKey(strCmPrjId: string, intApplicationTypeId: number): string {
  return `${strCmPrjId}_${intApplicationTypeId}`;
}

/** 代码类型路径缓存 key 格式: `${strCmPrjId}_${intApplicationTypeId}_${strCodeTypeId}` */
function buildCodePathKey(
  strCmPrjId: string,
  intApplicationTypeId: number,
  strCodeTypeId: string,
): string {
  return `${strCmPrjId}_${intApplicationTypeId}_${strCodeTypeId}`;
}

/**
 * 模块级飞行中 Promise 表：防止并发调用时同一 key 重复请求后端。
 * 不放入 Pinia state（无需响应式），只作去重用。
 */
const _inFlightMap = new Map<string, Promise<UserCodeRootPathItem>>();

/** 代码类型路径飞行中 Promise 表（同样并发去重） */
const _codePathInFlightMap = new Map<string, Promise<UserCodeRootPathItem>>();

export interface UserCodeRootPathState {
  /** 以 "${strCmPrjId}_${intApplicationTypeId}" 为 key 的根路径缓存 */
  cacheMap: Record<string, UserCodeRootPathItem>;
  /** 以 "${strCmPrjId}_${intApplicationTypeId}_${strCodeTypeId}" 为 key 的代码类型路径缓存 */
  codePathCacheMap: Record<string, UserCodeRootPathItem>;
}

export const useUserCodeRootPathStore = defineStore({
  id: 'userCodeRootPath',

  state(): UserCodeRootPathState {
    return {
      cacheMap: {},
      codePathCacheMap: {},
    };
  },

  actions: {
    /** 从缓存中获取路径，命中则直接返回；未命中则调用接口并写入缓存。
     *  并发安全：同一 key 的多个并发调用只会发出一次后端请求。
     */
    async getOrFetch(
      strUserId: string,
      strMachineName: string,
      strPrjId: string,
      strCmPrjId: string,
      intApplicationTypeId: number,
    ): Promise<UserCodeRootPathItem> {
      const strKey = buildKey(strCmPrjId, intApplicationTypeId);

      // 1. 命中已缓存结果
      const objCached = this.cacheMap[strKey];
      if (objCached != null) {
        return objCached;
      }

      // 2. 命中飞行中 Promise（并发去重）
      const objInFlight = _inFlightMap.get(strKey);
      if (objInFlight != null) {
        return objInFlight;
      }

      // 3. 发起请求，登记 Promise，请求完成后写入缓存并清除飞行中记录
      const promise = UserCodePrjMainPath_MachineNameEx_GetUserGCRootPathWithBackup(
        strUserId,
        strMachineName,
        strPrjId,
        strCmPrjId,
        intApplicationTypeId,
      )
        .then((objCodePath) => {
          const objItem: UserCodeRootPathItem = {
            codePath: IsNullOrEmpty(objCodePath.codePath) ? '' : objCodePath.codePath,
            codePathBackup: IsNullOrEmpty(objCodePath.codePathBackup)
              ? ''
              : objCodePath.codePathBackup,
          };
          this.cacheMap[strKey] = objItem;
          _inFlightMap.delete(strKey);
          return objItem;
        })
        .catch((e) => {
          _inFlightMap.delete(strKey);
          throw e;
        });

      _inFlightMap.set(strKey, promise);
      return promise;
    },

    /** 设置路径，成功后同步更新缓存 */
    async setAndCache(params: {
      strUserId: string;
      strMachineName: string;
      strPrjId: string;
      strCmPrjId: string;
      intApplicationTypeId: number;
      strCodePath: string;
      strCodePathBackup: string;
    }): Promise<{ success: boolean; message: string }> {
      const objResult = await UserCodePrjMainPath_MachineNameEx_SetUserGCRootPathWithBackup({
        strUserId: params.strUserId,
        strMachineName: params.strMachineName,
        strPrjId: params.strPrjId,
        strCmPrjId: params.strCmPrjId,
        intApplicationTypeId: params.intApplicationTypeId,
        strCodePath: params.strCodePath,
        strCodePathBackup: params.strCodePathBackup,
      });

      if (objResult.success) {
        const strKey = buildKey(params.strCmPrjId, params.intApplicationTypeId);
        this.cacheMap[strKey] = {
          codePath: params.strCodePath,
          codePathBackup: params.strCodePathBackup,
        };
      }

      return objResult;
    },

    /** 主动使某个 key 的缓存失效（比如用户手动清除路径后调用） */
    invalidate(strCmPrjId: string, intApplicationTypeId: number): void {
      const strKey = buildKey(strCmPrjId, intApplicationTypeId);
      delete this.cacheMap[strKey];
      _inFlightMap.delete(strKey);
    },

    /** 获取代码类型路径，命中缓存直接返回；未命中调接口并写入缓存（并发安全）*/
    async getOrFetchCodePath(
      strUserId: string,
      strMachineName: string,
      strPrjId: string,
      strCmPrjId: string,
      intApplicationTypeId: number,
      strCodeTypeId: string,
    ): Promise<UserCodeRootPathItem> {
      const strKey = buildCodePathKey(strCmPrjId, intApplicationTypeId, strCodeTypeId);

      const objCached = this.codePathCacheMap[strKey];
      if (objCached != null) return objCached;

      const objInFlight = _codePathInFlightMap.get(strKey);
      if (objInFlight != null) return objInFlight;

      const promise = UserCodePathEx_GetUserGCCodePathWithBackup(
        strUserId,
        strMachineName,
        strPrjId,
        strCmPrjId,
        intApplicationTypeId,
        strCodeTypeId,
      )
        .then((objCodePath) => {
          const objItem: UserCodeRootPathItem = {
            codePath: IsNullOrEmpty(objCodePath.codePath) ? '' : objCodePath.codePath,
            codePathBackup: IsNullOrEmpty(objCodePath.codePathBackup)
              ? ''
              : objCodePath.codePathBackup,
          };
          this.codePathCacheMap[strKey] = objItem;
          _codePathInFlightMap.delete(strKey);
          return objItem;
        })
        .catch((e) => {
          _codePathInFlightMap.delete(strKey);
          throw e;
        });

      _codePathInFlightMap.set(strKey, promise);
      return promise;
    },

    /** 设置代码类型路径，成功后同步更新缓存 */
    async setAndCacheCodePath(
      params: SetUserGCCodePathRequest,
    ): Promise<{ success: boolean; message: string }> {
      const objResult = await UserCodePathEx_SetUserGCCodePathWithBackup(params);
      if (objResult.success) {
        const strKey = buildCodePathKey(
          params.strCmPrjId,
          params.intApplicationTypeId,
          params.strCodeTypeId,
        );
        this.codePathCacheMap[strKey] = {
          codePath: params.strCodePath,
          codePathBackup: params.strCodePathBackup,
        };
      }
      return objResult;
    },

    /** 使某个代码类型路径缓存失效 */
    invalidateCodePath(
      strCmPrjId: string,
      intApplicationTypeId: number,
      strCodeTypeId: string,
    ): void {
      const strKey = buildCodePathKey(strCmPrjId, intApplicationTypeId, strCodeTypeId);
      delete this.codePathCacheMap[strKey];
      _codePathInFlightMap.delete(strKey);
    },

    /** 清空全部缓存 */
    clearAll(): void {
      this.cacheMap = {};
      this.codePathCacheMap = {};
      _inFlightMap.clear();
      _codePathInFlightMap.clear();
    },
  },
});
