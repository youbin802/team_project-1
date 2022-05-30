// $(function() {
//     $('.chat-btn').on('click', function(){ // 댓글 보기 클릭 이벤트 
//         if($(this).next().css('display') == 'none'){
//             $(this).next().stop().slideToggle(1000)
//             $(this).children('a').text('댓글닫기')
//             console.log($(this).next()); 
//             console.log($('.chat-btn').next())
//         }
//     })
// })
const log = console.log;
const dom = $(".chat-btn")
let flag = false;
$(".h-card > .chat-btn").each(function(idx,item) {
    $(item).on('click', function(){ // 댓글 보기 클릭 이벤트 
        if(!flag) {
            $(this).next().stop().slideToggle(1000)
            // $(this).parents('.h-card').find(".chat").css('display','block')
            flag = true;
        } else {
            $(this).parents('.h-card').find(".chat").css('display','none')
            flag = false;
        }
        
    })
})