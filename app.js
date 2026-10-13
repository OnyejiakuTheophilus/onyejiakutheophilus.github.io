/* Builds the page from content.js. You should not need to edit this file. */
(function () {
  "use strict";
  var C = window.CONTENT;
  if (!C) { document.body.insertAdjacentHTML("afterbegin", "<p style='padding:2rem'>content.js did not load. Check that it is in the same folder as index.html.</p>"); return; }

  var $ = function (id) { return document.getElementById(id); };
  var esc = function (s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };
  var isExternal = function (u) { return /^https?:\/\//i.test(u); };
  var attrs = function (u) { return isExternal(u) ? ' target="_blank" rel="noopener noreferrer"' : ""; };
  var link = function (label, url) { return '<a href="' + esc(url) + '"' + attrs(url) + ">" + esc(label) + "</a>"; };

  /* ---------- Hero ---------- */
  var S = C.site;
  document.title = S.name + " | " + S.role;
  $("brand").textContent = S.name;
  $("h-name").textContent = S.name;
  $("h-role").textContent = S.role;
  $("h-intro").textContent = S.intro;

  var photo = $("h-photo"), initials = $("h-initials");
  initials.textContent = S.name.split(/\s+/).filter(Boolean).slice(0, 2).map(function (w) { return w[0]; }).join("").toUpperCase();
  photo.alt = "Photo of " + S.name;
  photo.onerror = function () { $("avatar").classList.add("no-photo"); };
  if (S.photo && S.photo.trim()) { photo.src = S.photo.trim(); } else { $("avatar").classList.add("no-photo"); }

  $("stats").innerHTML = (C.stats || []).map(function (s) {
    return '<div class="stat"><b>' + esc(s.value) + "</b><span>" + esc(s.label) + "</span></div>";
  }).join("");

  /* ---------- Projects ---------- */
  function media(p, i, big) {
    var inner;
    if (p.video) {
      inner = '<video controls preload="metadata" playsinline' + (p.image ? ' poster="' + esc(p.image) + '"' : "") +
        ' aria-label="Demo video: ' + esc(p.title) + '"><source src="' + esc(p.video) + '"></video>';
    } else if (p.youtube) {
      inner = '<iframe src="https://www.youtube-nocookie.com/embed/' + esc(p.youtube) + '" title="Demo video: ' + esc(p.title) +
        '" loading="lazy" allow="accelerometer; encrypted-media; picture-in-picture" allowfullscreen></iframe>';
    } else if (p.image) {
      inner = '<img src="' + esc(p.image) + '" alt="' + esc(p.title) + '" loading="lazy">';
    } else {
      inner = '<div class="tile t' + (i % 6) + '">' + esc(p.category || p.title) + "</div>";
    }
    return '<div class="media">' + inner + "</div>";
  }

  function hasMedia(p) { return !!(p.video || p.youtube || p.image); }

  function projectBody(p) {
    /* when there is no video or image, the coloured tile already shows the category */
    var cat = hasMedia(p) ? esc(p.category) : "";
    var st = p.status ? '<span class="status' + (cat ? "" : " solo") + '">' + esc(p.status) + "</span>" : "";
    var h = (cat || st) ? '<div class="cat">' + cat + st + "</div>" : "";
    h += "<h3>" + esc(p.title) + "</h3>";
    h += '<p class="summary">' + esc(p.summary) + "</p>";
    if (p.metrics && p.metrics.length) {
      h += '<dl class="metrics">' + p.metrics.map(function (m) {
        return "<div><dt>" + esc(m.label) + "</dt><dd>" + esc(m.value) + "</dd></div>";
      }).join("") + "</dl>";
    }
    if (p.tags && p.tags.length) h += '<ul class="tags">' + p.tags.map(function (t) { return "<li>" + esc(t) + "</li>"; }).join("") + "</ul>";
    if (p.links && p.links.length) h += '<div class="plinks">' + p.links.map(function (l) { return link(l.label, l.url); }).join("") + "</div>";
    return h;
  }

  var projects = C.projects || [];
  var out = "";
  if (projects.length) {
    out += '<article class="feature">' + media(projects[0], 0, true) + '<div class="body">' + projectBody(projects[0]) + "</div></article>";
  }
  if (projects.length > 1) {
    out += '<div class="grid">' + projects.slice(1).map(function (p, i) {
      return '<article class="card">' + media(p, i + 1) + '<div class="body">' + projectBody(p) + "</div></article>";
    }).join("") + "</div>";
  }
  $("project-list").innerHTML = out;

  /* ---------- Writing ---------- */
  $("writing-intro").textContent = C.writingIntro || "";
  $("publishers").innerHTML = (C.publishers && C.publishers.length)
    ? "Published with " + C.publishers.map(function (p) { return link(p.name, p.url); }).join("")
    : "";

  var articles = C.articles || [];
  var pubs = [];
  articles.forEach(function (a) { if (pubs.indexOf(a.publisher) < 0) pubs.push(a.publisher); });
  var active = "All";

  function renderArticles() {
    $("article-list").innerHTML = articles
      .filter(function (a) { return active === "All" || a.publisher === active; })
      .map(function (a) {
        return "<li><a class=\"t\" href=\"" + esc(a.url) + "\"" + attrs(a.url) + ">" + esc(a.title) + "</a>" +
          '<span class="pub">' + esc(a.publisher) + "</span>" +
          (a.topic ? '<span class="topic">' + esc(a.topic) + "</span>" : "") + "</li>";
      }).join("");
    Array.prototype.forEach.call($("filters").children, function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.v === active));
    });
  }
  $("filters").innerHTML = ["All"].concat(pubs).map(function (p) {
    return '<button type="button" class="chip" data-v="' + esc(p) + '" aria-pressed="false">' + esc(p) + "</button>";
  }).join("");
  $("filters").addEventListener("click", function (e) {
    var b = e.target.closest("button");
    if (!b) return;
    active = b.dataset.v;
    renderArticles();
  });
  renderArticles();

  /* ---------- Data work ---------- */
  $("data-list").innerHTML = (C.dataWork || []).map(function (d) {
    return '<li><span class="t">' + esc(d.title) + "</span>" +
      (d.url ? '<span class="go">' + link(d.label || "Open", d.url) + "</span>" : "<span></span>") +
      '<span class="note">' + esc(d.note) + "</span></li>";
  }).join("");

  /* ---------- About ---------- */
  $("about-text").innerHTML = (C.about || []).map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("");
  function iconFor(t) {
    var mono = esc(t.name.replace(/[^A-Za-z0-9]/g, "").slice(0, 3));
    var img = t.icon ? '<img src="' + esc(t.icon) + '" alt="" loading="lazy" onerror="this.parentNode.classList.add(\'fallback\');this.remove()">' : "";
    return '<span class="ico' + (t.icon ? "" : " fallback") + '" data-mono="' + mono + '">' + img + "</span>";
  }
  $("tools").innerHTML = (C.skills || []).map(function (g) {
    return '<div class="tool-group"><h4>' + esc(g.group) + '</h4><ul>' + (g.items || []).map(function (t) {
      return '<li class="tool">' + iconFor(t) + "<span>" + esc(t.name) + "</span></li>";
    }).join("") + "</ul></div>";
  }).join("");
  if (C.education) {
    $("education").innerHTML = "<b>" + esc(C.education.degree) + "</b><br>" + esc(C.education.school) + "<br>" + esc(C.education.detail);
  }

  /* ---------- Contact ---------- */
  $("email-btn").setAttribute("href", "mailto:" + S.email);
  $("email-btn").textContent = "Email " + S.email;
  $("links").innerHTML = (C.links || []).map(function (l) { return "<li>" + link(l.label, l.url) + "</li>"; }).join("");
  var form = $("mail-form"), statusEl = $("mail-status"), sendBtn = $("mail-send");
  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var d = new FormData(form);
    if (!d.get("name").trim() || !/^\S+@\S+\.\S+$/.test(d.get("email").trim()) || !d.get("message").trim()) {
      statusEl.className = "form-note err";
      statusEl.textContent = "Please fill in your name, a valid email and a message.";
      return;
    }
    sendBtn.disabled = true; statusEl.className = "form-note"; statusEl.textContent = "Sending...";
    var payload = {
      name: d.get("name"), email: d.get("email"),
      subject: d.get("subject") || "Message from your portfolio",
      message: d.get("message"), _honey: d.get("_honey"),
      _subject: "Portfolio message: " + (d.get("subject") || d.get("name")),
      _replyto: d.get("email"), _template: "table", _captcha: "false"
    };
    fetch("https://formsubmit.co/ajax/" + S.email, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify(payload)
    }).then(function (r) { return r.json(); }).then(function (j) {
      if (String(j.success) !== "true") throw new Error("failed");
      form.reset();
      statusEl.className = "form-note ok";
      statusEl.textContent = "Thank you! Your message has been sent. I will reply soon.";
    }).catch(function () {
      statusEl.className = "form-note err";
      statusEl.innerHTML = "Sorry, that did not go through. Please email me directly at <a href=\"mailto:" + esc(S.email) + "\">" + esc(S.email) + "</a>.";
    }).then(function () { sendBtn.disabled = false; });
  });

  $("foot").textContent = "© " + new Date().getFullYear() + " " + S.name + ". Built with plain HTML, CSS and JavaScript.";
})();
