$(function(){
	var donghua=[
{ 
	    	e: $('#D1'),
	        p: { translateZ: [ 0, 1500 ],
	             scaleX: [3.5,1],
	             scaleY: [3.5,1],
//	             transform:rotateX(90deg),
	             opacity: [ 1.5, "easeInSine", 1] ,
	           },
	        o: { duration: 2000,
	        	 loop:true,}
	  },
	  { 
	    	e: $('#D1'),
	        p: { 
	        	scaleX: [1,3.5],
	            scaleY: [1,3.5],
	           },
	        o: { duration: 2000,
	        	 loop:true,
	        	 } 
	  	}
//	  	,
//	  	{ 
//	    	e: $('#D1'),
//	        p: { 
//	        	scaleX: [1,3.5],
//	            scaleY: [1,3.5],
//	           },
//	        o: { duration: 500,
//	        	} 
//	  	},
//	  	{ 
//	    	e: $('#D1'),
//	        p: { 
//	        	scaleX: [1.6,1],
//	            scaleY: [1.4,1],
//	           },
//	        o: { duration: 1000,
//	        	 loop:true} 
//	  	}
//	  	,
//	  	{ 
//	    	e: $('#D1'),
//	        p: { 
//	        	scaleX: [0.7,1.6],
//	            scaleY: [0.7,1.6],
//	           },
//	        o: { duration: 500,
//	        	loop:true} 
//	  	}

	];
	$.Velocity.RunSequence(donghua);
})
