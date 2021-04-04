<template>
  <section class="new-comment">
    <div class="container">
      <Message v-if="message" :message="message" />
      <form @submit.prevent="onSubmit" class="contact-form">
        <AppInput v-model="comment.name">Name:</AppInput>
        <AppTextArea v-model="comment.text">Text:</AppTextArea>
        <div class="controls">
          <AppButton>Submit!</AppButton>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      comment: {
        name: "",
        text: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log(this.comment);
    }
  }
};
</script>

<style lang="scss">
.new-comment {
  text-align: center;
  .contact-form {
    max-width: 600px;
    margin: 30px auto;
  }
  .controls {
    margin: 30px 0;
  }
}
</style>
