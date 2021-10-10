<template>
  <newPostForm :postEdit="post" @submit="onSubmit" />
</template>

<script>
import axios from "axios";
import newPostForm from "@/components/admin/NewPostForm.vue";
export default {
  components: {
    newPostForm,
    axios
  },
  layout: "admin",
  asyncData(context) {
    return axios
      .get(
        `https://blog-nuxt-aae5b-default-rtdb.firebaseio.com/posts/${context.params.postId}.json`
      )
      .then(res => {
        return {
          post: { ...res.data, id: context.params.postId }
        };
      })
      .catch(e => context.error(e));
  },
  methods: {
    onSubmit(post) {
      console.log("Post Editing!");
      this.$store.dispath("editPost", post).then(() => {
        this.$router.push("/admin");
      });
    }
  }
};
</script>
