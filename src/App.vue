<template>
  <header>
    <h1>Currency Converter</h1>
  </header>

  <main>
    <ConverterInput v-model:value="fromValue" v-model:currency="fromCurrency" :currencies="currencies"/>
    <ConverterInput v-model:value="toValue" v-model:currency="toCurrency" :currencies="currencies"/>
  </main>
</template>

<script setup>
import {ref} from 'vue';
import ConverterInput from '@/components/inputs/ConverterInput.vue';

const fromValue = ref(0); // assumption: default initial value of from currency
const fromCurrency = ref('pln'); // assumption: default initial from currency
const toValue = ref(0); // assumption: default initial value of to currency
const toCurrency = ref('eur'); // assumption: default initial to currency
const currencies = ref(['pln', 'eur']);
</script>

<style scoped>

</style>
