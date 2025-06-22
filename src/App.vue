<template>
  <header>
    <h1>Currency Converter</h1>
  </header>

  <main>
    <ConverterInput v-model:value="fromValue" v-model:currency="fromCurrency"
      :currencies="converterApi.currencies.value" />
    <ConverterInput v-model:value="toValue" v-model:currency="toCurrency" :currencies="converterApi.currencies.value" />
  </main>
</template>

<script setup>
import { ref } from 'vue';

import { useConverter } from '@/composables/useConverter.js'

import ConverterInput from '@/components/inputs/ConverterInput.vue';

const converterApi = useConverter();
converterApi.fetchCurrencies();

const fromValue = ref(0); // assumption: default initial value of from currency
const fromCurrency = ref('PLN'); // assumption: default initial from currency
const toValue = ref(0); // assumption: default initial value of to currency
const toCurrency = ref('EUR'); // assumption: default initial to currency
</script>

<style scoped></style>
