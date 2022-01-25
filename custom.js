//새로고침 됐을 때 스크롤 위치를 페이지 상단으로 변경하는 코드
window.addEventListener("beforeunload",() => {
    window.scrollTo(0,0);
})


//===============================================================================
const button = document.querySelector(".page_slide");
window.addEventListener("scroll",() => {
    let scroll = window.pageYOffset;

    if(scroll > 20){
        button.style.display = "block";
    }else{
        button.style.display = "none"
    }
})

button.addEventListener("click",() => {
    window.scrollTo({
        behavior:'smooth',
        left:0,
        top:0
    });
})
//=====================================이미지슬라이드(제이쿼리)
$(function(){//document.ready

    const visual_vid = $("#banner > .videoGroup > li");
    const visual_img = $("#banner > .slide_content > li");

    const btn = $("#banner > .dots > li");
    console.log(btn);

    let current = 0;

    btn.click(function(){

        let i = $(this).index();

        btn.removeClass("on");

        $(this).addClass("on");

        move(i);
    })

    
    function move(i){

        if(current == i) return;

        const currentVid = visual_vid.eq(current);
        const currentImg = visual_img.eq(current);
        
        const nextVid = visual_vid.eq(i);
        const nextImg = visual_img.eq(i);

        currentVid.css("left",0).stop().animate({"left":"-100%"},500);
        currentImg.css("left",0).stop().animate({"left":"-100%"},500);
        
        nextVid.css("left","100%").stop().animate({"left":0},500);
        nextImg.css("left","100%").stop().animate({"left":0},500);

        current = i;
    }
    
});


//========================================================
//브라우저 넓이 좁아졌을 때 토글버튼 눌러서 메뉴 펼쳤다 접었다 하는거 
//=>문제없음 잘됨.
const toggle = document.querySelector(".togglebtn");
//toggle에 토글버튼 넣음

const gnb = document.querySelector(".right");
//gnb에 가려야 하는 메뉴 

toggle.addEventListener("click",() => {

    let ht = gnb.scrollHeight;

    let gnbHt = gnb.getBoundingClientRect().height;

    if(gnbHt == 0){

        gnb.style.maxHeight = ht+"px";
    
    }else{

        gnb.style.maxHeight = 0;
    }
    
})
//================================================================
/*
function toggleVideo(){
    const trailer = document.querySelector(".music_video");
    const video = document.querySelector('video');
    trailer.classList.toggle('active');
    video.currentTime = 0;
    video.pause();
}
*/
/*
=>동영상 여러개 못집어넣음
const tbVideo = document.querySelectorAll(".video_box");
const video = document.querySelector(".music_video");
const close = document.querySelector(".close");

tbVideo.forEach(tbVideo => tbVideo.addEventListener("click",() => {
    let src = tbVideo.getAttribute("src");

    const modal_video = document.querySelector("video");
    
    modal_video.setAttribute("src",src);
    video.style.display = "block"
}))
close.addEventListener("click",() => {
    video.style.display = "none"
})
window.addEventListener("click",(e) => {
    if(e.target == video){
        video.style.display = "none";
    }
})
*/