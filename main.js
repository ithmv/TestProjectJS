window.onload = function () {
    let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
    let fLetter = letters[Math.floor(Math.random() * letters.length)];
    let fish = document.getElementById("fish");
    let win = document.getElementById("win");
    let lose = document.getElementById("lose");
    let rld = document.getElementById("rld");
    let rld2 = document.getElementById("rld2");
    let fsh = 0;

    fnd.innerHTML = fLetter;

    for(let i=0; i<10; i++) {

        let d = letters[i]
        let cont = document.createElement('div');
        document.body.append(cont);
        cont.setAttribute('id', d);

        for(let i=0; i<10; ++i) {

            let newBall = document.createElement('div');
                newBall.classList.add(d);
                newBall.innerHTML = d;

            let r = Math.floor(Math.random() * 255),
                g = Math.floor(Math.random() * 255),
                b = Math.floor(Math.random() * 255);
                newBall.style.backgroundColor = 'rgba('+r+','+g+','+b+', 0.25)';

            let x = Math.random() * (document.documentElement.clientWidth - 200),
                y = Math.random() * (document.documentElement.clientHeight - 200);
                newBall.y = y;
                newBall.style.left = x + 'px' ;
                newBall.style.top = y + 'px';
                cont.append(newBall);

            ostl = (document.getElementById(d).childNodes.length);
            ost.innerHTML = ostl;

            newBall.onclick = function() {
                this.remove();

                if(fLetter == d) {
                    ostl = (document.getElementById(d).childNodes.length);
                    ost.innerHTML = ostl;
                    let res = (ostl - 10)*(-1);
                    kolF.innerHTML = res;
                    fish.innerHTML = ++fsh;

                    if(ostl == 0) {
                        win.style.display = 'block';
                    }

                } else {
                    fish.innerHTML = --fsh;
                }

                if(fsh < 0) {
                    lose.style.display = 'block';
                }
            }
        } 
    }

    rld.onclick = function() {
        window.location.reload()
    }
    rld2.onclick = function() {
        window.location.reload()
    }
}