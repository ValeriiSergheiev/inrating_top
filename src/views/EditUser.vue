<template>
  <div>
    <div class="action-block">
      <h2>Edit user</h2>
      <b-form @submit="editUser">
        <b-form-group
          label="Name"
          label-for="name"
        >
          <b-form-input id="name"></b-form-input>
        </b-form-group>
        
        <b-form-group
          label="Surname"
          label-for="surname"
        >
          <b-form-input id="surname"></b-form-input>
        </b-form-group>
        
        <b-form-group
          label="Phone"
          label-for="phone"
        >
          <b-form-input id="phone"></b-form-input>
        </b-form-group>
        
        <b-form-group
          label="Email"
          label-for="email"
        >
          <b-form-input id="email"></b-form-input>
        </b-form-group>
  
        <b-button type="submit" variant="success" class="mr-2">Save</b-button>
        <b-button to="/" variant="secondary">Cancel</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'EditUser',
    
    props: [],
    
    components: {},
    
    data () {
      return {
        users: []
      }
    },
    
    mounted() {
      this.users = JSON.parse(localStorage.getItem("usersStorage"))
      console.log(this.$route.params.userId)
      console.log(this.users[this.$route.params.userId].name)
    },
    
    methods: {
      editUser() {
      }
    },
    
    computed: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>