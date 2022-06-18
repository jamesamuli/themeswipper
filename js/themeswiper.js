
function setTheme(themeName){
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

function toggleTheme(){
    localStorage.getItem('theme') === 'dark-mode' ?
        setTheme('white-mode') :
        setTheme('dark-mode');
}

(()=>{
    if(localStorage.getItem('theme') === 'dark-mode' ){
        setTheme('dark-mode');
        document.getElementById('slider').checked = false;
    }
    else{
        setTheme('white-mode');
        document.getElementById('slider').checked = false;
    }
})