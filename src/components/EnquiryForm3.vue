<template>
	<div>
		<div class="font-semibold">A Level Results</div>
			<div class="mt-3 border border-gray-300 rounded-md /w-1/2 shadow bg-white">
				<div class="p-5">
					<div class="flex justify-between items-center">
						<div class="w-full">
							<label class="block text-sm">Subject</label>
							<select v-model="currentSubject" class="border border-gray-300 bg-white focus:outline-none rounded-md shadow px-4 py-2 mt-2 w-full">
								<option v-for="subject in availableSubjects(subjects)" v-bind:key="subject.code" v-bind:value="subject">{{ subject.name }}</option>
							</select>
						</div>
						<div class="mx-4 w-full">
							<label class="block text-sm">Score</label>
							<select v-model="currentGrade" class="border border-gray-300 bg-white focus:outline-none rounded-md shadow px-4 py-2 mt-2 w-full">
								<option>A</option>
								<option>B</option>
								<option>C</option>
								<option>D</option>
							</select>
						</div>
						<div class="self-end">
							<button @click="addSubject(currentSubject)" class="rounded-md px-6 py-2 bg-indigo-600 text-indigo-100 shadow">Add</button>
						</div>
					</div>
				</div>
				<div class="mt-4 /bg-gray-100 p-5 border-t border-gray-100">
					<div class="flex justify-between">
						<div>
							<div class="font-semibold">Selected Subjects</div>
							<div class="text-xs mt-2">
								These are your selected Subjects
							</div>
						</div>
						<div class="border border-gray-300 rounded-md shadow max-w-full">
							<div v-for="(subject,index) in selectedSubjects" v-bind:key="subject.code" class="justify-end  hover:bg-gray-100 px-3 py-2 flex items-center text-sm" >
								<div>{{ subject.name }}</div>
								<div class="ml-10 border border-gray-300 bg-white px-3 rounded-md font-semibold">{{ subject.grade }}</div>
								<div class="ml-3">
									<svg @click="removeSubject(index)" class="h-4 w-4 cursor-pointer" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="/mt-4 p-5 bg-gray-100 justify-end flex">
					<button class="/border  border-gray-300 focus:outline-none rounded-md shadow px-6 py-2 hover:shadow-md">Reset</button>
					<button class="ml-5 border-gray-300 focus:outline-none rounded-md shadow bg-indigo-600 px-6 py-2 text-indigo-100">Submit</button>
				</div>
			</div>

		<!-- <results class="w-1/2 mt-16 /mx-auto"></results> -->
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		/*props: {
			pSubjects: Array
		},*/
		data(){
			return {
				subjects: [
					{ name: 'Mathematics', code: 'MAT' },
					{ name: 'Biology', code: 'BIO' },
					{ name: 'History', code: 'HIS' },
				],
				currentSubject: {},
				currentGrade: null,
				selectedSubjects:[],
			}
		},
		methods: {
			addSubject(subject){
				this.selectedSubjects.push({
					name: subject.name,
					code: subject.code,
					grade: this.currentGrade
				})
				this.currentSubject = {}
				this.currentGrade = null
			},
			removeSubject(index){
				this.selectedSubjects.splice(index, 1)
			},
			contains(a,obj) {
                for (var i = 0; i < a.length; i++) {
                    if (a[i].code == obj.code) { return false; }
                }
                return true;
            },
            availableSubjects(subjects){
				var that = this;
				return subjects.filter(function(subject){
					return that.contains(that.selectedSubjects,subject)
				})
			},
			submit(){
				axios.post('http://localhost:8080/api/v1/')
			}
		},
		computed: {
			isValid(){
				return  this.currentSubject !== undefined || this.currentSubject.code !== null || this.currentSubject.code !== ''
			}
		}
	};
</script>