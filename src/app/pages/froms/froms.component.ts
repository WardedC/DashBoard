import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-froms',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `



<div class=" max-h relative overflow-x-auto shadow-md sm:rounded-lg">
    <div class="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
        <div>
            <button id="dropdownRadioButton" data-dropdown-toggle="dropdownRadio" class="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                <svg class="w-3 h-3 text-gray-500 dark:text-gray-400 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"/>
                    </svg>
                Last 30 days
                <svg class="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                </svg>
            </button>
            <!-- Dropdown menu -->
            <div id="dropdownRadio" class="z-10 hidden w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(522.5px, 3847.5px, 0px);">
                <ul class="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownRadioButton">
                    <li>
                        <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                            <input id="filter-radio-example-1" type="radio" value="" name="filter-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="filter-radio-example-1" class="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last day</label>
                        </div>
                    </li>
                    <li>
                        <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                            <input checked="" id="filter-radio-example-2" type="radio" value="" name="filter-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="filter-radio-example-2" class="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last 7 days</label>
                        </div>
                    </li>
                    <li>
                        <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                            <input id="filter-radio-example-3" type="radio" value="" name="filter-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="filter-radio-example-3" class="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last 30 days</label>
                        </div>
                    </li>
                    <li>
                        <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                            <input id="filter-radio-example-4" type="radio" value="" name="filter-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="filter-radio-example-4" class="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last month</label>
                        </div>
                    </li>
                    <li>
                        <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                            <input id="filter-radio-example-5" type="radio" value="" name="filter-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                            <label for="filter-radio-example-5" class="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last year</label>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <label for="table-search" class="sr-only">Search</label>
        <div class="relative">
            <div class="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-5 h-5 text-red-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
            </div>
            <input type="text" id="table-search" class="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items">
        </div>
    </div>
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="p-4">
                    <div class="flex items-center">
                        <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="checkbox-all-search" class="sr-only">checkbox</label>
                    </div>
                </th>
                <th scope="col" class="px-6 py-3">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                    Color
                </th>
                <th scope="col" class="px-6 py-3">
                    Category
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-red-100 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-red-600 bg-red-100 border-red-300 rounded focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-red-800 dark:focus:ring-offset-red-800 focus:ring-2 dark:bg-red-700 dark:border-red-600">
                        <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    Laptop
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
                <td class="px-6 py-4">
                    <button data-modal-target="crud-modal" data-modal-toggle="crud-modal" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</button>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-red-100 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-red-600 bg-red-100 border-red-300 rounded focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-red-800 dark:focus:ring-offset-red-800 focus:ring-2 dark:bg-red-700 dark:border-red-600">
                    <label for="checkbox-table-search-2" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Microsoft Surface Pro
                </th>
                <td class="px-6 py-4">
                    White
                </td>
                <td class="px-6 py-4">
                    Laptop PC
                </td>
                <td class="px-6 py-4">
                    $1999
                </td>
                <td class="px-6 py-4">
                    <button data-modal-target="crud-modal" data-modal-toggle="crud-modal" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</button>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-red-100 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-red-600 bg-red-100 border-red-300 rounded focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-red-800 dark:focus:ring-offset-red-800 focus:ring-2 dark:bg-red-700 dark:border-red-600">
                    <label for="checkbox-table-search-3" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Magic Mouse 2
                </th>
                <td class="px-6 py-4">
                    Black
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    $99
                </td>
                <td class="px-6 py-4">
                    <button data-modal-target="crud-modal" data-modal-toggle="crud-modal" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</button>
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-red-100 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-red-600 bg-red-100 border-red-300 rounded focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-red-800 dark:focus:ring-offset-red-800 focus:ring-2 dark:bg-red-700 dark:border-red-600">
                    <label for="checkbox-table-3" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple Watch
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    $179
                </td>
                <td class="px-6 py-4">
                    <button data-modal-target="crud-modal" data-modal-toggle="crud-modal" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</button>
                </td>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-red-100 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-red-600 bg-red-100 border-red-300 rounded focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-red-800 dark:focus:ring-offset-red-800 focus:ring-2 dark:bg-red-700 dark:border-red-600">
                    <label for="checkbox-table-3" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    iPad
                </th>
                <td class="px-6 py-4">
                    Gold
                </td>
                <td class="px-6 py-4">
                    Tablet
                </td>
                <td class="px-6 py-4">
                    $699
                </td>
                <td class="px-6 py-4">
                    <button data-modal-target="crud-modal" data-modal-toggle="crud-modal" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</button>
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800 hover:bg-red-100 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-red-600 bg-red-100 border-red-300 rounded focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-red-800 dark:focus:ring-offset-red-800 focus:ring-2 dark:bg-red-700 dark:border-red-600">
                    <label for="checkbox-table-3" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple iMac 27"
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    PC Desktop
                </td>
                <td class="px-6 py-4">
                    $3999
                </td>
                <td class="px-6 py-4">
                    <button data-modal-target="crud-modal" data-modal-toggle="crud-modal" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</button>
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800 hover:bg-red-100 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-red-600 bg-red-100 border-red-300 rounded focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-red-800 dark:focus:ring-offset-red-800 focus:ring-2 dark:bg-red-700 dark:border-red-600">
                    <label for="checkbox-table-3" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple iMac 27"
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    PC Desktop
                </td>
                <td class="px-6 py-4">
                    $3999
                </td>
                <td class="px-6 py-4">
                    <button data-modal-target="crud-modal" data-modal-toggle="crud-modal" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</button>
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800 hover:bg-red-100 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                    <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-red-600 bg-red-100 border-red-300 rounded focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-red-800 dark:focus:ring-offset-red-800 focus:ring-2 dark:bg-red-700 dark:border-red-600">
                    <label for="checkbox-table-3" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple iMac 27"
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    PC Desktop
                </td>
                <td class="px-6 py-4">
                    $3999
                </td>
                <td class="px-6 py-4">
                    <button data-modal-target="crud-modal" data-modal-toggle="crud-modal" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</button>
                </td>
            </tr>
        </tbody>
    </table>
