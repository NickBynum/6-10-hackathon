<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col-12 m-3">
        <h1>Welcome to the coding shop!</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-4 d-flex flex-column align-self-center">
        <button class="btn btn-primary m-2">Write Line of Code</button>
        <button class="btn btn-primary m-2">Add a Library</button>
        <button class="btn btn-primary m-2">Add a Framework</button>
      </div>
      <div class="col-4">
        <img
          class="img-fluid"
          src="https://i.pinimg.com/originals/16/02/b2/1602b26c05ee78120695d592a68b8912.gif"
          alt
        />
      </div>
      <div class="col-4 d-flex flex-column align-self-center">
        <button class="btn btn-primary m-2">Hire an Apprentice</button>
        <button class="btn btn-primary m-2">Hire a Jr Dev</button>
        <button class="btn btn-primary m-2">Hire a Sr Dev</button>
        <button class="btn btn-primary m-2">Hire a Salesman</button>
      </div>
    </div>
    <div class="row mt-5 justify-content-around">
      <div class="col-3 border">
        <h6>Code Base</h6>
      </div>
      <div class="col-3 border">
        <h6>Team</h6>
      </div>
      <div class="col-3 border">
        <h6>Wallet</h6>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CodeBase from '@/components/CodeBase.vue'

export default {
  name: 'Home',
  components: {}
}
</script>

<style>
h6 {
  font-size: 1.5rem;
  font-weight: 600;
  font-family: monospace;
}
</style>
