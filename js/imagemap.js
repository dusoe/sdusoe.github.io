$("#texas").hide();

$("map#imgmap").click(function(ev){
    var target = $(ev.target);
    var targetId = target.attr('id');
    if(targetId == 'texasArea') {
      $("#texas").show();
    }
});