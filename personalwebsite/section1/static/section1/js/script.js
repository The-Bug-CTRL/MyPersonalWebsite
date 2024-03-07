function copyToClipboard(type) {
    var text;
    if (type === 'email') {
        text = 'theandrewsargeant1@gmail.com';
    } else if (type === 'phone') {
        text = '+27722237419';
    }

    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);

    alert("Copied to clipboard: " + text);
}
