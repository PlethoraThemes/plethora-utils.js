var _p = _p || {};

/*
 * Convert values: 1, 0, true, false, "1", "0", "true", "false", "TRUE", "FALSE", "True", "False"
 * "ON", "OFF", "On", "Off", negative numbers, positive numbers, to booleans
 */

/* READABLE VERSION 
_p.checkBool = function(val){
	// Check if numeric value is greater than 0
	val = (typeof val !=="number") ? val : (val>0);
	return ({1:1,true:1,on:1,yes:1}[(val+"").toLowerCase()]) ? true : false;
};
*/

_p.checkBool = function(val){
	return ({1:1,true:1,on:1,yes:1}[(((typeof val !=="number")?val:(val>0))+"").toLowerCase()])?true:false;
};

/*** OBJECT EXTEND: By @toddmotto ***/

_p.extend = function( target, source ) {
  var merged = Object.create(target);
  Object.keys(source).map(function (prop) {  prop in merged && (merged[prop] = source[prop]);  });
  return merged;
};

/*
_p.extend = function( target, source ) {
for( var key in source ) {  if( source.hasOwnProperty( key ) ) target[key] = source[key];  }
return target;
}
*/

/*** MULTI SLICE ***/

_p.slice = function(){
	return [].slice.call.apply( [].slice, arguments );
}

/*** DEBUGGING CONSOLE ***/

_p.debugLog = function(){
	themeConfig && themeConfig.debug && console.log.apply( console, arguments );
}

/*** SVG CREATION UTILITY FUNCTION ***/

_p.SVGMold  = function( type, options ){
	var molding = doc.createElementNS('http://www.w3.org/2000/svg', type );
	for (var key in options) options.hasOwnProperty(key) && molding.setAttribute( key, options[key]);
	return molding;
}

/*** COLORED CONSOLE LOG ***/

_p.clog = function( msg ){

  // TODO: CHECK IF IS CHROME WHERE CONSOLE CSS IS SUPPORTED: ( window.chrome )

  var tag           = "clog";
  var args          = [].slice.apply(arguments);
  var currentScript = "";

  if ( document.currentScript ){
    currentScript = document.currentScript.src.split('/');
    currentScript = currentScript[currentScript.length-1].split("?")[0];
    tag = currentScript;
  }

  args.unshift(
    '%c [ %s ]: %c',
    'background: #222; color: #bada55',
    tag,
    'background: #222; color: #2ada45'
  );

  console.log.apply( console, args );

}

// USAGE: _p.clog( "Debugging this object", myObject );