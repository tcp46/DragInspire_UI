<template>
    <div class="users">
        <h1>Users</h1>
        <form v-on:submit="addUser">
            <input type="text" v-model="newUser.name" placeholder="Enter Name">
            <br />
            <input type="text" v-model="newUser.email" placeholder="Enter Email">
            <br />
            <input type="submit" value="Submit">
        </form>
        <ul>
            <li v-for="user in users">
                <input type="checkbox" class="toggle" v-model="user.contacted">
                <span :class="{contacted: user.contacted}">
                    {{user.name}}: {{user.email}} <button v-on:click="deleteUser(user)">Delete</button>
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'users',
        data() {
            return{
                newUser: {},
                users: [
                    {
                        name: 'Tess Porter',
                        email: 'tesscarment4@gmail.com',
                        contacted: false
                    },
                    {
                        name: 'James Long',
                        email: 'marynjimmy@comcast.net',
                        contacted: false
                    },
                    {
                        name: 'Chrissy Tiegen',
                        email: 'chrissyluvsjohn@yahoo.com',
                        contacted: false
                    }
                ]

            }
        },
        methods: {
            addUser: function(e) {
                this.users.push({
                    name: this.newUser.name,
                    email: this.newUser.email,
                    contacted: false
                })
                e.preventDefault();
            },
            deleteUser: function(user) {
                this.users.splice(this.users.indexOf(user),1)
            }
        },

    }
</script>

<style scoped>
    .contacted {
        text-decoration: line-through;
    }
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }
</style>
