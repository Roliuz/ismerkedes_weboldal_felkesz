window.addEventListener('scroll', function () {
    var right = document.querySelectorAll('.right');
    var left = document.querySelectorAll('.left');
    var elotunes = document.querySelectorAll('.mentor-szoveg');
    var elotorles = document.querySelectorAll('.elotorles');

    //kártya balról
    for (var i = 0; i < right.length; i++) {
        var element = right[i];
        var position = element.getBoundingClientRect().top;
        var windowHeight = window.innerHeight;

        // Ha az elem feljut a képernyő aljára, hozzáadjuk az animációhoz szükséges osztályt
        if (position < windowHeight) {
            element.classList.add('card-right');
        }
    }

    //kártya jobbról
    for (var i = 0; i < left.length; i++) {
        var element = left[i];
        var position = element.getBoundingClientRect().top;
        var windowHeight = window.innerHeight;

        // Ha az elem feljut a képernyő aljára, hozzáadjuk az animációhoz szükséges osztályt
        if (position < windowHeight) {
            element.classList.add('card-left');
        }
    }


    for (var i = 0; i < elotunes.length; i++) {
        var element = elotunes[i];
        var position = element.getBoundingClientRect().top;
        var windowHeight = window.innerHeight;

        if (position < windowHeight) {
            element.classList.add('elotunes-animate');
        }
    }

    for (var i = 0; i < elotorles.length; i++) {
        var element = elotorles[i];
        var position = element.getBoundingClientRect().top;
        var windowHeight = window.innerHeight;

        if (position < windowHeight) {
            element.classList.add('elotorles-animate');
        }
    }



});

// fooldal_script.js
document.addEventListener("DOMContentLoaded", function () {
    var numbers = document.querySelectorAll(".number");
    var infoDiv = document.createElement("div");
    infoDiv.classList.add("info-text");
    var container = document.querySelector(".eredmeny");
    container.appendChild(infoDiv);

    // Eseményfigyelő hozzáadása a "click" eseményhez
    numbers.forEach(function (number) {
        number.addEventListener("click", function () {
            var clickedNumber = parseInt(this.innerText);
            infoDiv.innerHTML = getInfoText(clickedNumber);
        });
    });
});

function getInfoText(number) {
    // Szövegek meghatározása a tartományokhoz
    if (number >= 1 && number <= 4) {
        return "<p class='tartomany'><strong>1-4:</strong> SOS, avagy nagyon sürgősen változtatnod kell, különben elmegy az élet feletted és bánni fogod, hogy a maradék fiatalságod is elcseszted. Javaslom, szánj rá fél órát ennek az oldalnak a tanulmányozására.</p>";
    } else if (number >= 5 && number <= 7) {
        return "<p class='tartomany'><strong>5-7:</strong> Nem vagy egy elveszett férfi, benned van a potenciál, de valószínűleg egy kicsit belefásultál a mindennapi hajtásba és hiányát érzed a kalandoknak és a párkapcsolatnak. A táborunk szinte Neked találták ki!</p>";
    } else if (number >= 8 && number <= 10) {
        return "<p class='tartomany'> <strong>8-10:</strong> Gratulálok! Azon ritka felső 10%-ba tartozol, akinek rendben van az önbizalma, rendben van a szerelmi élete és kevés gondja van a nőkkel! Ez esetben a táborunk tökéletes lehet kalandok, élmények gyűjtésére.</p>";
    } else {
        return "Nincs érvényes tartomány!";
    }
}

//tovább gomb
function showAllItems() {
    var listContainer = document.getElementById('list-container');
    listContainer.classList.add('show-all');
    var hiddenItems = document.querySelectorAll('.hidden');
    for (var i = 0; i < hiddenItems.length; i++) {
        hiddenItems[i].classList.remove('hidden');
    }
    var showMoreButton = document.getElementById('show-more-button');
    showMoreButton.style.display = 'none';


}


function setCookie(cookieName, cookieValue, expirationDays) {
    const d = new Date();
    d.setTime(d.getTime() + (expirationDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    const cookieString = cookieName + "=" + cookieValue + "; " + expires + "; SameSite=None; Secure";
    document.cookie = cookieString;
}



function getCookie(cookieName) {
    const name = cookieName + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
        let cookie = cookieArray[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length, cookie.length);
        }
    }
    return "";
}


// Sütik beállítása
setCookie("username", "John Doe", 30); // A "username" süti beállítása "John Doe" értékkel, ami 30 napig érvényes

// Sütik lekérdezése
const username = getCookie("username"); // A "username" süti értékének lekérdezése

if (username !== "") {
    alert("Üdvözöllek, " + username + "!");
} else {
    alert("Üdvözöllek, ismeretlen látogató!");
}

document.cookie = "myCookie=myValue; SameSite=None; Secure";

