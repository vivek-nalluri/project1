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
function otl1()
{
    let a=document.getElementById("inp1")
    a.style.outline="none";
    let b=document.getElementById("inp1")
    b.style.outline="none";
}
function otl2()
{
    let a=document.getElementById("inp2")
    a.style.outline="none";
    let b=document.getElementById("inp2")
    b.style.outline="none";
}