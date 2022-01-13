<template>
  <Header />
  <main>
    <router-view />
  </main>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  components: { Header }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

body {
  font-size: 16px;
}

#app {
  width: 100%;
  position: relative;
  color: #4e54c8;
  background-color: #ebebe7;

  @media screen and (min-width: 768px) {
    height: 100vh;
    display: flex;
  }
}

main {
  padding: 1rem;
  flex: 1;    
  min-height: 95vh;
  overflow: hidden;
  
  @media screen and (min-width: 768px) {
    max-height: 100vh;
    height: 100%;
    overflow-y: auto;
  }
}
</style>
