<template>
<!-- 	<div class="my-10">


		<div class="shadow border border-gray-200 px-6 py-3 //w-full w-1/2">
			<div>
				Details
			</div>
		</div> -->






		<div v-show=true class="-my-2 py-2 /overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
			<div class="align-middle inline-block w-full /min-w-full shadow /overflow-hidden sm:rounded-lg border-b border-gray-200">
				<div class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
					Details
				</div>
				<div class="bg-white /px-6 py-3">
					<form>
						<div class="flex flex-wrap -mx-3 mb-2 /border-b px-6 /py-6">
							<div class="w-full md:w-3/4 px-3 mb-6 md:mb-0 md:pr-10">
								<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
									Subject
								</label>
								<div class="relative">
									<select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
										<option v-for="subject in subjects" :key="subject.id">{{subject.name}}</option>
									</select>
									<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
										<svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
									</div>
								</div>
							</div>
							<div class="w-full md:w-1/4 px-3 mb-6 md:mb-0">
								<label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
									Grade
								</label>
								<div class="relative">
									<select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
										<option v-for="grade in grades" :key="grade.id">{{grade.name}}</option>
									</select>
									<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
										<svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
									</div>
								</div>
							</div>
						</div>


						<div class="flex flex-wrap -mx-3 mb-2 px-6">
							<div class="w-full md:w-3/4 px-3 mb-6 md:mb-0 md:pr-10">
								<div class="relative">
									<select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
										<option v-for="subject in subjects" :key="subject.id">{{subject.name}}</option>
									</select>
									<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
										<svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
									</div>
								</div>
							</div>
							<div class="w-full md:w-1/4 px-3 mb-6 md:mb-0">
								<div class="relative">
									<select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
										<option v-for="grade in grades" :key="grade.id">{{grade.name}}</option>
									</select>
									<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
										<svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
									</div>
								</div>
							</div>
						</div>

					</form>
				</div>
				<div class="bg-white flex justify-end px-6 py-3 /border-t">
					<div @click=hide class="bg-gray-300 text-gray-800 px-4 py-2 rounded-md cursor-pointer">Submit</div>
				</div>
			</div>
		</div>





		<div v-show=false class="flex flex-col my-10">
			<div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
				<div class="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200">
					<table class="min-w-full">
						<thead>
							<tr>
								<th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
									Name
								</th>
								<th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
									Title
								</th>
								<th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
									Status
								</th>
								<th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
									Role
								</th>
								<th class="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
							</tr>
						</thead>
						<tbody class="bg-white">
							<tr v-for="degree in degrees" :key="degree.id">
								<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
									<div class="flex items-center">
										<div class="text-sm leading-5 font-medium text-gray-900">Bernard Lane</div>
									</div>
								</td>
								<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
									<div class="text-sm leading-5 text-gray-900">Director</div>
									<div class="text-sm leading-5 text-gray-500">Human Resources</div>
								</td>
								<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
									<span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
										Active
									</span>
								</td>
								<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
									Owner
								</td>
								<td class="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
									<a href="#" class="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline">Edit</a>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div> 
	<!-- <form class="/w-full w-1/3 /max-w-lg rounded-md border-t border-gray-200 my-10 bg-white shadow">
		<div class="border-b /border-gray-300 //my-10 py-5 px-5">
			<div class="/p-8">
				<div class="flex justify-between items-center">
					<div class="text-gray-800">James Dube</div>
					<div class="flex">
						<div class="text-6xl">16</div>
					</div>
				</div>
				<div v-for="degree in degrees" :key="degree.id" class="border border-gray-300 /rounded-md ">
					<div>{{degree.name}}</div>
				</div>




			</div>
			<div v-show=false class="p-8">
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
				<div @click=hide class="border cursor-pointer px-8 py-2 bg-gray-600 text-white rounded">submit</div>
			</div>
		</div>


	</form> -->
</template>

<script>
import axios from 'axios';
export default {

	data(){
		return {
			showForm: true,
			grades:[
			{
				id: 0,
				name: "A"
			},
			{
				id: 1,
				name: "B"
			}
			],
			subjects: [
			{
				id: 2,
				name: "Mathematics",
			},
			{
				id: 3,
				name: "English"
			}
			],
			degrees: [
			{
				id: 4,
				name: "Computer Science"
			},
			{
				id: 5,
				name: "Information Science"
			},
			{
				id: 6,
				name: "Computer Science"
			},
			{
				id: 7,
				name: "Information Science"
			}
			]
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
	},
	methods: {
		hide: function(){
			this.showForm = !this.showForm
		}
	}

};
</script>