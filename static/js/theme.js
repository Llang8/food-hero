const changeTheme = (theme) => {
    let primary, light;
    switch(theme) {
        case "orange":
            primary = "#FF922C";
            light = "#FFEEDE";
            document.querySelector('body').classList.remove('theme-green')
            document.querySelector('body').classList.add('theme-orange')
            break;
        case "green":
            primary = "#54BF29";
            light = "#EAFFE2";
            document.querySelector('body').classList.remove('theme-orange')
            document.querySelector('body').classList.add('theme-green')
            break;
    }
    document.querySelector('body').style.setProperty('--theme-primary', primary);
    document.querySelector('body').style.setProperty('--theme-light', light);

    document.querySelector('body').classList.add('theme-transition')

    setTimeout(() => {
        document.querySelector('body').classList.remove('theme-transition')
    }, 1000)
}

const toggleTheme = () => {
    if (document.querySelector('body').classList.contains('theme-orange')) {
        changeTheme('green')
    } else {
        changeTheme('orange')
    }
}