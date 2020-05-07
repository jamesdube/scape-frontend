<template>
	<!-- <div class="flex flex-col my-10">
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
	</div> -->

	<div class="shadow foo">
		<div class="bg-gray-200 /border /border-gray-200 px-6 py-3">
			Resluts
		</div>
		<div>
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
</template>
<script>
export default {
	data() {
		return {
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
	}
};
</script>