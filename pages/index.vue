<template>
  <section class="container">
    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      <card-game name="Wheel" class="lg:col-span-2" />
      <card-game name="PvP" :to="{ name: 'games-pvp'}"></card-game>
      <card-game name="Crash" :to="{ name: 'games-crash' }"></card-game>
      <card-game name="Dice" :to="{ name: 'games-dice'}"></card-game>
      <card-game name="CoinFlip" :to="{ name: 'games-coinflip'}"></card-game>
    </div>
  </section>
</template>

<script>
import cardGame from '~/components/card/card-game.vue'
export default {
  components: { cardGame },
}
</script>

<style></style>
