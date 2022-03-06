<template>
 <div>
     <app-header></app-header>
     <router-view></router-view>
 </div>
</template>

<script>
import Header from "@/components/Header/Header";
export default {
components : {
    appHeader : Header,
    },
    created() {
        window.addEventListener("resize", (e) =>{
            this.$store.commit("mobileMode", window.innerWidth <= 900);
        })
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Merienda:wght@400;700&family=Parisienne&family=Ranga:wght@400;700&family=Source+Sans+Pro:wght@200;300;400;600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,900;1,100;1,300;1,900&display=swap');
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Lato,Lato-fallback,Arial,sans-serif;

}
a{
    text-decoration: none;
}
</style>
