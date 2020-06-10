<template>
  <div class="CodeBase row">
    <div class="col-12">
      <h6>Code Base</h6>
    </div>
    <div class="col-6">
      <div class="text-right">
        <p>Lines of Code: {{this.$store.state.codeBase.lines}}</p>
        <p>Bugs: {{this.$store.state.codeBase.bugs}}</p>
        <p>Apps Ready to Sell: {{this.$store.state.codeBase.apps}}</p>
        <p>Subscriptions: {{this.$store.state.codeBase.subscriptions}}</p>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "CodeBase",
  props: {}
}
</script>

<style>
</style>
