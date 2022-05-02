<template>
<div>
    <!-- <StripeCheckout ref="checkoutRef" mode="payment" :pk="publishableKey" :line-items="lineItems" :success-url="successURL" :cancel-url="cancelURL" @loading="v => loading = v" /> -->
    <div class="py-4 mb-5">
        <button class="btn w-100 btn-primary-custom p-3" @click="submit">Réserver</button>
        <span id="error"></span>
    </div>
    <!-- <button @click="submit">Réserver</button> -->
</div>
</template>


<style scoped>
button {
    background: #171D6E;
    color: #fff;
    padding: 4px 7px;
    font-size: 18px;
    border-radius: 5px;
}

span#error {
    color: red;
    font-size: 16px;
    text-align: start;
    display: block;
    margin-left: 5px;
}
</style>
