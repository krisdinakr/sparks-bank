<template>
  <div class="home">
    <section>
      <Card name="Daniel" accountNumber="1232-2442-4242" :balance="100000" />
      <CallToAction />
    </section>
    <section>
      <Activity />
    </section>
  </div>
</template>

<script>
import Activity from '@/components/Activity.vue'
import Card from '@/components/Card.vue'
import CallToAction from '@/components/CallToAction.vue'

export default {
  name: 'Home',
  components: { Activity, Card, CallToAction }
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 1.25rem;
  }
}

section {
  width: 100%;
}

</style>