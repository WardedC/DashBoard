import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-froms',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `

<div class=" w-full h-screen flex items-start justify-center h-auto mx-auto mb-4 rounded shadow-lg mt-4 bg-white">
<div class=" w-full p-8 bg-white">
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
            <button type="button" class="text-gray-700 bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2">Cancel</button>
            <button type="submit" class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5">Update</button>
        </div>
    </form>
</div>



</div>

`,
  styleUrl: './froms.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FromsComponent { }
