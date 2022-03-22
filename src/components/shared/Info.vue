<template>
    <div>
        <div id="hero">
            <div class="hero-header-left">
                <div class="header-title">
                         <span>Size özel filmler ve TV şovları</span>
                    <span class="refresh">
                        <i @click="randomPage" class="fa-solid fa-arrow-rotate-right"></i>
                    </span>
                </div>
                <div v-if="control" @click="isShow = !isShow" class="header-info" :style="{opacity: isShow ? '1' : null, height: isShow ? 'auto'  : null}" >
                       <span ref="slotControl">
                            <slot name="info"></slot>
                       </span>
                    <div v-if="!isShow" class="header-gradient"></div>
                </div>

                <div class="header-box-logo">
                    <div class="box-logo">
                        <img src="../../assets/images/icon/netflix.jpg" alt="">
                    </div>
                    <div class="box-logo">
                        <img src="../../assets/images/icon/prime.jpg" alt="">
                    </div>
                    <div class="box-logo">
                        <img src="../../assets/images/icon/plus.jpg" alt="">
                    </div>
                </div>
            </div>


            <div v-if="banner" class="hero-header-right">
                <div class="header-banner">
                    <button @click="banner=!banner" class="banner-button">x</button>
                    <div class="header-content">
                        <p class="header-content-item"> Kişiselleştirilmiş öneriler almak için nelerden hoşlandığınızı bize bildirin</p>
                        <button class="header-content-item">Şimdi başlayın</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            isShow: false,
            control: true,
            banner: true,
        }
    },
    props:{
      totalPage:[Number],
    },
    mounted(){
        this.control = this.$refs.slotControl.children.length > 0;
    },
    methods:{
        randomPage(){
           const randomNumber = Math.ceil(Math.random()*this.totalPage);
            this.$emit('randomPage',randomNumber);
        }
    }
}
</script>

<style scoped>

#hero {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    position: relative;
}
/************** Hero Header Left ****************/
.hero-header-left{
    display: flex;
    flex-direction: column;
    gap: 30px;
    text-align: left;
}
.hero-header-left .header-title{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 30px;
}
.hero-header-left .header-title span{
    font-size: 38px;
    color: #fff;
    font-weight: 600;
}

.fa-arrow-rotate-right{
    font-size: 34px;
    color: rgba(255,255,255,0.4);
    cursor: pointer;
    transition: 0.2s all ease;
    position: relative;
}
.refresh{
    position: relative;
}
.refresh::after{
    content: "Yeni bir öneri seti alın";
    position: absolute;
    font-size: 12px;
    font-weight: 300;
    text-align: center;
    z-index: 10;
    top: 150%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    padding: 7px;
    background-color: rgba(23, 32, 42, 0.9);
    border-radius: 10%;
    white-space: nowrap;
    display: none;
}
.refresh:hover::after{
    display: block;
}
.fa-arrow-rotate-right:hover{
    color: #fff;
    transition: 0.2s all ease;
}
.fa-arrow-rotate-right:hover::after{
    display: block;
}

.hero-header-left .header-info{
    display: inline-block;
    height: 50px;
    overflow: hidden;
    opacity: 0.4;
    position: relative;
    cursor: pointer;
}
.hero-header-left .header-info span{
    color: #fff;
    height: 50px;
    display: inline-block;
    font-size: 15px
}
.header-gradient{
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
    margin: 0;
    padding: 10px 0;
    background-image: linear-gradient(180deg,rgba(6,13,23,0),var(--background-color))
}

.header-box-logo{
    display: flex;
    flex-direction: row;
    gap: 15px;
}
.header-box-logo .box-logo:last-child{
    opacity: 0.4;
    border: 1px solid #4E545B;
    border-radius: 20%;
    height: 30px;
}
.header-box-logo .box-logo{
    width: 32px;
}
.header-box-logo .box-logo img{
    width: 100%;
    border-radius: 20%;
}

/********* Hero Heaeder Right *****************/
.hero-header-right{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
}
.hero-header-right .header-banner{
    background-image: url("../../assets/images/banner/banner.png");
    border-radius: 8px;
    position: relative;
    background-size: cover;
    padding: 20px;
    max-width: 500px;
    min-width: 500px;
    color: #fff;
    display: flex;
    flex-direction: column;
}
.hero-header-right .header-content{
    margin-top: 20px;
    display: flex;
    flex-direction: row;
}
.hero-header-right .header-content p{
    opacity: 0.4;
}
.hero-header-right .header-content button{
    width: 150px;
    height: 30px;
    background-color: #00afea;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
.hero-header-right .header-banner .banner-button{
    position: absolute;
    top: 0;
    right: 0;
    background: none;
    color: #fff;
    border: none;
    cursor: pointer;
    font-size: 16px;
    padding: 4px 8px;
    opacity: 0.4;
    border-top-right-radius: 8px;
}
.hero-header-right .header-banner .banner-button:hover{
    background: rgba(255,255,255,0.4);
}

@media screen and (max-width: 1200px) {

    .hero-header-right{
        display: none;
    }
    .hero-header-left{
        width: 100%;
    }
}
@media screen and (max-width: 770px){
    .hero-header-left .header-title span{
        font-size: 32px;
    }
    .hero-header-left .header-title span i{
        font-size: 32px;
    }
}
@media screen and (max-width: 540px){
    .hero-header-left .header-title span{
        font-size: 24px;
        text-align: left;
    }
    .hero-header-left .header-title span i{
        font-size: 24px;
    }
}
@media screen and (max-width: 430px){
    .hero-header-left .header-title span{
        font-size: 20px;
        text-align: left;
    }
    .hero-header-left .header-title span i{
        font-size: 20px;
    }
}
</style>
