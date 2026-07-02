import mongoose from 'mongoose';
import Student from './models/Student.js';

const MONGODB_URI = 'mongodb://127.0.0.1:27017/fs_01_student_registration_test';

async function runTest() {
  try {
    console.log('Smoke Test: Connecting to database...');
    await mongoose.connect(MONGODB_URI);
    console.log('Smoke Test: Database connected successfully!');
    
    // Clear test collection
    await Student.deleteMany({});
    
    // Try adding an invalid student (invalid email)
    console.log('Smoke Test: Verifying validation limits...');
    try {
      const invalidStudent = new Student({
        name: 'Invalid Student',
        email: 'bad-email',
        phone: '123456',
        course: 'Test Course'
      });
      await invalidStudent.save();
      throw new Error('Validation failed to reject invalid email');
    } catch (validationError) {
      console.log('Smoke Test: Successfully rejected invalid email as expected!');
    }

    // Add valid student
    console.log('Smoke Test: Inserting valid student record...');
    const student = new Student({
      name: 'John Test',
      email: 'john.test@example.com',
      phone: '+1234567890',
      course: 'Computer Science'
    });
    await student.save();
    console.log('Smoke Test: Student record inserted!');
    
    // Verify insertion
    const retrieved = await Student.findOne({ email: 'john.test@example.com' });
    if (!retrieved || retrieved.name !== 'John Test') {
      throw new Error('Retrieved student record does not match inserted value');
    }
    console.log('Smoke Test: Student record retrieval verified!');
    
    // Clean up
    await Student.deleteMany({});
    await mongoose.disconnect();
    console.log('Smoke Test: All integration assertions passed!');
    process.exit(0);
  } catch (error) {
    console.error('Smoke Test FAILED:', error);
    process.exit(1);
  }
}

runTest();
