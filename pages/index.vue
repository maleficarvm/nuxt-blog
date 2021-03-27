<template>
  <div class="wrapper-content wrapper-content--fixed">
    <promo />
    <intro title="My lasts posts: " />
    <postsList :posts="posts" />
    <contacts />
  </div>
</template>

<script>
import promo from "@/components/Promo.vue";
import intro from "@/components/UI/Intro.vue";
import postsList from "@/components/blog/PostsLists.vue";
import contacts from "@/components/Contacts.vue";

export default {
  components: {
    promo,
    intro,
    postsList,
    contacts
  },
  data() {
    return {
      posts: [
        {
          id: 1,
          title: "1 post",
          descr: "Lorem ipsum dolor sit amet consectetur",
          img: "https://lawnuk.com/wp-content/uploads/2016/08/sprogs-dogs.jpg"
        },
        {
          id: 2,
          title: "2 post",
          descr: "Lorem ipsum dolor sit amet consectetur",
          img:
            "https://iheartdogs.com/wp-content/uploads/2017/09/Brite-Bite-0021-2.jpg"
        },
        {
          id: 3,
          title: "3 post",
          descr: "Lorem ipsum dolor sit amet consectetur",
          img: "https://lawnuk.com/wp-content/uploads/2016/08/sprogs-dogs.jpg"
        }
      ]
    };
  }
};
</script>
