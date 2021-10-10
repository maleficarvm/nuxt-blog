<template>
  <div class="wrapper-content wrapper-content--fixed">
    <post :post="post" />
    <comments :comments="comments" />
    <newComment :postId="$route.params.id" />
  </div>
</template>

<script>
import axios from "axios";
import post from "@/components/blog/Post.vue";
import newComment from "@/components/Comments/NewComments.vue";
import comments from "@/components/Comments/Comments.vue";

export default {
  components: { post, comments, newComment, axios },
  async asyncData(context) {
    let [post, comment] = await Promise.all([
      axios.get(
        `https://blog-nuxt-aae5b-default-rtdb.firebaseio.com/posts/${context.params.id}.json `
      ),
      axios.get(
        `https://blog-nuxt-aae5b-default-rtdb.firebaseio.com/comments .json `
      )
    ]);

    let commentsArrayRes = Object.values(comments.data).filter(
      comment => comment.postId === context.params.id && comment.publish
    );

    return {
      post: post.data,
      comments: commentsArrayRes
    };
  }
};
</script>

<style lang="scss">
.post {
  max-width: 900px;
  margin: 0 auto;
}
.post-header {
  text-align: center;
  margin-bottom: 30px;
  img {
    margin-bottom: 16px;
    max-width: 400px;
  }
  p {
    color: #999;
  }
}
.post-body {
  text-align: center;
}
</style>
