const detail_btn = document.getElementById("detail-btn")
    const gaper = document.getElementById("first-detail-box")
    const para1 = document.getElementById("para1")

    let fiewer = "Train like an athlete with top-tier equipment and expert programming. Whether you're building muscle or breaking PRs, we help you push past limits."
    let detailer = "Train like never before with access to world-class equipment, expert-crafted programs, and a community built to elevate your performance. Whether you're aiming to build serious muscle, increase endurance, or set new personal records, our system is designed to support every step of your journey. With the right tools and guidance, you'll not only reach your goals—you'll redefine them, pushing beyond what you thought was possible."
    para1.innerHTML = fiewer;
    let isfiewer = true;
    detail_btn.addEventListener("click", () => {
        if (isfiewer) {
            para1.innerHTML = detailer;
            gaper.style.gap = '20%';
            detail_btn.innerHTML = "Fiewer";

        }
        else {
            para1.innerHTML = fiewer;
            gaper.style.gap = '50%';
            detail_btn.innerHTML = "Details";
        }
        isfiewer = !isfiewer;
    })

    let boxes = document.querySelectorAll(".pic")
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible")
                entry.target.classList.remove("fade-in")
            }
            else {
                entry.target.classList.remove("visible")
                entry.target.classList.add("fade-in")
            }
        })
    }, {
        threshold: 0.5
    })
    boxes.forEach(pic => observer.observe(pic))
