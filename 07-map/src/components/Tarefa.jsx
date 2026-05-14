import React from 'react'
import './Tarefa.css'

function Tarefa({t}) {
    const {id, titulo, responsavel, concluido} = t
    return (
        <div className={`cont-tarefa ${concluido ? 'concluida' : 'pendente'}`}>
            <span className="titulo-tarefa">{titulo}</span>
            <span className="responsavel-tarefa">Por: {responsavel}</span>
            <span className="status-tarefa">
                {concluido ? '✅ Concluída' : '⏳ Pendente'}
            </span>
        </div>
    )
}

export default Tarefa