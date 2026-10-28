// Our Brands: shared config. Order is fixed: Aquamark, Secure Broker, Secure Funder, FinDex.
// To use a logo, add the approved file under /logos and set `logo` to its path.
// Brands without a logo show their name as text until the approved file is added.
(function () {
  var BRANDS = [
    { name: "Aquamark", url: "https://aquamark.io", logo: "" },
    { name: "Secure Broker", url: "https://securebroker.org", logo: "" },
    { name: "Secure Funder", url: "https://securefunder.org", logo: "" },
    { name: "FinDex", url: "https://joinfindex.com", logo: "" }
  ];

  var row = document.getElementById("brand-row");
  if (!row) return;

  BRANDS.forEach(function (b) {
    var li = document.createElement("li");
    var a = document.createElement("a");
    a.href = b.url;
    a.setAttribute("aria-label", b.name + " homepage");
    if (b.logo) {
      var img = document.createElement("img");
      img.src = b.logo;
      img.alt = b.name;
      a.appendChild(img);
    } else {
      var span = document.createElement("span");
      span.className = "brand-text";
      span.textContent = b.name;
      a.appendChild(span);
    }
    li.appendChild(a);
    row.appendChild(li);
  });
})();
