const  TodoRowItems = (props)=>{
     return(
      <tr onClick={()=>props.deleteTodo(props.rowNumber)}>
        <th scop='row'> {props.rowNumber} </th>
        <td>{props.rowDescription}</td>
        <td>{props.rowAssigned}</td>
      </tr>
    )
}
export default TodoRowItems;