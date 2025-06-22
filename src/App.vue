<template>
  <header>
    <h1>Currency Converter</h1>
  </header>

  <main>
    <ConverterInput v-model:value="converterInputs.fromValue" v-model:currency="converterInputs.fromCurrency"
      :currencies="converterApi.currencies.value" />
    <ConverterInput v-model:value="toValue" v-model:currency="converterInputs.toCurrency"
      :currencies="converterApi.currencies.value" />
  </main>
</template>

<script setup>
import { ref, watch } from 'vue';

import { useConverter } from '@/composables/useConverter.js'

import ConverterInput from '@/components/inputs/ConverterInput.vue';

const converterApi = useConverter();
converterApi.fetchCurrencies(); // assumption: fetch only once 

const converterInputs = ref({
  fromValue: 0, // assumption: default initial value of from currency
  fromCurrency: 'PLN', // assumption: default initial from currency, and is always available
  toCurrency: 'EUR', // assumption: default initial to currency, and is always available
});

const toValue = ref(0); // assumption: default initial value of to currency

watch(() => converterInputs, async (val,) => {
  const { fromValue, fromCurrency, toCurrency } = val.value;
  toValue.value = await converterApi.fetchConvert(fromValue, fromCurrency, toCurrency);
}, { deep: true })
</script>

<style scoped></style>
