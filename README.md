# universal-toast-message

A lightweight and customizable **toast notification plugin** for Vue 3.

## 🚀 Installation

```bash
npm install universal-toast-message
```

or

```bash
yarn add universal-toast-message
```

---

## 🔧 Usage

### 1. Register the plugin in `main.js`

```js
import { createApp } from "vue";
import App from "./App.vue";
import ToastPlugin from "universal-toast-message";

const app = createApp(App);

// Use the plugin
app.use(ToastPlugin);

app.mount("#app");
```

---

### 2. Show Toasts Anywhere in Your App

Now you can use `$toast` globally inside Vue components:

```vue
<script setup>
import { getCurrentInstance } from "vue";

const { proxy } = getCurrentInstance();

function showToasts() {
  proxy.$toast.success("Data saved successfully!");
  proxy.$toast.error("Something went wrong!", "Error", 5000);
  proxy.$toast.info("This is an info message.");
  proxy.$toast.warning("Check your inputs!");
}
</script>

<template>
  <button @click="showToasts">Show Toasts</button>
</template>
```

---

## ✅ Features

- 4 types of toast:
  - ✅ Success  
  - ❌ Error  
  - ℹ️ Info  
  - ⚠️ Warning  
- Auto-dismiss with configurable duration
- Manual close button
- Smooth animations
- Plug-and-play installation

---

## ⚙️ API

### `$toast.success(message, title?, duration?)`
- `message` (string, required): The body text of the toast
- `title` (string, optional, default: `"Success"`)
- `duration` (number, optional, default: `8000` ms)

Similarly for:
- `$toast.error(message, title?, duration?)`
- `$toast.info(message, title?, duration?)`
- `$toast.warning(message, title?, duration?)`

---

## 🖼️ Example

```vue
<template>
  <button @click="$toast.success('Profile updated!')">
    Show Success Toast
  </button>
</template>
```

---

## 📜 License

MIT © Hemant Rao
