<template>
  <div class="card add-panel">
    <div class="card-body py-2 px-3">
      <div class="d-flex align-items-center mb-2">
        <strong class="text-primary">为当前代码类型组添加代码类型</strong>
        <span class="text-muted ml-2">当前组: {{ displayGroupId }}</span>
      </div>

      <div class="form-inline mb-2">
        <label class="mr-2 mb-1">应用类型(可用)</label>
        <select
          v-model.number="selectedApplicationTypeId"
          class="form-control form-control-sm mr-2 mb-1"
          style="min-width: 260px"
          :disabled="loading"
        >
          <option value="0">全部应用类型</option>
          <option
            v-for="x in availableApplicationTypeOptions"
            :key="x.applicationTypeId"
            :value="x.applicationTypeId"
          >
            {{ x.applicationTypeName }} ({{ x.applicationTypeId }})
          </option>
        </select>
      </div>

      <div class="form-inline">
        <label class="mr-2 mb-1">代码类型</label>
        <select
          v-model="selectedCodeTypeId"
          class="form-control form-control-sm mr-2 mb-1"
          style="min-width: 260px"
          :disabled="loading || !canAdd"
        >
          <option value="">请选择代码类型</option>
          <option v-for="x in filteredCodeTypeOptions" :key="x.codeTypeId" :value="x.codeTypeId">
            {{ x.codeTypeName }} ({{ x.codeTypeId }})
          </option>
        </select>

        <label class="mr-1 mb-1">是否主组</label>
        <select
          v-model="isMainGroupText"
          class="form-control form-control-sm mr-2 mb-1"
          style="width: 90px"
          :disabled="loading || !canAdd"
        >
          <option value="false">否</option>
          <option value="true">是</option>
        </select>

        <label class="mr-1 mb-1">序号</label>
        <input
          v-model.number="orderNum"
          class="form-control form-control-sm mr-2 mb-1"
          style="width: 80px"
          type="number"
          min="1"
          :disabled="loading || !canAdd"
        />

        <button
          type="button"
          class="btn btn-sm btn-primary mb-1"
          :disabled="loading || !canAdd"
          @click="addToCurrentGroup"
        >
          {{ loading ? '添加中...' : '添加到当前组' }}
        </button>
      </div>

      <div class="form-inline mt-2">
        <label class="mr-2 mb-1">组内代码类型</label>
        <select
          v-model="selectedExistingCodeTypeId"
          class="form-control form-control-sm mr-2 mb-1"
          style="min-width: 260px"
          :disabled="loading || !canAdd"
        >
          <option value="">请选择组内代码类型</option>
          <option
            v-for="x in currentGroupCodeTypeOptions"
            :key="x.codeTypeId"
            :value="x.codeTypeId"
          >
            {{ x.codeTypeName }} ({{ x.codeTypeId }})
          </option>
        </select>

        <button
          type="button"
          class="btn btn-sm btn-outline-danger mb-1"
          :disabled="loading || !canAdd || selectedExistingCodeTypeId === ''"
          @click="removeFromCurrentGroup"
        >
          {{ loading ? '处理中...' : '从当前组移除' }}
        </button>
      </div>

      <div class="text-warning mt-1" style="min-height: 20px">{{ message }}</div>
    </div>
  </div>
</template>

