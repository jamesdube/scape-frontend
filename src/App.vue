<template>
    <div id="app" class="antialiased text-gray-500 border-t-4 border-gray-500 bg-gray-100 text-gray-800 h-screen">
        <navbar></navbar>
        <div class="flex justify-center">
                <enquiryform></enquiryform>
            <div class="/w-1/3 /bg-gray-100 /mt-10 /p-5 rounded /h-24 /shadow">
                <!-- <div class="flex justify-between /mt-5 border-b border-gray-200 p-5">
                    <select class="/block appearance-none w-1/2 bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                        <option>Maths</option>
                        <option>English</option>
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                    <div class="flex">
                        <div class="border border-gray-300 px-4 py-2 rounded m-1 hover:shadow cursor-pointer bg-gray-200">A</div>
                        <div class="border border-gray-300 px-4 py-2 rounded m-1 hover:shadow cursor-pointer bg-gray-200">B</div>
                        <div class="border border-gray-300 px-4 py-2 rounded m-1 hover:shadow cursor-pointer bg-gray-200">C</div>
                    </div>
                </div>
                <div class="flex justify-between /mt-5 border-b border-gray-200 p-5 ">
                    <select class="/block appearance-none w-1/2 bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                        <option>Maths</option>
                        <option>English</option>
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                    <div class="flex">
                        <div class="border border-gray-300 px-4 py-2 rounded m-1 hover:shadow cursor-pointer bg-gray-200">A</div>
                        <div class="border border-gray-300 px-4 py-2 rounded m-1 hover:shadow cursor-pointer bg-gray-200">B</div>
                        <div class="border border-gray-300 px-4 py-2 rounded m-1 hover:shadow cursor-pointer bg-gray-200">C</div>
                    </div>
                </div>

                <div class="bg-gray-100 flex justify-end none">
                    <div class="py-3 px-4">
                        <div class="border cursor-pointer px-8 py-2 bg-gray-600 text-white rounded">submit</div>
                    </div>
                </div> -->
            </div>
        </div>
    </div>
</template>

<script>
import navbar from "@/components/Navbar.vue";
import enquiryform from "@/components/EnquiryForm2.vue";

export default {
    name:"app",
    components: {
        navbar,
        enquiryform
    }
};
</script>

<style src="./assets/tailwind.css"></style>
