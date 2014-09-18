QUnit.module( "Plethora Utils", {
  setup: function() {},
  teardown: function() {}
});

QUnit.test( "Test equality with checkBool()", function( assert ) {

	var value  = 1;
	var result = plethoraUtils.checkBool(value);
	assert.deepEqual( result, true, "Testing with value: " + value + " of type: " + typeof value + " which should evaluate to true");

	value  = 0;
	result = plethoraUtils.checkBool(value);
	assert.deepEqual( result, false, "Testing with value: " + value + " of type: " + typeof value + " which should evaluate to false");

	value  = "1";
	result = plethoraUtils.checkBool(value);
	assert.deepEqual( result, true, "Testing with value: " + value + " of type: " + typeof value + " which should evaluate to true");

	value  = "0";
	result = plethoraUtils.checkBool(value);
	assert.deepEqual( result, false, "Testing with value: " + value + " of type: " + typeof value + " which should evaluate to false");

	value  = "true";
	result = plethoraUtils.checkBool(value);
	assert.deepEqual( result, true, "Testing with value: " + value + " of type: " + typeof value + " which should evaluate to true");

	value  = "false";
	result = plethoraUtils.checkBool(value);
	assert.deepEqual( result, false, "Testing with value: " + value + " of type: " + typeof value + " which should evaluate to false");

	value  = "TRUE";
	result = plethoraUtils.checkBool(value);
	assert.deepEqual( result, true, "Testing with value: " + value + " of type: " + typeof value + " which should evaluate to true");

	value  = "FALSE";
	result = plethoraUtils.checkBool(value);
	assert.deepEqual( result, false, "Testing with value: " + value + " of type: " + typeof value + " which should evaluate to false");

	value  = "True";
	result = plethoraUtils.checkBool(value);
	assert.deepEqual( result, true, "Testing with value: " + value + " of type: " + typeof value + " which should evaluate to true");

	value  = "False";
	result = plethoraUtils.checkBool(value);
	assert.deepEqual( result, false, "Testing with value: " + value + " of type: " + typeof value + " which should evaluate to false");

	value  = true;
	result = plethoraUtils.checkBool(value);
	assert.deepEqual( result, true, "Testing with value: " + value + " of type: " + typeof value + " which should evaluate to true");

	value  = false;
	result = plethoraUtils.checkBool(value);
	assert.deepEqual( result, false, "Testing with value: " + value + " of type: " + typeof value + " which should evaluate to false");

	value  = "On";
	result = plethoraUtils.checkBool(value);
	assert.deepEqual( result, true, "Testing with value: " + value + " of type: " + typeof value + " which should evaluate to true");

	value  = "Off";
	result = plethoraUtils.checkBool(value);
	assert.deepEqual( result, false, "Testing with value: " + value + " of type: " + typeof value + " which should evaluate to false");

	value  = "ON";
	result = plethoraUtils.checkBool(value);
	assert.deepEqual( result, true, "Testing with value: " + value + " of type: " + typeof value + " which should evaluate to true");

	value  = "OFF";
	result = plethoraUtils.checkBool(value);
	assert.deepEqual( result, false, "Testing with value: " + value + " of type: " + typeof value + " which should evaluate to false");

	value  = "on";
	result = plethoraUtils.checkBool(value);
	assert.deepEqual( result, true, "Testing with value: " + value + " of type: " + typeof value + " which should evaluate to true");

	value  = "off";
	result = plethoraUtils.checkBool(value);
	assert.deepEqual( result, false, "Testing with value: " + value + " of type: " + typeof value + " which should evaluate to false");

	value  = "YES";
	result = plethoraUtils.checkBool(value);
	assert.deepEqual( result, true, "Testing with value: " + value + " of type: " + typeof value + " which should evaluate to true");

	value  = "NO";
	result = plethoraUtils.checkBool(value);
	assert.deepEqual( result, false, "Testing with value: " + value + " of type: " + typeof value + " which should evaluate to false");

	value  = "Yes";
	result = plethoraUtils.checkBool(value);
	assert.deepEqual( result, true, "Testing with value: " + value + " of type: " + typeof value + " which should evaluate to true");

	value  = "No";
	result = plethoraUtils.checkBool(value);
	assert.deepEqual( result, false, "Testing with value: " + value + " of type: " + typeof value + " which should evaluate to false");

	value  = "yes";
	result = plethoraUtils.checkBool(value);
	assert.deepEqual( result, true, "Testing with value: " + value + " of type: " + typeof value + " which should evaluate to true");

	value  = "no";
	result = plethoraUtils.checkBool(value);
	assert.deepEqual( result, false, "Testing with value: " + value + " of type: " + typeof value + " which should evaluate to false");

	value  = "randomstring";
	result = plethoraUtils.checkBool(value);
	assert.deepEqual( result, false, "Testing with value: " + value + " of type: " + typeof value + " which should evaluate to false");

});