import React from 'react'
import Sidebar from '../Sidebar/NewSidebar'
import './topic.css'
import Card from '../Card/Card'

const Topic = () => {

    let topics =
        [
            {
                id: "Array",
                name: "Array"
        
            },
            {
                id: "String",
                name: "String"
        
            },
            {
                id: "Graph",
                name: "Graph"
        
            },
            {
                id: "BST",
                name: "BST"
        
            },
        ]
    
    return (
        <>
            <Sidebar />
            <div className="topic_adjust">
                {topics.map((x, key) => (
                    <Card topic={x} />
                ))}
            </div>
        </>
    )
}

export default Topic
