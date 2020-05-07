<template>
	<form class="w-full mx-8 /max-w-lg rounded-md border-t border-gray-200 my-10 bg-white shadow-md">
		
		<div class="border-b /border-gray-300 //my-10 py-10 px-16">
			<div class=" p-8 ">
			<p class="uppercase">Results Selection</p>
				<div class="flex flex-wrap -mx-3 mb-2 pt-6">
					<div class="/w-full md:w-3/4 px-3 mb-6 md:mb-0 pr-12">
						<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
							Subject
						</label>
						<div class="relative">
							<select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
								<option v-for="subject in subjects" :key="subject.code">{{subject.name}}</option>
							</select>
							<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
								<svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
							</div>
						</div>
					</div>
					<div class="w-full md:w-1/4 px-3 mb-6 md:mb-0 pl-4">
						<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
							Grade
						</label>
						<div class="relative">
							<select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
								<option>A</option>
								<option>B</option>
								<option>C</option>
							</select>
							<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
								<svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
							</div>
						</div>
					</div>
				</div>
				<div class="flex flex-wrap -mx-3 mb-2 pt-3">
					<div class="/w-full md:w-3/4 px-3 mb-6 md:mb-0 pr-12">
						<div class="relative">
							<select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
								<option v-for="subject in subjects" :key="subject.code">{{subject.name}}</option>
							</select>
							<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
								<svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
							</div>
						</div>
					</div>
					<div class="w-full md:w-1/4 px-3 mb-6 md:mb-0 pl-4">
						<div class="relative">
							<select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
								<option>A</option>
								<option>B</option>
								<option>C</option>
							</select>
							<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
								<svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
							</div>
						</div>
					</div>
				</div>
				<div class="flex flex-wrap -mx-3 mb-2 pt-3">
					<div class="/w-full md:w-3/4 px-3 mb-6 md:mb-0 pr-12">
						<div class="relative">
							<select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
								<option v-for="subject in subjects" :key="subject.code">{{subject.name}}</option>
							</select>
							<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
								<svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
							</div>
						</div>
					</div>
					<div class="w-full md:w-1/4 px-3 mb-6 md:mb-0 pl-4">
						<div class="relative">
							<select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
								<option>A</option>
								<option>B</option>
								<option>C</option>
							</select>
							<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
								<svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="bg-gray-100 flex justify-end none">
			<div class="py-8 px-16">
				<div class="border cursor-pointer px-8 py-2 bg-gray-600 text-white rounded">submit</div>
			</div>
		</div>

		
		</form>
	</template>

	<script>
	import axios from 'axios';
	export default {

		data(){
			return {
				subjects: []
			}
		},
		mounted(){

			axios.get(process.env.VUE_APP_SCAPE_SUBJECTS_SERVICE_URL)
				.then((response) => {
					this.subjects = response.data.data.subjects
				}).catch(function (error) {
				    // handle error
				    console.log(error);
				})
		}

	};
	</script>