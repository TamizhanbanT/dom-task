        var inputbox1 = [];
		var inputbox2 = [];
		var inputbox3 = [];
		var inputbox4 = [];
        var inputbox5 = [];
		var inputbox6 = [];
		
		


		var n = 1;
		var x = 0;

		function AddRow(){

			var add = document.getElementById('show');
			var newline = add.insertRow(n);

			inputbox1[x] = document.getElementById("validationCustom01").value;
			inputbox2[x] = document.getElementById("validationCustom02").value;
			inputbox3[x] = document.getElementById("validationCustom03").value;
			inputbox4[x] = document.getElementById("validationCustom05").value;
            inputbox5[x] = document.getElementById("validationCustom04").value;
			inputbox6[x] = document.getElementById("validationCustom").value;
		


			var cel1 = newline.insertCell(0);
			var cel2 = newline.insertCell(1);
			var cel3 = newline.insertCell(2);
			var cel4 = newline.insertCell(3);
            var cel5 = newline.insertCell(4);
			var cel6 = newline.insertCell(5);
			

			cel1.innerHTML = inputbox1[x];
			cel2.innerHTML = inputbox2[x];
			cel3.innerHTML = inputbox3[x];
			cel4.innerHTML = inputbox4[x];
            cel5.innerHTML = inputbox5[x];
			cel6.innerHTML = inputbox6[x];
			
			

			n++;
			x++;
		}

		function Clear(){
			document.getElementById("validationCustom01").value="";
			document.getElementById("validationCustom02").value="";
			document.getElementById("validationCustom03").value="";
			document.getElementById("validationCustom05").value="";
			document.getElementById("validationCustom04").value="";
		
		
			document.getElementById("validationCustom").value="";


			}