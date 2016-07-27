 /*
    Determines if the arrays are equal by doing a shallow comparison of their elements using strict equality.
 */
  $.isEqualArray = function(item,array) {
	  var result=True;
	  if (getLength(array) !== getLength(item)) {
          result=False;
      }else if (array === item) {
          result=True;
      }else{
		  eachArray(array,(item,index,length,safe)=>{
			  if (array[i] !== item[i]) {
				  	safe.halt=true;
					result = False;
				}
		  },true);
	  }
      return result;
  };
