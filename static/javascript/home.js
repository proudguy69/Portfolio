icons = document.getElementsByClassName("languages-icon")
title_icon = document.getElementById("title_icon")
title_title = document.getElementById("title_title")
description_description = document.getElementById("description_description")


for (let i=0; i<icons.length;i++) {
    icons[i].addEventListener("click", (event) => {
        if (icons[i].id == "icon_python") {
            title_icon.classList.remove("fade_in")
            console.log(title_icon.classList)
            title_icon.classList.add("fade_in")
            console.log(title_icon.classList)
            title_icon.src = "../static/images/python.png"
            title_title.innerText = "Python"
            description_description.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Massa eget egestas purus viverra accumsan in. Senectus et netus et malesuada fames ac. Cursus sit amet dictum sit amet justo"
        }

        if (icons[i].id == "icon_lua") {
            title_icon.classList.remove("fade_in")
            console.log(title_icon.classList)
            title_icon.classList.add("fade_in")
            console.log(title_icon.classList)
            title_icon.style.animation = "fade_in 1s 1s forward"
            title_icon.src = "../static/images/lua.png"
            title_title.innerText = "Lua"
            description_description.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Eu facilisis sed odio morbi quis. Ullamcorper velit sed ullamcorper morbi."
        }

        if (icons[i].id == "icon_html") {
            title_icon.src = "../static/images/html.png"
            title_title.innerText = "HTML"
            description_description.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor massa id neque aliquam vestibulum morbi. Posuere lorem ipsum dolor sit. Turpis egestas integer eget aliquet nibh praesent tristique magna."
        }

        if (icons[i].id == "icon_css") {
            title_icon.src = "../static/images/css.png"
            title_title.innerText = "CSS"
            description_description.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Curabitur gravida arcu ac tortor dignissim. Pellentesque dignissim enim sit amet venenatis urna cursus. Quam vulputate dignissim suspendisse in est ante in nibh."
        }

        if (icons[i].id == "icon_js") {
            title_icon.src = "../static/images/js.png"
            title_title.innerText = "Javascript"
            description_description.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet dictum sit amet justo. Pellentesque pulvinar pellentesque habitant morbi tristique senectus et netus. Lobortis feugiat vivamus at augue eget arcu dictum varius."
        }

    })

}
