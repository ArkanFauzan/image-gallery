<template>
  <div>
      <h1>Image Gallery</h1>
      <img style="padding:0px; margin:5px" class="list-image" v-for="image in images" :key="image.id" @click="showImage(image)" :src="image.thumbnailUrl" :alt="image.title" :title="image.title" />
      <div id="container-popup">
          <img id="image-popup" src="" alt="">
          <div id="detail-popup">
            <p id="title-popup"></p>
            <button class="btn btn-primary" @click.prevent="saveImage()"> Add to my favourite</button>
            <input type="hidden" id="save-image" value="">
          </div>
          <img id="btn-close" @click="closeImage()" src="../assets/close.png" alt="">
      </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'listImage',
    mounted(){
        this.getImage();
        // localStorage.clear();
        if (localStorage.getItem('myFavourite')==null) {
            this.myFavourite = [];
        }
        else{
            this.myFavourite = localStorage.getItem('myFavourite')
            this.myFavourite = JSON.parse(this.myFavourite);
            // this.myFavourite = this.myFavourite.map(image=>{
            //     return JSON.parse(image);
            // })
        }
        // console.log(this.myFavourite);
    },
    data(){
        return{
            myFavourite : "",
            images : [],
        }
    },
    methods:{
        async getImage(){
            await axios.get('https://jsonplaceholder.typicode.com/albums/1/photos').then(response=>{
                this.images = response.data;
                // console.log(this.images);
            })
        },
        showImage(image){
            let popupImage = document.getElementById('image-popup');
            popupImage.src = image.url;
            popupImage.alt = image.title;

            let saveImage = document.getElementById("save-image");
            saveImage.value = JSON.stringify(image);
            // console.log(saveImage);

            document.getElementById('title-popup').innerHTML= image.title;

            document.getElementById("container-popup").style.display= "block";
        },
        saveImage(){
            let image = document.getElementById("save-image").value;
            let isSaved = false;
            this.myFavourite.forEach(myImage=>{
                if(myImage.id== JSON.parse(image).id){
                    isSaved = true;
                }
            })
            if (!isSaved) {
                this.myFavourite.push(JSON.parse(image));
                localStorage.setItem('myFavourite', JSON.stringify(this.myFavourite));
            }

            document.getElementById("container-popup").style.display= "none";
        },
        closeImage(){
            document.getElementById("container-popup").style.display= "none";
        }
    }
}
</script>

<style>
    .list-image:hover{
        cursor: pointer;
    }
    #container-popup{
        width: 900px;
        height: 500px;
        /* box-sizing: border-box; */
        z-index: 1000;
        display: none;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: white;
        border-radius: 20px;
        border: 3px solid black ;
    }
    #image-popup{
        border-radius: 15px;
        left:0px;
        position: absolute;
        height: 100%;
    }
    #detail-popup{
        position: absolute;
        left:530px;
        top: 50px;
        width: 340px;
        height: 350px;
        text-align: center;
        font-size: 16px;
    }
    #btn-close{
        top: 10px;
        right:10px;
        width: 40px;
        height: 40px;
        position: absolute;
    }
    #btn-close:hover{
        cursor: pointer;
    }
</style>