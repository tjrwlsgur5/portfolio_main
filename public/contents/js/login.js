$(document).ready(function () {
  // 아이디//
  $("#but_id_find").click(function () {
    // alert( "Handler for .click() called." );
    $("#login_id_find").addClass("section_move_left");
  });
  $("#but_id_confirm").click(function () {
    // alert( "Handler for .click() called." );
    $("#login_id_clear").addClass("section_move_left");
  });
  $("#but_id_next").click(function () {
    // alert( "Handler for .click() called." );
    $("#login_pw").addClass("section_move_left");
  });
  
  //비밀번호 찾기//
  $("#but_pw_find").click(function () {
    // alert( "Handler for .click() called." );
    $("#login_pw_find").addClass("section_move_top");
  });
  $("#but_pw_next").click(function () {
    // alert( "Handler for .click() called." );
    $("#login_pw_change").addClass("section_move_top");
  });
  //비밀번호 변경//
  $("#but_pw_change_next").click(function () {
    // alert( "Handler for .click() called." );
    $("#login_pw_clear").addClass("section_move_top");
  });
  //메인 백//
  $("#but_finish").click(function () {
    // alert( "Handler for .click() called." );
    $(window).scrollTop(); 
  });
});
