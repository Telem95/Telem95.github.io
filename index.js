function copyToClipboard(text) {
    var dummy = document.createElement("textarea");
    // to avoid breaking orgain page when copying more words
    // cant copy when adding below this code
    // dummy.style.display = 'none'
    document.body.appendChild(dummy);
    //Be careful if you use texarea. setAttribute('value', value), which works with "input" does not work with "textarea". – Eduard
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);

    // alert("Email copied to clipboard")
}

function myFunction() {
    // var copyText = document.getElementById("myInput");
    // copyText.select();
    // copyText.setSelectionRange(0, 99999);
    // document.execCommand("copy");
    copyToClipboard("telem16@gmail.com")

    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied email";
  }
  
  function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
  }