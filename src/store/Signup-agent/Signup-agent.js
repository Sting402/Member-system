import { defineStore } from "pinia";

export const useSignupstore = defineStore("Signup", {
  state: () => ({
    isCity:"",
    isArea:"",
    isLevel:"",
    isBirth:"",
    isUrlf:"",
    isUrlb:"",
    Total:"",
    refer:"",
    paymethod:"",
    cardHolder:"",
    cardNumber:"",
    expiryDate:"",
    valNum:"",
    lvlData:""

  }),
  actions: {},
});

