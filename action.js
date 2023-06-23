function display()
        {
            let f=document.getElementById("form")
            f.style.display="block";
            let btn=document.getElementById("btn")
            btn.style.display="none";
            let sbmt=document.getElementById("sbmt")
            sbmt.style.display="block";
        }
function sbmt()
{
    let btn=document.getElementById("btn")
    btn.style.display="block";
    let sbmt=document.getElementById("sbmt")
    sbmt.style.display="none";
    let f=document.getElementById("form")
    f.style.display="none";
}