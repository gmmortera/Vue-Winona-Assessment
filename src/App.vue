<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import ThemeButton from '@/components/ThemeButton.vue'
import { useDoctorStore } from '@/stores/useDoctorStore'
import BaseToast from '@/components/BaseToast.vue'

const doctorStore = useDoctorStore()
</script>

<template>
  <div class="flex flex-col h-svh">
    <div class="navbar bg-base-100 shadow-sm">
      <div class="flex-1">
        <a class="btn btn-ghost text-xl">{{ $route.name }}</a>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal px-1">
          <li><RouterLink to="/">Doctors</RouterLink></li>
          <ThemeButton />
        </ul>
      </div>
    </div>
    <RouterView />

    <footer class="footer flex mt-auto bg-base-200 p-4">
      <ThemeButton />
    </footer>
  </div>

  <BaseToast
    :conditional-value="doctorStore.error !== null"
    :message="doctorStore.error"
    @click="doctorStore.clearError"
  />
</template>

<style scoped></style>
