-- [GET_ALL_ACTIVE_TESTS]
-- Used by the test suite to fetch all data for the loop
SELECT test_case_name, input_value 
FROM test_inputs 
WHERE is_active = TRUE 
ORDER BY id ASC;

-- [GET_TEST_BY_TYPE]
-- Used if you want to run only specific categories of tests
SELECT * FROM test_inputs 
WHERE test_case_name LIKE '%Positive%';

-- [UPDATE_TEST_STATUS]
-- Used to disable a test case if the app has a known bug
UPDATE test_inputs 
SET is_active = FALSE 
WHERE test_case_name = 'TC_DB_005_Decimal';