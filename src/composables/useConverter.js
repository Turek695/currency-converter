import { ref } from 'vue';

export function useConverter() {
    const currencies = ref([]);
    const fetchInProgress = ref(false);
    const converterApiKey = 'api_key='+import.meta.env.VITE_CURRENCY_API_KEY;
    const converterApiUrl = import.meta.env.VITE_CURRENCY_API_URL;

    async function fetchCurrencies() {
        if (fetchInProgress.value) {
            return;
        }

        fetchInProgress.value = true;
        try {
            const res = await fetch(`${converterApiUrl}currencies?${converterApiKey}`);
            const data = await res.json();
            const currs = [];
            Object.keys(data).forEach(key => {
                if (['meta', 'response'].includes(key)) {
                    return;
                }
                currs.push(data[key].short_code);
            })
            currencies.value = currs;
        } catch(e){
            console.error(e);
        } finally {
            fetchInProgress.value = false;
        }
    }

    async function fetchConvert(amount, from, to) {        
        const conversion = await fetch(`${converterApiUrl}convert?${converterApiKey}&from=${from}&to=${to}&amount=${amount}`)
        const res = await conversion.json();
        return res.value;
    }

    return {currencies, fetchCurrencies, fetchConvert};
}