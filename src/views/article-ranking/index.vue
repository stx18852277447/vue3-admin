<template>
    <div class="article-ranking-container">
        <el-card class="header">
            <div class="dynamic-box">
                <span class="title">动态表格</span>
                <el-checkbox-group v-model="selectDynamicLabel">
                    <el-checkbox v-for="(item, index) in dynamicData" :label="item.label" :key="index">{{ item.label }}
                    </el-checkbox>
                </el-checkbox-group>
            </div>
        </el-card>

        <el-card>
            <el-table ref="tableRef" :data="tableData" border>
                <el-table-column v-for="(item, index) in tableColumns" :key="index" :prop="item.prop" :label="item.label">
                    <template #default="{ row }" v-if="item.prop === 'publicDate'">
                        {{ $filters.relativeTime(row.publicDate) }}
                    </template>
                    <template #default="{ row }" v-else-if="item.prop === 'action'">
                        <el-button type="primary" size="mini" @click="onShowClick(row)">{{ $t('msg.article.show')
                            }}</el-button>
                        <el-button type="danger" size="mini" @click="onRemoveClick(row)">{{ $t('msg.article.remove')
                            }}</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-card>
    </div>
</template>
  
<script setup>
import articleList from '@/constant/article.json'
import { dynamicData, selectDynamicLabel, tableColumns } from './dynamic'
import { onMounted } from 'vue'
import { tableRef, initSortable } from './sortable'

const tableData = articleList.list
console.log(tableData)

// 表格拖拽相关
const getTableData = () => { }
onMounted(() => {
    initSortable(tableData, getTableData)
})
</script>