$(document).ready(
  function (){
      $("#1").click(
          function(){
              if ($("#value").val() === "0")
                  $("#value").val(1);
              else {
                  let x = $("#value").val() + 1;
                  $("#value").val(x);
              }
          }
      );
      $("#2").click(
          function(){
              if ($("#value").val() === "0")
                  $("#value").val(2);
              else {
                  let x = $("#value").val() + 2;
                  $("#value").val(x);
              }
          }
      );
      $("#3").click(
          function(){
              if ($("#value").val() === "0")
                  $("#value").val(3);
              else {
                  let x = $("#value").val() + 3;
                  $("#value").val(x);
              }
          }
      );
      $("#4").click(
          function(){
              if ($("#value").val() === "0")
                  $("#value").val(4);
              else {
                  let x = $("#value").val() + 4;
                  $("#value").val(x);
              }
          }
      );
      $("#5").click(
          function(){
              if ($("#value").val() === "0")
                  $("#value").val(5);
              else {
                  let x = $("#value").val() + 5;
                  $("#value").val(x);
              }
          }
      );$("#6").click(
          function(){
              if ($("#value").val() === "0")
                  $("#value").val(6);
              else {
                  let x = $("#value").val() + 6;
                  $("#value").val(x);
              }
          }
      );
      $("#7").click(
          function(){
              if ($("#value").val() === "0")
                  $("#value").val(7);
              else {
                  let x = $("#value").val() + 7;
                  $("#value").val(x);
              }
          }
      );
      $("#8").click(
          function(){
              if ($("#value").val() === "0")
                  $("#value").val(8);
              else {
                  let x = $("#value").val() + 8;
                  $("#value").val(x);
              }
          }
      );
      $("#9").click(
          function(){
              if ($("#value").val() === "0")
                  $("#value").val(9);
              else {
                  let x = $("#value").val() + 9;
                  $("#value").val(x);
              }
          }
      );
      $("#0").click(
          function(){
              if ($("#value").val() === "0")
                  $("#value").val(0);
              else {
                  let x = $("#value").val() + 0;
                  $("#value").val(x);
              }
          }
      );

      $("#sum").click(
        function (){
            let x = $("#value").val() + '+';
            $("#value").val(x);
        }
      );

      $("#sub").click(
          function (){
              let x = $("#value").val() + '-';
              $("#value").val(x);
          }
      );

      $("#mul").click(
          function (){
              let x = $("#value").val() + '*';
              $("#value").val(x);
          }
      );

      $("#div").click(
          function (){
              let x = $("#value").val() + '/';
              $("#value").val(x);
          }
      );

      $("#dot").click(
          function (){
              let x = $("#value").val() + '.';
              $("#value").val(x);
          }
      );

      $("#clear").click(
          function (){
              $("#value").val("0");
          }
      );
      $("#equals").click(
          function(){
              let x = $("#value").val();
              $("#value").val(eval(x));
          }
      )
  }
);