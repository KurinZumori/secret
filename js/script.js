function check()
    {
    var name = document.getElementById("name").value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        if
        (name == "dinh hoang chau anh" ||
        name == "chau anh" ||
        name == "anh")
        {
            window.open("success.html");
        }

        else
        {
            alert("You're not the person I'm looking for!");
        }
    }
