var plethoraUtils = plethoraUtils || {};

/*
 * Convert values: 1, 0, true, false, "1", "0", "true", "false", "TRUE", "FALSE", "True", "False" to booleans
 */
 plethoraUtils.checkBool = function(val){
 	val = val.toString().toLowerCase();
	return ( val === "1" || val === "true" ) ? true : false;
};
