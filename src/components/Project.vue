<template>
  <div>
    <!--Project Information-->
    <h1>Create a project</h1><br>
    <input type="text" class="input" placeholder="Name of project" v-model="projectName">
    <br>
    <!--Select type of project-->
    <div>
      Select a type of project
      <br>
      <select v-model="projectType" id="type">
        <option>Web Application</option>
        <option>Mobile Application</option>
        <option>Desktop Application</option>
      </select>
    </div>
    <!--Entering project skills-->
    <h3>Skills</h3>
    <input type='text' class='input' placeholder="What skills are required?" v-model="newSkill" v-validate="'min:5'" name="skill" @keyup.enter="addSkill">
    <p class="alert" v-if="errors.has('skill')">{{ errors.first('skill') }}</p>
    <h6>Skills should include things such as languages, frameworks, and operating systems</h6>
    <div v-for="(skill,index) in skills" :key="skill.id" class="item">
      <div class="item-left">
        <div v-if="!skill.editing" @dblclick="editSkill(skill)" class="item-label">{{ skill.title }}</div>
        <input v-else class="item-edit" type="text" v-model="skill.title" @blur="doneSkillEdit(skill)" @keyup.enter="doneSkillEdit(skill)" @keyup.esc="cancelSkillEdit(skill)" v-focus>
      </div>
      <div class="remove-item" @click="removeSkill(index)">
        &times;
      </div>
    </div>
    <h4>Project Description</h4>
    <textarea class="input" placeholder="description of the project. . ." id="description"></textarea>
  </div>
</template>

<script>
  export default {
    name: 'MockProject',
    data () {
      return {
        projectName: "DragInspire",
        projectType: "Web Application",
        newSkill: "",
        idForSkill: 4,
        beforeEditCache: "",
        skills: [
          {
            'id': 1,
            'title': 'Vue.js',
            'editing': false,
          },
          {
            'id': 2,
            'title': 'Bootstrap',
            'editing': false,
          },
          {
            'id': 3,
            'title': 'PHP',
            'editing': false,
          }
        ],
      }
    },
    directives: {
      focus: {
        inserted: function(el) {
          el.focus()
        }
      }
    },
    methods: {
      addSkill() {
        this.$validator.validateAll().then((result) => {
          if (result) {
            this.skills.push({
              id: this.idForSkill,
              title: this.newSkill,
              editing: false,
            })
            this.newSkill = '';
            this.idForSkill++;
          } else {
            console.log('Not Valid')
          }
        })
      },
      editSkill(skill) {
        this.beforeEditCache = skill.title
        skill.editing = true
      },
      doneSkillEdit(skill) {
        if (skill.title.trim() == ''){
          skill.title = this.beforeEditCache
        }
        skill.editing = false
      },
      cancelSkillEdit(skill) {
        skill.title = this.beforeEditCache
        skill.editing = false
      },
      removeSkill(index) {
        this.skills.splice(index, 1)
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .input {
    width: 100%;
    padding: 10px 18px;
    font-size: 18px;
    margin-bottom: 16px;

    &:focus{
      outline: 0;
    }
  }

  #description {
    width: 600px;
    height: 200px;
    font-size: 14px;
    margin-bottom: 16px;
    padding: 20px 20px;
    resize: none;

    &:focus {
       outline: 0;
     }
  }

  #type {
    font-size: 14px;
  }
  .item {
    margin-bottom: 14px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .remove-item {
    cursor: pointer;
    margin-left: 14px;
    &:hover {
      color: black;
    }
  }
  .item-left {
    display: flex;
    align-items: center;
  }
  .item-label {
    padding: 10px;
    border: 1px solid white;
    margin-left: 12px;
  }
  .item-edit {
    font-size: 24px;
    color: #2c3e50;
    margin-left: 12px;
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    &:focus {
      outline: none;
    }
  }
  .alert {
    background: #fdf2ce;
    font-size: 12px;
    font-weight: bold;
    display: inline-block;
    padding: 5px;
    margin-top: -20px;
  }
</style>
