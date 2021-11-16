<template>
  <footer class="footer">
    <div
      class="container grid h-full grid-flow-row-dense gap-8 md:grid-flow-col auto-cols-max"
    >
      <div class="flex items-start space-x-2">
        <DiscordIcon class="w-4 h-auto" />
        <div class="flex flex-col text-sm leading-none">
          <span class="mb-1">Discord</span>
          <a href="https://discord.com" target="_blank">
            <strong>Moros DAO</strong>
          </a>
        </div>
      </div>
      <div class="flex items-start space-x-2">
        <VkIcon class="w-4 h-auto" />
        <div class="flex flex-col text-sm leading-none">
          <span class="mb-1">Social</span>
          <a href="https://teste123.com.br" target="_blank">
            <strong>teste123</strong>
          </a>
        </div>
      </div>
      <div class="flex items-start space-x-2">
        <EmailIcon class="w-4 h-auto" />
        <div class="flex flex-col text-sm leading-none">
          <span class="mb-1">Email</span>
          <a href="mailto:teste123@gmail.com" target="_blank">
            <strong>teste123@gmail.com</strong>
          </a>
        </div>
      </div>
      <div class="flex flex-col space-y-1 leading-none">
        <a href="#" class="font-semibold">{{ $t('user-agreement') }}</a>
        <a href="#" class="font-semibold">{{ $t('privacy-policy') }}</a>
        <nuxt-link :to="{ name: 'help' }" class="font-semibold">{{ $t('help') }}</nuxt-link>
      </div>
    </div>
  </footer>
</template>

<script>
import TelegramIcon from '@/static/img/icon/social/telegram.svg?inline'
import VkIcon from '@/static/img/icon/social/vk.svg?inline'
import EmailIcon from '@/static/img/icon/email.svg?inline'
import DiscordIcon from '@/static/img/social/discord.svg?inline'

export default {
  components: { TelegramIcon, VkIcon, EmailIcon, DiscordIcon },
}
</script>

<style lang="scss">
.footer {
  @apply border-t-1 border-secondary py-5;
}
</style>
