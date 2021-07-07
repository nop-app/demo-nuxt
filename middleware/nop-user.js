export default function ({ app }) {
  if (app.$nop) {
    app.$nop.setUser('Jane Doe')
  }
}
