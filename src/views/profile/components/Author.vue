<template>
  <div class="author-container">
    <div class="header">
      <my-avatar image="https://i2.100024.xyz/2023/01/26/3e727b.webp" height="60px" width="60px"> </my-avatar>
      <div class="header-desc">
        <h3>孙天祥</h3>
        <span>软件工程专业教师</span>
      </div>
    </div>
    <div class="info">Web 全栈开发工程师</div>
  </div>
</template>

<script setup>
import MyAvatar from '@/components/MyAvatar/index.vue'
import { } from 'vue'
</script>

<style lang="scss" scoped>
.author-container {
  .header {
    display: flex;

    .header-desc {
      margin-left: 12px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      span {
        font-size: 14px;
      }
    }
  }

  .info {
    margin-top: 16px;
    line-height: 22px;
    font-size: 14px;
    text-indent: 26px;
  }
}
</style>