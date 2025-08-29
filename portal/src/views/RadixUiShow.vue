<template>
	<div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 text-gray-900">
	  <div class="flex space-x-4">
		<!-- Home Button -->
		<router-link
		  to="/home"
		  class="px-6 py-3 rounded-xl bg-blue-500 text-white font-semibold shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-200"
		>
		  Home
		</router-link>

		<!-- Popover -->
		<PopoverRoot>
		  <!-- Trigger -->
		  <PopoverTrigger
			class="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-200"
		  >
			More info
		  </PopoverTrigger>

		  <!-- Portal Content -->
		  <PopoverPortal>
			<PopoverContent
			  class="rounded-xl p-6 w-72 bg-white shadow-xl border border-gray-200 text-gray-800 relative animate-fade-in"
			>
			  <h3 class="text-lg font-semibold text-blue-700 mb-2">Details</h3>
			  <p class="text-sm text-gray-600 mb-4">
				This is some additional information inside the popover. You can style this however you want.
			  </p>

			  <!-- Close button -->
			  <PopoverClose
				class="absolute top-3 right-3 text-gray-400 hover:text-gray-600 focus:outline-none"
			  >
				✕
			  </PopoverClose>

			  <!-- Arrow -->
			  <PopoverArrow class="fill-white stroke-gray-200" />
			</PopoverContent>
		  </PopoverPortal>
		</PopoverRoot>
	  </div>
	</div>
  </template>

  <script setup>
  import {
	PopoverRoot,
	PopoverTrigger,
	PopoverContent,
	PopoverArrow,
	PopoverClose,
	PopoverPortal,
  } from "radix-vue"
  </script>

  <style>
  /* Fade-in animation */
  @keyframes fade-in {
	from {
	  opacity: 0;
	  transform: translateY(-4px);
	}
	to {
	  opacity: 1;
	  transform: translateY(0);
	}
  }

  .animate-fade-in {
	animation: fade-in 0.2s ease-out;
  }
  </style>


