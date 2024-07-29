import React, { useEffect } from 'react';

const ProfessorSelect = ({ professors, selectedProfessor, onChange }) => {
    useEffect(() => {
        if (professors.length === 1) {
            onChange(professors[0]);
        }
    }, [professors, onChange]);

    return (
        <select value={selectedProfessor?.name || ''} onChange={(e) => onChange(professors.find(p => p.name === e.target.value))}>
            <option value="">Selecione um professor</option>
            {professors.map((professor, index) => (
                <option key={index} value={professor.name}>
                    {professor.name}
                </option>
            ))}
        </select>
    );
};

export default ProfessorSelect;