<script lang="ts">
  import { computed, defineComponent, onMounted, ref, watch } from 'vue';
  import { clsApplicationTypeEN } from '@/ts/L0Entity/GeneCode/clsApplicationTypeEN';
  import { clsAppCodeTypeRelaEN } from '@/ts/L0Entity/GeneCode/clsAppCodeTypeRelaEN';
  import { clsCTCodeTypeGroupRelaEN } from '@/ts/L0Entity/GeneCode/clsCTCodeTypeGroupRelaEN';
  import { clsvCodeType_SimEN } from '@/ts/L0Entity/GeneCode/clsvCodeType_SimEN';
  import { ApplicationType_GetObjLstAsync } from '@/ts/L3ForWApi/GeneCode/clsApplicationTypeWApi';
  import { AppCodeTypeRela_GetObjLstAsync } from '@/ts/L3ForWApi/GeneCode/clsAppCodeTypeRelaWApi';
  import { vCodeType_Sim_GetObjLstAsync } from '@/ts/L3ForWApi/GeneCode/clsvCodeType_SimWApi';
  import {
    CTCodeTypeGroupRela_AddNewRecordAsync,
    CTCodeTypeGroupRela_DelRecordAsync,
    CTCodeTypeGroupRela_GetObjByKeyAsync,
    CTCodeTypeGroupRela_GetObjLstAsync,
  } from '@/ts/L3ForWApi/GeneCode/clsCTCodeTypeGroupRelaWApi';

  export default defineComponent({
    name: 'CTCodeTypeGroupAddCodeTypePanelAi',
    props: {
      currentGroupId: {
        type: String,
        required: true,
      },
    },
    emits: ['added'],
    setup(props, { emit }) {
      const loading = ref(false);
      const message = ref('');
      const codeTypeOptions = ref<Array<clsvCodeType_SimEN>>([]);
      const applicationTypeOptions = ref<Array<clsApplicationTypeEN>>([]);
      const appCodeTypeRelaList = ref<Array<clsAppCodeTypeRelaEN>>([]);
      const currentGroupCodeTypeIds = ref<Array<string>>([]);
      const selectedApplicationTypeId = ref(0);
      const selectedCodeTypeId = ref('');
      const selectedExistingCodeTypeId = ref('');
      const isMainGroupText = ref('false');
      const orderNum = ref(1);

      const canAdd = computed(() => {
        return props.currentGroupId !== '' && props.currentGroupId !== '0';
      });

      const displayGroupId = computed(() => {
        return canAdd.value ? props.currentGroupId : '未选择';
      });

      const availableApplicationTypeOptions = computed(() => {
        const availableIds = new Set<number>(
          appCodeTypeRelaList.value
            .filter((x) => x.isVisible === true)
            .map((x) => x.applicationTypeId),
        );
        return applicationTypeOptions.value.filter(
          (x) => x.isVisible === true && availableIds.has(x.applicationTypeId),
        );
      });

      const filteredCodeTypeOptions = computed(() => {
        const excludedIdSet = new Set(currentGroupCodeTypeIds.value);
        const byName = (a: clsvCodeType_SimEN, b: clsvCodeType_SimEN) =>
          a.codeTypeName.localeCompare(b.codeTypeName, 'zh-CN');
        if (selectedApplicationTypeId.value === 0) {
          return codeTypeOptions.value.filter((x) => !excludedIdSet.has(x.codeTypeId)).sort(byName);
        }
        const codeTypeIdSet = new Set(
          appCodeTypeRelaList.value
            .filter(
              (x) =>
                x.isVisible === true && x.applicationTypeId === selectedApplicationTypeId.value,
            )
            .map((x) => x.codeTypeId),
        );
        return codeTypeOptions.value
          .filter((x) => codeTypeIdSet.has(x.codeTypeId) && !excludedIdSet.has(x.codeTypeId))
          .sort(byName);
      });

      const currentGroupCodeTypeOptions = computed(() => {
        const byName = (a: clsvCodeType_SimEN, b: clsvCodeType_SimEN) =>
          a.codeTypeName.localeCompare(b.codeTypeName, 'zh-CN');
        return codeTypeOptions.value
          .filter((x) => currentGroupCodeTypeIds.value.includes(x.codeTypeId))
          .sort(byName);
      });

      watch(filteredCodeTypeOptions, (lst) => {
        if (selectedCodeTypeId.value === '') return;
        const exists = lst.some((x) => x.codeTypeId === selectedCodeTypeId.value);
        if (!exists) {
          selectedCodeTypeId.value = '';
        }
      });

      watch(currentGroupCodeTypeOptions, (lst) => {
        if (selectedExistingCodeTypeId.value === '') return;
        const exists = lst.some((x) => x.codeTypeId === selectedExistingCodeTypeId.value);
        if (!exists) {
          selectedExistingCodeTypeId.value = '';
        }
      });

      const loadBaseData = async () => {
        const [codeTypes, appTypes, appCodeTypeRelas] = await Promise.all([
          vCodeType_Sim_GetObjLstAsync('1=1'),
          ApplicationType_GetObjLstAsync('1=1'),
          AppCodeTypeRela_GetObjLstAsync('1=1'),
        ]);
        codeTypeOptions.value = codeTypes.filter((x) => x.inUse === true);
        applicationTypeOptions.value = appTypes;
        appCodeTypeRelaList.value = appCodeTypeRelas;
      };

      const loadCurrentGroupRelas = async () => {
        if (!canAdd.value) {
          currentGroupCodeTypeIds.value = [];
          return;
        }
        const relas = await CTCodeTypeGroupRela_GetObjLstAsync(
          `CtGroupId='${props.currentGroupId}'`,
        );
        currentGroupCodeTypeIds.value = relas.map((x) => x.codeTypeId);
      };

      const addToCurrentGroup = async () => {
        if (!canAdd.value) {
          message.value = '请先在上方选择代码组。';
          return;
        }
        if (selectedCodeTypeId.value === '') {
          message.value = '请选择代码类型。';
          return;
        }

        loading.value = true;
        message.value = '正在添加...';
        try {
          const existed = await CTCodeTypeGroupRela_GetObjByKeyAsync({
            ctGroupId: props.currentGroupId,
            codeTypeId: selectedCodeTypeId.value,
          });
          if (existed != null) {
            message.value = '该代码类型已在当前组中。';
            return;
          }

          const obj = new clsCTCodeTypeGroupRelaEN();
          obj.ctGroupId = props.currentGroupId;
          obj.codeTypeId = selectedCodeTypeId.value;
          obj.isMainGroup = isMainGroupText.value === 'true';
          obj.orderNum = Number(orderNum.value) > 0 ? Number(orderNum.value) : 1;

          const ok = await CTCodeTypeGroupRela_AddNewRecordAsync(obj);
          if (!ok) {
            message.value = '添加失败，请稍后重试。';
            return;
          }

          await loadCurrentGroupRelas();

          message.value = '添加成功。';
          emit('added');
        } catch (error: any) {
          console.error(error);
          message.value = `添加失败: ${String(error)}`;
        } finally {
          loading.value = false;
        }
      };

      const removeFromCurrentGroup = async () => {
        if (!canAdd.value) {
          message.value = '请先在上方选择代码组。';
          return;
        }
        if (selectedExistingCodeTypeId.value === '') {
          message.value = '请选择要移除的代码类型。';
          return;
        }

        const ok = confirm('确认将该代码类型从当前组移除吗?');
        if (!ok) return;

        loading.value = true;
        message.value = '正在移除...';
        try {
          const delCount = await CTCodeTypeGroupRela_DelRecordAsync({
            ctGroupId: props.currentGroupId,
            codeTypeId: selectedExistingCodeTypeId.value,
          });
          if (delCount <= 0) {
            message.value = '移除失败，请稍后重试。';
            return;
          }

          selectedExistingCodeTypeId.value = '';
          await loadCurrentGroupRelas();
          message.value = '已从当前组移除。';
          emit('added');
        } catch (error: any) {
          console.error(error);
          message.value = `移除失败: ${String(error)}`;
        } finally {
          loading.value = false;
        }
      };

      onMounted(async () => {
        await loadBaseData();
        await loadCurrentGroupRelas();
      });

      watch(
        () => props.currentGroupId,
        async () => {
          selectedCodeTypeId.value = '';
          selectedExistingCodeTypeId.value = '';
          await loadCurrentGroupRelas();
        },
      );

      return {
        loading,
        message,
        codeTypeOptions,
        availableApplicationTypeOptions,
        filteredCodeTypeOptions,
        currentGroupCodeTypeOptions,
        selectedApplicationTypeId,
        selectedCodeTypeId,
        selectedExistingCodeTypeId,
        isMainGroupText,
        orderNum,
        canAdd,
        displayGroupId,
        addToCurrentGroup,
        removeFromCurrentGroup,
      };
    },
  });
</script>

<style scoped>
  .add-panel {
    border: 1px solid #d7e3ef;
    margin-bottom: 8px;
    background: #f8fbff;
  }
</style>
