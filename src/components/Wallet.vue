<template>
  <div class="Wallet row">
    <div class="col-12">
      <h6>Wallet</h6>
    </div>
    <div class="col-6">
      <div class="text-right">
        <p>Cash Available: {{this.$store.state.wallet.cashOnHand}}</p>
        <p>Expenses: {{this.$store.state.wallet.expenses}}</p>

      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "Wallet",
  props: {}
}
</script>

<style>
</style>
