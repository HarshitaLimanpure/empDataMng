var password = "pass@123";
secret = 'apple';
var enc = CryptoJS.AES.encrypt(password, secret).toString(); 
alert(enc);

var bytes = CryptoJS.AES.decrypt(enc, secret); 
alert(bytes.toString(CryptoJS.enc.Utf8));