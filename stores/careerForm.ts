import { defineStore } from "pinia";

export const useCareerFormStore = defineStore({
  id: "careerFormStore",
  state: () => ({
    fields: {
      firstName: "",
      lastName: "",
      mobile: "",
      email: "",
      nationality: "",
      photo: "",
      resume: "",
      title: "",
      salary: "",
      job_position: "cncoperator", // initialized as first selected
      aboutSelf: "",
      acknowledge: false,
    },
    errors: {
      firstName: "",
      lastName: "",
      mobile: "",
      email: "",
      nationality: "",
      photo: "",
      resume: "",
      title: "",
      salary: "",
      job_position: "",
      aboutSelf: "",
      acknowledge: "",
    },
  }),
  getters: {
    fieldHasErrors: (state)=>{
      let hasError = false;

      type ert = keyof typeof state.errors; 
      for (let key of Object.keys(state.errors)) {
        if(state.errors[key as ert]) {
          hasError = true; break;
        }
      }
      

      return hasError;
    },
  },
  actions: {
    clearFields() {
      this.fields.firstName = "";
      this.fields.lastName = "";
      this.fields.mobile = "";
      this.fields.email = "";
      this.fields.nationality = "";
      this.fields.photo = "";
      this.fields.resume = "";
      this.fields.title = "";
      this.fields.salary = "";
      this.fields.job_position = "cncoperator";
      this.fields.aboutSelf = "";
      this.fields.acknowledge = false;
    },
    cleaErrors() {
      type ert = keyof typeof this.errors; 
      for (let key of Object.keys(this.errors)) {
        this.errors[key as ert] = ""
      }
    },

    validateFields(){

      this.cleaErrors();

      this.errors.firstName = this.fields.firstName ? "" :"First name is required";
      this.errors.lastName = this.fields.lastName ? "" :"Last name is required";
      this.errors.mobile = this.fields.mobile ? "" :"Phone number is required";

      this.errors.email = helpers.isEmailAddress(this.fields.email) ? "" :"Email is invalid";

      this.errors.nationality = this.fields.nationality ? "" :"Nationality is required";
      // this.errors.photo = this.fields.photo ? "" :"Photo is required";
      this.errors.resume = this.fields.resume ? "" :"Resume is required";
      this.errors.title = this.fields.title ? "" :"Title is required";
      // this.errors.salary = this.fields.salary ? "" :"Salary is required";
      // this.errors.aboutSelf = this.fields.aboutSelf ? "" :"This is required";
    },

    async submitForm() {

      // simple validation form


      const payload = {
        first_name: this.fields.firstName,
        last_name: this.fields.lastName,
        mobile: this.fields.mobile,
        email: this.fields.email,
        nationality: this.fields.nationality,
        photo: this.fields.photo,
        resume: this.fields.resume,
        title: this.fields.title,
        salary: this.fields.salary,
        job_position: this.fields.job_position,
        about_self: this.fields.aboutSelf,
      };

      await useFetch("/api/submit-form", {
        method: "post",
        body: payload,
      });
    },
  },
});
