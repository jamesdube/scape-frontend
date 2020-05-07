<template>
	<!-- <nav id="header" class="bg-white fixed w-full z-10 top-0 //shadow border-b">

        <div class="w-full container mx-auto flex flex-wrap items-center justify-between my-4">

            <div class="pl-4 md:pl-0">
                <a class="flex items-center text-blue-900 text-base xl:text-xl no-underline hover:no-underline font-extrabold font-sans" href="#">
                     Scape
                </a>
            </div>

            <div class="pr-0 flex justify-end">

                <div class="flex relative inline-block float-right">

                    <div class="relative text-sm">

                        <button id="userButton" class="flex items-center mr-3 shadow bg-orange-700 hover:bg-orange-500 focus:shadow-outline focus:outline-none text-white text-sm md:text-base font-bold py-2 px-4 rounded">
                            Menu
                            <svg class="pl-2 h-2 fill-current text-white" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 129 129">
                                <g>
                                    <path d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z" />
                                </g>
                            </svg>
                        </button>

                        <div id="userMenu" class="bg-white rounded shadow-md mt-2 mr-2 absolute mt-12 top-0 right-0 min-w-full overflow-auto z-30 invisible">
                            <ul class="list-reset">
                                <li><a href="#" class="px-4 py-2 block hover:bg-gray-400 no-underline hover:no-underline">My account</a></li>
                                <li><a href="#" class="px-4 py-2 block hover:bg-gray-400 no-underline hover:no-underline">Notifications</a></li>
                                <li>
                                    <hr class="border-t mx-2 border-gray-400">
                                </li>
                                <li><a href="#" class="px-4 py-2 block text-orange-600 font-bold hover:bg-orange-600 hover:text-white no-underline hover:no-underline">Logout</a></li>
                            </ul>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    </nav> -->

    <div class="w-full /bg-white /bg-gray-100 /border-b">
    <div class="max-w-3xl mx-auto flex flex-wrap items-center justify-between">
        <div class="m-6 sm:mr-0">
            <a href="/" class="font-semibold text-gray-800 hover:text-gray-800 no-underline font-bold text-lg">Scape</a>
        </div>

        <div class="m-3 block sm:hidden">
            <a
                href="#"
                class="p-3 flex items-center no-underline text-brand-600 hover:text-brand-800 focus:bg-gray-200 rounded-lg"
                aria-label="Toggle navigation"
                :aria-expanded="displayNavigation"
                aria-controls="#headerNav"
                @click.prevent="displayNavigation = !displayNavigation"
            >
                <svg class="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
            </a>
        </div>

        <div
            id="#headerNav"
            class="py-3 sm:p-0 sm:mr-6 w-full sm:w-auto sm:flex sm:flex-grow sm:items-center shadow-inner sm:shadow-none"
            :class="{ hidden: !displayNavigation }"
            :aria-expanded="displayNavigation"
        >
            <nav class="sm:flex-1" aria-label="Left navigation">
                <ul class="sm:flex sm:items-baseline">
                    <li><a href="http://tailwind-preset.test/home" class="px-6 py-3 sm:p-0 sm:ml-5 block sm:inline-block text-brand-600 hover:text-brand-900 hover:bg-gray-200 sm:hover:bg-transparent no-underline"></a></li>
                </ul>
            </nav>

            <nav class="sm:flex sm:items-center" aria-label="Right navigation">
                <ul class="sm:flex sm:items-baseline">
                                            <li>
                            <a
                                href="#"
                                class="px-6 py-3 sm:p-0 sm:ml-5 block sm:inline-block text-brand-600 hover:text-brand-900 hover:bg-gray-200 sm:hover:bg-transparent no-underline"
                                onclick="document.querySelector('#logoutForm').submit()"
                            >Logout</a>
                            <form action="http://tailwind-preset.test/logout" method="POST" id="logoutForm" class="hidden"><input type="hidden" name="_token" value="cuLbeOe9fNbpeHgE1spdcjaKMkEBggpcMIzc8xzB"></form>
                        </li>
                                    </ul>
            </nav>
        </div>
    </div>
</div> 








</template>

<script>
	export default {

	}
</script>