import axios from "axios";

export const state = () => ({
  postsLoaded: [],
  commentsLoaded: []
});

export const mutations = {
  setPosts(state, posts) {
    state.postsLoaded = posts;
  },
  addPost(state, post) {
    state.postsLoaded.push(post);
  },
  editPost(state, postEdit) {
    const postIndex = state.postsLoaded.findIndex(
      post => post.id === postEdit.id
    );
    state.postLoaded[postIndex] = postEdit;
  },
  addComment(state, comment) {
    state.commentsLoaded.push(comment);
  }
};

export const actions = {
  nuxtServerInit({ commit }, context) {
    return axios
      .get("https://blog-nuxt-aae5b-default-rtdb.firebaseio.com/posts.json")
      .then(res => {
        const postsArray = [];
        for (let key in res.data) {
          postsArray.push({ ...res.data[key], id: key });
        }
        commit("setPosts", postsArray);
      })
      .catch(e => console.log(e));
  },
  authUser({ commit }, authData) {
    const key = "AIzaSyAr19u1AxSMyUCKuob998E27yCh-X9soJo";
    return axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${key}`,
      {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      }
    );
  },
  addPost({ commit }, post) {
    // console.log(post);
    return axios
      .post(
        "https://blog-nuxt-aae5b-default-rtdb.firebaseio.com/posts.json",
        post
      )
      .then(res => {
        commit("addPost", { ...post, id: res.data.name });
      })
      .catch(e => console.log(e));
  },
  editPost({ commit }, post) {
    return axios
      .put(
        `https://blog-nuxt-aae5b-default-rtdb.firebaseio.com/posts/${post.id}.json`,
        post
      )
      .then(res => {
        commit("editPost", post);
      })
      .catch(e => console.log(e));
  },
  addComment({ commit }, comment) {
    return axios
      .post(
        "https://blog-nuxt-aae5b-default-rtdb.firebaseio.com/comments.json",
        comment
      )
      .then(res => {
        commit("addComment", { ...comment, id: res.data.name });
      })
      .catch(e => console.log(e));
  }
};

export const getters = {
  getPostsLoaded(state) {
    return state.postsLoaded;
  }
};
