<template>
  <form @submit.prevent="submitForm">
    <div class="form-control" :class="{invalid: !firstName.isValid}">
      <label for="firstName">First Name</label>
      <input type="text" id="firstName" v-model.trim="firstName.val" @blur="clearValidity('firstName')" />
      <p class="invalid" v-if="!firstName.isValid">First Name must not be empty.</p>
    </div>

    <div class="form-control" :class="{invalid: !lastName.isValid}">
      <label for="lastName">Last Name</label>
      <input type="text" id="lastName" v-model.trim="lastName.val" @blur="clearValidity('lastName')" />
      <p class="invalid" v-if="!lastName.isValid">Last Name must not be empty.</p>
    </div>

    <div class="form-control" :class="{invalid: !desc.isValid}">
      <label for="desc">Description</label>
      <textarea id="desc" rows="5" v-model.trim="desc.val" @blur="clearValidity('desc')"></textarea>
      <p class="invalid" v-if="!desc.isValid">Description must not be empty.</p>
    </div>

    <div class="form-control" :class="{invalid: !rate.isValid}">
      <label for="rate">Hourly Rate</label>
      <input type="number" id="rate" v-model.number="rate.val" @blur="clearValidity('rate')" />
      <p class="invalid" v-if="!rate.isValid">Rate must be greater than 0.</p>
    </div>

    <div class="form-control">
      <h3>Areas of Expertise</h3>
      <div>
        <input type="checkbox" id="frontend" value="frontend" v-model="areas.val" @blur="clearValidity('areas')" />
        <label for="frontend">Frontend Development</label>
      </div>
      <div>
        <input type="checkbox" id="backend" value="backend" v-model="areas.val" @blur="clearValidity('areas')" />
        <label for="backend">Backend Development</label>
      </div>
      <div>
        <input type="checkbox" id="career" value="career" v-model="areas.val" @blur="clearValidity('areas')" />
        <label for="career">Career Advisory</label>
      </div>
      <p class="invalid" v-if="!areas.isValid">At least one should be selected.</p>
    </div>
    <p class="invalid" v-if="!formIsValid">Please fix the errors!</p>
    <BaseButton>Register</BaseButton>
  </form>
</template>



<script>
  export default {
    emits: ['saveData'],
    data() {
      return {
        firstName: { val: '', isValid: true },
        lastName: { val: '', isValid: true },
        desc: { val: '', isValid: true },
        rate: { val: null, isValid: true },
        areas: { val: [], isValid: true },
        formIsValid: true
      }
    },
    methods: {
      clearValidity(input) {
        this[input].isValid = true
      },
      validateForm() {
        this.formIsValid = true
        if (this.firstName.val === '') {
          this.firstName.isValid = false
          this.formIsValid = false
        }
        if (this.lastName.val === '') {
          this.lastName.isValid = false
          this.formIsValid = false
        }
        if (this.desc.val === '') {
          this.desc.isValid = false
          this.formIsValid = false
        }
        if (this.rate.val === null || this.rate.val < 0) {
          this.rate.isValid = false
          this.formIsValid = false
        }
        if (this.areas.val.length === 0) {
          this.areas.isValid = false
          this.formIsValid = false
        }
      },
      submitForm() {
        this.validateForm()
        if (!this.formIsValid) { return }

        this.$emit('saveData', {
          first: this.firstName.val,
          last: this.lastName.val,
          desc: this.desc.val,
          rate: this.rate.val,
          areas: this.areas.val
        })
      }
    }
  }
</script>



<style scoped>
  .form-control { margin: 0.5rem 0; }

  label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }

  input[type="checkbox"] + label {
    font-weight: normal;
    display: inline;
    margin: 0 0 0 0.5rem;
  }
    input,
    textarea {
      display: block;
      width: 100%;
      border: 1px solid #ccc;
      font: inherit;
    }
    input:focus,
    textarea:focus {
      background-color: #f0e6fd;
      outline: none;
      border-color: #3d008d;
    }

    input[type="checkbox"] {
      display: inline;
      width: auto;
      border: none;
    }
    input[type="checkbox"]:focus {
      outline: #3d008d solid 1px;
    }

  h3 {
    margin: 0.5rem 0;
    font-size: 1rem;
  }

  p.invalid {
    color: rgb(206, 13, 13);
    margin-top: 3px;
  }
  .invalid label { color: red; }
  .invalid input, .invalid textarea {
    border: 1px solid red;
  }
</style>
