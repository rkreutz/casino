<template>
  <div class="crash">
    <div ref="crashWrapper" class="crash__wrapper">
      <div class="coin animate-heads">
        <div class="heads"></div>
        <div class="tails"></div>
      </div>
      <button id="flip">Flip!</button>
    </div>
  </div>
</template>

<script type="text/javascript">
  const button = document.querySelector('#flip')
  const coin = document.querySelector('.coin')
  
</script>

<style lang="scss">
.coin
{
  width: 50%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  width: 15rem;
  height: 15rem;
  transform-style: preserve-3d;
}

button {
  padding: 1rem;
  background: lightgray;
}

.coin div
{
  width: 50%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  width: 100%;
  height: 100%;
  border-radius: 150%;
  backface-visibility: hidden;
  position: absolute;
}

.coin .heads
{
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  background: url('assets/resources/moedaCara.svg');
}

.coin .tails
{
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  background: url('assets/resources/moedaCoroa.svg');
  transform: rotateY(-180deg);
}

.animate-heads {
  animation: flipHeads 6s;
  animation-fill-mode: forwards;
}

.animate-tails {
  animation: flipTails 6s;
  animation-fill-mode: forwards;
}

@keyframes flipHeads {
  from {
  transform: rotateY(90deg);
  }
  to {
  transform: rotateY(3600deg);
  }
}


@keyframes flipTails {
  from {
      transform: rotateY(90deg);
  }
  to {
      transform: rotateY(3420deg);
  }
}
</style>
