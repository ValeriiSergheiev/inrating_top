<template>
  <div>
    <div class="action-block">
      <h2>Add new user</h2>
      <b-form @submit.prevent="addUser">
        <b-form-group
          label="Name"
          label-for="name"
        >
          <b-form-input id="name" placeholder="Enter name" v-model="name" required></b-form-input>
        </b-form-group>
        
        <b-form-group
          label="Surname"
          label-for="surname"
        >
          <b-form-input id="surname" placeholder="Enter surname" v-model="surname"></b-form-input>
        </b-form-group>
        
        <b-form-group
          label="Phone"
          label-for="phone"
        >
          <b-form-input id="phone" placeholder="Enter phone" v-model="phone"></b-form-input>
        </b-form-group>
        
        <b-form-group
          label="Email"
          label-for="email"
        >
          <b-form-input id="email" placeholder="Enter email" v-model="email" required type="email"></b-form-input>
        </b-form-group>
        
        <b-button type="submit" variant="success" class="mr-2">Save</b-button>
        <b-button to="/" variant="secondary">Cancel</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AddUser',
    
    props: [],
    
    components: {},
    
    data () {
      return {
        users: [],
        name: '',
        surname: '',
        phone: '',
        email: ''
      }
    },
    mounted() {},
    
    methods: {
      addUser() {
        this.users = JSON.parse(localStorage.getItem("usersStorage"))
        this.users.push(
          {
            name: this.name,
            surname: this.surname,
            phone: this.phone,
            email: this.email
          }
        )
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