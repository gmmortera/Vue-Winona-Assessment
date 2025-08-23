<script lang="ts" setup>
import { useDoctorStore } from '@/stores/useDoctorStore'
import { useRoute } from 'vue-router'
import { computed, onMounted } from 'vue'
import DoctorDetails from '@/components/DoctorDetails.vue'

const route = useRoute()
const doctorStore = useDoctorStore()

const doctorId = computed(() => route.params.id as string)
const doctor = computed(() => doctorStore.getDoctorById(doctorId.value))

onMounted(doctorStore.fetch)
</script>

<template>
  <div class="p-3 space-y-2">
    <div class="p-4">
      <h2
        v-if="!doctorStore.loading" 
        class="font-semibold text-3xl"
      >
        Dr. {{ doctor?.firstName }} {{ doctor?.lastName }}
      </h2>
      <span
        v-else
        class="loading loading-spinner loading-xl"
      >
      </span>
    </div>

    <div class="px-4 py-4 bg-base-200 rounded-box grid grid-cols-4 place-items-center text-center">
      <template
        v-if="!doctorStore.loading"
      >
        <DoctorDetails :doctor />
      </template>
      <span v-else class="loading loading-spinner loading-xl mx-auto"></span>
    </div> 
  </div>
</template>
