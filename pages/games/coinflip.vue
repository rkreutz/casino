<template>
    <section class="container">
        <modal-coinflip-instruction />
        <h1 class="flex items-center mb-6 text-2x1 font-black uppercase">
            <span class="flex-1">COIN FLIP</span>
            <t-button variant="white" @click="$modal.show('coinflip-instruction')">
                <svg class="w-4 h-6">
                    <use xlink:href="/img/icon/free/sprite.svg#info-i"></use>
                </svg>
            </t-button>
        </h1>
        









    </section>
</template>