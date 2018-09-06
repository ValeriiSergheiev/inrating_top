<template>
  <div>
    <table class="table b-table table-hover">
      <thead>
      <tr>
        <th>Name</th>
        <th>Surname</th>
        <th>Phone</th>
        <th>Email</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(user, index) in users" :key="index">
        <td>{{user.name}}</td>
        <td>{{user.surname}}</td>
        <td>{{user.phone}}</td>
        <td>{{user.email}}</td>
        <td>
          <b-button
            variant="warning"
            size="sm"
            class="mr-2"
            :to="{name: 'EditUser', params: {userId: index}}"
          >
            Edit
          </b-button>
          <b-button variant="danger" size="sm" @click="removeUser(index)">Remove</b-button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  // import Component from '../../components/

  export default {
    name: 'Table',
    
    props: [],
    
    components: {},
    
    data () {
      return {
        users: []
      }
    },
    
    mounted() {
      this.users = JSON.parse(localStorage.getItem("usersStorage"))
    },
    
    methods: {
      removeUser(index) {
        this.users.splice(index, 1)
        localStorage.setItem("usersStorage", JSON.stringify(this.users))
      }
    },
    
    computed: {
      // users: () => JSON.parse(localStorage.getItem("usersStorage"))
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>