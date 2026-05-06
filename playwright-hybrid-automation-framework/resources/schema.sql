-- Initial Environment Setup
CREATE DATABASE IF NOT EXISTS playwright_automation;
USE playwright_automation;

-- Table to store multiple test data inputs
CREATE TABLE IF NOT EXISTS test_inputs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    test_case_name VARCHAR(100) NOT NULL, -- Name shown in Playwright reports
    input_value VARCHAR(255) NOT NULL,    -- Value to type into the field
    expected_result VARCHAR(255),         -- Optional: for verification
    is_active BOOLEAN DEFAULT TRUE        -- Control toggle for tests
);
--DROP TABLE IF EXISTS test_inputs;
-- Seed Data: Populate with multiple rows for sequential execution
-- This handles your requirement for 'multiple input values per run'
INSERT INTO test_inputs (test_case_name, input_value, expected_result) VALUES
('TC_DB_001_Positive', '100', '100'),
('TC_DB_002_Negative', '-50', '-50'),
('TC_DB_003_Zero', '0', '0'),
('TC_DB_004_LargeNum', '999999', '999999'),
('TC_DB_005_Decimal', '45.5', '45.5');
-- ('TC_DB_006_SmallDecimal', '0.005', '0.005'),
-- ('TC_DB_007_LargeDecimal', '8888.88', '8888.88'),
-- ('TC_DB_008_BoundaryHigh', '9999', '9999'),
-- ('TC_DB_009_BoundaryLow', '1', '1'),
-- ('TC_DB_010_DoubleDigit', '22', '22'),
-- ('TC_DB_011_TripleDigit', '333', '333'),
-- ('TC_DB_012_NegativeDecimal', '-12.34', '-12.34'),
-- ('TC_DB_013_Century', '100', '100'),
-- ('TC_DB_014_Millennium', '1000', '1000'),
-- ('TC_DB_015_Random_A', '482', '482'),
-- ('TC_DB_016_Random_B', '917', '917'),
-- ('TC_DB_017_Sequential', '1234', '1234'),
-- ('TC_DB_018_ReverseSeq', '4321', '4321'),
-- ('TC_DB_019_OddNumber', '13579', '13579'),
-- ('TC_DB_020_EvenNumber', '24680', '24680'),
-- ('TC_DB_021_LargeNegative', '-99999', '-99999'),
-- ('TC_DB_022_PreciseFloat', '1.1234', '1.1234'),
-- ('TC_DB_023_Repeating', '555.55', '555.55'),
-- ('TC_DB_024_PowerOfTwo', '1024', '1024'),
-- ('TC_DB_025_PowerOfTen', '10000', '10000'),
-- ('TC_DB_026_SmallNegative', '-0.5', '-0.5'),
-- ('TC_DB_027_YearValue', '2026', '2026'),
-- ('TC_DB_028_Temperature', '37.5', '37.5'),
-- ('TC_DB_029_PriceValue', '19.99', '19.99'),
-- ('TC_DB_030_Discount', '0.75', '0.75'),
-- ('TC_DB_031_HalfValue', '0.5', '0.5'),
-- ('TC_DB_032_QuarterValue', '0.25', '0.25'),
-- ('TC_DB_033_StockPrice', '145.65', '145.65'),
-- ('TC_DB_034_LotSize', '50', '50'),
-- ('TC_DB_035_PrimeNumber', '7919', '7919'),
-- ('TC_DB_036_BinaryPattern', '10101', '10101'),
-- ('TC_DB_037_HexPattern', '12345', '12345'),
-- ('TC_DB_038_Altitude', '8848', '8848'),
-- ('TC_DB_039_Depth', '-11034', '-11034'),
-- ('TC_DB_040_Score', '100.00', '100'),
-- ('TC_DB_041_Coordinate', '18.97', '18.97'),
-- ('TC_DB_042_Latitude', '72.87', '72.87'),
-- ('TC_DB_043_Speed', '120.5', '120.5'),
-- ('TC_DB_044_Pressure', '1013', '1013'),
-- ('TC_DB_045_Percentage', '99.9', '99.9'),
-- ('TC_DB_046_Ratio', '0.333', '0.333'),
-- ('TC_DB_047_IDNumber', '77777', '77777'),
-- ('TC_DB_048_LuckyNumber', '7', '7'),
-- ('TC_DB_049_DoubleZero', '00', '0'),
-- ('TC_DB_050_FinalTest', '5050', '5050');