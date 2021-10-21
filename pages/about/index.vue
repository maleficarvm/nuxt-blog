<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section class="about">
      <div class="container">
        <h1 class="title">About my blog:</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis,
          deserunt. Repellendus mollitia aliquid nihil laudantium et officia!
          Autem eum accusantium pariatur non similique dignissimos quisquam odit
          amet, maiores atque ad?
        </p>
        <client-only
          ><Intro title="Lorem, ipsum dolor sit amet" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis,
            deserunt. Repellendus mollitia aliquid nihil laudantium et officia!
            Autem eum accusantium pariatur non similique dignissimos quisquam
            odit amet, maiores atque ad?
          </p>
        </client-only>
        <img src="@/assets/img/about.jpg" alt="" />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis,
          deserunt. Repellendus mollitia aliquid nihil laudantium et officia!
          Autem eum accusantium pariatur non similique dignissimos quisquam odit
          amet, maiores atque ad?
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  head() {
    let title = "About My SSR blog!",
      descr = "Abpot My SSR Blog! With Nuxt.js!",
      type = "site";
    return {
      title: title,
      meta: [
        {
          hid: "og:title",
          name: "dg:title",
          content: title
        },
        {
          hid: "description",
          name: "description",
          content: descr
        },
        {
          hid: "og:description",
          name: "og:description",
          content: descr
        },
        {
          hid: "og:type",
          name: "og:type",
          content: type
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.about {
  text-align: center;
  p {
    margin-bottom: 10px;
  }
}
</style>
