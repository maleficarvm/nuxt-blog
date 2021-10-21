export default function(context) {
  console.log("auth");
  if (!context.store.getters.checkAuthUser) {
    context.redirect("admin/auth");
  }
}
