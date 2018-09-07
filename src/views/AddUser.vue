<template>
  <div>
    <div class="action-block">
      <h2>Add new user (manual)</h2>
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
  
      <hr>
      
      <h2>Add new user (from JSON)</h2>
      <b-form @submit.prevent="addUserFromJson">
        <b-form-group
          label="Import Your JSON from file"
          label-for="json"
        >
          <b-form-file
            id="json"
            v-model="file"
            accept=".json"
            :state="Boolean(file)"
            placeholder="Choose a file..."
            @change="handleFiles($event)"
          ></b-form-file>
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
        email: '',
        file: null,
        selectedFile: null,
        reader: null,
        onchangeResult: {}
      }
    },
    mounted() {
    },
    
    methods: {
      addUser() {
        if (localStorage.getItem("usersStorage") !== null) {
          this.users = JSON.parse(localStorage.getItem("usersStorage"))
        }
        
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
      },

      // eslint-disable-next-line
      handleFiles(event) {
        let  _this = this
        this.selectedFile = document.getElementById('json').files[0]
        this.reader = new FileReader()
        this.reader.onload = function (event) {
          _this.onchangeResult = JSON.parse(event.target.result)
        }
        this.reader.readAsText(this.selectedFile)
      },

      addUserFromJson() {
        if (localStorage.getItem("usersStorage") !== null) {
          this.users = JSON.parse(localStorage.getItem("usersStorage"))
        }
        
        this.users.push(
          {
            name: this.onchangeResult.name,
            surname: this.onchangeResult.surname,
            phone: this.onchangeResult.phone,
            email: this.onchangeResult.email
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