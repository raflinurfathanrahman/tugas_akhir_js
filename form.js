function buat_login(){
    var elem = document.getElementById('X');
    elem.parentElement.removeChild(elem)
    var p = document.createElement('p');
    p.className = 'tulisan_login';
    p.innerHTML = 'Silahkan Mendaftar';
    var element = document.getElementsByTagName('div')[0];
    element.appendChild(p);
    var form = document.createElement('form');
    element.appendChild(form);
    var label = document.createElement('label');
    label.innerHTML = 'Nama User';
    form.appendChild(label);
    var input_namauser = document.createElement('input');
    input_namauser.type = 'text';
    input_namauser.name = 'username';
    input_namauser.placeholder = 'Nama User..'
    input_namauser.className = 'form_login';
    form.appendChild(input_namauser)
    var label2 = document.createElement('label');
    label2.innerHTML = 'Nomor Handphone';
    form.appendChild(label2);
    var input_handphone = document.createElement('input');
    input_handphone.type = 'number';
    input_handphone.name = 'handphone';
    input_handphone.placeholder = 'Nomor Handphone'
    input_handphone.className = 'form_login';
    form.appendChild(input_handphone)
    var label3 = document.createElement('label');
    label3.innerHTML = 'Username';
    form.appendChild(label3);
    var input_username = document.createElement('input');
    input_username.type = 'text';
    input_username.name = 'username';
    input_username.placeholder = 'Username atau email..'
    input_username.className = 'form_login';
    form.appendChild(input_username)
    var label4 = document.createElement('label');
    label4.innerHTML = 'Password';
    form.appendChild(label4);
    var input_password = document.createElement('input');
    input_password.type = 'password';
    input_password.name = 'password';
    input_password.placeholder = 'password'
    input_password.className = 'form_login';
    form.appendChild(input_password)
    var tombol = document.createElement('input');
    tombol.type = 'submit';
    tombol.value = 'DAFTAR SEKARANG';
    tombol.className = 'tombol_login';
    form.appendChild(tombol)
}