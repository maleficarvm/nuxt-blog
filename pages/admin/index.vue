<template>
  <div>
    <PostsList :admin="true" :posts="postLoaded" />
  </div>
</template>

<script>
export default {
  layout: "admin",
  computed: {
    postLoaded() {
      return this.$store.getters.getPostsLoaded;
    }
  }
};
</script>
