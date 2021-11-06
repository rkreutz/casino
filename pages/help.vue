<template>
  <section class="container help">
    <h1 class="mb-6 text-2xl font-black uppercase">{{ $t('help') }}</h1>
    <div class="grid grid-cols-1 gap-4 xl:gap-6 xl:grid-cols-4">
      <div
        class="p-4 bg-white xl:p-12 xl:col-span-4 rounded-3xl help__annotation"
      >
        <p class="max-w-4xl">{{ $t('description-help') }}</p>
      </div>
      <div
        class="flex flex-col items-center px-6 py-12 space-y-5 text-center bg-white rounded-3xl"
      >
        <img src="/img/icon/clock.svg" alt="Часы работы" />
        <h2 class="text-lg font-semibold">{{ $t('business-hours') }}</h2>
        <hr class="divider" />
        <div class="flex flex-col items-center">
          <span>{{ $t('normal-days') }}</span>
          <strong>8:00 – 22:00</strong>
        </div>
        <div class="flex flex-col items-center">
          <span>{{ $t('special-days') }}</span>
          <strong>10:00 – 20:00</strong>
        </div>
      </div>
      <div
        class="flex flex-col items-center px-3 py-12 space-y-5 text-center bg-white rounded-3xl"
      >
        <img src="/img/icon/help-chat.svg" alt="Служба поддержки (LIVE)" />
        <h2 class="text-lg font-semibold">{{ $t('customer-support') }}</h2>
        <hr class="divider" />
        <a href="#" class="font-semibold text-primary">
          {{ $t('customer-support-chat-position') }}
        </a>
        <div class="flex flex-col items-center">
          <span>{{ $t('average-response-time') }}</span>
          <strong>5 {{ $t('time-in-minutes') }}</strong>
        </div>
      </div>
      <div
        class="flex flex-col items-center px-3 py-12 space-y-5 text-center bg-white rounded-3xl"
      >
        <img src="/img/icon/help-email.svg" alt="Служба поддержки (EMAIL)" />
        <h2 class="text-lg font-semibold">{{ $t('support-service') }}</h2>
        <hr class="divider" />
        <a href="mailto:$t('customer-support-email')" class="font-semibold text-primary">{{ $t('customer-support-email') }}</a>
        <div class="flex flex-col items-center">
          <span>{{ $t('normal-days') }}</span>
          <strong>120 {{ $t('time-in-minutes') }}</strong>
        </div>
      </div>
      <div
        class="flex flex-col items-center px-3 py-12 space-y-5 text-center bg-white rounded-3xl"
      >
        <img src="/img/icon/help-email.svg" alt="Технический отдел (EMAIL)" />
        <h2 class="text-lg font-semibold">{{ $t('technical-department') }}</h2>
        <hr class="divider" />
        <a href="mailto:$t('technical-support-email')" class="font-semibold text-primary">{{ $t('technical-support-email') }}</a>
        <div class="flex flex-col items-center">
          <span>{{ $t('normal-days') }}</span>
          <strong>48 {{ $t('time-in-hours') }}</strong>
        </div>
      </div>
      <div class="p-4 bg-white xl:p-12 xl:col-span-4 rounded-3xl">
        <h2 class="mb-5 text-lg font-semibold">{{ $t('frequently-asked-questions') }}</h2>
        <div class="help__questions">
          <app-spoiler></app-spoiler>
          <app-spoiler></app-spoiler>
          <app-spoiler></app-spoiler>
        </div>
      </div>
      <div class="p-4 bg-white xl:p-12 xl:col-span-4 rounded-3xl">
        <h2 class="mb-5 text-lg font-semibold">{{ $t('restrictions') }}</h2>
        <div class="grid gap-4 xl:grid-cols-3">
          <div class="flex items-start">
            <img src="/img/icon/close-red.svg" class="mt-1 mr-4" alt="Stop" />
            <p class="text-xs">
              Одному пользователю запрещено регистрировать более одного аккаунта
            </p>
          </div>
          <div class="flex items-start">
            <img src="/img/icon/close-red.svg" class="mt-1 mr-4" alt="Stop" />
            <p class="text-xs">
              Запрещена регистрация более одного аккаунта с одного ip адреса
            </p>
          </div>
          <div class="flex items-start">
            <img src="/img/icon/close-red.svg" class="mt-1 mr-4" alt="Stop" />
            <p class="text-xs">
              Запрещено использование сайта в целях обмена валют
            </p>
          </div>
          <div class="flex items-start">
            <img src="/img/icon/close-red.svg" class="mt-1 mr-4" alt="Stop" />
            <p class="text-xs">
              Вывод средств доступен после 20 сыгранных игр на сайте
            </p>
          </div>
          <div class="flex items-start">
            <img src="/img/icon/close-red.svg" class="mt-1 mr-4" alt="Stop" />
            <p class="text-xs">
              При общении в чате или с операторами технической поддержки
              соблюдайте субординацию: не используйте нецензурную лексику и не
              оскорбляйте собеседника.
            </p>
          </div>
          <div class="flex items-start">
            <img src="/img/icon/close-red.svg" class="mt-1 mr-4" alt="Stop" />
            <p class="text-xs">
              Запрещено размещение ссылок на сторонние ресурсы, размещение своих
              партнерских ссылок, спам, флуд, попрошайничество.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AppSpoiler from '~/components/ui/app-spoiler.vue'
export default {
  components: {
    AppSpoiler,
  },
}
</script>

<style lang="scss">
.help {
  &__annotation {
    background: url('/img/bg-help.svg') right bottom no-repeat, #ffffff;
  }

  &__questions {
    @apply rounded-3xl overflow-hidden;

    & > * {
      @apply bg-cream;

      &:nth-child(even) {
        @apply bg-grayest;
      }
    }
  }
}
</style>
