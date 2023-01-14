from flask import Flask,make_response,jsonify

app=Flask(__name__)


@app.route("/fetch_data_extension",methods=['GET','POST'])
def fetch_data():
    #This route would fetch yt urls from extension and would be sent to the model for classification.
    pass


@app.route("/detect_clickbait")
def detect_clickbait():
    #The Model
    return make_response(jsonify({"Output":"Clickbait/Not Clickbait"}))

if __name__=="__main__":
    app.run()
