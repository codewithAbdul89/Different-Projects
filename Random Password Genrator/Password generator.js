        document.title = "Password Generator"
        let displayer = document.getElementById("input")
        let generatorbtn = document.getElementById("generator-btn")
        let copybtn = document.getElementById("copy-btn")


        function Passwordgenrator() {
            let Password = "";
            for (let i = 0; i < 8; i++) {
                let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
                Password += chars.charAt(Math.floor(Math.random() * chars.length))
            }
            return Password
        }
        generatorbtn.addEventListener("click", () => {
            displayer.value = Passwordgenrator()
        })
        copybtn.addEventListener("click", () => {
            if (displayer.value == "") {
                alert("Please first generate the Password.")
            }
            else {

                displayer.select()
                document.execCommand("copy")
                displayer.blur();
                copybtn.innerHTML = ("Copied")
            }
        })
        generatorbtn.addEventListener("click", () => {
            copybtn.innerHTML = ("📝 Copy")
        })
