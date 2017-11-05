
$(function() {
    
    $("#formCar").hide();
    $("#formPerson").hide();
    $("#btnSignUpPerson").hide();
    $("#btnSignUpCar").hide();
    $("#fillSpacesPerson").hide();
    $("#fillSpacesCar").hide();
    $("#tabHide").hide();
    
    $("#tabPerson").click(function() {
        $('#formCar').fadeOut();
        $("#btnSignUpCar").fadeOut();
        $('#formPerson').fadeIn();
        $("#btnSignUpPerson").fadeIn();
        $("#tabHide").fadeIn();
    });
    
    $("#tabCar").click(function() {
        $('#formPerson').fadeOut();
        $("#btnSignUpPerson").fadeOut();
        $('#formCar').fadeIn(); 
        $("#btnSignUpCar").fadeIn();
        $("#tabHide").fadeIn();
    });
    
    $("#tabHide").click(function() {
        $('#formCar').fadeOut();
        $("#btnSignUpCar").fadeOut();
        $('#formPerson').fadeOut();
        $("#btnSignUpPerson").fadeOut();
        $("#tabHide").fadeOut();
    });
    
    $("#btnSignUpPerson").click(function() {
        var per = new person($('#namePerson').val(), $('#lastNamePerson').val(), $('#emailPerson').val(), $('#telPerson').val() ,$('#gender').find(":selected").text());
        
        if ($('#namePerson').val() == "" || $('#lastNamePerson').val() == "" || $('#emailPerson').val() == "" || $('#telPerson').val() == "" || $('#gender').find(":selected").text() == "Choose your option") {
            $("#fillSpacesPerson").fadeIn();
        } else {
            
            $("#fillSpacesPerson").fadeOut();
            
            var ul = document.getElementById("list");
            var li = document.createElement("li");
            var children = ul.children.length + 1;

            li.setAttribute("id", "element"+children);

            var id = "#card"+children;

            var classCard = document.createElement("div");
            var classImage = document.createElement("div");
            var image = document.createElement("img");
            var title = document.createElement("span");
            var content = document.createElement("div");
            var row = document.createElement("div");
            var size = document.createElement("div");
            var all = document.createElement("div");
            //var FABs = document.createElement("a");
            //var icon = document.createElement("i");


            //FABs.setAttribute("id", "id");
            classCard.setAttribute("class", "card");
            classImage.setAttribute("class", "card-image");
            if ($('#gender').find(":selected").text() == "Female") {
                image.setAttribute("src", "img/woman.png");
            } else {
                image.setAttribute("src", "img/man2.png");
            }

            title.setAttribute("class", "card-title");
            content.setAttribute("class", "card-content");
            row.setAttribute("class", "row");
            size.setAttribute("class", "col s12 m8");
            //FABs.setAttribute("class", "btn-floating halfway-fab waves-effect waves-light red");
            //icon.setAttribute("class", "material-icons");
            //$(icon).append("delete");

            ul.appendChild(li);

            all.appendChild(row);
            row.appendChild(size);
            size.appendChild(classCard)
            classCard.appendChild(classImage);
            classImage.appendChild(image);
            classImage.appendChild(title);
            classCard.appendChild(content);
            //FABs.appendChild(icon);
            //classImage.appendChild(FABs);

            li.appendChild(all);

            $(title).text(per.firstName);

            $(title).css("color", "14EEC6");
            $(title).css("font-family", "serif");
            $(title).css("text-transform", "uppercase");
            $(content).css("font-size", "13px");
            $(content).css("text-align", "center");
           


            

            content.appendChild(document.createElement("br"));

            $(content).append("*Nombre: " + per.firstName);

            content.appendChild(document.createElement("br"));

            $(content).append("*Apellido: " + per.lastName);

            content.appendChild(document.createElement("br"));

            $(content).append("*Email: " + per.email);

            content.appendChild(document.createElement("br"));

            $(content).append("*Telefono: " + per.phone);

            content.appendChild(document.createElement("br"));

            $(content).append("*Genero: " + per.gender);

            $(all).hide();

            $(all).fadeIn();
        }
        
        
    });
    
    
    $('#btnSignUpCar').click(function() {
        var cr = new car($('#carBrand').val(), $('#carModel').val(), $('#carNumberPost').val(), $('#carColor').val() ,$('#carEnrollment').val());
        
        if ($('#carBrand').val() == "" || $('#carModel').val() == "" || $('#carNumberPost').val() == "" || $('#carColor').val() == "" || $('#carEnrollment').val() == "" ) {
            $("#fillSpacesCar").fadeIn();
        } else {
            
            $("#fillSpacesCar").fadeOut();
            
            var ul = document.getElementById("list");
            var li = document.createElement("li");
            var children = ul.children.length + 1;

            li.setAttribute("id", "element"+children);

            var id = "#element"+children;

            var classCard = document.createElement("div");
            var classImage = document.createElement("div");
            var image = document.createElement("img");
            var title = document.createElement("span");
            var content = document.createElement("div");
            var row = document.createElement("div");
            var size = document.createElement("div");
            var all = document.createElement("div");
            //var FABs = document.createElement("a");
            //var icon = document.createElement("i");


            //FABs.setAttribute("id", "id");
            classCard.setAttribute("class", "card");
            classImage.setAttribute("class", "card-image");
            image.setAttribute("src", "img/car2.jpg");
            title.setAttribute("class", "card-title");
            content.setAttribute("class", "card-content");
            row.setAttribute("class", "row");
            size.setAttribute("class", "col s12 m8");
            //FABs.setAttribute("class", "btn-floating halfway-fab waves-effect waves-light red");
            //icon.setAttribute("class", "material-icons");
            //$(icon).append("delete");


            ul.appendChild(li);

            all.appendChild(row);
            row.appendChild(size);
            size.appendChild(classCard)
            classCard.appendChild(classImage);
            classImage.appendChild(image);
            classImage.appendChild(title);
            classCard.appendChild(content);
            //FABs.appendChild(icon);
            //classImage.appendChild(FABs);

            li.appendChild(all);

            $(title).text(cr.brand);

            $(title).css("color", "2a2a2a");
            $(title).css("text-transform", "uppercase");
            $(content).css("font-size", "13px");



            $(content).append("N° " + children);

            content.appendChild(document.createElement("br"));

            $(content).append("*Marca CArro: " + cr.brand);

            content.appendChild(document.createElement("br"));

            $(content).append("*Modelo: " + cr.model);

            content.appendChild(document.createElement("br"));

            $(content).append("*Kilometraje: " + cr.numerPost);

            content.appendChild(document.createElement("br"));

            $(content).append("*Color: " + cr.color);

            content.appendChild(document.createElement("br"));

            $(content).append("*Estado: " + cr.enrollment);

            $(all).hide();

            $(all).fadeIn();
        }
        
        
        
        
    });
    $('select').material_select();
    
});



function person(first, last, email, phone, gender) {
    this.firstName = first;
    this.lastName = last;
    this.phone= phone;
    this.email = email;
    this.gender = gender;
}

function car(brand, model, numberPost, color, enrollment) {
    this.brand = brand;
    this.model = model;
    this.numerPost = numberPost;
    this.color = color;
    this.enrollment = enrollment;
}