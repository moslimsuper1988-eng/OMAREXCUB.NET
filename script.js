// ===============================
// OMAREXCUB.NET
// script.js
// ===============================

// عند تحميل الصفحة
window.addEventListener("load", () => {
    console.log("OMAREXCUB.NET جاهز!");
    createParticles();
});

// ===============================
// تمرير إلى قسم الأخبار
// ===============================
function scrollToNews() {
    const news = document.getElementById("news");

    if (news) {
        news.scrollIntoView({
            behavior: "smooth"
        });
    }
}

// ===============================
// فتح الخبر
// ===============================
function openNews() {

    const popup = document.getElementById("newsPopup");
    const popup2=document.getElementById("newsPopup2");

    if (popup) {

        popup.style.display = "flex";

    }

}

// ===============================
// إغلاق الخبر
// ===============================
function closeNews() {

    const popup = document.getElementById("newsPopup");

    if (popup) {

        popup.style.display = "none";

    }

}

function openNews2(){const popup=document.getElementById("newsPopup2");if(popup)popup.style.display="flex";}
function closeNews2(){const popup=document.getElementById("newsPopup2");if(popup)popup.style.display="none";}

// إغلاق النافذة عند الضغط خارجها
window.addEventListener("click", function (e) {

    const popup = document.getElementById("newsPopup");

    if (e.target === popup) {

        popup.style.display = "none";

    }
    if(e.target===popup2){popup2.style.display="none";}

});

// ===============================
// نسخ IP السيرفر
// ===============================
function copyIP() {

    const input = document.getElementById("serverIP");

    navigator.clipboard.writeText(input.value)
        .then(() => {

            showNotification("✅ تم نسخ IP السيرفر");

        })
        .catch(() => {

            input.select();
            document.execCommand("copy");

            showNotification("✅ تم نسخ IP");

        });

}

// ===============================
// إشعار جميل
// ===============================
function showNotification(text) {

    let notification = document.createElement("div");

    notification.className = "notification";

    notification.innerText = text;

    document.body.appendChild(notification);

    setTimeout(() => {

        notification.classList.add("show");

    }, 100);

    setTimeout(() => {

        notification.classList.remove("show");

        setTimeout(() => {

            notification.remove();

        }, 500);

    }, 2500);

}

// ===============================
// حركة ظهور العناصر أثناء النزول
// ===============================
const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

        }

    });

});

window.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll("section").forEach(section => {

        section.classList.add("hidden");

        observer.observe(section);

    });

});

// ===============================
// جسيمات مضيئة بالخلفية
// ===============================
function createParticles() {

    const background = document.querySelector(".background");

    if (!background) return;

    for (let i = 0; i < 40; i++) {

        let particle = document.createElement("span");

        particle.classList.add("particle");

        particle.style.left = Math.random() * 100 + "%";

        particle.style.top = Math.random() * 100 + "%";

        particle.style.animationDuration =
            (5 + Math.random() * 10) + "s";

        particle.style.animationDelay =
            Math.random() * 5 + "s";

        background.appendChild(particle);

    }

}

// ===============================
// تأثير على أزرار الموقع
// ===============================
document.addEventListener("mouseover", e => {

    if (e.target.tagName === "BUTTON") {

        e.target.style.transform = "scale(1.05)";

    }

});

document.addEventListener("mouseout", e => {

    if (e.target.tagName === "BUTTON") {

        e.target.style.transform = "scale(1)";

    }

});

// ===============================
// عنوان الصفحة المتحرك
// ===============================
const titles = [

    "OMAREXCUB.NET",

    "أفضل سيرفر ماينكرافت",

    "OMAREXCUBMC",

    "مرحباً بك"

];

let titleIndex = 0;

setInterval(() => {

    document.title = titles[titleIndex];

    titleIndex++;

    if (titleIndex >= titles.length) {

        titleIndex = 0;

    }

}, 3000);

// ===============================
// العودة لأعلى الصفحة
// ===============================
const topButton = document.createElement("button");

topButton.innerHTML = "⬆";

topButton.className = "topButton";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};

// ===============================
// تأثير كتابة على العنوان
// ===============================
const heroTitle = document.querySelector(".hero h2");

if (heroTitle) {

    const text = heroTitle.innerText;

    heroTitle.innerText = "";

    let i = 0;

    function typeWriter() {

        if (i < text.length) {

            heroTitle.innerHTML += text.charAt(i);

            i++;

            setTimeout(typeWriter, 70);

        }

    }

    typeWriter();

}

// ===============================
// تأثير بسيط عند الضغط
// ===============================
document.addEventListener("click", function (e) {

    let ripple = document.createElement("span");

    ripple.className = "click-effect";

    ripple.style.left = e.pageX + "px";

    ripple.style.top = e.pageY + "px";

    document.body.appendChild(ripple);

    setTimeout(() => {

        ripple.remove();

    }, 600);

});
