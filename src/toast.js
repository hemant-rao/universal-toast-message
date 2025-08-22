import { createApp } from "vue";
import ToastComponent from "./ToastComponent.vue";

let toastApp = null;
let toastInstance = null;

function createToast() {
  if (!toastApp) {
    toastApp = createApp(ToastComponent);
    toastInstance = toastApp.mount(document.createElement("div"));
    document.body.appendChild(toastInstance.$el);
  }
  return toastInstance;
}

function show(message, title = "Notification", type = "toast-info", duration = 8000) {
  const instance = createToast();
  instance.showToast(message, title, type, duration);
}

export const showToast = {
  success(message, title = "Success", duration) {
    show(message, title, "toast-success", duration);
  },
  error(message, title = "Error", duration) {
    show(message, title, "toast-danger", duration);
  },
  info(message, title = "Info", duration) {
    show(message, title, "toast-info", duration);
  },
  warning(message, title = "Warning", duration) {
    show(message, title, "toast-warning", duration);
  }
};

export default {
  install(app) {
    app.config.globalProperties.$toast = showToast;
  }
};
