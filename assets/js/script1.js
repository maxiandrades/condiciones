function agregarBordeVeloster() {
    const veloster = document.getElementById('myVeloster')
    const checkBorder = veloster.classList.contains('border')
    if (checkBorder == true) {
        veloster.classList.remove('border')
    }
    else {
        veloster.classList.add('border')
    }




}