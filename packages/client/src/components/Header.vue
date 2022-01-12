<template>
  <header>
    <router-link :to="{ name: 'Home' }" class="brand">
      <img src="@/assets/brand.svg" alt="sparks bank">
      <span class="brand-title">Sparks Bank</span>
    </router-link>
    <div class="nav">
      <img src="@/assets/signout.svg" alt="sign out icon">
      <span class="nav-text">Sign Out</span>
    </div>
  </header>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
header {
  background-color: #4e54c8;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

  @media screen and (min-width: 768px) {
    width: 13rem;
    flex-direction: column;
  }
}

.brand,
.nav {
  display: inline-flex;
  gap: 0.5rem;
  text-decoration: none;
  color: #f7f7f7;
}

.brand-title {
  font-size: 1.2rem;
  font-weight: 500;
}

.nav-text {
  display: none;
  @media screen and (min-width: 480px) {
    display: block;
  }
}
</style>