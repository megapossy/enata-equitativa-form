import { defineStore } from 'pinia'
import { stringify } from 'postcss'

export const useCareerFormStore = defineStore({
  id: 'careerFormStore',
  state: () => ({
    firstName: "",
    lastName: "",
    mobile:"",
    email:"",
    nationality:"",
    photo:"",
    resume:"",
    title:"",
    salary: "",
    position: "cncoperator",
    aboutSelf: "",
   }),
  actions: {
    clear(){
      this.firstName = "";
      this.lastName = "";
      this.mobile = "";
      this.email = "";
      this.nationality = "";
      this.photo = "";
      this.resume = "";
      this.title = "";
      this.salary = "";
      this.position = "cncoperator";
      this.aboutSelf = "";
    }
  }
})
