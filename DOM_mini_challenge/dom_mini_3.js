

		function keyFunction(event){
			var x = event.keycode;
			var y = String.fromCharCode(x);
			console.log(event);
			document.getElementById("yo").innerHTML = "you pressed" + y;


		}
