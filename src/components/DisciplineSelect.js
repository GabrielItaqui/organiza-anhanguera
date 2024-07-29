import React from 'react';

const DisciplineSelect = ({ disciplines, onChange }) => {
    return (
        <select onChange={(e) => onChange(disciplines.find(d => d.id === parseInt(e.target.value)))}>
            <option value="">Selecione uma disciplina</option>
            {disciplines.map(discipline => (
                <option key={discipline.id} value={discipline.id}>
                    {discipline.name}
                </option>
            ))}
        </select>
    );
};

export default DisciplineSelect;
