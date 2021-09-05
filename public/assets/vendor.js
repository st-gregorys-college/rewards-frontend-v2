const e = document.querySelectorAll(".navbar-nav .dropdown, .navbar-nav .dropend")
    , t = ["mouseenter"]
    , o = ["mouseleave", "click"];
e.forEach((function(e) {
    const n = e.querySelector(".dropdown-menu");
    t.forEach((function(t) {
        e.addEventListener(t, (function() {
            !function(e) {
                window.innerWidth < 992 || (e.classList.add("showing"),
                setTimeout((function() {
                    e.classList.remove("showing"),
                    e.classList.add("show")
                }
                ), 1))
            }(n)
        }
        ))
    }
    )),
    o.forEach((function(t) {
        e.addEventListener(t, (function(e) {
            !function(e, t) {
                setTimeout((function() {
                    window.innerWidth < 992 || t.classList.contains("show") && ("click" === e.type && e.target.closest(".dropdown-menu form") || (t.classList.add("showing"),
                    t.classList.remove("show"),
                    setTimeout((function() {
                        t.classList.remove("showing")
                    }
                    ), 200)))
                }
                ), 2)
            }(e, n)
        }
        ))
    }
    ))
}
))