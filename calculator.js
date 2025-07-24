let btns = document.querySelectorAll(".btn");
let text = document.querySelector("#result");

btns.forEach((btn) =>
{
    btn.addEventListener("click" , () =>
    {
        showResult(btn);
    })
})

const showResult = (btn)=> {
    if (btn.innerText === "C")
    {
        text.innerText = "0" ;
    }
    else if (btn.innerText === "←")
    {
        let back = text.innerText.slice(0 , -1) ;
        text.innerText = back; 
    }
    else if(btn.innerText === "=")
    {
        try{
            const res = eval(text.innerText.replaceAll('x' , '*'));
            text.innerText = res ;
        }
        catch
        {
            text.innerText = "Error found" ;
        }
    }
    else
    {
        if (text.innerText !== "Error found")
        {
            if (text.innerText === "0" && text.innerText.length === 1)
            {
                text.innerText = btn.innerText ;
            }
            else 
            {
            
                text.innerText += btn.innerText ;
            }
        }
    }
}