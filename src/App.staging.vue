<template>
    <div id="app" class="antialiased text-gray-500 border-t-4 border-gray-500 bg-gray-100 text-gray-800 h-screen">
        <div class="container mx-auto lg:px-64 py-10">
            <enquiryform></enquiryform>
        </div>
    </div>
</template>

<script>

 import enquiryform from "@/components/EnquiryForm2.vue";

export default {
    name:"app",
    components: {
        enquiryform,
    },
    data(){
        return {
        }
    }

};
</script>

<style src="./assets/tailwind.css"></style>
