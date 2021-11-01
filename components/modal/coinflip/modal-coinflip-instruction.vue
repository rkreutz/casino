<template>
    <t-modal :click-to-close="false" name="coinflip-instruction">
        <template slot="close">
            <svg class="w-full h-full">
                <use xlink:href="/img/icon/free/sprite.svg#close"></use>
            </svg>
        </template>
        <template #header>
            <h3>--Como jogar--</h3>
        </template>
        <div v-show="step === 1">
            <p>
                bla
            </p>
        </div>
        <div v-show="step === 2">
            <p>
                bla bla
            </p>
        </div>
        <div v-show="step === 3">
            <p>
                bla bla bla
            </p>
        </div>
        <div class="flex items-center flex-wrap mt-3 space-x-3">
            <t-button variant="white" @click="step -= 1">
                <div class="flex justify-center">
                    <svg class="w-4 opacity-70 h-3 ml-3 transform -rotate-180 origin-center">
                        <use xlink:href ="/img/icon/free/sprite.sv#arr-next"></use>
                    </svg>
                </div>
            </t-button>
        </div>
    </t-modal>
</template>