<template>
  <div>
      <!--Contact Information-->
      <h1> {{ firstName }} {{ lastName }} </h1>
      {{ email }}
      <br>
      <br>
      <!--Entering user's graduation year-->
      <div>
          From the options below, select your anticipated graduation year.
          <br>
          <select v-model="gradYear">
              <option>2020</option>
              <option>2021</option>
              <option>2022</option>
              <option>2023</option>
              <option>2024</option>
          </select>
      </div>
      <br>
      <!--Entering user's college-->
      <div>
          From the options below, select your Drexel University College.
          <br>
          <select v-model="userCollege">
              <option>Antoinette Westphal College of Media Arts & Design</option>
              <option>Bennett S. LeBow College of Business</option>
              <option>Center for Food and Hospitality Management</option>
              <option>Center for Sport Management</option>
              <option>Close School of Entrepreneurship</option>
              <option>College of Arts and Sciences</option>
              <option>College of Computing & Informatics</option>
              <option>College of Engineering</option>
              <option>College of Nursing and Health Professions</option>
              <option>Dornsife School of Public Health</option>
              <option>Goodwin College of Professional Studies</option>
              <option>School of Biomedical Engineering, Science and Health Systems</option>
              <option>School of Education</option>
          </select>
      </div>
      <!--Entering user's major-->
      <div v-if="userCollege == 'Antoinette Westphal College of Media Arts & Design'">
          <p> What is your major in the Antoinette Westphal College of Media Arts & Design? </p>
          <select v-model="userMajor">
              <option>Animation & Visual Effects (BS)</option>
              <option>Architecture (BArch)</option>
              <option>Art History (BA, BS)</option>
              <option>Dance (BS)</option>
              <option>Design & Merchandising (BS)</option>
              <option>Entertainment & Arts Management (BS)</option>
              <option>Fashion Design (BS)</option>
              <option>Film & Video (BS)</option>
              <option>Game Design & Production (BS)</option>
              <option>Graphic Design (BS)</option>
              <option>Interactive Digital Media (BS)</option>
              <option>Interior Design (BS)</option>
              <option>Music Industry (BS)</option>
              <option>Photography (BS)</option>
              <option>Product Design (BS)</option>
              <option>Screenwriting & Playwriting (BS)</option>
              <option>TV Production & Media Management (BS)</option>
              <option>Westphal Studies Program (BS)</option>
          </select>
      </div>
      <div v-else-if="userCollege == 'Bennett S. LeBow College of Business'">
          <p> What is your major in the Bennett S. LeBow College of Business? </p>
          <select v-model="userMajor">
              <option>Accounting (BSBA)</option>
              <option>Business Analytics (BSBA)</option>
              <option>Business and Engineering (BSBAE)</option>
              <option>Economics (BA, BS, BS-JD)</option>
              <option>Finance (BSBA)</option>
              <option>General Business (BSBA)</option>
              <option>Legal Studies (BSBA)</option>
              <option>Management Information Systems (BSBA)</option>
              <option>Marketing (BSBA)</option>
              <option>Operations and Supply Chain Management (BSBA)</option>
              <option>Organizational Management (co-major) (BSBA)</option>
              <option>Real Estate Management and Development (BSBA)</option>
              <option>Technology Innovation Management (co-major) (BSBA)</option>
          </select>
      </div>
      <div v-if="userCollege == 'Center for Food and Hospitality Management'">
          <p> What is your major in the Center for Food and Hospitality Management? </p>
          <select v-model="userMajor">
              <option>Culinary Arts & Science (BSCAS)</option>
              <option>Culinary Arts (BSCA)</option>
              <option>Hospitality Management (BSHM)</option>
          </select>
      </div>
      <div v-if="userCollege == 'Center for Sport Management'">
          <p> What is your major in the Center for Sport Management? </p>
          <select v-model="userMajor">
              <option>Sport Management (BSSM)</option>
          </select>
      </div>
      <div v-if="userCollege == 'Close School of Entrepreneurship'">
          <p> What is your major in the Close School of Entrepreneurship? </p>
          <select v-model="userMajor">
              <option>Entrepreneurship and Innovation (BA)</option>
          </select>
      </div>
      <div v-if="userCollege == 'College of Arts and Sciences'">
          <p> What is your major in the College of Arts and Sciences? </p>
          <select v-model="userMajor">
              <option>Anthropology (BA)</option>
              <option>Biological Sciences (BS)</option>
              <option>Chemistry (BA, BS)</option>
              <option>Chemistry-Biochemistry Concentration (BS)</option>
              <option>Communication (BA, BS)</option>
              <option>Criminology and Justice Studies (BS)</option>
              <option>English (BA)</option>
              <option>Environmental Science (BS)</option>
              <option>Environmental Studies (BS)</option>
              <option>Environmental Studies and Sustainability (BA)</option>
              <option>Geoscience (BS)</option>
              <option>Global Studies (BA)</option>
              <option>History (BA)</option>
              <option>Mathematics (BA, BS)</option>
              <option>Philosophy (BA)</option>
              <option>Physics (BS)</option>
              <option>Political Science (BA)</option>
              <option>Psychology (BS)</option>
              <option>Sociology (BA)</option>
          </select>
      </div>
      <div v-if="userCollege == 'College of Computing & Informatics'">
          <p> What is your major in the College of Computing & Informatics? </p>
          <select v-model="userMajor">
              <option>Computer Science (BACS, BSCS)</option>
              <option>Computing and Security Technology (BSCST)</option>
              <option>Data Science (BSDS)</option>
              <option>Information Systems (BSIS)</option>
              <option>Software Engineering (BSSE)</option>
          </select>
      </div>
      <div v-if="userCollege == 'College of Engineering'">
          <p> What is your major in the College of Engineering? </p>
          <select v-model="userMajor">
              <option>Architectural Engineering (BSAE)</option>
              <option>Chemical Engineering (BSCHE)</option>
              <option>Civil Engineering (BSCIV)</option>
              <option>Computer Engineering (BSCE)</option>
              <option>Construction Management (BSCMGT)</option>
              <option>Electrical Engineering (BSEE)</option>
              <option>Engineering (BSE)</option>
              <option>Engineering Technology (BSET)</option>
              <option>Environmental Engineering (BSENE)</option>
              <option>Materials Science and Engineering (BSMSE)</option>
              <option>Mechanical Engineering (BSME)</option>
              <option>Property Management (BSPRMT)</option>
          </select>
      </div>
      <div v-if="userCollege == 'College of Nursing and Health Professions'">
          <p> What is your major in the College of Nursing and Health Professions? </p>
          <select v-model="userMajor">
              <option>Behavioral Health Counseling (BS)</option>
              <option>Health Sciences (BS)</option>
              <option>Health Services Administration (BS)</option>
              <option>Nursing (BSN)</option>
              <option>Nursing (BSN) - Accelerated Career Entry (ACE)</option>
              <option>Nursing RN/BSN Completion Program</option>
              <option>Nutrition and Foods (BS)</option>
          </select>
      </div>
      <div v-if="userCollege == 'Dornsife School of Public Health'">
          <p> What is your major in the Dornsife School of Public Health? </p>
          <select v-model="userMajor">
              <option>Public Health (BS)</option>
          </select>
      </div>
      <div v-if="userCollege == 'Goodwin College of Professional Studies'">
          <p> What is your major in the Goodwin College of Professional Studies? </p>
          <select v-model="userMajor">
              <option>General Studies (BS)</option>
          </select>
      </div>
      <div v-if="userCollege == 'School of Biomedical Engineering, Science and Health Systems'">
          <p> What is your major in the School of Biomedical Engineering, Science and Health Systems? </p>
          <select v-model="userMajor">
              <option>Biomedical Engineering (BSBE)</option>
          </select>
      </div>
      <div v-if="userCollege == 'School of Education'">
          <p> What is your major in the School of Education? </p>
          <select v-model="userMajor">
              <option>Design of Learning Technologies (BS)</option>
              <option>Elementary Education (BS)</option>
              <option>Teacher Education (BS)</option>
          </select>
      </div>
      <div v-else>
      </div>
      <br>
      <!--Entering user's skills-->
      <h3>Skills</h3>
      <input type='text' class='input' placeholder="What skills do you have?" v-model="newSkill" v-validate="'min:5'" name="skill" @keyup.enter="addSkill">
      <p class="alert" v-if="errors.has('skill')">{{ errors.first('skill') }}</p>
      <h6>Skills could include anything from JavaScript and Python to Playing the Drums or Photography.</h6>
      <div v-for="(skill,index) in skills" :key="skill.id" class="item">
          <div class="item-left">
              <div v-if="!skill.editing" @dblclick="editSkill(skill)" class="item-label">{{ skill.title }}</div>
              <input v-else class="item-edit" type="text" v-model="skill.title" @blur="doneSkillEdit(skill)" @keyup.enter="doneSkillEdit(skill)" @keyup.esc="cancelSkillEdit(skill)" v-focus>
          </div>
          <div class="remove-item" @click="removeSkill(index)">
              &times;
          </div>
      </div>
      <!--Entering user's work experience-->
      <br>
      <h3>Work Experience</h3>
      <input type='text' class='input' placeholder="What work experience do you have?" v-model="newExperience" @keyup.enter="addExperience" v-validate="'min:5'" name="experience">
      <p class="alert" v-if="errors.has('experience')">{{ errors.first('experience') }}</p>
      <h6>Your experiences should include any past projects or work you have participated in.</h6>
      <div v-for="(experience,index) in experiences" :key="experience.id" class="item">
          <div class="item-left">
              <div v-if="!experience.editing" @dblclick="editExperience(experience)" class="item-label">{{ experience.title }}</div>
              <input v-else class="item-edit" type="text" v-model="experience.title" @blur="doneExperienceEdit(experience)" @keyup.enter="doneExperienceEdit(experience)" @keyup.esc="cancelExperienceEdit(experience)" v-focus>
          </div>
          <div class="remove-item" @click="removeExperience(index)">
              &times;
          </div>
      </div>
      <br>
      Are you available to work on projects right now?
      <div>
          <input type="radio" id="available" value=true v-model="work">
          <label for="available">Yes!</label>
          <br>
          <input type="radio" id="unavailable" value=false v-model="work">
          <label for="unavailable">No.</label>
      </div>
      <!--Entering interests-->
      <br>
      <h3>Interests</h3>
      <input type='text' class='input' placeholder="What are you interested in?" v-model="newInterest" @keyup.enter="addInterest" v-validate="'min:5'" name="interest">
      <p class="alert" v-if="errors.has('interest')">{{ errors.first('interest') }}</p>
      <h6>Your experiences interest should include anything you are passionate about outside of class.</h6>
      <div v-for="(interest,index) in interests" :key="interest.id" class="item">
          <div class="item-left">
              <div v-if="!interest.editing" @dblclick="editInterest(interest)" class="item-label">{{ interest.title }}</div>
              <input v-else class="item-edit" type="text" v-model="interest.title" @blur="doneInterestEdit(interest)" @keyup.enter="doneInterestEdit(interest)" @keyup.esc="cancelInterestEdit(interest)" v-focus>
          </div>
          <div class="remove-item" @click="removeInterest(index)">
              &times;
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data () {
    return {
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@yahoo.com',
      gradYear: 0,
      userCollege: "",
      userMajor:"",
      work: "",
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
              'title': 'Python',
              'editing': false,
          }
      ],
      newExperience: "",
      idForExperience: 4,
      experiences: [
         {
             'id': 1,
             'title': 'CI 102 Project',
             'editing': false,
         }
     ],
     newInterest: "",
     idForInterest: 3,
     interests : [
         {
             'id': 1,
             'title': 'Hiking',
             'editing': false,
         },
         {
             'id': 2,
             'title': 'Traveling',
             'editing': false,
         }
     ]
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
    addExperience() {
        this.$validator.validateAll().then((result) => {
            if (result) {
                this.experiences.push({
                    id: this.idForExperience,
                    title: this.newExperience,
                    completed: false
                })
                this.newExperience = ''
                this.idForExperience++
            }
            else {
                console.log('Not Valid')
            }
        })
    },
    editExperience(experience) {
        this.beforeEditCache = experience.title
        experience.editing = true
    },
    doneExperienceEdit(skill) {
        if (skill.title.trim() == ''){
            skill.title = this.beforeEditCache
        }
        skill.editing = false
    },
    cancelExperienceEdit(skill) {
        skill.title = this.beforeEditCache
        skill.editing = false
    },
    removeExperience(index) {
        this.skills.splice(index, 1)
    },
    addInterest() {
        this.$validator.validateAll().then((result) => {
            if (result) {
                this.interests.push({
                    id: this.idForInterest,
                    title: this.newInterest,
                    completed: false
                })
                this.newInterest = ''
                this.idForInterest++
            }
            else {
                console.log('Not Valid')
            }
        })
    },
    editInterest(interest) {
        this.beforeEditCache = interest.title
        interest.editing = true
    },
    doneInterestEdit(interest) {
        if (interest.title.trim() == ''){
            interest.title = this.beforeEditCache
        }
        interest.editing = false
    },
    cancelInterestEdit(interest) {
        interest.title = this.beforeEditCache
        interest.editing = false
    },
    removeInterest(index) {
        this.interest.splice(index, 1)
    },
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .input {
        width: 100%;
        padding: 10px 18px;
        font-size: 18px;
        margin-bottom: 16px;

        &:focus{
            outline: 0;
        }
    }
    .item {
        margin-bottom: 12px;
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
        border: 1 px solid white;
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
