import React from 'react';

const CourseSelect = ({ courses, onChange }) => {
    return (
        <select onChange={(e) => onChange(courses.find(c => c.id === parseInt(e.target.value)))}>
            <option value="">Selecione um curso</option>
            {courses.map(course => (
                <option key={course.id} value={course.id}>
                    {course.name}
                </option>
            ))}
        </select>
    );
};

export default CourseSelect;
