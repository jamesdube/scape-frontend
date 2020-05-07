<template>
    <div id="app" class="antialiased text-gray-500 border-t-4 border-gray-500 bg-gray-200 h-screen">
        <!-- <navbar></navbar> -->
        <div class="flex justify-center">
            <enquiryform></enquiryform>
        </div>
    </div>
</template>

<script>
// import navbar from "@/components/Navbar.vue";
import enquiryform from "@/components/ParentComponent.vue";

export default {
    name:"app",
    components:{
        // navbar,
        enquiryform
    }
};
</script>

<style src="./assets/tailwind.css"></style>
