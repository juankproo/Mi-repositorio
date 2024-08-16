mostrar = localStorage.getItem("like")
if(!mostrar){
    document.getElementById("gusta").innerHTML= "("+0+")"
}else{
    document.getElementById("gusta").innerHTML= "("+mostrar+")"
}




const megustA=()=>{
    alert("no me gusta su video es muy feo")
}

const megustA=()=>{
    let recuperar,guardar,mostral
    recuperar=localStorage.getItem("like")

    if(recuperar){
        guardar = parseInt (recuperar) + 1
    }
    else{
        guardar = 1
    }
    localStorage.setItem("like",guardar)
    mostrar = localStorage.getItem("like")
    document.getElementById("gusta").innerHTML= "("+mostrar+")"
}
const noMegusta=()=>{
    alert("no me gusta su video es muy feo")
}