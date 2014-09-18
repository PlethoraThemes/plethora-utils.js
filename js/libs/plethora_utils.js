var plethoraUtils = plethoraUtils || {};

/*
 * Convert values: 1, 0, true, false, "1", "0", "true", "false", "TRUE", "FALSE", "True", "False"
 * "ON", "OFF", "On", "Off", to booleans
 */
 plethoraUtils.checkBool = function(val){
	return ({1:1,true:1,on:1}[(val+"").toLowerCase()]) ? true : false;
};
