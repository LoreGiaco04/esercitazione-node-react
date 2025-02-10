import { use, useEffect, useState } from "react";

export const Saluta = () => {
    
const [name, setName] = useState('...');

useEffect (() => {
    fetch ('http://localhost:3000/lorenzo') 
    .then(response => response.json())
    .then(name => setName(name))
    
}, [])

return (
    <div>Ciao {name}</div>
)


}