</div>




<!-- MODAL TRIGGER -->
<div id="crud-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">

<div class=" flex items-start justify-center h-auto mx-auto mb-4 rounded shadow-lg mt-4 bg-white">
    <!-- <div class="p-8 items-start justify-center h-auto mx-auto mb-4 rounded shadow-lg mt-4 bg-white">
  <div class=" relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
      <div class="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800">
          <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen.png" class="dark:hidden h-[156px] md:h-[278px] w-full rounded-lg" alt="">
          <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen-dark.png" class="hidden dark:block h-[156px] md:h-[278px] w-full rounded-lg" alt="">
      </div>
  </div>
  <div class="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
      <div class="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
  </div>
  </div> -->

<div class="p-8 bg-white">
    <h2 class="text-2xl font-semibold text-gray-800 mb-6">Update Product</h2>

    <form action="#" method="POST">
        <!-- Product Name and Category -->
        <div class="grid grid-cols-2 gap-6 mb-4">
            <div>
                <label for="productName" class="block text-sm font-medium text-gray-700">Product Name</label>
                <input type="text" id="productName" class="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-lg p-2.5 focus:ring-blue-500 focus:border-blue-500" value="Apple iPad 5th Gen Wi-Fi">
            </div>
            <div>
                <label for="category" class="block text-sm font-medium text-gray-700">Category</label>
                <select id="category" class="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-lg p-2.5 focus:ring-blue-500 focus:border-blue-500">
                    <option selected>Electronics</option>
                    <option>Clothing</option>
                    <option>Home Appliances</option>
                </select>
            </div>
        </div>

        <!-- Brand and Price -->
        <div class="grid grid-cols-2 gap-6 mb-4">
            <div>
                <label for="brand" class="block text-sm font-medium text-gray-700">Brand</label>
                <input type="text" id="brand" class="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-lg p-2.5 focus:ring-blue-500 focus:border-blue-500" value="Tesla">
            </div>
            <div>
                <label for="price" class="block text-sm font-medium text-gray-700">Price</label>
                <input type="number" id="price" class="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-lg p-2.5 focus:ring-blue-500 focus:border-blue-500" value="259">
            </div>
        </div>

        <!-- Dimensions and Weight -->
        <div class="grid grid-cols-4 gap-6 mb-4">
            <div>
                <label for="weight" class="block text-sm font-medium text-gray-700">Item weight (kg)</label>
                <input type="number" id="weight" class="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-lg p-2.5 focus:ring-blue-500 focus:border-blue-500" value="32">
            </div>
            <div>
                <label for="length" class="block text-sm font-medium text-gray-700">Length (cm)</label>
                <input type="number" id="length" class="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-lg p-2.5 focus:ring-blue-500 focus:border-blue-500" value="126">
            </div>
            <div>
                <label for="breadth" class="block text-sm font-medium text-gray-700">Breadth (cm)</label>
                <input type="number" id="breadth" class="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-lg p-2.5 focus:ring-blue-500 focus:border-blue-500" value="121">
            </div>
            <div>
                <label for="width" class="block text-sm font-medium text-gray-700">Width (cm)</label>
                <input type="number" id="width" class="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-lg p-2.5 focus:ring-blue-500 focus:border-blue-500" value="953">
            </div>
        </div>

        <!-- Description -->
        <div class="mb-4">
            <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
            <textarea id="description" rows="4" class="mt-1 block w-full bg-gray-100 border border-gray-300 rounded-lg p-2.5 focus:ring-blue-500 focus:border-blue-500">Standard glass, 3.8GHz 8-core 10th-generation Intel Core i7 processor, Turbo Boost up to 5.0GHz, 16GB 2666MHz DDR4 memory, Radeon Pro 5500 XT with 8GB of GDDR6 memory, 256GB SSD storage, Gigabit Ethernet, Magic Mouse 2, Magic Keyboard - US</textarea>
        </div>

        <div class="mb-4">
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="user_avatar">Upload file</label>
          <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" id="user_avatar" type="file">
          <div class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="user_avatar_help">A profile picture is useful to confirm your are logged into your account</div>
        </div>



        <!-- Action Buttons -->
        <div class="flex justify-end">
            <button data-modal-toggle="crud-modal" type="button" class="text-gray-700 bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2">Cancel</button>
            <button type="submit" class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5">Update</button>
        </div>
    </form>
</div>
</div>
</div>


`,
  styleUrl: './froms.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FromsComponent { }
