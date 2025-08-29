<template>
	<div class="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900">
		<!-- Title -->
		<h1 class="text-6xl md:text-8xl font-extrabold tracking-tight text-blue-600 mb-12">
		Home Page
		</h1>

		<!-- Actions -->
		<div class="flex gap-4">
		<!-- Ping button -->
		<button
			@click="$resources.ping.fetch()"
			class="px-6 py-3 rounded-2xl bg-blue-600 text-white font-semibold text-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-200"
		>
			Ping Server
		</button>

		<!-- Logout button (only when logged in) -->
		<button
			v-if="$auth.isLoggedIn"
			@click="$auth.logout()"
			class="px-6 py-3 rounded-2xl bg-blue-600 text-white font-semibold text-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-200"
		>
			Logout
		</button>

		<!-- Radix UI button -->
		<button
			@click="$router.push('/radixui')"
			class="px-6 py-3 rounded-2xl bg-blue-600 text-white font-semibold text-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-200"
		>
			Radix UI
		</button>
		</div>
	</div>
</template>

<script>
export default {
inject: ["$auth"],
resources: {
	ping() {
	return {
		method: "frappe.ping",
		onSuccess(d) {
		alert(d);
		},
	};
	},
},
};
</script>
