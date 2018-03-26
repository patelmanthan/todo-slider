$(document).ready(function(){
	var i=0,k=0;
	var image =	[];
	
	$("#add").click(function(){
			            var filelist = $("#pic").prop('files');
			             var reader  = new FileReader();
			             var file = filelist[0];
  						reader.onload  = function(event) {
    					var addimage = "<div class='slider-img' id='img"+k+"'><img src='"+reader.result+"'/></div>";
    					$(".slider").prepend(addimage);
 						 };
  						 reader.readAsDataURL(file);
  						 var deleteButton = document.createElement("button");
  						 deleteButton.innerText = "Delete";
						var delimage = "<tr id='del'><td>"+file.name+"</td><td><input type='button' class='delete' value='delete'/></td></tr>";
						$("#list").append(delimage);
						image[k]=file;
						k++;
			
	});
	$("#list").on("click", ".delete",function(){
		 var index = $(this).parent().parents("tr").attr("id").split("del");
		 $(this).parent().parents("tr").remove();
		 image.splice(index,1);
		 $("#img"+index[1]).remove();
	});
	setInterval(function(){
			if($(image).length<=0){
				$(".img").show();
				$(".slider").hide();
			}else{
				$(".img").hide();
				$(".slider").show();
			}
			
			if (i>$(".slider-img").length)
  			 {
  			 	i = 1;
  			 }
			$(".slider-img").hide();
			$(".slider-img:nth-child("+i+")").fadeIn(	);
			  i++;
  			
			},3000);


			
});
/*var main = function() {
	$('.right').click(function() {
		$('#image1 > div:first')
		.fadeOut(100)
		.next()
		.fadeIn(100)
		.end()
		.appendTo('#image1');
	});
		
	$('.left').click(function() {
		$('#image1 > div:last')
		.fadeIn(100)
		.prependTo('#image1')
		.next()
		.fadeOut(100)
		.end();
	});
	setInterval(function() {
			$('#image1 > div:first')
			.fadeOut(100)
			.next()
			.fadeIn(100)
			.end()
			.appendTo('#image1');
	},  3000);
};

$(document).ready(main);*/