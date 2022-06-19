function setTheme(themeName){
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

function toggleTheme(){
    localStorage.getItem('theme') === 'dark-mode' ?
        setTheme('light-mode') :
        setTheme('dark-mode');
}

(()=>{
    if(localStorage.getItem('theme') === 'dark-mode' ){
        setTheme('dark-mode');
        document.getElementById('slider').checked = false;
    }
    else{
        setTheme('light-mode');
        document.getElementById('slider').checked = false;
    }
})