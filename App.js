$(function(){
    let imgs = "";

    for(let i = 0; i < 200; i++)
    {
        imgs += `<img src="images/pic${i}.jpg">`;
    }

    $("section").html(imgs);

    $("body").on("mousemove", function(e){
        let width = $(window).width();
        let posX = e.pageX;

        let page = Math.floor((posX / width) * 200);

        $("section > img").hide(); // 제이쿼리의 기능으로 감추는 것
        $("section > img").eq(page).show();
    });
});