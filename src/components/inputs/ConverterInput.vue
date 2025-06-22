<template>
    <div class="converter-input">
        <input v-model="value" type="number" min="0">
        <select v-model="currency">
            <option v-for="currency in props.currencies" :value="currency" :key="currency">{{ currency }}</option>
        </select>
    </div>
</template>

<script setup>
import { defineModel, defineProps } from 'vue';

const props = defineProps({
    currencies: {
        type: Array,
        default() { () => [] },
    }
})
const value = defineModel('value');
const currency = defineModel('currency');
</script>

<style scoped>
.converter-input {
    background-color: grey;
    padding: 4px;
    display: flex;
    gap: 8px;
    border-radius: 4px;
    width: max-content;
    margin: 8px 0;
}
</style>