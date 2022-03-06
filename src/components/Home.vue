<template>
    <div class="main">
        <div id="hero">
            <div class="hero-header-left">
                <div class="header-title">
                    <span>Size özel filmler ve TV şovları</span>
                    <span class="refresh">
                        <i class="fa-solid fa-arrow-rotate-right"></i>
                    </span>

                </div>
                <div class="header-box-logo">
                    <div class="box-logo">
                        <img src="../assets/images/icon/netflix.jpg" alt="">
                    </div>
                    <div class="box-logo">
                        <img src="../assets/images/icon/prime.jpg" alt="">
                    </div>
                    <div class="box-logo">
                        <img src="../assets/images/icon/plus.jpg" alt="">
                    </div>
                </div>
            </div>
            <div style="color: #fff" class="hero-header-right">Lorem ipsum dolor sit.</div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style scoped>

.main {
    padding: 12px 24px;
    padding-top: 86px;
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #060D17;
}

#hero {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: relative;
}
.hero-header-left{
    display: flex;
    flex-direction: column;
    gap: 30px;
}
.hero-header-left .header-title{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 30px;
}
.hero-header-left .header-title span{
    font-size: 40px;
    color: #fff;
    font-weight: 600;
}

.fa-arrow-rotate-right{
    font-size: 42px;
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
</style>

