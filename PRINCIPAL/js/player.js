! function() {
    var e = "v4";
    try {
        var t = new URLSearchParams(window.location.search),
            i = t.get("playerVersion");
        i && (e = i)
    } catch (o) {
        console.error("Error getting version from search params", o)
    }
    if (!document.getElementById("vturb-smartplayer-js")) {
        var I = document.createElement("script"),
            M = "https://scripts.converteai.net/lib/js/smartplayer-wc/" + e;
        try {
            var a = t.get("playerHost");
            a && (M = decodeURIComponent(a))
        } catch (o) {
            console.error("error getting playerHost from search params", o)
        }
        I.src = M + "/smartplayer.js", I.id = "vturb-smartplayer-js", I.fetchPriority = "high", document.head.appendChild(I)
    }
}(),
function() {
    var e = document.getElementById("vid-692649378d670288e16b23f3"),
        t = function(e) {
            e.id = "vid-692649378d670288e16b23f3"
        };
    e ? 0 === e.children.length && t(e) : (t(e = document.createElement("vturb-smartplayer")), "head" === document.currentScript.parentNode.tagName.toLowerCase() ? document.body.insertBefore(e, document.body.firstChild) : document.currentScript.parentNode.insertBefore(e, document.currentScript))
}(),
function(e, t) {
    e._plt = e._plt || (t && t.timeOrigin ? t.timeOrigin + t.now() : Date.now() - 60)
}(window, performance),
function() {
    var e = document.getElementById("vid-692649378d670288e16b23f3");
    e.style.maxWidth = window.innerWidth <= 450 ? "100%" : "400px", e.start = function(t) {
        e.setup ? e.setup(t) : this._setup = t
    };
    var t = {
            "callActions": {
                "active": !1,
                "version": 1,
                "items": []
            },
            "cdn": "cdn.converteai.net",
            "conversion": [],
            "fakeBar": {
                "active": !0,
                "alpha": 2,
                "height": 10,
                "color": "#E77E11"
            },
            "headlines": {
                "active": !1,
                "items": []
            },
            "id": "692649378d670288e16b23f3",
            "language": null,
            "minihooks": {
                "active": !1,
                "items": []
            },
            "oid": "e908bb80-ff3b-42a3-bb7d-50de57ee68b5",
            "pitchTime": 90,
            "pixels": {
                "active": !1,
                "items": []
            },
            "playback": {
                "active": !1,
                "actionAfterFinish": null,
                "scrollToActionIn": null
            },
            "playerInit": {
                "aspectRatio": 160.56,
                "thumbnailKey": "e908bb80-ff3b-42a3-bb7d-50de57ee68b5/players/692649378d670288e16b23f3/thumbnail.jpg",
                "verticalVideo": !0,
                "customId": null
            },
            "resume": {
                "active": !0,
                "model": "default",
                "backgroundColor": "#E77E11",
                "disablePause": !1,
                "foregroundColor": "#FFFFFF",
                "play": "Continuar assistindo?",
                "replay": "Assistir do in\xedcio?",
                "title": "Voc\xea j\xe1 come\xe7ou a assistir esse v\xeddeo"
            },
            "secure": !1,
            "smartAutoPlay": {
                "active": !0,
                "items": [{
                    "id": "smart_autoplay_692649378d670288e16b23f3_1_bf901845",
                    "name": "Smart Autoplay",
                    "number": 1,
                    "version": "2",
                    "startAt": null,
                    "endAt": null,
                    "elements": [{
                        "height": 180,
                        "id": "69264958bc1175f678cd0b57",
                        "opacity": 1,
                        "order": 1,
                        "rotation": 0,
                        "type": "box",
                        "width": 324,
                        "x": 198,
                        "y": 488,
                        "transformOrigin": null,
                        "properties": {
                            "border": {
                                "color": "#FFFFFF",
                                "size": 1.5,
                                "type": "solid"
                            },
                            "color": "rgba(90, 167, 56, 0.96)",
                            "radius": 6
                        }
                    }, {
                        "height": 30,
                        "id": "69264958bc1175f678cd0b58",
                        "opacity": 1,
                        "order": 2,
                        "rotation": 0,
                        "type": "text",
                        "width": 324,
                        "x": 198,
                        "y": 504,
                        "transformOrigin": null,
                        "properties": {
                            "align": "center",
                            "color": "#FFFFFF",
                            "size": 20,
                            "value": "Seu v\xeddeo j\xe1 come\xe7ou",
                            "weight": "700"
                        }
                    }, {
                        "height": 30,
                        "id": "69264958bc1175f678cd0b59",
                        "opacity": 1,
                        "order": 3,
                        "rotation": 0,
                        "type": "text",
                        "width": 324,
                        "x": 198,
                        "y": 622,
                        "transformOrigin": null,
                        "properties": {
                            "align": "center",
                            "color": "#FFFFFF",
                            "size": 20,
                            "value": "Clique para ouvir",
                            "weight": "700"
                        }
                    }, {
                        "height": 72,
                        "id": "69264958bc1175f678cd0b5a",
                        "opacity": 1,
                        "order": 4,
                        "rotation": 0,
                        "type": "image",
                        "width": 102,
                        "x": 309,
                        "y": 542,
                        "transformOrigin": null,
                        "properties": {
                            "alt": "Seu v\xeddeo j\xe1 come\xe7ou",
                            "src": "data:image/svg+xml;base64,CiAgICA8c3ZnIHZlcnNpb249IjEuMSIgZmlsbD0iI0ZGRkZGRiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIKICAgICAgICB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjQ2Ljc1cHgiIGhlaWdodD0iMzIuNTYzcHgiIHZpZXdCb3g9IjcuOTk5IDkuMDYyIDQ2Ljc1IDMyLjU2MyIKICAgICAgICBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDcuOTk5IDkuMDYyIDQ2Ljc1IDMyLjU2MyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIKICAgID4KICAgICAgPHN0eWxlPgogICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBCTElOSyB7CiAgICAgICAgICAwJSB7IG9wYWNpdHk6IDA7IH0KICAgICAgICAgIDMzJSB7IG9wYWNpdHk6IDE7IH0KICAgICAgICAgIDY2JSB7IG9wYWNpdHk6IDE7IH0KICAgICAgICAgIDEwMCUgeyBvcGFjaXR5OiAwOyB9CiAgICAgICAgfQoKICAgICAgICBAa2V5ZnJhbWVzIEJMSU5LIHsKICAgICAgICAgIDAlIHsgb3BhY2l0eTogMDsgfQogICAgICAgICAgMzMlIHsgb3BhY2l0eTogMTsgfQogICAgICAgICAgNjYlIHsgb3BhY2l0eTogMTsgfQogICAgICAgICAgMTAwJSB7IG9wYWNpdHk6IDA7IH0KICAgICAgICB9CgogICAgICAgIC5hbmltYXRpb24gLmJsaW5rXzEgewogICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IEJMSU5LIDJzIGluZmluaXRlOwogICAgICAgICAgYW5pbWF0aW9uOiBCTElOSyAycyBpbmZpbml0ZTsKICAgICAgICAgIG9wYWNpdHk6IDA7CiAgICAgICAgfQoKICAgICAgICAuYW5pbWF0aW9uIC5ibGlua18yIHsKICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBCTElOSyAycyBpbmZpbml0ZSAuM3M7CiAgICAgICAgICBhbmltYXRpb246IEJMSU5LIDJzIGluZmluaXRlIC4zczsKICAgICAgICAgIG9wYWNpdHk6IDA7CiAgICAgICAgfQoKICAgICAgICAuYW5pbWF0aW9uIC5ibGlua18zIHsKICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBCTElOSyAycyBpbmZpbml0ZSAuNnM7CiAgICAgICAgICBhbmltYXRpb246IEJMSU5LIDJzIGluZmluaXRlIC42czsKICAgICAgICAgIG9wYWNpdHk6IDA7CiAgICAgICAgfQoKICAgICAgICAuYW5pbWF0aW9uIC5zbWFydHBsYXktc3ZnLWNvbG9yIHsKICAgICAgICAgIGZpbGw6ICcjRkZGRkZGJyAhaW1wb3J0YW50OwogICAgICAgIH0KCiAgICAgICAgLmFuaW1hdGlvbi5hZGp1c3RhYmxlIHsKICAgICAgICAgIGJvcmRlcjogNHB4IHNvbGlkICcjRkZGRkZGJzsKICAgICAgICB9CiAgICAgIDwvc3R5bGU+CgogICAgICA8ZyBjbGFzcz0iYWRqdXN0YWJsZSBmZyBhbmltYXRpb24iPgogICAgICAgIDxwYXRoIGNsYXNzPSJzbWFydHBsYXktc3ZnLWNvbG9yIiBkPSJNNTMuMjQ5LDM5LjYxNmMtMC4xODYsMC0wLjM3MS0wLjA1MS0wLjUzNy0wLjE1N2wtNDMuNS0yNy43NWMtMC40NjYtMC4yOTctMC42MDMtMC45MTYtMC4zMDYtMS4zODFjMC4yOTgtMC40NjYsMC45MTctMC42MDEsMS4zODEtMC4zMDZsNDMuNSwyNy43NWMwLjQ2NywwLjI5NywwLjYwNCwwLjkxNiwwLjMwNywxLjM4MUM1My45MDEsMzkuNDUzLDUzLjU3OSwzOS42MTYsNTMuMjQ5LDM5LjYxNnoiPjwvcGF0aD4KICAgICAgICA8cGF0aCBjbGFzcz0iYmxpbmtfMyBzbWFydHBsYXktc3ZnLWNvbG9yIiBkPSJNNDguODk2LDMzLjQ2N2wxLjY5OSwxLjA4NWMzLjQ5Ny03Ljc5MSwyLjA3My0xNy4yNzEtNC4zMTMtMjMuNjU5Yy0wLjM5MS0wLjM5MS0xLjAyMy0wLjM5MS0xLjQxNCwwcy0wLjM5MSwxLjAyMywwLDEuNDE0QzUwLjU4MSwxOC4wMTksNTEuOTEzLDI2LjQ2Myw0OC44OTYsMzMuNDY3eiI+PC9wYXRoPgogICAgICAgIDxwYXRoIGNsYXNzPSJibGlua18zIHNtYXJ0cGxheS1zdmctY29sb3IiIGQ9Ik00Ni45MjYsMzYuOTU2Yy0wLjYxMiwwLjg2My0xLjI4NiwxLjY5NS0yLjA1OSwyLjQ2OWMtMC4zOTIsMC4zOTEtMC4zOTIsMS4wMjMsMCwxLjQxNGMwLjE5NCwwLjE5NSwwLjQ1LDAuMjkzLDAuNzA3LDAuMjkzYzAuMjU2LDAsMC41MTItMC4wOTgsMC43MDYtMC4yOTNjMC44NzgtMC44NzgsMS42NDItMS44MjQsMi4zMzMtMi44MDdMNDYuOTI2LDM2Ljk1NnoiPjwvcGF0aD4KICAgICAgICA8cGF0aCBjbGFzcz0iYmxpbmtfMiBzbWFydHBsYXktc3ZnLWNvbG9yIiBkPSJNNDIuNTQzLDI5LjQxNWwxLjc3NywxLjEzNWMxLjU0NS01LjMxNSwwLjIyOS0xMS4yOTMtMy45NTMtMTUuNDc2Yy0wLjM5Mi0wLjM5MS0xLjAyMy0wLjM5MS0xLjQxNCwwYy0wLjM5MiwwLjM5MS0wLjM5MiwxLjAyMywwLDEuNDE0QzQyLjQ1NCwxOS45ODcsNDMuNjM5LDI0LjkyNSw0Mi41NDMsMjkuNDE1eiI+PC9wYXRoPgogICAgICAgIDxwYXRoIGNsYXNzPSJibGlua18yIHNtYXJ0cGxheS1zdmctY29sb3IiIGQ9Ik00MSwzMy4xNzRjLTAuNTYzLDAuOTQtMS4yMzUsMS44MzctMi4wNDcsMi42NDZjLTAuMzkxLDAuMzkyLTAuMzkxLDEuMDIzLDAsMS40MTRjMC4xOTUsMC4xOTUsMC40NTEsMC4yOTMsMC43MDcsMC4yOTNzMC41MTItMC4wOTgsMC43MDctMC4yOTNjMC45MTYtMC45MTQsMS42NzYtMS45MjQsMi4zMTctMi45ODRMNDEsMzMuMTc0eiI+PC9wYXRoPgogICAgICAgIDxwYXRoIGNsYXNzPSJibGlua18xIHNtYXJ0cGxheS1zdmctY29sb3IiIGQ9Ik0zNS43NzEsMjUuMDk0bDIuMDAzLDEuMjc3YzAuMDEyLTAuMjAzLDAuMDI5LTAuNDA0LDAuMDI5LTAuNjA5YzAtMy4wNzktMS4yLTUuOTc0LTMuMzgxLTguMTUzYy0wLjM5MS0wLjM5MS0xLjAyMi0wLjM5MS0xLjQxNCwwYy0wLjM5MSwwLjM5MS0wLjM5MSwxLjAyMywwLDEuNDE0QzM0LjY1MiwyMC42NjYsMzUuNjEzLDIyLjgwMiwzNS43NzEsMjUuMDk0eiI+PC9wYXRoPgogICAgICAgIDxwYXRoIGNsYXNzPSJibGlua18xIHNtYXJ0cGxheS1zdmctY29sb3IiIGQ9Ik0zNS4wODQsMjkuNDAxYy0wLjQ3NCwxLjE0NS0xLjE3MiwyLjE5Ny0yLjA3NiwzLjFjLTAuMzkxLDAuMzkxLTAuMzkxLDEuMDIzLDAsMS40MTRjMC4xOTUsMC4xOTUsMC40NTEsMC4yOTMsMC43MDcsMC4yOTNjMC4yNTcsMCwwLjUxMy0wLjA5OCwwLjcwNy0wLjI5M2MxLjAwOC0xLjAwNiwxLjc5NS0yLjE3LDIuMzYxLTMuNDNMMzUuMDg0LDI5LjQwMXoiPjwvcGF0aD4KICAgICAgICA8cG9seWdvbiBjbGFzcz0ic21hcnRwbGF5LXN2Zy1jb2xvciIgcG9pbnRzPSIyOC4xMjQsMjAuMjE1IDI4LjEyNCwxNC45OTEgMjQuNjM1LDE3Ljk5ICAiPjwvcG9seWdvbj4KICAgICAgICA8cGF0aCBjbGFzcz0ic21hcnRwbGF5LXN2Zy1jb2xvciIgZD0iTTIwLjkyMSwyMC4zNjZoLTYuNDIzYy0wLjU1MywwLTEsMC41MDgtMSwxLjEzNXY4LjIyOWMwLDAuNjI3LDAuNDQ3LDEuMTM1LDEsMS4xMzVoNy4zNzVsNi4yNSw1Ljg3NVYyNC45NkwyMC45MjEsMjAuMzY2eiI+PC9wYXRoPgogICAgICA8L2c+CiAgICA8L3N2Zz4KICA="
                        }
                    }]
                }]
            },
            "style": {
                "background": "#3D85C6",
                "bigPlay": !1,
                "captions": !1,
                "foreground": "#FFFFFF",
                "forward": !1,
                "fullscreen": !1,
                "progressBar": !1,
                "rewind": !1,
                "smallPlay": !0,
                "speed": !1,
                "videoTime": !1,
                "volume": !1
            },
            "subtitles": {
                "active": !1
            },
            "thumbsniper": {
                "active": !1,
                "items": []
            },
            "turbo": {
                "active": !1
            },
            "video": {
                "id": "6926482088d49382e130f798",
                "aspectRatio": 1.6056,
                "height": 1156,
                "poster": "https://cdn.converteai.net/e908bb80-ff3b-42a3-bb7d-50de57ee68b5/6926482088d49382e130f798/poster.jpg",
                "width": 720,
                "drm": !1
            }
        },
        i = null,
        I = window.navigator.userAgent.match(/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/),
        M = (I = I && I[0]) ? t : i || t;
    e.id !== "vid-" + M.id && (e.id = "vid-" + M.id, e.innerHTML = ""), e.style.display = "block", e.style.margin = "0 auto", e.style.width = "100%", 0 === e.children.length && ("692649378d670288e16b23f3" === M.id ? (e.innerHTML = "<div slot=\"preload\" class=\"preload preload--netflix\" style=\" position: relative; width: 100%; padding: 160.56% 0 0; z-index: 0;\"> <div id=\"loading_692649378d670288e16b23f3\" class=\"vt-loading-wrapper\"> <div class=\"vt-loading-android-spinner\"></div> <div class=\"vt-loading-percentage\">50%</div> </div> </div> <style>\n  [class^=\"vt-loading\"]{box-sizing:border-box;font-family:Arial,Helvetica,sans-serif;text-decoration:none}.vt-loading-wrapper{position:absolute;top:0;left:0;width:100%;height:100%;z-index:99999;background-color:#000;color:#fff;display:flex!important;justify-content:center;align-items:center}.vt-loading-percentage{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);font-size:18px;font-weight:600}#smartplayer .vt-loading-percentage{content:\"99%\"}.vt-loading-android-spinner{width:80px;aspect-ratio:1;border-radius:50%;background:radial-gradient(farthest-side,#E50914 94%,#0000) top/8px 8px no-repeat,conic-gradient(#0000 30%,#E50914);-webkit-mask:radial-gradient(farthest-side,#0000 calc(100% - 8px),#000 0);animation:vt-loading-android-spinner-animation .75s infinite linear}@keyframes vt-loading-android-spinner-animation{100%{transform:rotate(1turn)}}\n</style>", function() {
        var e = document.querySelector(".vt-loading-percentage");
        if (e) var t = 50,
            i = setInterval(function() {
                t++, e.textContent = t + "%", t >= 99 && clearInterval(i)
            }, 30)
    }()) : e.innerHTML = "<div class=\"thumbnail\" style=\" position: relative; width: 100%; padding: " + M.playerInit.aspectRatio + "% 0 0; z-index: 0;\"><img class=\"thumbnail-image\" src=\"https://images.converteai.net/" + M.playerInit.thumbnailKey + "\" style=\" position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; display: block;  \" /></div>"), e.start(M)
}();