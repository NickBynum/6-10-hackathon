<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col-12 text-light">
        <h1>Welcome to the coding shop!</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-4 d-flex flex-column align-self-center">
        <button
          class="btn btn-lg btn-outline-dark m-2 text-light"
          @click="writeLine()"
        >Write Line of Code</button>
        <button
          class="btn btn-lg btn-outline-dark m-2 text-light"
          @click="addLibrary()"
        >Add a Library</button>
        <button
          class="btn btn-lg btn-outline-dark m-2 text-light"
          @click="addFramework()"
        >Add a Framework</button>
      </div>
      <div class="col-4">
        <img
          class="img-fluid rounded-circle"
          src="https://miro.medium.com/max/1187/1*0FqDC0_r1f5xFz3IywLYRA.jpeg"
        />
      </div>
      <div class="col-4 d-flex flex-column align-self-center">
        <button class="btn btn-lg btn-outline-dark m-2 text-light m-2" @click="addStaff('apprentice')">Hire an Apprentice</button>
        <button class="btn btn-lg btn-outline-dark m-2 text-light m-2" @click="addStaff('jrDev')">Hire a Jr Dev</button>
        <button class="btn btn-lg btn-outline-dark m-2 text-light m-2" @click="addStaff('srDev')">Hire a Sr Dev</button>
        <button class="btn btn-lg btn-outline-dark m-2 text-light m-2" @click="addStaff('salesman')">Hire a Salesman</button>
                <button class="btn btn-lg btn-outline-dark m-2 text-light m-2" @click="addStaff('qaTeam')">Hire Quality Tech</button>
      </div>
    </div>
    <div class="row mt-5 justify-content-around">
      <div class="col-3 border bg-trans">
        <CodeBase></CodeBase>
      </div>
      <div class="col-3 border bg-trans">
        <Team></Team>
      </div>
      <div class="col-3 border bg-trans">
        <Wallet></Wallet>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CodeBase from '@/components/CodeBase.vue'
import Team from '@/components/Team.vue'
import Wallet from '@/components/Wallet.vue'
export default {
  name: 'Home',
  components: {
    CodeBase,
    Team,
    Wallet,
  },
  computed: {},
  methods: {
    writeLine() {
      this.$store.dispatch("writeLine")
    },
    addLibrary() {
      this.$store.dispatch("addLibrary")
    },
    addFramework() {
      this.$store.dispatch("addFramework")
    },
    addStaff(staffChoice) {
      this.$store.dispatch("addStaff", staffChoice)
    }
  }
}
</script>

<style>
body {
  background-image: url("https://i.pinimg.com/originals/16/02/b2/1602b26c05ee78120695d592a68b8912.gif");
  background-size: cover;
}
h6 {
  font-size: 1.5rem;
  font-weight: 600;
  font-family: monospace;
  color: #f4f4f4;
}
p {
  font-size: 1rem;
  font-family: monospace;
  color: #f2f600;
}
.bg-trans {
  background-color: rgba(0, 0, 0, 0.7);
}
</style>
