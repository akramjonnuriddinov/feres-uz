<script setup lang="ts"></script>

<template>
  <section class="bg-white">
    <div class="py-12 v-container">
      <h2 class="pb-12 mb-2 text-center title">Connection</h2>
      <div
        class="flex flex-col justify-between lg:flex-row lg:justify-between lg:items-start"
      >
        <form @submit.prevent class="w-full lg:mr-[30px]">
          <div class="mb-4">
            <label class="flex flex-col">
              <span class="mb-2">Your firstname</span>
              <input type="text" required class="form-control" />
            </label>
            <span class="mt-1 text-[80%] text-[#dc3545] hidden"
              >Your firstname cannot be blank.
            </span>
          </div>
          <div class="mb-4">
            <label class="flex flex-col mb-4">
              <span class="mb-2">Subject</span>
              <input type="text" required class="form-control" />
              <span class="mt-1 text-[80%] text-[#dc3545] hidden"
                >Subject cannot be blank.
              </span>
            </label>
          </div>
          <div class="mb-4">
            <label class="flex flex-col mb-4">
              <span class="mb-2">Your phone number</span>
              <input type="text" required class="form-control" />
              <span class="mt-1 text-[80%] text-[#dc3545] hidden"
                >Your phone number cannot be blank.
              </span>
            </label>
          </div>
          <div class="mb-4">
            <label class="flex flex-col mb-4">
              <span class="mb-2">Email</span>
              <input type="email" required class="form-control" />
              <span class="mt-1 text-[80%] text-[#dc3545] hidden"
                >E-mail cannot be blank.
              </span>
            </label>
          </div>
          <label class="flex flex-col mb-4">
            <textarea
              class="form-control min-h-48"
              name=""
              id=""
              cols="10"
              rows="7"
            ></textarea>
          </label>
          <button
            type="button"
            class="px-4 py-2 mx-1 font-medium text-white transition-all duration-200 bg-blue-500 rounded-md"
          >
            Send message
          </button>
        </form>
        <div class="pt-8">
          <h3 class="mb-2 font-medium leading-[1.2]">Information</h3>
          <p class="mb-2 font-medium leading-[1.2] uppercase">
            FERGANA REGIONAL ELECTRIC NETWORK ENTERPRISE JSC
          </p>

          <div class="flex items-center gap-1">
            <icon-phone class="w-4 h-4" />
            <span>Phone number</span>
          </div>
          <p class="mb-4 font-medium leading-[1.2]">(0 373) 244-38-11</p>

          <div class="flex items-center gap-1">
            <icon-email class="w-4 h-4" />
            <span>E-mail</span>
          </div>
          <p class="mb-4 font-medium leading-[1.2]">info@feres.uz</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
textarea.form-control {
  height: auto;
}
.form-control {
  display: block;
  width: 100%;
  height: calc(2.25rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.form-control:focus {
  color: #495057;
  background-color: #fff;
  border-color: #80bdff;
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.form-control:invalid:focus {
  /* border-color: #dc3545;
  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25); */
}
</style>
