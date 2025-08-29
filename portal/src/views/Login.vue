<template>
	<div class="min-h-screen flex items-center justify-center bg-gray-100 px-4">
	  <div class="w-full max-w-sm bg-white rounded-2xl shadow-lg p-8">
		<!-- Title -->
		<h2 class="text-2xl font-bold text-center text-gray-900 mb-6">
		  Sign in to your account
		</h2>

		<!-- Form -->
		<form @submit.prevent="login" class="space-y-5">
		  <!-- Email -->
		  <div>
			<label for="email" class="block text-sm font-medium text-gray-700 mb-1">
			  Username
			</label>
			<input
			  type="text"
			  v-model="email"
			  id="email"
			  placeholder="Enter your username"
			  class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
			/>
		  </div>

		  <!-- Password -->
		  <div>
			<label for="password" class="block text-sm font-medium text-gray-700 mb-1">
			  Password
			</label>
			<input
			  type="password"
			  v-model="password"
			  id="password"
			  placeholder="Enter your password"
			  class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
			/>
		  </div>

		  <!-- Button -->
		  <button
			type="submit"
			class="w-full py-2 px-4 rounded-lg bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-200"
		  >
			Sign in
		  </button>
		</form>
	  </div>
	</div>
  </template>

  <script>
  export default {
	data() {
	  return {
		email: null,
		password: null,
	  };
	},
	inject: ["$auth"],
	async mounted() {
	  if (this.$route?.query?.route) {
		this.redirect_route = this.$route.query.route;
		this.$router.replace({ query: null });
	  }
	},
	methods: {
	  async login() {
		if (this.email && this.password) {
		  let res = await this.$auth.login(this.email, this.password);
		  if (res) {
			this.$router.push({ name: "Home" });
		  }
		}
	  },
	},
  };
  </script>
