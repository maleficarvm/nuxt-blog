<template>
  <div class="wrapper-content wrapper-content--fixed">
    <Promo />
    <Intro title="My lasts posts: " />
    <PostsList :posts="posts" />
    <Contacts />
  </div>
</template>

<script>
import promo from "@/components/Promo.vue";
import contacts from "@/components/Contacts.vue";
import postsList from "@/components/blog/PostsLists.vue";

export default {
  components: {
    promo,
    contacts,
    postsList
  },
  computed: {
    postLoaded() {
      return this.$store.getters.getPostsLoaded;
    }
  }
};
</script>
