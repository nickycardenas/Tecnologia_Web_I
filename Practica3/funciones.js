function Temp()
{
    let num=parseInt(document.getElementById('temperatura').value);

    if(num>=(-10) && num<=15)
    {
        document.getElementById('resul').value="frio";
    }
    else if(num>=(16) && num<=25)
    {
        document.getElementById('resul').value="Templado";
    }
    else if(num>=(26) && num<=40)
    {
        document.getElementById('resul').value="Calor";
    }
}

function fact()
{
    let num=parseInt(document.getElementById('factorial').value);
    let total=1;
    for(i=1 ; i<=num;i++)
    {
        total=total*i;
    }
    document.getElementById('resultado').value=total;
}

function fizzB()
{
    for(var i=1;i<101;i++)
        {
            if(i%15==0)
            document.writeln("FizzBuzz" + '<br>');

            else if(i%3==0)
            document.write("Fizz" + '<br>');
            else if(i%5==0)
            document.write("Buzz" + '<br>');
            else document.write(i + '<br>')
        }
}

var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
var diasSemana = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");

function fecha()
{
    var f=new Date();
    document.getElementById('resu').value=(diasSemana[f.getDay()] + ", " + f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear());
}