var plethoraUtils = plethoraUtils || {};

/*
 * Convert values: 1, 0, true, false, "1", "0", "true", "false", "TRUE", "FALSE", "True", "False"
 * "ON", "OFF", "On", "Off", negative numbers, positive numbers, to booleans
 */

/* READABLE VERSION 
plethoraUtils.checkBool = function(val){
	// Check if numeric value is greater than 0
	val = (typeof val !=="number") ? val : (val>0) ? true : false;
	return ({1:1,true:1,on:1,yes:1}[(val+"").toLowerCase()]) ? true : false;
};
*/

plethoraUtils.checkBool = function(val){
	return ({1:1,true:1,on:1,yes:1}[(((typeof val !=="number")?val:(val>0)?true:false)+"").toLowerCase()])?true:false;
};

