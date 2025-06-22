import {ref } from 'vue';

export function useConverter() {
    const currencies = ref([]);
    const fetchInProgress = ref(false);

    async function fetchCurrencies() {
        if (fetchInProgress.value) {
            return;
        }

        fetchInProgress.value = true;
        try {
            const res = {currencies: ['pln', 'gbp', 'eur']};
            currencies.value = res.currencies;
        } catch(e) {
            console.error(e);
        } finally {
            fetchInProgress.value = false;
        }
    }

    return {currencies, fetchCurrencies};
}