icons = document.getElementsByClassName("languages-icon")
title_icon = document.getElementById("title_icon")
title_title = document.getElementById("title_title")
description_description = document.getElementById("description_description")


for (let i=0; i<icons.length;i++) {
    icons[i].addEventListener("click", (event) => {
        if (icons[i].id == "icon_python") {
            title_icon.src = "../static/images/python.png"
            title_title.innerText = "Python"
            description_description.innerText = "I have been Programming in python for about 4 years now. I consider myself to be very proficient in this language, in fact, I think it's my most proficient Language! I mainly use it to create discord bots but I have also used it to create backends  for websites such as this, and for integration between multiple apps, for example, connecting a discord bot to roblox. Python is one of my most favorite languages to use because of how fast and easy it is to write and deploy something"
        }

        if (icons[i].id == "icon_lua") {
            title_icon.style.animation = "fade_in 1s 1s forward"
            title_icon.src = "../static/images/lua.png"
            title_title.innerText = "Lua"
            description_description.innerText = "Lua is in fact the language I have been using the longest! I learned this language when I was just 13 to build roblox games and is what inspired me to program to begin with. Although it's my oldest language I still consider myself to be better at python than with lua solely based on the amount of python code i’ve written vs lua. I am very comfortable taking small commissions for roblox games and will program almost anything except custom gun systems solely on how lengthy they are vs pay."
        }

        if (icons[i].id == "icon_html") {
            title_icon.src = "../static/images/html.png"
            title_title.innerText = "HTML"
            description_description.innerText = "Html is probably something I won’t take commissions for, Although I made this entire website by hand. I am not good at create things like design, I have been creating websites for probably 2.5 years as of now, and I am getting better with each one I create, I just avoid spending too much time on it."
        }

        if (icons[i].id == "icon_css") {
            title_icon.src = "../static/images/css.png"
            title_title.innerText = "CSS"
            description_description.innerText = "Css goes hand in hand with HTML, as they both are used with each other, although one thing i left out of html is that they aren’t really programming languages, and more “scripting languages”, as they have very simple syntax and focus more on design then control flow."
        }

        if (icons[i].id == "icon_js") {
            title_icon.src = "../static/images/js.png"
            title_title.innerText = "Javascript"
            description_description.innerText = "Javascript is a language I HATE with a burning passion, I know the war of JS vs PY, and it has nothing to do with that, my hatred has to do with the fact that its embedded in EVERY web-browser for every website to use, but that support isn't there for ANY OTHER LANGUAGE, I can’t write my websites interaction in python or C or whatever and I hate that. JS has a similar C like syntax so It’s not too hard for me, I am just not a big fan of it and have little experience in it as i try to avoid it as much as possible, even tho its used in this website, for this exact feature.. lol"
        }

    })

}
