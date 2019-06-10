$(document).ready(function(){
    $.ajax({
        url: "scripts/profiledata.json",
        dataType: "json",
        success: function(data){
            console.log(data);
        }
    })
});
