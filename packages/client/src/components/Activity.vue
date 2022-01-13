<template>
  <div class="activity">
    <h3 class="activity-title">Recent Activity</h3>
    <p class="activity-subtitle">Today</p>
    <div class="activity-wrapper">
      <ul class="activity-list">
        <li v-for="item in new Array(8)" :key="item" class="activity-item">
          <div class="activity-item-left">
            <div class="activity-item-icon">
              <img v-if="isSend" src="@/assets/send.svg" alt="send icon">
              <img v-else src="@/assets/receive.svg" alt="receive icon">
            </div>
            <div class="activity-item-body">
              <p class="activity-item-title">To Daniel</p>
              <span class="activity-item-info">Sending</span>
            </div>
          </div>
          <div v-if="isSend" class="activity-item-right">- Rp 100.000</div>
          <div v-else class="activity-item-right">+ Rp 100.000</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSend: true
    }
  }
}
</script>

<style lang="scss" scoped>
.activity {
  color: #30336c;

  &-wrapper {
    margin: 0.25rem 0;
  }

  &-list {
    list-style: none;
    width: 100%;
  }

  &-item {
    background: whitesmoke;
    padding: 0.5rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    &-left {
      display: flex;
      align-items: center;
      gap: 1.2rem;
    }

    &-title {
      font-weight: 600;
    }

    &-info,
    &-right {
      font-size: 0.875rem;
    }
  }
}
</style>