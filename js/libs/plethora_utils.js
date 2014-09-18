var plethoraUtils = plethoraUtils || {};

/*
 * Convert values: 1, 0, true, false, "1", "0", "true", "false" to booleans
 */
 plethoraUtils.checkBool = function(val){
	return ( ""+val === "1" || ""+val === "true" ) ? true : false;
};
