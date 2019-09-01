$(function () {
    var strGET = window.location.search.replace('?', '').split('&')
        .reduce(
            function (p, e) {
                var a = e.split('=');
                p[decodeURIComponent(a[0])] = decodeURIComponent(a[1]);
                return p;
            },
            {}
        );
    if (!!strGET.search_input === true) {
        document.querySelector(".head_res").innerHTML += strGET.search_input + '}}'
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                body: 'bar',
                userId: 1
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(json => console.log(json))
    } else {
        document.querySelector(".head_res").innerHTML += "Запрос не введен" + '}}'
    }

    function pageBuilder(el) {
        return (
            "<div class=\"room__point\">\n" +
            "                    <div class=\"room__thumb\"></div>\n" +
            "                    <div class=\"room__point_info\">\n" +
            "                        <h5>Room " + el.id + "</h5>\n" +
            "                        <p class=\"txt_lorem\">" + el.title + "</p>\n" +
            "                        <p>" + el.body + "</p>\n" +
            "                    </div>\n" +
            "                </div>"
        )
    }

    let Json;
    let fourRoom;
    let otherRoom
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => {
            Json = json;
            fourRoom = Json.slice(0, 4);
            otherRoom = Json.slice(4)
            fourRoom.map((el, i) => {
                let resBlock = "<div class=\"room__point\">\n" +
                    "                    <div class=\"room__thumb\"></div>\n" +
                    "                    <div class=\"room__point_info\">\n" +
                    "                        <h5>Room " + el.id + "</h5>\n" +
                    "                        <p class=\"txt_lorem\">" + el.title + "</p>\n" +
                    "                        <p>" + el.body + "</p>\n" +
                    "                    </div>\n" +
                    "                </div>"
                if (i % 2 !== 0) {
                    resBlock = "<div class=\"room__point right\">\n" +
                        "                    <div class=\"room__thumb\"></div>\n" +
                        "                    <div class=\"room__point_info\">\n" +
                        "                        <h5>Room " + el.id + "</h5>\n" +
                        "                        <p class=\"txt_lorem\">" + el.title + "</p>\n" +
                        "                        <p>" + el.body + "</p>\n" +
                        "                    </div>\n" +
                        "                </div>"
                }
                document.querySelector('.offer__room').innerHTML += resBlock
                document.querySelector('.loader').style.display = "none";

            })
        })
    document.querySelector('.all_rooms').addEventListener('click', (event) => {
        event.preventDefault()
        otherRoom.map((el, i) => {
            let resBlock = "<div class=\"room__point\">\n" +
                "                    <div class=\"room__thumb\"></div>\n" +
                "                    <div class=\"room__point_info\">\n" +
                "                        <h5>Room " + el.id + "</h5>\n" +
                "                        <p class=\"txt_lorem\">" + el.title + "</p>\n" +
                "                        <p>" + el.body + "</p>\n" +
                "                    </div>\n" +
                "                </div>"
            if (i % 2 !== 0) {
                resBlock = "<div class=\"room__point right\">\n" +
                    "                    <div class=\"room__thumb\"></div>\n" +
                    "                    <div class=\"room__point_info\">\n" +
                    "                        <h5>Room " + el.id + "</h5>\n" +
                    "                        <p class=\"txt_lorem\">" + el.title + "</p>\n" +
                    "                        <p>" + el.body + "</p>\n" +
                    "                    </div>\n" +
                    "                </div>"
            }
            document.querySelector('.offer__room').innerHTML += resBlock
        })
        document.querySelector('.all_rooms').style.display = "none";
    })
});