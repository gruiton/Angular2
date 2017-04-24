"use strict";
var Boca = (function () {
    function Boca() {
    }
    Boca.prototype.habla = function (texto) {
        console.log("Habla dice: " + texto);
        var synth = window['speechSynthesis'];
        var voces = synth.getVoices();
        var utter = new window['SpeechSynthesisUtterance'](texto);
        utter.pitch = 1.0;
        utter.rate = 1.0;
        for (var i = 0; i < voces.length; i++) {
            if (voces[i].lang == "es-ES") {
                utter.voice = voces[i];
            }
        }
        synth.speak(utter);
    };
    return Boca;
}());
exports.Boca = Boca;
//# sourceMappingURL=boca.js.map