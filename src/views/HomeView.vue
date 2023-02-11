<template>
  <div class="mt-10 ml-10">
    <h1 class="text-2xl font-bold mb-8">Resim Ekleyici</h1>
    <input
      class="border-2 border-gray-500 mr-5"
      v-model="imageUrl"
      placeholder="Resim Url giriniz"
    />
    <input
      class="border-2 border-gray-500 mr-5"
      v-model="imageName"
      placeholder="Resim ismi giriniz"
    />
    <button class="border-2 border-gray-500 px-1" @click="addImage">
      Ekle
    </button>
    <div class="mt-3">
      <input  v-model="onlyLiked" type="checkbox" name="contoller" id="contoller" />
      <label for="contoller">Sadece favorileri göster</label>
    </div>
    <div class="mt-10 h-96 overflow-y-auto">
      <div
        :style="{
          backgroundColor: image.liked ? 'rgb(229, 189, 189)' : 'white',
        }"
        class="flex justify-between border-2 border-gray-500 mt-2 rounded-lg mx-5 items-center"
        v-for="(image, index) in filteredImages"
        :key="index"
      >
        <div class="flex items-center">
          <img class="w-32 h-32 bg-cover rounded-lg" :src="image.url" />
          <h3 class="ml-5">{{ image.name }}</h3>
        </div>
        <div>
          <button
            class="border-2 border-gray-500 mr-5 px-1 bg-gray-100"
            @click="likeImage(index)"
          >
            {{ image.liked ? "UnLike" : "Like" }}
          </button>
          <button
            class="border-2 border-gray-500 mr-5 px-1 bg-gray-100"
            @click="deleteImage(index)"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      imageName: "",
      imageUrl: "",
      onlyLiked: false,
    };
  },
  computed: {
    ...mapState(["images"]),
    filteredImages() {
      return this.onlyLiked
        ? this.images.filter(image => image.liked)
        : this.images;
    }
  },
  methods: {
    ...mapActions(["addImageToDirectory", "likeImage", "deleteImage"]),
    addImage() {
      if (this.imageName == "" && this.imageName == "") {
        alert("İsim ve Url girin");
      } else {
        this.addImageToDirectory({ name: this.imageName, url: this.imageUrl });
        this.imageName = "";
        this.imageUrl = "";
      }
    },
  },
};
</script>
<style>
