<script lang="ts" setup>
import type { Doctor } from '@/types/doctor'
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

interface Props {
  doctor: Doctor
}

defineProps<Props>()

const isOpen = ref(false)
</script>

<template>
  <li class="list-row">
    <div></div>
    <div>
      <div>Dr. {{ doctor.firstName }} {{ doctor.lastName }}</div>
      <div class="text-xs uppercase font-semibold opacity-60">{{ doctor.state }}</div>
    </div>

    <div class="relative">
      <button
        class="btn btn-ghost"
        @contextmenu.prevent="isOpen = true"
        @click="isOpen = false"
      >
        Put actions here
      </button>

      <ul
        v-if="isOpen"
        class="menu bg-base-300 rounded-box w-34 absolute z-9"
      >
        <li><RouterLink :to="`/doctors/${doctor.id}`">Details</RouterLink></li>
      </ul>
    </div>
  </li>
</template>
