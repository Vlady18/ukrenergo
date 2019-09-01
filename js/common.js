$(function () {
    class Point {
        constructor() {
            this.randVal = '';
            this.levels = '';
        }

        randomRoom(minVal, maxVal) {
            this.randVal = '' + Math.round(minVal + (Math.random() * (maxVal - minVal)));
            if (this.randVal.length === 1) {
                return '00' + this.randVal;
            } else if (this.randVal.length === 2) {
                return '0' + this.randVal;
            }
            return this.randVal;
        }

        randomArea(minVal, maxVal) {
            let areaVal = Math.round(minVal + (Math.random() * (maxVal - minVal)));
            return areaVal;
        }

        randomLorem(x, y) {
            var ipsum = new LoremIpsum();
            return ipsum.sentence(x, y);
        }

        optionalParams() {
            let option = Math.round((Math.random()));
            this.levels = +Math.round((Math.random()));
            let lev;
            let floo;
            let curFloor = this.randVal.substr(0, 1)
            if (this.levels !== 1) {
                floo = "<p>floor: <span>" + this.randVal.substr(0, 1) + "</span></p>\n"
            } else if (this.levels === 1) {
                floo = "<p>floor: <span>" + curFloor + '-' + (+curFloor + 1) + "</span></p>\n"
            }
            if (+this.levels === 0) {
                lev = "<p>levels: <span>1</span></p>\n"
            } else if (+this.levels === 1) {
                lev = "<p>levels: <span>2</span></p>\n"

            }
            if (option === 1) {
                return "<div class=\"room__other_info\">\n" + lev + floo + "</div>\n"
            } else {
                return ''
            }
        }

        typeBuild(minVal, maxVal) {
            let type = +Math.round(minVal + (Math.random() * (maxVal - minVal)));
            switch (type) {
                case 0:
                    return " <span class='green'>office</span>\n"
                case 1:
                    return "<span class='grey'>utility room</span>\n"
            }
        }

        repairBuild(minVal, maxVal) {
            let type = +Math.round(minVal + (Math.random() * (maxVal - minVal)));
            switch (type) {
                case 0:
                    return " <span>repair</span>\n"
                case 1:
                    return ''
            }
        }
    }

    const third = new Point();
    for (var i = 0; i < 4; i++) {
        let roomNumber = third.randomRoom(0, 999);
        let roomLorem = third.randomLorem(3, 10);
        let roomArea = third.randomArea(1, 100);
        let roomOptional = third.optionalParams();
        let roomType = third.typeBuild(0, 1);
        let roomRepair = third.repairBuild(0, 1);
        let sectionTwoRepair = roomRepair ? "<p>status: <span>" + roomRepair + "</span></p>\n" : '';
        document.querySelector('.room__wrap').innerHTML +=
            "<div class=\"room__list\" id=\"" + i + "\" >\n" +
            "                    <div class=\"room__list_img\">\n" +
            "                    </div>\n" +
            "                    <div class=\"room__list_info\">\n" +
            "                        <div class=\"room__main_info\">\n" +
            "                            <h5>Room " + roomNumber + "</h5>\n" +
            "                            <p class=\"txt_lorem\">" + roomLorem + "</p>\n" +
            "                            <p>area: <span>" + roomArea + " м<sup>2</sup></span></p>\n" +
            "                            " + roomOptional + "\n" +
            "                            <p class=\"txt_repair\">" + roomRepair + "</p>\n" +
            "                            <p class=\"txt_type\">" + roomType + "</p>\n" +
            "                        </div>\n" +
            "                    </div>\n" +
            "                </div>"
        let secondSection = "<div class=\"room__point\">\n" +
            "                    <div class=\"room__thumb\"></div>\n" +
            "                    <div class=\"room__point_info\">\n" +
            "                        <h5>Room " + roomNumber + "</h5>\n" +
            "                        <p class=\"txt_lorem\">" + roomLorem + "</p>\n" +
            "                        <p>area: <span>" + roomArea + " м<sup>2</sup></span></p>\n" +
            "                            " + roomOptional + "\n" +
            "                        <p>type: <span>" + roomType + "</span></p>\n" +
            "                            " + sectionTwoRepair + "\n" +
            "                        <div class=\"read_more\">\n" +
            "                            <a href=\"#\">read more</a>\n" +
            "                        </div>\n" +
            "                    </div>\n" +
            "                </div>"
        if (i % 2 !== 0) {
            secondSection = "<div class=\"room__point right\">\n" +
                "                    <div class=\"room__thumb\"></div>\n" +
                "                    <div class=\"room__point_info\">\n" +
                "                        <h5>Room " + roomNumber + "</h5>\n" +
                "                        <p class=\"txt_lorem\">" + roomLorem + "</p>\n" +
                "                        <p>area: <span>" + roomArea + " м<sup>2</sup></span></p>\n" +
                "                            " + roomOptional + "\n" +
                "                        <p>type: <span>" + roomType + "</span></p>\n" +
                "                            " + sectionTwoRepair + "\n" +
                "                        <div class=\"read_more\">\n" +
                "                            <a href=\"#\">read more</a>\n" +
                "                        </div>\n" +
                "                    </div>\n" +
                "                </div>"
        }
        document.querySelector('.offer__room').innerHTML += secondSection
    }

    $("#origin").sortable({
        axis: "x"
    });
});