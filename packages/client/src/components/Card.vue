<template>
  <div class="card">
    <h2 class="card-title">{{ name }}</h2>
    <p class="card-small">{{ accountNumber }}</p>
    <h3 class="card-subtitle">Balance</h3>
    <div class="card-info">
      <p v-show="isShow">{{ getBalance }}</p>
      <p v-show="!isShow">tap to see</p>
      <div class="card-btn" @click="handleToggle">
        <img v-show="!isShow" src="@/assets/visibility.svg" alt="show icon">
        <img v-show="isShow" src="@/assets/visibility-off.svg" alt="show icon">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false
    }
  },
  methods: {
    handleToggle() {
      this.isShow = !this.isShow
    }
  },
  props: {
    name: String,
    accountNumber: String,
    balance: Number,
  },
  computed: {
    getBalance() {
      return Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR'}).format(this.balance)
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  background: #4e54c8;
  background: -webkit-linear-gradient(to left, #8f94fb, #4e54c8);
  background: linear-gradient(to left, #8f94fb, #4e54c8);
  border-radius: 1rem;
  padding: 1rem 1.2rem;
  margin-bottom: 1rem;
  height: 13rem;
  width: 100%;
  color: #f7f7f7;

  &-title {
    font-size: 1.8rem;
  }

  &-subtitle {
    margin-top: 0.8rem;
  }

  &-info {
    font-size: 1.2rem;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;

    img {
      cursor: pointer;
    }
  }

  &-btn {
    height: 1.5rem;

    img {
      object-position: center;
      height: 100%;
    }
  }
}
</style>