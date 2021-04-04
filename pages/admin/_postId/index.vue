<template>
  <newPostForm :post="post" @submit="onSubmit" />
</template>

<script>
import newPostForm from "@/components/admin/NewPostForm.vue";
export default {
  components: {
    newPostForm
  },
  layout: "admin",
  data() {
    return {
      post: {
        id: 1,
        title: "1 post",
        descr: "Lorem ipsum dolor sit amet consectetur",
        content:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, deserunt. Repellendus mollitia aliquid nihil laudantium et officia! Autem eum accusantium pariatur non similique dignissimos quisquam odit amet, maiores atque ad?",
        img: "https://lawnuk.com/wp-content/uploads/2016/08/sprogs-dogs.jpg"
      },
      comments: [
        { name: "Alex", text: "Lorem, ipsum dolor sit amet consectetur" },
        { name: "John", text: "Lorem, ipsum dolor sit amet consectetur" }
      ]
    };
  },
  methods: {
    onSubmit(post) {
      console.log("Post Editing!");
      console.log(post);
    }
  }
};
</script>
