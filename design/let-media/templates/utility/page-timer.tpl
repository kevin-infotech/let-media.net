{literal}
	<script>
		var now = new Date();
		window.onload = function() {
			document.getElementById("timer").style.display = "block";
			document.getElementById("seconds").innerHTML = ((new Date()).getTime() - now.getTime())/1000;
		}
	</script>{/literal}