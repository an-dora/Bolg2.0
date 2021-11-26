$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });

     /* Comments */
var feild = document.querySelector('#commentbox');
var backUp = feild.getAttribute('placeholder');
var cmtbtn = document.querySelector('.cmtbtn')
var clear = document.getElementById('cancel')
feild.onfocus = function(){
       this.setAttribute('placeholder', '');
       this.style.borderColor = '#333';
       cmtbtn.style.display = 'block';
}
feild.onblur = function(){
       this.setAttribute('placeholder',backUp)
       this.style.borderColor = '#aaa';
};
cancel.onclick = function(){
    cmtbtn.style.display = 'none';
    feild.value = '';
}


/* Comment Box */
var i = 1;
$("textarea").keyup(function(e) {
    if (e.keyCode == 13) {
        var html = $(this).val();
        var newHTML = "<div class='list_"+i+"'><img id='img-user"+i+"' src='images/avatar.png' alt=''><p class='name-user'>ALK Blog</p><p id='time"+i+"'></p><p class='html_"+i+"'><i class='fa fa-chevron-right' style='padding:0 10px 0 5px'></i>"+html+"</p></div>"
        $("#list").append(newHTML);
        $("#img-user"+i).css({
            "margin": "10px 10px 10px 0px",
            "float": "left",
            "width": "40px",
            "height": "40px",
            "border-radius": "50%",
        })
        $(".name-user").css({
            "font-size": "16px",
            "font-weight": "bold"
        })
        $("#time"+i).css({
            "font-size": "13px",
            "color": "gray",
        })

        $(".list_"+i).css({
            /* "width": "555px", */
            "border-bottom": "1px solid #aaa",
            "padding": "10px 15px 5px 0",
            "margin": "0 20px 5px 20px",
            "min-height": "60px",
            "line-height": "30px",
        })
        
        $(this).val("");
        /*Time*/
        var today = new Date();
        var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
        var time = today.getHours() + ":" + today.getMinutes();
        var dateTime = date+' '+time;
        $("#time"+i).append(dateTime);
        i++;
    }
});
