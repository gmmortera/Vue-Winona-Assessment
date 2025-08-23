<script setup lang="ts">
import { useDoctorStore } from '@/stores/useDoctorStore'
import DoctorListItem from './DoctorListItem.vue'

const doctorStore = useDoctorStore()
</script>

<template>
  <ul class="list bg-base-100 rounded-box shadow-md">
    <li class="p-4 pb-2 text-xs opacity-60 tracking-wide">Available Doctors</li>
    <DoctorListItem
      v-for="doctor in doctorStore.doctors"
      :doctor
    />
  </ul>
</template>
