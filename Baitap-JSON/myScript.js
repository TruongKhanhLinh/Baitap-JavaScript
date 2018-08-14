function myFunction(){
    var tmp = {
        "name": {
            "firstname": "Linh",
            "lastname": "Truong",
        },
        "age": 22,
        "email": "truongkhanhlinh999@gmail.com",
        "address": "Van Tao, Thuong Tin, Ha Noi",
        "phone": "01636521098",
        "university": "People's Security Academy",
        "skill": ["html", " css"," javascript"],
    };
    localStorage.setItem('tmp' , JSON.stringify(tmp));
    var getTmp = localStorage.getItem('tmp');
    var tmpLocal = JSON.parse(getTmp);
    document.getElementById("result").innerHTML = tmpLocal.skill;
}