window.onload = function()
{
  console.log("hello");
  var capi = "1";

  nom_div("rango").addEventListener("change", function(event)
  {
    console.log(this.value);
    for(var i = 1, a = 1; i<=8; i++)
    {
      console.log(a, Number(a) * Number(a));a += "1";
    }
    //nom_div("texrango").innerHTML = this.value;
    //imprimetriangulo(Number(this.value));
    console.log(8);
  });
  function nom_div(div)
  {
    return document.getElementById(div);
  }
};
