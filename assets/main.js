// # ✅ Aufgabenstellung

// - In diesem Projekt erstellst du eine Mehrwertsteuer-Rechner-App.
// - In Deutschland gibt es zwei Mehrwertsteuersätze: 19 % und 7 %.
// - Mit dieser App kannst du Netto zu Brutto oder Brutto zu Netto berechnen.

// * todo
// 1. onSubmit Funktion schreiben 
// 2. Values Auslesen 
// 3. Output Selektieren  
// 7. ins html schreiben



// INPUTS IMMER IN FUNCTION DRIN SCHREIBEN
// OUTPUTS KANN AUCH AUßERHALB DES FUNCTION GESCHRIEBEN WERDEN

// FUNCTION AUFGESCHRIEBEN MIT //Angefangen mit 2 Inputs (Mehrwertsteuer)
const steuerRechner = () => {
  const mehrwertsteuer = document.querySelector(
    'input[name="auf&ab"]:checked' //<== wie in CSS 
  ).value;

  //Angefangen mit 19% und 7% Inputs 
  const steuerSatz = document.querySelector('input[name="satz"]:checked').value;

  // Eingabefeld
  const betrag = Number(document.querySelector("#betrag").value);

  // Ausgabefelder
const mwBetrag = document.querySelector(".mehrwertsteuerBetrag");
const endpreis = document.querySelector(".nettoBetrag");


  //
  if (mehrwertsteuer === "aufschlagen" && steuerSatz === "neunzehn") {
    mwBetrag.innerHTML = `${(betrag * 0.19).toFixed(2)} €`;
    endpreis.innerHTML = `${(betrag + betrag * 0.19).toFixed(2)} €`;
  } else if (mehrwertsteuer === "aufschlagen" && steuerSatz === "sieben") {
    mwBetrag.innerHTML = `${(betrag * 0.07).toFixed(2)} €`;
    endpreis.innerHTML = `${(betrag + betrag * 0.07).toFixed(2)} €`;
  } else if (mehrwertsteuer === "abziehen" && steuerSatz === "neunzehn") {
    mwBetrag.innerHTML = `${(betrag - betrag / 1.19).toFixed(2)} €`;
    endpreis.innerHTML = `${(betrag / 1.19).toFixed(2)}  €`;
  } else if (mehrwertsteuer === "abziehen" && steuerSatz === "sieben") {
    mwBetrag.innerHTML = `${(betrag - betrag / 1.07).toFixed(2)} €`;
    endpreis.innerHTML = `${(betrag / 1.07).toFixed(2)}  €`;
  }
};


