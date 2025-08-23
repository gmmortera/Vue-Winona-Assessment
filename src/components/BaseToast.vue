<script lang="ts" setup>
interface Props {
  conditionalValue: boolean
  message: string | null
}

interface Emits {
  'click': []
}

defineProps<Props>()
defineEmits<Emits>()
</script>

<template>
  <Teleport to="body">
    <div
      v-if="conditionalValue"
      class="toast toast-top toast-center"
    >
      <div class="alert alert-error">
        <span class="text-white">{{ message }}</span>
        <button
          class="btn btn-xs"
          @click="$emit('click')"
        >
          Close
        </button>
      </div>
    </div>
  </Teleport>  
</template>
