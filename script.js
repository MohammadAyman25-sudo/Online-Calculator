$(document).ready(
    function () {
        let nums = $(".num");
        let operations = $(".operation");
        for (let i = 0; i < nums.length; i++) {
            nums[i].onclick = function () {
                if ($("#value").val() === "0" || $("#value").val() === "Infinity" || $("#value").val() === "NaN")
                    $("#value").val(nums[i].innerHTML)
                else {
                    let x = $("#value").val() + nums[i].innerHTML;
                    $("#value").val(x);
                }
            }
        }

        for (let i = 0; i < operations.length; i++) {
            operations[i].onclick = function () {
                let x = $("#value").val() + operations[i].innerHTML;
                $("#value").val(x);
            }
        }

        $("#clear").click(
            function () {
                $("#value").val("0");
            }
        );
        $("#equals").click(
            function () {
                let x = $("#value").val();
                $("#value").val(eval(x));
            }
        )
    }
);