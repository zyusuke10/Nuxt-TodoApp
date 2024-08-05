<template>
    <div class="flex items-center justify-center w-[90vw] md:w-[100vw]">
      <div class="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 class="text-2xl font-bold text-center">Login</h2>
        <form @submit.prevent="handleSubmit">
          <div class="space-y-4">
            <div>
              <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
              <input
                id="username"
                v-model="auth.username"
                type="text"
                required
                class="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              >
            </div>
            <div>
              <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
              <input
                id="password"
                v-model="auth.password"
                type="password"
                required
                class="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
              >
            </div>
          </div>
          <button
            type="submit"
            class="w-full px-4 py-2 mt-6 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
import { useAuthStore } from '../store/AuthStore';

  const auth = useAuthStore()
  
  const handleSubmit = () => {
    console.log('Email:', auth.username)
    console.log('Password:', auth.password)
    auth.login()
  }
  </script>
  