const ujJatekGomb=document.getElementById("ujjatek")
const JatekTer=document.getElementsByClassName("jatekter")

ujJatekGomb.addEventListener("click",megjelenit)

function megjelenit(){
    const htmlKod=`
     <div id="gep">
        <h2>A gép tippje</h2>
        <div class="kep">
          <img src="kepek/placeholder.jpg" alt="kopapriollo" />
        </div>
      </div>
      <div id="jatekos">
        <h2>A Játékos tippje</h2>
        <div class="gombok">
          <button id="ko">K</button>
          <button id="papir">P</button>
          <button id="ollo">O</button>
        </div>
        <div class="kep">
          <img src="kepek/placeholder.jpg" alt="kopapriollo" />
        </div>
      </div>`
      JatekTer[0].insertAdjacentHTML("beforeend",htmlKod)
      const gombElemek=document.querySelectorAll(".gombok button")
      gombElemek[0].addEventListener("click", kivalaszt)
}