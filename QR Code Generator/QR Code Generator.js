 document.title = 'QR Code Generator'
        function Generator() {
            reloader()
            const qrcodevalue = document.getElementById("inputText").value.trim()
            const qrcontainer = document.getElementById("qr-code")
            qrcontainer.innerHTML = ""
            if (qrcodevalue == "") {
                alert("Please enter text or URL")
                location.reload()
            }
            else if (qrcodevalue.length > 150) {
                alert("Please enter a shorter text or URL")
                location.reload()
            }
            else {
                new QRCode(qrcontainer, {
                    text: qrcodevalue,
                    width: 150,
                    height: 150
                })
                qrcontainer.removeAttribute("title")
                document.getElementById("downloadButton").style.display = "block";
                document.getElementById("generateButton").innerHTML = "ReGenerate"



            }
        }
        document.getElementById("generateButton").addEventListener("click", () => {
            Generator()
            document.getElementById("inputText").setAttribute("readonly", true)
            document.getElementById("inputText").style.cursor = "no-drop"
            document.getElementById("inputText").removeAttribute("focus")
        })
        document.getElementById("inputText").addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                Generator()
                document.getElementById("inputText").setAttribute("readonly", true)
                document.getElementById("inputText").style.cursor = "no-drop"
            }
        })

        function reloader() {
            document.getElementById("generateButton").addEventListener("click", () => {
                location.reload()
            })
        }
        const downloadButton = document.getElementById("downloadButton")
        function imgdownload() {
            const qrImage = document.querySelector("#qr-code img")

            if (qrImage) {
                const link = document.createElement("a")
                link.href = qrImage.src
                link.download = ("Qr-code")
                link.click()

            }
            else {
                alert("Please  generate the QR Code first!")
            }

        }
        downloadButton.addEventListener("click", imgdownload)
