<template>
  <div class="space-y-2">
    <h3 class="font-bold text-xl">State</h3>
    <p>{{ doctor?.state }}</p>
  </div>
  <div class="space-y-2">
    <h3 class="font-bold text-xl">Date of Birth</h3>
    <p>{{ doctor?.dob }}</p>
  </div>
  <div class="space-y-2">
    <h3 class="font-bold text-xl">License Status</h3>
    <p :class="[
      'text-red-600',
      { '!text-green-500': doctor?.licenseActive }
      ]"
    >
      {{ doctor?.licenseActive ? 'Active' : 'Inactive'  }}
    </p>
  </div>
  <div class="space-y-2">
    <h3 class="font-bold text-xl">Sign Up Date</h3>
    <p>{{ doctor?.signedUpDate }}</p>
  </div>
</template>

<script lang="ts" setup>
import type { Doctor } from '@/types/doctor';

interface Props {
  doctor: Doctor | undefined
}

defineProps<Props>()
</script>
