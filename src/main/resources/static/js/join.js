$(document).ready(function (){
    //����������, ������Ȯ�� Ŭ���� �α������� �����ֱ�
    $("#mypage").click(function (){
        var result = confirm("������������ �α��� �� �̿��� �ֽñ� �ٶ��ϴ�.");
        if (result == true) {
            location.href="/mypage_login";
        }else if (result == false){
            return false;
        }
    })

    $("#ticket").click(function (){
        var result = confirm("������ Ȯ���� �α��� �� �̿��� �ֽñ� �ٶ��ϴ�.");
        if (result == true) {
            location.href="/mypage_login";
        }else if (result == false){
            return false;
        }
    })

    //ȸ������
    $("#join_button").click(function (){

        let name = $('[name="name"]').val();
        let phoneNum = $('[name="tel"]').val();
        let id = $('[name="id"]').val();
        let pwd = $('[name="password"]').val();
        let preEmail = $('[name="email"]').val();
        let postEmail = "@"+$('[name="auto"]').val();
        let email = preEmail+postEmail;
        console.log(name+","+phoneNum+","+id+","+pwd+","+preEmail+","+postEmail);

        $.get("/user/regist?name="+name+"&phone="+phoneNum+"&id="+id+"&pwd="+pwd+"&email="+email, function (data){
            console.log(data);

            if (data == "�̹� ��ϵ� ID�Դϴ�."){
                alert(data)
            }else if (data == "�̹� ��ϵ� Email�Դϴ�."){
                alert(data)
            }else{
                alert(data)
                window.location.href = "/mypage_login";
            }
        });

    })
})
