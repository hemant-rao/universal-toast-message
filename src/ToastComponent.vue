<template>
  <div class="toast-wrapper">
    <div
      v-for="(toast, index) in toasts"
      :key="toast.id"
      class="toast-message show"
      :class="['toast-message', toast.isHiding ? 'hide' : 'show', toast.type]"
      :style="{ top: `${0 + index * 90}px` }"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div class="toast-message-header">
        <div class="toast-icon">
          <img
            v-if="toast.type === 'toast-success'"
            src="./assets/toast-success.svg"
            alt=""
          />
          <img
            v-if="toast.type === 'toast-danger'"
            src="./assets/toast-danger.svg"
            alt=""
          />
          <img
            v-if="toast.type === 'toast-info'"
            src="./assets/toast-info.svg"
            alt=""
          />
          <img
            v-if="toast.type === 'toast-warning'"
            src="./assets/toast-warning.svg"
            alt=""
          />
        </div>
        <div class="toast-content">
          <div class="toast-title">
            <strong class="me-auto text-white-color">{{ toast.title }}</strong>
          </div>
          <div class="toast-text">
            <div class="toast-message-body text-white-color">
              {{ toast.message }}
            </div>
          </div>
        </div>
        <div
          class="toast-close"
          @click="removeToast(toast.id)"
          aria-label="Close"
        >
          <img
            src="./assets/Cancel-gray.svg"
            class="w-100 h-100"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
let idCounter = 0;

export default {
  data() {
    return {
      toasts: [],
    };
  },
  methods: {
    showToast(message, title = "Notification", type = "toast-info") {
      const id = idCounter++;
      this.toasts.push({ id, message, title, type, isHiding: false });
      setTimeout(() => {
        this.startHideToast(id);
      }, 8000); // Show for 8 seconds
    },
    startHideToast(id) {
      const toast = this.toasts.find((t) => t.id === id);
      if (toast) {
        toast.isHiding = true;
        setTimeout(() => {
          this.removeToast(id);
        }, 500); // Wait for hide animation to finish
      }
    },
    removeToast(id) {
      this.toasts = this.toasts.filter((toast) => toast.id !== id);
    },
  },
};
</script>

<style scoped>
.toast-wrapper {
  position: fixed;
  top: 5px;
  right: 5px;
  z-index: 1250;
}
.toast-icon {
  width: 36px;
  height: 36px;
}

.toast-message {
  position: absolute;
  right: 0;
  opacity: 0;
  transition: opacity 0.5s ease-in-out, top 0.5s ease-in-out;
  width: 350px;
  height: 75px;
  max-height: 75px;
  padding: 0px 19px;
  pointer-events: none;
}
/* show animation */
.toast-message.show {
  opacity: 1;
  transition: opacity 0.5s ease-in-out, top 0.5s ease-in-out;
  animation: slideIn 0.5s ease forwards;
  pointer-events: auto;
}

/* Hide animation */
.toast-message.hide {
  animation: slideOut 0.5s ease forwards;
  pointer-events: none;
}

.toast-message-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  height: 100%;
}
.toast-content {
  width: 324px;
  padding-left: 14px;
}
.toast-message-body {
  padding: 0px; /* Padding for body */
}
.text-white-color {
  color: #353535;
}
.toast-title {
  font-size: 14px;
}

.toast-text {
  font-size: 13px;
}
.toast-close img {
  width: 16px;
  height: 16px;
  padding: 0;
}
.toast-message.toast-success {
  background-color: #eff8f4 !important;
  color: #353535;
  border: 1px solid #61ba93;
}
.toast-message.toast-danger {
  background-color: #fde9ed !important;
  color: #353535;
  border: 1px solid #ef2653;
}
.toast-message.toast-warning {
  background-color: #fef4ee !important;
  color: #353535;
  border: 1px solid #f3965c;
}
.toast-message.toast-info {
  background-color: #f0faff !important;
  color: #353535;
  border: 1px solid #4fb0e6;
}
/* add animation when toast show and hide start here*/
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideOut {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-20px);
  }
}
/* add animation when toast show and hide end here*/
</style>