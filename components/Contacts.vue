<template>
  <section class="contact">
    <div class="container">
      <h2 class="title">
        Contact me!
      </h2>
      <Message v-if="message" :message="message" />
      <form @submit.prevent="onSubmit" class="contact-form">
        <!-- name -->
        <AppInput v-model="user.name">Name:</AppInput>
        <!-- email -->
        <AppInput v-model="user.email" type="email">Email:</AppInput>
        <!-- text -->
        <AppTextArea v-model="user.text">Text:</AppTextArea>
        <!-- buttons -->
        <div class="controls">
          <AppButton class="btnWhite">Submit!</AppButton>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import AppButton from "@/components/UI/Controls/Button.vue";
import AppInput from "@/components/UI/Controls/Input.vue";
import AppTextArea from "@/components/UI/Controls/TextArea.vue";

export default {
  components: { AppButton, AppInput, AppTextArea },
  data() {
    return {
      user: {
        name: "",
        email: "",
        text: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log(this.user);
    }
  }
};
</script>

<style lang="scss">
.contact {
  text-align: center;
  background-color: rgb(134, 32, 71);
  color: #fff;
  .title {
    color: #fff;
  }
  .contact-form {
    max-width: 600px;
    margin: 30px auto;
  }
  .controls {
    margin: 30px 0;
  }
}
</style>
