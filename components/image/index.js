import { CurrencyDollarIcon } from "@heroicons/react/solid";

const Image = ({src}) => {
  return (
    <div class="overflow-hidden shadow-lg rounded-2xl h-90 w-64 m-auto border-gray-100 border">
      <img
        alt="eggs"
        src={src}
        class="rounded-t-lg"
      />
      <div class="bg-white w-full p-4 relative">
        <button
          aria-label="Go to article"
          type="button"
          class="absolute rounded-full bg-white text-white w-12 h-12 right-8 -top-6 shadow-slate-700 shadow-md hover:shadow-lg hover:shadow-slate-700 transition"
        >
          <CurrencyDollarIcon
            class="h-16 w-16 -ml-2 -mt-2 text-gray-700 mx-auto"
            aria-hidden="true"
          />
        </button>
        <p class="text-gray-800 text-xl font-medium mb-2">Exquisite</p>
        <p class="text-gray-600 text-xs">
          An Exquisite piece generated by the computer.
        </p>
        <div class="flex flex-wrap justify-starts items-center mt-6">
          <div class="text-xs mb-2 mr-2 py-1.5 px-4 text-gray-600 bg-gray-200 rounded-2xl">
            #exquisite
          </div>
          <div class="text-xs mb-2 mr-2 py-1.5 px-4 text-gray-600 bg-gray-200 rounded-2xl">
            #computer-generated
          </div>
          <div class="text-xs mb-2 py-1.5 px-4 text-gray-600 bg-gray-200 rounded-2xl">
            #pro
          </div>
        </div>
      </div>
    </div>
  );
};

export default Image;
