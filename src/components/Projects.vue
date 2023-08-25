<script setup>
import { ref } from 'vue'

let getPhoto = ref('')

const cobapop = (srcimg) => {
  getPhoto.value = srcimg
  document.querySelector('.popup-image').style.display = 'block'
}

const closePopup = () => {
  document.querySelector('.prok').style.display = 'none'
}
</script>

<template>
  <div class="text-slate-300 text-2xl md:text-xl lg:text-4xl">
    <h1 class="text-center font-mont">My Projects</h1>
    <div
      class="projekan grid grid-cols-1 mt-5 text-center sm:mt-5 gap-x-20 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 max-w-screen-xl px-4 py-0 mx-auto lg:px-6 sm:py-6 lg:py-6"
    >
      <div class="Projek text-sm flex flex-col items-center">
        <div class="overflow-hidden rounded-md">
          <img
            id="jammin"
            src="../assets/image/jammin.jpg"
            alt=""
            class="imek border-1 shadow-lg w-full h-full object-fill hover:rounded-md"
            @click="
              cobapop(
                'https://firebasestorage.googleapis.com/v0/b/jamminapp-f2693.appspot.com/o/p%2Fjammin.svg?alt=media&token=5ef2c84d-4b37-47da-ad83-150c9a0a1b45'
              )
            "
          />
        </div>

        <span class="text-xl font-mont">Jammin</span>
        <p class="text-center">
          "Jammin" is an Android application based on Java. This application is designed to play
          songs or audio provided by the system. Users can log in as either a regular user or a
          creator.
        </p>
        <button class="bg-gray-500 rounded-md h-6 w-28 hover:bg-opacity-50 mt-2">
          <a href="https://github.com/elroiyoshua/Jammin" target="_blank">Check Project</a>
        </button>
      </div>
      <div class="Projek text-sm flex flex-col items-center">
        <div class="overflow-hidden rounded-md">
          <img
            src="../assets/image/NutriPlan.jpg"
            alt=""
            class="imek border-1 shadow-lg w-full h-full object-fill hover:rounded-md"
            @click="
              cobapop(
                'https://firebasestorage.googleapis.com/v0/b/jamminapp-f2693.appspot.com/o/p%2FNutriPlan.svg?alt=media&token=dcf7202a-81d5-4be3-9d83-2dc0b5e96218'
              )
            "
          />
        </div>
        <span class="text-xl font-mont">NutriPlan</span>
        <p class="text-center">
          "NutriPlan" is an Android application based on Kotlin. This application is designed to
          make a recommendation from user preferences and user food restriction.
        </p>
        <button class="bg-gray-500 rounded-md h-6 w-28 hover:bg-opacity-50 mt-2">
          <a href="https://github.com/elroiyoshua/NutriPlanAndroid" target="_blank"
            >Check Project</a
          >
        </button>
      </div>
      <div class="Projek text-sm flex flex-col items-center">
        <div class="overflow-hidden rounded-md">
          <img
            src="../assets/image/GithubUser.jpg"
            alt=""
            class="imek border-1 shadow-lg w-full h-full object-fill hover:rounded-md"
            @click="
              cobapop(
                'https://firebasestorage.googleapis.com/v0/b/jamminapp-f2693.appspot.com/o/p%2FGithubUser.svg?alt=media&token=e534165b-a4be-4388-822e-254e6d86b7ae'
              )
            "
          />
        </div>
        <span class="text-xl font-mont">GithubUser</span>
        <p class="text-center">
          "GithubUser" is an Android application based on Kotlin. This application is designed to
          accessing the Github API to see and search based on Github real user
        </p>
        <button class="bg-gray-500 rounded-md h-6 w-28 hover:bg-opacity-50 mt-2">
          <a href="https://github.com/elroiyoshua/Github_User" target="_blank">Check Project</a>
        </button>
      </div>
      <div class="Projek text-sm flex flex-col items-center">
        <div class="overflow-hidden rounded-md">
          <img
            src="../assets/image/StoryApp.jpg"
            alt=""
            class="imek border-1 shadow-lg w-full h-full object-fill hover:rounded-md"
            @click="
              cobapop(
                'https://firebasestorage.googleapis.com/v0/b/jamminapp-f2693.appspot.com/o/p%2FStoryApp.svg?alt=media&token=5aa6052d-2c5d-49dd-bc4f-57d080f4888c'
              )
            "
          />
        </div>
        <span class="text-xl font-mont">StoryApp</span>
        <p class="text-center">
          "StoryApp" is an Android application based on Kotlin. This application is designed to
          accessing the Dicoding Story API to upload image and see another user uploaded image /
          story
        </p>
        <button class="bg-gray-500 rounded-md h-6 w-28 hover:bg-opacity-50 mt-2">
          <a href="https://github.com/elroiyoshua/Story_App" target="_blank">Check Project</a>
        </button>
      </div>
      <div class="Projek text-sm flex flex-col items-center">
        <div class="overflow-hidden rounded-md">
          <img
            src="../assets/image/GameNews.jpg"
            alt=""
            class="imek border-1 shadow-lg w-full h-full object-fill hover:rounded-md"
            @click="
              cobapop(
                'https://firebasestorage.googleapis.com/v0/b/jamminapp-f2693.appspot.com/o/p%2FGameNews.svg?alt=media&token=82de4818-b3fc-4c84-95d4-a7bf24f7bfbd'
              )
            "
          />
        </div>
        <span class="text-xl font-mont">GameNews</span>
        <p class="text-center">
          "GameNews" is an Android application based on Kotlin and build using jetpack compose
          library. This application is designed to see about the game information such as price
          developer rating & description.
        </p>
        <button class="bg-gray-500 rounded-md h-6 w-28 hover:bg-opacity-50 mt-2">
          <a href="https://github.com/elroiyoshua/GameNews_Compose" target="_blank"
            >Check Project</a
          >
        </button>
      </div>
      <div class="Projek text-sm flex flex-col items-center">
        <div class="overflow-hidden rounded-md">
          <img
            src="../assets/image/TodoApp.jpg"
            alt=""
            class="imek border-1 shadow-lg w-full h-full object-fill hover:rounded-md"
            @click="
              cobapop(
                'https://firebasestorage.googleapis.com/v0/b/jamminapp-f2693.appspot.com/o/p%2FTodoApp.svg?alt=media&token=61a2ee99-2b54-4872-bd64-708f0449125b'
              )
            "
          />
        </div>
        <span class="text-xl font-mont">TodoApp</span>
        <p class="text-center">
          "TodoApp" is an Website based on VueJS and build with html and Tailwind CSS. This
          application is designed to record the user todo list.
        </p>
        <button class="bg-gray-500 rounded-md h-6 w-28 hover:bg-opacity-50 mt-2">
          <a href="https://github.com/elroiyoshua/training_vue" target="_blank">Check Project</a>
        </button>
      </div>
      <div class="Projek text-sm flex flex-col items-center">
        <div class="overflow-hidden rounded-md">
          <img
            src="../assets/image/JSQuiz.jpg"
            alt=""
            class="imek border-1 shadow-lg w-full h-full object-fill"
            @click="
              cobapop(
                'https://firebasestorage.googleapis.com/v0/b/jamminapp-f2693.appspot.com/o/p%2FJSQuiz.svg?alt=media&token=5391a083-8913-4bf2-a000-9b7a44629120'
              )
            "
          />
        </div>
        <span class="text-xl font-mont">JS Quiz</span>
        <p class="text-center">
          "JS QUiz" is an Website based on VueJS and build with html and Tailwind CSS. This
          application is builded to test your knowledge about JavaScript.
        </p>
        <button class="bg-gray-500 rounded-md h-6 w-28 hover:bg-opacity-50 mt-2">
          <a href="https://github.com/elroiyoshua/QuizApp" target="_blank">Check Project</a>
        </button>
      </div>
      <div class="prok popup-image fixed top-0 left-0 h-full w-full z-50 hidden">
        <span
          class="absolute top-2 right-[10px] text-[60px] font-bold text-white cursor-pointer z-30"
          @click="closePopup"
          >&times;</span
        >

        <img
          :src="getPhoto"
          alt=""
          class="relative top-[50%] left-[50%] rounded-md w-[90%] object-cover sm:w-[90%] md:w-[90%] lg:w-[70%] xl:w-[70%]"
        />
      </div>
    </div>
  </div>
</template>
