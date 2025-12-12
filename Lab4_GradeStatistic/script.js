function start()
            {
                SumMath = 0;
                SumEnglish = 0;
                Count = 0;
                SubmitBtn = document.getElementById("SubmitBtn");
                SubmitBtn.addEventListener("click",function(){
                    var MathValue = document.getElementById("MathInput").value.trim();
                    var EnglishValue = document.getElementById("EnglsihInput").value.trim();




                    if(isNaN(Number(MathValue))||MathValue=== "") return;
                    if(isNaN(Number(EnglishValue))||EnglishValue=== "") return;



                    document.getElementById("MathInput").value = "";
                    document.getElementById("EnglsihInput").value = "";


                    Count++
                    
                    var table = document.getElementById("table");
                    var newRow = table.insertRow(table.rows.length-1);
                    newRow.insertCell().innerHTML= Count;
                    newRow.insertCell().innerHTML= MathValue;
                    newRow.insertCell().innerHTML= EnglishValue;

                    var avg = (Number(MathValue)+Number(EnglishValue))/2;
                    newRow.insertCell().innerHTML= avg.toFixed(2);

                    SumMath+=Number(MathValue);
                    SumEnglish+= Number(EnglishValue);

                    var Mathavg = SumMath/Count;
                    var Enavg = SumEnglish/Count;
                    var TotalAvg = (Mathavg+Enavg)/2;
                    document.getElementById("MathAvg").innerHTML = Mathavg.toFixed(2);
                    document.getElementById("EnAvg").innerHTML = Enavg.toFixed(2);
                    document.getElementById("TotalAvg").innerHTML = TotalAvg.toFixed(2);
                });
            }

            window.addEventListener("load",start);