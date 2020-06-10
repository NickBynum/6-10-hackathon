<template>
  <div class="Team row">
    <div class="col-12">
    <h6>Team</h6>
    </div>
    <div class="col-6">
      <div class="text-right">
        <p>Apprentices: {{this.$store.state.team.apprentice.quantity}} </p>
        <p>Junior Developers: {{this.$store.state.team.jrDev.quantity}}</p>
        <p>Senior Engineers: {{this.$store.state.team.srDev.quantity}}</p>
        <p>Salesmen: {{this.$store.state.team.salesman.quantity}}</p>
        <p>QA Members: {{this.$store.state.team.qaTeam.quantity}}</p>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "Team",
  props: {}
}
</script>

<style>
</style>
