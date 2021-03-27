<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section class="post">
      <div class="container">
        <div class="post-header">
          <img :src="post.img" :alt="post.title" />
          <h1 class="title">{{ post.title }}</h1>
          <p>{{ post.descr }}</p>
        </div>
        <div class="post-body">
          <p>{{ post.content }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {
        id: 1,
        title: "1 post",
        descr: "Lorem ipsum dolor sit amet consectetur",
        content:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, deserunt. Repellendus mollitia aliquid nihil laudantium et officia! Autem eum accusantium pariatur non similique dignissimos quisquam odit amet, maiores atque ad?",
        img: "https://lawnuk.com/wp-content/uploads/2016/08/sprogs-dogs.jpg"
      }
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
