QUnit.module( "Plethora Utils", {
  setup: function() {},
  teardown: function() {}
});

QUnit.test( "Test equality with checkBool()", function( assert ) {

	var value  = 1;
	var result = plethoraUtils.checkBool(value);
	assert.deepEqual( result, true, "Testing with value: " + value + " of type: " + typeof value);

	value  = 0;
	result = plethoraUtils.checkBool(value);
	assert.deepEqual( result, false, "Testing with value: " + value + " of type: " + typeof value);

	value  = "1";
	result = plethoraUtils.checkBool(value);
	assert.deepEqual( result, true, "Testing with value: " + value + " of type: " + typeof value);

	value  = "0";
	result = plethoraUtils.checkBool(value);
	assert.deepEqual( result, false, "Testing with value: " + value + " of type: " + typeof value);

	value  = "true";
	result = plethoraUtils.checkBool(value);
	assert.deepEqual( result, true, "Testing with value: " + value + " of type: " + typeof value);

	value  = "false";
	result = plethoraUtils.checkBool(value);
	assert.deepEqual( result, false, "Testing with value: " + value + " of type: " + typeof value);

	value  = "TRUE";
	result = plethoraUtils.checkBool(value);
	assert.deepEqual( result, true, "Testing with value: " + value + " of type: " + typeof value);

	value  = "FALSE";
	result = plethoraUtils.checkBool(value);
	assert.deepEqual( result, false, "Testing with value: " + value + " of type: " + typeof value);

	value  = "True";
	result = plethoraUtils.checkBool(value);
	assert.deepEqual( result, true, "Testing with value: " + value + " of type: " + typeof value);

	value  = "False";
	result = plethoraUtils.checkBool(value);
	assert.deepEqual( result, false, "Testing with value: " + value + " of type: " + typeof value);

	value  = true;
	result = plethoraUtils.checkBool(value);
	assert.deepEqual( result, true, "Testing with value: " + value + " of type: " + typeof value);

	value  = false;
	result = plethoraUtils.checkBool(value);
	assert.deepEqual( result, false, "Testing with value: " + value + " of type: " + typeof value);

	value  = "On";
	result = plethoraUtils.checkBool(value);
	assert.deepEqual( result, true, "Testing with value: " + value + " of type: " + typeof value);

	value  = "Off";
	result = plethoraUtils.checkBool(value);
	assert.deepEqual( result, false, "Testing with value: " + value + " of type: " + typeof value);

	value  = "ON";
	result = plethoraUtils.checkBool(value);
	assert.deepEqual( result, true, "Testing with value: " + value + " of type: " + typeof value);

	value  = "OFF";
	result = plethoraUtils.checkBool(value);
	assert.deepEqual( result, false, "Testing with value: " + value + " of type: " + typeof value);

	value  = "on";
	result = plethoraUtils.checkBool(value);
	assert.deepEqual( result, true, "Testing with value: " + value + " of type: " + typeof value);

	value  = "off";
	result = plethoraUtils.checkBool(value);
	assert.deepEqual( result, false, "Testing with value: " + value + " of type: " + typeof value);

	value  = "YES";
	result = plethoraUtils.checkBool(value);
	assert.deepEqual( result, true, "Testing with value: " + value + " of type: " + typeof value);

	value  = "NO";
	result = plethoraUtils.checkBool(value);
	assert.deepEqual( result, false, "Testing with value: " + value + " of type: " + typeof value);

	value  = "Yes";
	result = plethoraUtils.checkBool(value);
	assert.deepEqual( result, true, "Testing with value: " + value + " of type: " + typeof value);

	value  = "No";
	result = plethoraUtils.checkBool(value);
	assert.deepEqual( result, false, "Testing with value: " + value + " of type: " + typeof value);

	value  = "yes";
	result = plethoraUtils.checkBool(value);
	assert.deepEqual( result, true, "Testing with value: " + value + " of type: " + typeof value);

	value  = "no";
	result = plethoraUtils.checkBool(value);
	assert.deepEqual( result, false, "Testing with value: " + value + " of type: " + typeof value);

});