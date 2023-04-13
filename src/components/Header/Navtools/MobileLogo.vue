<template>
  <router-link :to="{ name: 'admin' }">
    <img
      src="@/assets/images/logo/logo-c-yuvog.svg"
      alt=""
      v-if="!this.$store.themeSettingsStore.isDark"
    />

    <img
      src="@/assets/images/logo/logo-c-white-yuvog.svg"
      alt=""
      v-if="this.$store.themeSettingsStore.isDark"
    />
  </router-link>
</template>
<script></script>
