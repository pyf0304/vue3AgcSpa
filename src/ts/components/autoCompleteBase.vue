<template>
  <div class="autocomplete">
    <input
      ref="input"
      v-model="searchTerm"
      @input="filterSuggestions"
      @keydown="handleKeyDown"
      @blur="hideSuggestions"
    />

    <!-- Display suggestions only when there are matching items -->
    <ul v-if="showSuggestions" class="suggestions">
      <li
        v-for="(suggestion, index) in filteredSuggestions"
        :key="index"
        :class="{ active: index === activeIndex }"
        @click="selectSuggestion(suggestion)"
        @mouseover="setActiveIndex(index)"
      >
        {{ suggestion }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  import { ref, computed, onMounted, onUnmounted, defineProps } from 'vue';

  const props = defineProps<{
    suggestions: string[]; // Add the type for the "suggestions" prop
  }>();

  const searchTerm = ref('');
  const showSuggestions = ref(false);
  const activeIndex = ref(-1);

  const filteredSuggestions = computed(() => {
    const term = searchTerm.value.toLowerCase();
    return props.suggestions.filter((suggestion) => suggestion.toLowerCase().includes(term));
  });

  const filterSuggestions = () => {
    showSuggestions.value = true;
    activeIndex.value = -1;
  };

  const selectSuggestion = (suggestion: string) => {
    searchTerm.value = suggestion;
    showSuggestions.value = false;
  };

  const setActiveIndex = (index: number) => {
    activeIndex.value = index;
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    switch (event.key) {
      case 'ArrowUp':
        event.preventDefault();
        setActiveIndex(activeIndex.value - 1);
        break;
      case 'ArrowDown':
        event.preventDefault();
        setActiveIndex(activeIndex.value + 1);
        break;
      case 'Enter':
        if (activeIndex.value >= 0 && activeIndex.value < filteredSuggestions.value.length) {
          selectSuggestion(filteredSuggestions.value[activeIndex.value]);
        }
        break;
      case 'Escape':
        showSuggestions.value = false;
        break;
    }
  };

  const hideSuggestions = () => {
    // Use a timeout to allow click events to trigger before hiding the suggestions
    setTimeout(() => {
      showSuggestions.value = false;
    }, 200);
  };

  onMounted(() => {
    document.addEventListener('click', hideSuggestions);
  });

  onUnmounted(() => {
    document.removeEventListener('click', hideSuggestions);
  });
</script>

<style>
  /* Styles remain the same */
</style>
