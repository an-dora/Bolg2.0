
/* Item Story */
$( "#item-story" ).load("../story/chu/HuyetThan.txt");
    const textarea = document.querySelector("textarea")
    textarea.addEventListener("keyup", e =>{
        textarea.style.height = "auto";
        let scHeight = e.target.scrollHeight;
        textarea.style.height = `${scHeight}px`;
});
    /* Add ThuVien*/
function addFunction() {
    var add = document.getElementById("addbutton")
    var changeicon = document.getElementById("iconplus")
    var change = document.getElementById("addbtn")
    if(change.innerHTML === "Thêm vào thư viện"){
        add.style.color = "#3b7462"
        change.innerHTML = "Đã thêm vào thư viện"
        changeicon.className = "fa fa-check"
    } else {
        add.style.color = "rgb(128, 128, 128)"
        change.innerHTML = "Thêm vào thư viện"
        changeicon.className = "fa fa-plus"
    }
};
   /* Voted */
function votedFunction() {
    var add = document.getElementById("votedbutton")
    var changeicon = document.getElementById("iconvoted")
    var change = document.getElementById("votedbtn")
    if(change.innerHTML === "Bình chọn"){
        add.style.color = "#3b7462"
        change.innerHTML = "Đã bình chọn"
        changeicon.className = "fa fa-star"
    } else {
        add.style.color = "rgb(128, 128, 128)"
        change.innerHTML = "Bình chọn"
        changeicon.className = "fa fa-star-o"
    }
};
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

/* Slider */
var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
        counter = 1;
    }
},5000);