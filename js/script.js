document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".dropdown-toggle").forEach(toggle => {
        toggle.addEventListener("click", (event) => {
            event.stopPropagation();
            const listItem = toggle.parentElement;
            const isActive = listItem.classList.contains("active");
            document.querySelectorAll(".menu li.active").forEach(item => {
                item.classList.remove("active");
                item.querySelector(".dropdown-toggle").setAttribute("aria-expanded", "false");
            });
            if (!isActive) {
                listItem.classList.add("active");
                toggle.setAttribute("aria-expanded", "true");
            }
        });
    });

    document.addEventListener("click", event => {
        if (!event.target.closest(".dropdown")) {
            document.querySelectorAll(".menu li.active").forEach(item => {
                item.classList.remove("active");
                item.querySelector(".dropdown-toggle").setAttribute("aria-expanded", "false");
            });
        }
    });

    const gameData = {
        "sinh-ton": {
            name: "Minecraft",
            video: "https://www.youtube.com/watch?v=MmB9b5njVbA",
            link: "https://www.minecraft.net/en-us",
            description: "Minecraft là một trò chơi sandbox nổi tiếng, nơi người chơi có thể xây dựng và khám phá thế giới mở không giới hạn.",
            backgroundImage: "../images/minecraft-background-cfljc4haleghnajo.jpg"
        },
        "hanh-dong": {
            name: "Assassin's Creed Shadows",
            video: "https://www.youtube.com/watch?v=vovkzbtYBC8",
            link: "https://www.ubisoft.com/en-sg/",
            description: "Assassin's Creed Shadows là phần mới nhất trong series hành động phiêu lưu, lấy bối cảnh Nhật Bản thời phong kiến.",
            backgroundImage: "../images/8672297_Cover-ACS.webp"
        },
        "nhap-vai": {
            name: "Final Fantasy XIV",
            video: "https://youtu.be/1bzWvyncQh8",
            link: "https://eu.finalfantasyxiv.com/",
            description: "Final Fantasy XIV là một MMORPG nổi tiếng với cốt truyện sâu sắc và thế giới giả tưởng rộng lớn.",
            backgroundImage: "../images/Vvvbbsi3774hfiaoolfb_1920x1040.jpg"
        },
        "FPS-TPS": {
            name: "Valorant",
            video: "https://www.youtube.com/watch?v=OHzUoFKPUB0",
            link: "https://valorant.vnggames.com/vi-vn/",
            description: "Valorant là một trò chơi bắn súng góc nhìn thứ nhất chiến thuật, nơi kỹ năng và phối hợp đội nhóm là chìa khóa.",
            backgroundImage: "../images/valorant-game-ban-sung-chien-thuat-dau-tien-cua-riot-23-09-2020-3.jpg"
        },
        "chien-luoc": {
            name: "Arknights",
            video: "https://www.youtube.com/watch?v=--xJQ5oNcCA",
            link: "https://arknights.global/",
            description: "Arknights là một tựa game chiến thuật thủ tháp kết hợp nhập vai, với đồ họa anime đẹp mắt.",
            backgroundImage: "../images/arknights-4k-waggbbwkw7f8w8dg.jpg"
        },
        "sports": {
            name: "Forza Horizon",
            video: "https://www.youtube.com/watch?v=5xy4n73WOMM",
            link: "https://forza.net/horizon",
            description: "Forza Horizon là một trò chơi đua xe thế giới mở nổi tiếng với đồ họa chân thực và trải nghiệm lái xe đỉnh cao.",
            backgroundImage: "../images/e3-2016-forza-horizon-3-le-hoi-than-gio-gioi-thieu-game-01.jpg"
        },
        "battle-royal": {
            name: "PUBG",
            video: "https://youtu.be/h0s5X6pyhd0",
            link: "https://www.pubg.com/vi/main",
            description: "PUBG là một trò chơi bắn súng sinh tồn, nơi 100 người chơi chiến đấu để trở thành người sống sót cuối cùng.",
            backgroundImage: "../images/pubg-mobile-game-image-4.jpg"
        }
    };

    const esportData = {
        "LCK": {
            name: "LCK SPRING 2025",
            video: "https://www.youtube.com/watch?v=zchN1X4LcJ8",
            link: "https://lolesports.com/vi-VN",
            description: "Bình Luận Tiếng Việt: DK vs GEN | NS vs DRX | Tuần 2 Ngày 5 | LCK 2025",
            backgroundImage: "esport/LCK_BG.jpg"
        },
        "LCP": {
            name: "LCP MID SEASON 2025",
            video: "https://www.youtube.com/watch?v=TotOfIwW6k8",
            link: "https://lolesports.com/vi-VN",
            description: "CFO vs TLN (BO5) | Chung Kết Tổng - Khởi Động Mùa Giải LCP 2025",
            backgroundImage: "esport/LCP_BG.jpg"
        },
        "DTDV": {
            name: "DTDV SPRING 2025",
            video: "https://www.youtube.com/watch?v=Dc8ZpJHXofU",
            link: "https://lienquan.garena.vn/tin-tuc/giai-dau/",
            description: "BOX vs TDT | BSS vs 1S | SGP vs FPT - GĐ1 | ABBEN ENERGY ĐTDV MÙA XUÂN 2025 | 06/04/2025",
            backgroundImage: "/esport/DTDV_BG.jpg"
        },
        "VCT": {
            name: "VCT 2025 - Pacific Stage 1",
            video: "https://www.youtube.com/watch?v=s2nFDnMtdcI",
            link: "https://valorantesports.com/vi-VN/",
            description: "[VN] VCT 2025 - Pacific Stage 1 | Group Stage - NGÀY 11",
            backgroundImage: "/esport/VCT_BG.jpg"
        }
    };

    function youtube_parser(url) {
        const regExp = /(?:youtube\.com\/.*[?&]v=|youtu\.be\/)([^#&?]{11})/;
        const match = url.match(regExp);
        return match ? match[1] : null;
    }

    const gameDetailsSection = document.getElementById("game-details");
    const gameVideoDiv = document.getElementById("game-video");
    const gameLinkDiv = document.getElementById("game-link");
    const gameDescriptionDiv = document.getElementById("game-description");
    let currentGamePlayer = null;

    function showGameDetails(game) {
        const data = gameData[game];
        if (!data) return;

        if (currentGamePlayer && typeof currentGamePlayer.stopVideo === "function") {
            currentGamePlayer.stopVideo();
        }

        gameVideoDiv.innerHTML = "";
        const videoId = youtube_parser(data.video);
        if (videoId) {
            const iframe = document.createElement("iframe");
            iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0&enablejsapi=1`;
            iframe.frameBorder = "0";
            iframe.allow = "autoplay; encrypted-media";
            iframe.allowFullscreen = true;
            gameVideoDiv.appendChild(iframe);

            iframe.onload = () => {
                currentGamePlayer = new YT.Player(iframe, {
                    events: {
                        onReady: () => {}
                    }
                });
            };
        } else {
            gameVideoDiv.innerHTML = "<p>Video không khả dụng.</p>";
        }

        gameLinkDiv.innerHTML = `<a href="${data.link}" target="_blank">${data.name}</a>`;
        gameDescriptionDiv.textContent = data.description;
        gameDetailsSection.style.display = "flex";

        document.body.style.background = `url('${data.backgroundImage}') no-repeat center center fixed`;
        document.body.style.backgroundSize = "cover";
    }

    const esportDetailsSection = document.getElementById("esport-details");
    const esportVideoDiv = document.getElementById("esport-video");
    const esportLinkDiv = document.getElementById("esport-link");
    const esportDescriptionDiv = document.getElementById("esport-description");
    let currentEsportPlayer = null;

    function showEsportDetails(match) {
        const data = esportData[match];
        if (!data) return;

        if (currentEsportPlayer && typeof currentEsportPlayer.stopVideo === "function") {
            currentEsportPlayer.stopVideo();
        }

        esportVideoDiv.innerHTML = "";
        const videoId = youtube_parser(data.video);
        if (videoId) {
            const iframe = document.createElement("iframe");
            iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0&enablejsapi=1`;
            iframe.frameBorder = "0";
            iframe.allow = "autoplay; encrypted-media";
            iframe.allowFullscreen = true;
            esportVideoDiv.appendChild(iframe);

            iframe.onload = () => {
                currentEsportPlayer = new YT.Player(iframe, {
                    events: {
                        onReady: () => {}
                    }
                });
            };
        } else {
            esportVideoDiv.innerHTML = "<p>Video không khả dụng.</p>";
        }

        esportLinkDiv.innerHTML = `<a href="${data.link}" target="_blank">${data.name}</a>`;
        esportDescriptionDiv.textContent = data.description;
        esportDetailsSection.style.display = "flex";

        document.body.style.background = `url('${data.backgroundImage}') no-repeat center center fixed`;
        document.body.style.backgroundSize = "cover";
    }

    document.querySelectorAll("#game-thumbnails img").forEach(img => {
        img.addEventListener("click", () => showGameDetails(img.dataset.game));
    });

    document.querySelectorAll("#esport-thumbnails img").forEach(img => {
        img.addEventListener("click", () => showEsportDetails(img.dataset.match));
    });

    document.querySelectorAll(".dropdown-content a").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const category = link.dataset.game;
            window.location.href = `../html/news.html?category=${category}`;
        });
    });

    const tabButtons = document.querySelectorAll(".tab-btn");
    const tabContents = document.querySelectorAll(".tab-content");
    const tabSwitcher = document.querySelector(".tab-switcher");

    tabButtons.forEach(button => {
        button.addEventListener("click", () => {
            tabButtons.forEach(btn => btn.classList.remove("active"));
            tabContents.forEach(content => content.classList.remove("active"));

            button.classList.add("active");
            const tabId = button.dataset.tab;
            const targetContent = document.getElementById(`${tabId}-content`);
            targetContent.classList.add("active");

            if (tabId === "home") {
                showGameDetails("sinh-ton");
            } else if (tabId === "esport") {
                showEsportDetails("LCK");
            }
        });
    });

    window.addEventListener("scroll", () => {
        const scrollY = window.scrollY;
        const threshold = 200;
        if (scrollY > threshold) {
            tabSwitcher.classList.add("fixed");
        } else {
            tabSwitcher.classList.remove("fixed");
        }
    });

    const loginBtn = document.getElementById("login-btn");
    const username = localStorage.getItem("loggedInUser");

    if (username) {
        loginBtn.textContent = username;
        loginBtn.href = "#";
        loginBtn.style.cursor = "pointer";
        loginBtn.addEventListener("click", () => {
            if (confirm("Đăng xuất?")) {
                localStorage.removeItem("loggedInUser");
                window.location.href = "../index.html";
            }
        });
    }

    showGameDetails("sinh-ton");

    if (username) {
        const adKey = `dontShowAd_${username}`;
        const dontShowAd = localStorage.getItem(adKey);
        if (!dontShowAd) {
            setTimeout(() => {
                document.getElementById("popup-ad").style.display = "flex";
            }, 1500);
        }
    } else {
        setTimeout(() => {
            document.getElementById("popup-ad").style.display = "flex";
        }, 1500);
    }

    const backToTopBtn = document.getElementById("back-to-top");
    window.addEventListener("scroll", () => {
        backToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
    });
    backToTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    window.closeAd = () => {
        const checkbox = document.getElementById("dont-show-again");
        if (checkbox.checked && username) {
            const adKey = `dontShowAd_${username}`;
            localStorage.setItem(adKey, "true");
        }
        document.getElementById("popup-ad").style.display = "none";
    };
});

const themeToggle = document.getElementById("tab-toggle");
const homeContent = document.getElementById("home-content");
const esportContent = document.getElementById("esport-content");

themeToggle.addEventListener("change", function () {
    if (this.checked) {
        homeContent.classList.remove("active");
        esportContent.classList.add("active");
    } else {
        esportContent.classList.remove("active");
        homeContent.classList.add("active");
    }
});