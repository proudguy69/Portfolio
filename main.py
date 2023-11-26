from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def homePage():
    return render_template("home.html")

@app.route("/portfolio")
def portfolioPage():
    return render_template("portfolio.html")

@app.route("/contact")
def contactPage():
    return render_template("contact.html")

app.run(debug=True)