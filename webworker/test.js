self.importScripts("https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@latest");

var model=null;

self.addEventListener('message', function (e) {
    var data = e.data;
    console.log(data);
    if(data["headpackage"]=="loadModel")
    {
        loadModel(data["MODEL_URL"],data["WEIGHTS_URL"]);
    }


}, false);


async function loadModel(MODEL_URL,WEIGHTS_URL)
{
    console.log("111");
    model=await tf.loadFrozenModel(MODEL_URL,WEIGHTS_URL);
    console.log("222");


}