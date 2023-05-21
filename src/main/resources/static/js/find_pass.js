$(document).ready(function (){
    //마이페이지, 승차권확인 클릭시 로그인으로 보내주기
    $("#mypage").click(function (){
        var result = confirm("마이페이지는 로그인 후 이용해 주시기 바랍니다.");
        if (result == true) {
            location.href="/mypage_login";
        }else if (result == false){
            return false;
        }
    })

    $("#ticket").click(function (){
        var result = confirm("승차권 확인은 로그인 후 이용해 주시기 바랍니다.");
        if (result == true) {
            location.href="/mypage_login";
        }else if (result == false){
            return false;
        }
    })

    //비밀번호 찾기
     $("#find_button").click(function (){

        if ($('[name="name"]').val() == null || $('[name="name"]').val() == "") {
        alert("이름을 입력해주세요.");
        $('[name="name"]').focus();

        return false;
        }

        if ($('[name="id"]').val() == null || $('[name="id"]').val() == "") {
        alert("아이디를 입력해주세요.");
        $('[name="id"]').focus();

        return false;
        }

        if ($('[name="tel"]').val() == null || $('[name="tel"]').val() == "") {
        alert("전화번호를 입력해주세요.");
        $('[name="tel"]').focus();

        return false;
        }

        let name = $('[name="name"]').val();
        let id = $('[name="id"]').val();
        let phone = $('[name="tel"]').val();

//        console.log("name: "+ name);
//        console.log("email: "+ email);
//        console.log("tel: "+ tel);

//        var result = $.get("/user/findPwd?name="+ name + "&id=" + id + "&phone=" + phone);
//        console.log(result);

        $.get("/user/findPwd?name="+ name + "&id=" + id + "&phone=" + phone, function(data, status){
            alert("비밀번호는  " + data +"  입니다.");
            location.href = "/mypage_login";

        }).fail(function(jqXHR, textStatus, errorThrown){
          if (jqXHR.status == 500) {
            alert("일치한 정보가 없습니다.");
          }
        });
     })

})
