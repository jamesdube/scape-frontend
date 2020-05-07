<template>
	<div>
		<div class="/bg-gray-800 mt-6 mb-8">
			<div class="shadow border border-gray-200  //w-full /w-1/2">
				<div class="bg-gray-200">
					<div class="px-6 py-3">
						Details
					</div>
					<div class="bg-white">
						<myform :active="active" :duration="500" @close-end="foo">
							<div class="px-6 pt-6 flex lg:flex-wrap">
								<div class="w-full md:w-2/5 px-3 mb-6 md:mb-0">
									<div class="block tracking-wide text-gray-800 text-lg font-bold mb-2">Subject Information</div>
									<p class="text-sm">
										some very boring information about subjects
									</p>
								</div>
								<div class="w-full md:w-2/5 px-3 mb-6 md:mb-0">
									<label class="block uppercase tracking-wide text-gray-800 text-xs font-bold mb-2">Subject</label>
									<select class="w-full px-6 py-2 rounded bg-white border-gray-400 border">
										<option>Mathematics</option>
									</select>
								</div>
								<div class="w-full md:w-1/5 px-3 mb-6 md:mb-0">
									<label class="block uppercase tracking-wide text-gray-800 text-xs font-bold mb-2">Grade</label>
									<select class="w-full px-6 py-2 rounded bg-white border-gray-400 border">
										<option>A (5 points)</option>
										<option>B (4 points)</option>
									</select>
								</div>
							</div>
							<div class="px-6 py-3 flex lg:flex-wrap">
								<div class="w-full md:w-2/5 px-3 /mb-6 md:mb-0">
									<p class="text-sm">

									</p>
								</div>
								<div class="w-full md:w-2/5 px-3 mb-6 md:mb-0">
									<select class="w-full px-6 py-2 rounded bg-white border-gray-400 border">
										<option>Mathematics</option>
									</select>
								</div>
								<div class="w-full md:w-1/5 px-3 mb-6 md:mb-0">
									<select class="w-full px-6 py-2 rounded bg-white border-gray-400 border">
										<option>A (5 points)</option>
										<option>B (4 points)</option>
									</select>
								</div>
							</div>
							<div class="px-6 py-3 flex lg:flex-wrap">
								<div class="w-full md:w-2/5 px-3 mb-6 md:mb-0">
									<p class="text-sm">

									</p>
								</div>
								<div class="w-full md:w-2/5 px-3 mb-6 md:mb-0">
									<select class="w-full px-6 py-2 rounded bg-white border-gray-400 border">
										<option>Mathematics</option>
									</select>
								</div>
								<div class="w-full md:w-1/5 px-3 mb-6 md:mb-0">
									<select class="w-full px-6 py-2 rounded bg-white border-gray-400 border">
										<option>A (5 points)</option>
										<option>B (4 points)</option>
									</select>
									<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
										<svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
									</div>
								</div>
							</div>
						</myform>
						<div class="bg-white flex justify-end px-6 py-6 /border-t">
							<div @click=hide class="border cursor-not-allowed border-gray-400 text-gray-300 px-4 py-2 rounded-md cursor-pointer">Reset</div>
							<div @click=hide class="ml-6 bg-gray-300 text-gray-800 px-4 py-2 rounded-md cursor-pointer">Submit</div>
						</div>
					</div>
				</div>
			</div>
		</div> 


		<myform :active="!active" :duration="500">
		<div class="shadow">
		<div class="bg-gray-200 /border /border-gray-200 px-6 py-3">
			Resluts
		</div>

		<div class="bg-white">
			<div class="flex flex-col">
				<div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
					<div class="align-middle inline-block min-w-full overflow-hidden /sm:rounded-lg /border-b /border-gray-200">
						<table class="min-w-full">
							<thead>
								<th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-sm leading-4 font-medium /text-gray-500 uppercase tracking-wider">Degree</th>
								<th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-sm leading-4 font-medium /text-gray-500 uppercase tracking-wider">University</th>
								<th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-sm leading-4 font-medium /text-gray-500 uppercase tracking-wider">Category</th>
								<th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-sm leading-4 font-medium /text-gray-500 uppercase tracking-wider">Status</th>
							</thead>
							<tbody>
								<tr v-for="degree in degrees" :key="degree.id">
									<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
										<div class="text-sm leading-5 font-medium text-gray-900">{{ degree.name }}</div>
									</td>
									<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
										<div class="text-sm leading-5 font-medium text-gray-900">Midlands State University</div>
									</td>
									<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
										<div class="text-sm leading-5 font-medium text-gray-900">Sciences</div>
									</td>
									<td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
										<span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
							                eligible
							            </span>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
		</myform>


	</div>
</template>

<script>

import myform from 'vue-slide-up-down'

export default {
	components: {
		myform
	},
	data(){
		return {
			active: true,
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
	methods:{
		hide(){
			this.active = !this.active
		},
		foo(){
			console.log('done closing!')
		}
	}
};
</script>