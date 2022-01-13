<template>
  <div class="wrapper">
    <div class="cta">
      <div class="cta-icon">
        <img src="@/assets/transfer.svg" alt="transfer icon">
      </div>
      <h5 class="cta-text">
        Transfer Money
      </h5>
    </div>
    <div class="cta">
      <div class="cta-icon">
        <img src="@/assets/history.svg" alt="history icon">
      </div>
      <h5 class="cta-text">
        History
      </h5>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem 0;
  margin-bottom: 1rem;
}

.cta {
  width: 58%;
  height: 5.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border: 2.8px solid #4e54c8;
  border-radius: 1rem;
  color: #4e54c8;

  &-icon {
    width: 2.5rem;
    height: 2.5rem;

    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>