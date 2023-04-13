<script setup>
import Textinput from "@/components/Textinput";
import { useField, useForm } from "vee-validate";
import * as yup from "yup";
import {ref} from 'vue';
import axios from 'axios'

import { useRouter } from "vue-router";
import { useToast } from "vue-toastification";
  const checkbox = ref (false)
      // Define a validation schema
    const schema = yup.object({
      email: yup.string().required("Email is required").email(),
      password: yup.string().required("Password is required").min(8),
    });

    const toast = useToast();
    const router = useRouter();

    const formValues = {
      email: "dashcode@gmail.com",
      password: "dashcode",
    };

    const { handleSubmit } = useForm({
      validationSchema: schema,
      initialValues: formValues,
    });
    // No need to define rules for fields

    const { value: email, errorMessage: emailError } = useField("email");
    const { value: password, errorMessage: passwordError } =
      useField("password");

    const onSubmit = handleSubmit((values) => {
      let isUser = localStorage.users;
      isUser = JSON.parse(isUser);

      let userIndex = isUser.findIndex((user) => user.email === values.email);

      if (userIndex > -1) {
        let activeUser = isUser.find((user) => user.email === values.email);
        localStorage.setItem("activeUser", JSON.stringify(activeUser));

        if (isUser[userIndex].password === values.password) {
          router.push("/ams/admin");
          toast.success(" 登入成功", {
            timeout: 2000,
          });
        } else {
          toast.error(" 密碼錯誤 ", {
            timeout: 2000,
          });
        }
      } else {
        toast.error(" 查無此帳號", {
          timeout: 2000,
        });
      }
    });

</script>

<template>
  <form @submit.prevent="onSubmit" class="space-y-4">
    <Textinput
      label="帳號"
      type="text"
      placeholder=""
      name="account"
      v-model="account"
      :error="accountError"
      classInput="h-[48px]"
    />
    <Textinput
      label="密碼"
      type="password"
      placeholder=" "
      name="password"
      v-model="password"
      :error="passwordError"
      hasicon
      classInput="h-[48px]"
    />

    <div class="flex justify-between">
      <label class="cursor-pointer flex items-start">
        <input
          type="checkbox"
          class="hidden"
          @change="() => (checkbox = !checkbox)"
        />
        <span
          class="h-4 w-4 border rounded flex-none inline-flex mr-3 relative top-1 transition-all duration-150"
          :class="
            checkbox
              ? 'ring-2 ring-black-500 dark:ring-offset-slate-600 dark:ring-slate-900  dark:bg-slate-900 ring-offset-2 bg-slate-900'
              : 'bg-slate-100 dark:bg-slate-600 border-slate-100 dark:border-slate-600 '
          "
        >
          <img
            src="@/assets/images/icon/ck-white.svg"
            alt=""
            class="h-[10px] w-[10px] block m-auto"
            v-if="checkbox"
          />
        </span>
        <span class="text-slate-500 dark:text-slate-400 text-sm leading-6"
          >保持登入</span
        >
      </label>
      <router-link
        to="/forgot-password"
        class="text-sm text-slate-800 dark:text-slate-400 leading-6 font-medium"
        >忘記密碼?</router-link
      >
    </div>

    <button type="submit" class="btn btn-dark block w-full text-center">
      登入
    </button>
  </form>
</template>

<style lang="scss"></style>