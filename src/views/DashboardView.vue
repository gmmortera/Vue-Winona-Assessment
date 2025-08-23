<script setup lang="ts">
import DoctorsList from "@/components/DoctorsList.vue";
import { useDoctorStore } from "@/stores/useDoctorStore";
import { onMounted } from "vue";

const doctorStore = useDoctorStore()

onMounted(doctorStore.fetch)
</script>

<template>
  <main class="grid grid-cols-6 px-3 py-3">
    <DoctorsList class="col-span-3" />
  </main>
</template>
