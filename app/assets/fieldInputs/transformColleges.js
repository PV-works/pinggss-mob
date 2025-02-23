const fs = require('fs');

// Read the original JSON file
fs.readFile('./colleges.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  // Parse the JSON data
  const colleges = JSON.parse(data);

  // Transform the data
  const transformedColleges = colleges.map((college) => ({
    label: college.institution,
    value: college.institution,
  }));

  // Write the transformed data to a new JSON file
  fs.writeFile(
    'path/to/your/transformed_colleges.json',
    JSON.stringify(transformedColleges, null, 2),
    'utf8',
    (err) => {
      if (err) {
        console.error('Error writing file:', err);
        return;
      }

      console.log('File has been transformed successfully.');
    }
  );
});
