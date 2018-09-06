<template>
  <div>
    <div class="add-user">
      <b-button to="/add-user" variant="primary">Add user</b-button>
    </div>
    
    <Table/>
  </div>
</template>

<script>
  import Table from "../components/Table"
  
  export default {
    name: 'Home',
    props: [],
    components: {Table},
    data () {
      return {
      }
    },
    mounted() {},
    methods: {},
    computed: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .add-user {
    margin-bottom: 20px;
  }
</style>