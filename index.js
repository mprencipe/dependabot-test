console.log('test');

function insecurePassword() {
    // BAD: the random suffix is not cryptographically secure
    var suffix = Math.random();
    var password = "thePassword" + suffix;
    return password;
}
