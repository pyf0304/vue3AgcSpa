<template>
  <div>
    <Alert message="游戏介绍" type="info" show-icon>
      <template #description> 英雄联盟 -- 根据数组格式的数据进行导出 </template>
    </Alert>
    <Card title="英雄列表mock数据" style="margin-top: 20px">
      <!-- <DynamicTable
        size="small"
        bordered
        :data-request="loadData"
        :columns="columns"
        row-key="heroid"
        export-file-name="表格自带导出"
        :custom-row="customRow"
      >
        <template #export-button> <a-button type="primary">表格自带导出</a-button> </template>
         <template #toolbar>
          <a-button type="primary" @click="aoaToExcel"> 数组格式导出 </a-button>
          <a-button type="primary" @click="openExportModal"> 自定义导出格式 </a-button>
        </template> 
      </DynamicTable> -->
    </Card>
  </div>
</template>

<script lang="ts" setup>
  // import { useRouter } from 'vue-router';
  import { Alert, Card } from 'ant-design-vue';
  // import { columns } from './columns';
  // import { useTable } from '@/components/core/dynamic-table';
  // import { getLolHeroList } from '@/api/demos/hero';
  // import { useContextMenu } from '@/hooks/functions/useContextMenu';
  // import { jsonToSheetXlsx, aoaToSheetXlsx } from '@/components/basic/excel';

  defineOptions({
    name: 'DemosTablesLolTable',
  });

  // const [DynamicTable] = useTable();

  // const router = useRouter();
  // const [createContextMenu] = useContextMenu();

  // const exportExcelModal = useExportExcelModal();
  // let tableData: any[] = [];

  // const aoaToExcel = () => {
  //   const colFilters = columns.filter((n) => n.dataIndex !== 'INDEX');
  //   const colFilterKeys = colFilters.map((n) => n.dataIndex);
  //   // 保证data顺序与header一致
  //   aoaToSheetXlsx({
  //     data: tableData
  //       .map((item) => {
  //         return colFilterKeys.reduce((p, k) => {
  //           p[k] = Array.isArray(item[k]) ? item[k].toString() : item[k];
  //           return p;
  //         }, {});
  //       })
  //       .map((item) => Object.values(item)),
  //     // ['头像', '英雄名称', '英雄称号', '定位']
  //     header: colFilters.map((column) => column.title),
  //     filename: '二维数组方式导出excel.xlsx',
  //   });
  // };

  // const openExportModal = () => {
  //   exportExcelModal.openModal({
  //     onOk: ({ filename, bookType }) => {
  //       // 默认Object.keys(data[0])作为header
  //       jsonToSheetXlsx({
  //         data: tableData,
  //         filename,
  //         write2excelOpts: {
  //           bookType,
  //         },
  //       });
  //     },
  //   });
  // };

  // const loadData = async (params) => {
  //   const { data } = await getLolHeroList(params);
  //   tableData = data.list;
  //   return data;
  // };

  // const customRow = (record) => {
  //   return {
  //     onContextmenu: (e: MouseEvent) => {
  //       createContextMenu({
  //         event: e,
  //         items: [
  //           {
  //             label: '查看',
  //             handler: () => {
  //               console.log('record', record);
  //               router.push({ name: 'demos-table-lol-info', params: { id: record.heroId } });
  //             },
  //           },
  //           {
  //             label: '编辑',
  //             handler: () => {
  //               console.log('record', record);
  //             },
  //           },
  //         ],
  //       });
  //     },
  //   };
  // };
</script>

<style lang="less" scoped></style>
