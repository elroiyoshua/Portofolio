<script setup>
import { ref } from 'vue'

let getPhoto = ref('')

const openPopup = (x) => {
  if (x == 1) {
    getPhoto.value =
      'https://firebasestorage.googleapis.com/v0/b/jamminapp-f2693.appspot.com/o/p%2Fjammin.jpg?alt=media&token=f96d372d-4cd0-4ce8-92b8-a372d5967fe7'
    console.log(getPhoto)
  } else if (x == 2) {
    getPhoto.value =
      'https://firebasestorage.googleapis.com/v0/b/jamminapp-f2693.appspot.com/o/p%2FNutriPlan.jpg?alt=media&token=fdfea49c-57ab-400b-b776-8b2b932dac84'
  } else if (x == 3) {
    getPhoto.value =
      'https://firebasestorage.googleapis.com/v0/b/jamminapp-f2693.appspot.com/o/p%2FGithubUser.jpg?alt=media&token=a7df2629-574e-4285-9082-8f4461959aac'
  } else if (x == 4) {
    getPhoto.value =
      'https://firebasestorage.googleapis.com/v0/b/jamminapp-f2693.appspot.com/o/p%2FStoryApp.jpg?alt=media&token=a0b2d4bd-6eb5-413b-84ce-f12f41e16ca8'
  } else if (x == 5) {
    getPhoto.value =
      'https://firebasestorage.googleapis.com/v0/b/jamminapp-f2693.appspot.com/o/p%2FGameNews.jpg?alt=media&token=b1d4e775-62ee-4c4a-bd40-c2f27ca41249'
  } else if (x == 6) {
    getPhoto.value =
      'https://firebasestorage.googleapis.com/v0/b/jamminapp-f2693.appspot.com/o/p%2FTodoApp.jpg?alt=media&token=44357f8e-c835-4e13-adee-d0111f577b18'
  } else if (x == 7) {
    getPhoto.value =
      'https://firebasestorage.googleapis.com/v0/b/jamminapp-f2693.appspot.com/o/p%2FJSQuiz.jpg?alt=media&token=e9a3bdb6-ec85-4997-8586-f3b0839a67a4'
  }

  document.querySelector('.popup-image').style.display = 'block'
}

const closePopup = () => {
  document.querySelector('.prok').style.display = 'none'
}
</script>

<template>
  <div class="text-slate-300 text-2xl md:text-xl lg:text-4xl">
    <h1 class="text-center">My Projects</h1>
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
            @click="openPopup(1)"
          />
        </div>

        <span class="text-xl">Jammin</span>
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
            @click="openPopup(2)"
          />
        </div>
        <span class="text-xl">NutriPlan</span>
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
            @click="openPopup(3)"
          />
        </div>
        <span class="text-xl">GithubUser</span>
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
            @click="openPopup(4)"
          />
        </div>
        <span class="text-xl">StoryApp</span>
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
            @click="openPopup(5)"
          />
        </div>
        <span class="text-xl">GameNews</span>
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
            @click="openPopup(6)"
          />
        </div>
        <span class="text-xl">TodoApp</span>
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
            class="imek border-1 shadow-lg w-full h-full object-fill hover:rounded-md"
            @click="openPopup(7)"
          />
        </div>
        <span class="text-xl">JS Quiz</span>
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
