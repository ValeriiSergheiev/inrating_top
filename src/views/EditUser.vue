<template>
  <div>
    <div class="action-block">
      <h2>Edit user</h2>
      <b-form @submit="editUser">
        <b-form-group
          label="Name"
          label-for="name"
        >
          <b-form-input id="name" v-model="userEdit.name"></b-form-input>
        </b-form-group>
        
        <b-form-group
          label="Surname"
          label-for="surname"
        >
          <b-form-input id="surname" v-model="userEdit.surname"></b-form-input>
        </b-form-group>
        
        <b-form-group
          label="Phone"
          label-for="phone"
        >
          <b-form-input id="phone" v-model="userEdit.phone"></b-form-input>
        </b-form-group>
        
        <b-form-group
          label="Email"
          label-for="email"
        >
          <b-form-input id="email" v-model="userEdit.email"></b-form-input>
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
        users: [],
        userEdit: [],
        index: null
      }
    },
    
    mounted() {
      this.users = JSON.parse(localStorage.getItem("usersStorage"))
      this.index = this.$route.params.userId
      this.userEdit = JSON.parse(localStorage.getItem("usersStorage"))[this.index]
    },
    
    methods: {
      editUser() {
        this.users[this.index] = this.userEdit
        localStorage.setItem("usersStorage", JSON.stringify(this.users))
        this.$router.push('/')
      }
    },
    
    computed: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>